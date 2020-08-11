import {  Repository, EntityRepository } from "typeorm";
import {Brand} from "../entity/Brand";

@EntityRepository(Brand)
export class BrandRepository extends Repository<Brand> {}
