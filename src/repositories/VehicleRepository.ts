import {  Repository, EntityRepository } from "typeorm";
import {Vehicle} from "../entity/Vehicle";

@EntityRepository(Vehicle)
export class VehicleRepository extends Repository<Vehicle> {
    public async getVehiclesComplete(modelId: string): Promise<Vehicle[]>{
        return this.query(`
            SELECT year_model, value, fuel, b.name brand, m.name model
                FROM vehicle
                LEFT JOIN model m on m.id = vehicle.model_id 
                LEFT JOIN brand b on b.id = vehicle.brand_id
                WHERE m.id = $1
                ORDER BY value ASC;
        `, [modelId])
    }
}