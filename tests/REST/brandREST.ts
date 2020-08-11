import request from "supertest";
import * as app from "../../src/index";

export interface IBrandResponse {
    id: string;
    name: string;
}
export async function postBrand(name: string): Promise<IBrandResponse>{
    const res =  await request(app.default).post("/api/brands")
        .set("Accept", "application/json")
        .send({name});
    const brand = res.body;
    return brand;
}
export async function getBrand(id: string): Promise<IBrandResponse>{
    const {body} =  await request(app.default).get(`/api/brands/`)
        .set("Accept", "application/json")
        .query(id);
    return body[0];
}

export async function deleteBrand(id: string): Promise<void>{
    await request(app.default).get(`/api/brands/${id}`)
        .set("Accept", "application/json")
}

export async function putBrand(id: string, name: string): Promise<void>{
    await request(app.default).put(`/api/brands/${id}`)
        .set("Accept", "application/json")
        .send({name})
}

export async function getAllBrands(): Promise<IBrandResponse[]>{
    const {body} =  await request(app.default).get(`/api/brands/`)
        .set("Accept", "application/json")
    return body;
}