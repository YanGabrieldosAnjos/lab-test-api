import {MigrationInterface, QueryRunner} from "typeorm";

export class AllTables1596375890622 implements MigrationInterface {
    name = 'AllTables1596375890622'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "brand" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, CONSTRAINT "UQ_5f468ae5696f07da025138e38f7" UNIQUE ("name"), CONSTRAINT "PK_a5d20765ddd942eb5de4eee2d7f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "model" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, "brand_id" uuid, CONSTRAINT "UQ_b19ef2555e9aa71a4dcc4403373" UNIQUE ("name"), CONSTRAINT "PK_d6df271bba301d5cc79462912a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vehicle" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "value" text NOT NULL, "year_model" text NOT NULL, "fuel" text NOT NULL, "brand_id" uuid, "model_id" uuid, CONSTRAINT "PK_187fa17ba39d367e5604b3d1ec9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "model" ADD CONSTRAINT "FK_1c9fa70a2a9da326c507e3fead5" FOREIGN KEY ("brand_id") REFERENCES "brand"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vehicle" ADD CONSTRAINT "FK_ea43c4dbdf99e6608ad7bcf7657" FOREIGN KEY ("brand_id") REFERENCES "brand"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vehicle" ADD CONSTRAINT "FK_557870ce4ace117b16a56c42bda" FOREIGN KEY ("model_id") REFERENCES "model"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicle" DROP CONSTRAINT "FK_557870ce4ace117b16a56c42bda"`);
        await queryRunner.query(`ALTER TABLE "vehicle" DROP CONSTRAINT "FK_ea43c4dbdf99e6608ad7bcf7657"`);
        await queryRunner.query(`ALTER TABLE "model" DROP CONSTRAINT "FK_1c9fa70a2a9da326c507e3fead5"`);
        await queryRunner.query(`DROP TABLE "vehicle"`);
        await queryRunner.query(`DROP TABLE "model"`);
        await queryRunner.query(`DROP TABLE "brand"`);
    }

}
