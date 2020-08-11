import { Router, Request, Response } from "express";
import {  getCustomRepository } from "typeorm";
import { ModelRepository, BrandRepository } from "../repositories";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
    const modelRepository = getCustomRepository(ModelRepository);
    const brandRepository = getCustomRepository(BrandRepository);
    
    const brand = await brandRepository.findOne({id: req.body.brandId})

    try{
        const model = await modelRepository.save(
            {
                name: req.body.name, 
                brand
            });
        res.json(model);
    }catch(err){
        console.error(err);
        throw new Error("não foi possível salvar o modelo.");
    }
});

router.get("/:brandId", async (req: Request, res: Response) => {
    const modelRepository = getCustomRepository(ModelRepository);
    const brandId: string = req.params.brandId;
    try{
        const model = await modelRepository.find(
            {   
                where:{
                    brand: {
                        id: brandId
                    } 
                },
                order:{
                    name: "ASC"
                }
            });
        res.json(model);
    }catch(err){
        console.error(err);
        throw new Error("não foi possível buscar os modelos da marca.");
    }
});

router.get("/:id", async (req: Request, res: Response) => {
    const modelRepository = getCustomRepository(ModelRepository);
    
    try{
        const model = await modelRepository.findOne(
            {
                id: req.params.id
            });
        res.json(model);
    }catch(err){
        console.error(err);
        throw new Error("não foi possível buscar o modelo.");
    }
});

router.put("/:id", async (req: Request, res: Response) => {
    const modelRepository = getCustomRepository(ModelRepository);
    
    try{
        const model = await modelRepository.save(
            {   
                id: req.params.id,
                name: req.body.name,
            });
        res.json(model);
    }catch(err){
        console.error(err);
        throw new Error("não foi possível atualizar o modelo.");
    }
});

router.delete("/:id", async (req: Request, res: Response) => {
    const modelRepository = getCustomRepository(ModelRepository);
    
    try{
        const model = await modelRepository.delete(
            {   
                id: req.params.id,
            });
        res.json(model);
    }catch(err){
        console.error(err);
        throw new Error("não foi possível atualizar o modelo.");
    }
});
export default router;  