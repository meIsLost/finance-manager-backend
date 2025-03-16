import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatedDescription1742155637889 implements MigrationInterface {
  name = 'CreatedDescription1742155637889';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "category" ADD "description" character varying NOT NULL DEFAULT ''`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "category" DROP COLUMN "description"`);
  }
}
