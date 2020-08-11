import {createConnection, getConnectionOptions, Connection, getConnection} from "typeorm";

const conn = {
    async create(){
        const options = await getConnectionOptions();
        await createConnection({...options, migrationsRun: true, logging: false});
    },
  
    async close(){
      await getConnection().close(); 
    },
  
    async clear(){
      const connection = getConnection();
      const entities = connection.entityMetadatas;
  
      entities.forEach(async (entity) => {
        const repository = connection.getRepository(entity.name);
        await repository.query(`DELETE FROM ${entity.tableName}`);
      });
    },
};

export default conn;