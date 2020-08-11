import { Router, Request, Response } from "express";
import brands from "./brands";
 import models from "./models";
import vehicles from "./vehicles";



const routes = Router();


routes.use("/brands", brands);
routes.use("/models", models);
routes.use("/vehicles", vehicles);
export default routes;