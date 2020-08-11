const app = require("../src/index");
import {postModel} from "./REST/modelREST";
import {postBrand} from "./REST/brandREST";
import faker from "faker";
import conn from "./setup";

beforeAll(async ()=>{
    await conn.create();
});
  
afterAll(async ()=>{
  await conn.close();
});

beforeEach(async () => {
  await conn.clear();
});


describe("Model Test", ()=>{

    test("POST model", async ()=>{
        const mockedBrandName  = faker.random.word();
        const mockedModelName  = faker.random.word();
        
        const brand = await postBrand(mockedBrandName); 

        const model = await postModel(mockedModelName, brand.id);
        console.log(model);
    })
})