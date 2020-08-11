import "reflect-metadata";
import express from "express";
import * as bodyParser from "body-parser";
import cors from "cors";
import routes from "./routes";
import {createConnection, getConnectionOptions} from "typeorm";
const{PORT, NODE_ENV} =  process.env;
export const app = express();

    
app.use(cors());
app.use(bodyParser.json());

app.use("/api", routes);

if(NODE_ENV !== "test"){
    getConnectionOptions()
    .then(async options =>{
        return createConnection({
            ...options,
            migrationsRun: true
        })
    }).catch(error => console.log(error));
}
app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}! Go to http://localhost:${PORT}/`)
})
export default  app;