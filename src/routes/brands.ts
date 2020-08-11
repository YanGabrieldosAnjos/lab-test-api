import { Router, Request, Response } from "express";
import {  getCustomRepository } from "typeorm";
import { BrandRepository } from "../repositories";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
    const repository = getCustomRepository(BrandRepository);
    try{
        const brand = await repository.save({name: req.body.name});
        res.send(brand);
    }catch(err){
        console.error(err);
        throw new Error("não foi possível salvar marca.");
    }
});

router.get("/", async (req: Request, res: Response)=>{
    try{
        const repository = getCustomRepository(BrandRepository);
        const brand = await repository.find({
            order:{
                name: "ASC"
            }
        });
        res.send(brand);
    }catch(err){
        throw new Error("não foi possível retornar marca.");
    }
});

router.get("/:id", async (req: Request, res: Response)=>{
    try{
        const repository = getCustomRepository(BrandRepository);

        const brand = await repository.find({id: req.params.id});
        res.send(brand);
    }catch(err){
        throw new Error("não foi possível retornar marca.");
    }
});

router.put("/:id", async (req: Request, res: Response)=>{
    try{
        const repository = getCustomRepository(BrandRepository);
       
        const brand = await repository.save({id: req.params.id, name: req.body.name});
        res.send(brand);
    }catch(err){
        throw new Error("não foi possível atualizar marca.");
    }
});

router.delete("/:id", async (req: Request, res: Response)=>{
    try{
        const repository = getCustomRepository(BrandRepository);

        await repository.delete({id: req.body.id});
        res.send("deleted");
    }catch(err){
        throw new Error("não foi possível retornar marca.");
    }
});
export default router;  