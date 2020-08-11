const app = require("../src/index");
import {postBrand, getBrand, putBrand, deleteBrand, getAllBrands} from "./REST/brandREST";
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

describe('Brand Test', () => {
    
    test('should POST a brand', async() => {
        const mockedBrandName  = faker.random.word();
        
        const brand = await postBrand(mockedBrandName); 

        expect(typeof brand.name).toBe("string");
        expect(brand.name).toBe(mockedBrandName);
    })

    test('should GET a brand', async() => {
        const mockedBrandName  = faker.random.word();
        
        const brand = await postBrand(mockedBrandName); 

        const body=  await getBrand(brand.id);
        
        expect(brand.id).toBe(body.id);
        expect(brand.name).toBe(body.name);

    });

    
    test('should PUT a brand', async() => {
        const mockedBrandName  = faker.random.word();
        
        const brand = await postBrand(mockedBrandName); 
        
         await putBrand(brand.id, faker.random.word());
        
        const updatedBrand =  await getBrand(brand.id);
        
        expect(brand.id).toBe(updatedBrand.id);
        expect(brand.name).not.toBe(updatedBrand.name);

    });

    
    test('should DELETE a brand', async() => {
        const mockedBrandName  = faker.random.word();
        
        const brand = await postBrand(mockedBrandName); 

        await deleteBrand(brand.id);
        
        
        expect(await getBrand(brand.id)).toMatchObject({});

    });

    
    test('should GET all brands', async() => {
        
        const numberOfBrands = faker.random.number({min: 1, max: 5});
        
        for(let i = 0; i < numberOfBrands; i++){
            await postBrand(faker.random.word());
        }
        const body=  await getAllBrands();
        console.log(body);
        expect(body.length).toBeGreaterThanOrEqual(numberOfBrands);

    });
})


