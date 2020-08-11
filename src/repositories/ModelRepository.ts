import {  Repository, EntityRepository } from "typeorm";
import {Model} from "../entity/Model";

@EntityRepository(Model)
export class ModelRepository extends Repository<Model> {}