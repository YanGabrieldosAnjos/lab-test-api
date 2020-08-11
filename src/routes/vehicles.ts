import { Router, Request, Response } from "express";
import {  getCustomRepository } from "typeorm";
import { BrandRepository, ModelRepository, VehicleRepository } from "../repositories";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
    const modelRepository = getCustomRepository(ModelRepository);
    const brandRepository = getCustomRepository(BrandRepository);
    const vehicleRepository =  getCustomRepository(VehicleRepository);

    const brand = await brandRepository.findOne({id: req.body.brandId});
    const model = await modelRepository.findOne({id: req.body.modelId});

    try{
        const vehicle = await vehicleRepository.save(
            {
                fuel: req.body.fuel,
                value: req.body.value,
                yearModel: req.body.yearModel,
                brand,
                model
            });
        res.json(vehicle);
    }catch(err){
        console.error(err);
        throw new Error("não foi possível salvar o veículo.");
    }
});

router.get("/:modelId", async (req: Request, res: Response) => {
    const vehicleRepository =  getCustomRepository(VehicleRepository);

    try{
        const vehicles = await vehicleRepository.getVehiclesComplete(req.params.modelId);
        res.json(vehicles);
    }catch(err){
        console.error(err);
        throw new Error("não foi possível buscar todos os veículos.");
    }
});

router.get("/:id", async (req: Request, res: Response) => {
    const vehicleRepository =  getCustomRepository(VehicleRepository);

    try{
        const vehicles = await vehicleRepository.find({id: req.params.id});
        res.json(vehicles);
    }catch(err){
        console.error(err);
        throw new Error("não foi possível buscar todos os veículos.");
    }
});

router.delete("/:id", async (req: Request, res: Response) => {
    const vehicleRepository =  getCustomRepository(VehicleRepository);

    try{
        const vehicles = await vehicleRepository.delete({id: req.params.id});
        res.json(vehicles);
    }catch(err){
        console.error(err);
        throw new Error("não foi possível buscar todos os veículos.");
    }
});

router.put("/:id", async (req: Request, res: Response) => {
    const vehicleRepository =  getCustomRepository(VehicleRepository);

    try{
        const vehicles = await vehicleRepository.save({
            id: req.params.id,
            fuel: req.body.fuel,
            value: req.body.value,
            yearModel: req.body.yearModel,
        });
        res.json(vehicles);
    }catch(err){
        console.error(err);
        throw new Error("não foi possível buscar todos os veículos.");
    }
});
export default router; 