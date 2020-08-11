import request from "supertest";
import * as app from "../../src/index";
import { IBrandResponse } from "./brandREST";

export interface IModelResponse {
    
}
export async function postModel(name: string, brandId: string){
    const res =  await request(app.default).post("/api/models")
        .set("Accept", "application/json")
        .send({name, brandId});
    const brand = res.body;
    return brand;
}

