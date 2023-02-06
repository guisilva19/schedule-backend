import { MigrationInterface, QueryRunner } from "typeorm";

export class softDelete1675450375847 implements MigrationInterface {
    name = 'softDelete1675450375847'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "is_active" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "is_active"`);
    }

}
