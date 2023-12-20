import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreatePostsTable1703096672075 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
			new Table({
				name: 'posts',
				columns: [
					{
						name: 'posts_id',
						type: 'int',
						isPrimary: true,
						generationStrategy: 'increment'
					},
					{
						name: 'title',
						type: 'varchar',
						length: '100',
						isNullable: false
					},
					{
						name: 'user_id',
						type: 'varchar',
						length: '100',
						isNullable: false
					},
					{
						name: 'date',
						type: "timestamp",
						default: "now()"
					},
					{
						name: 'milagres',
						type: 'varchar',
						length: '12000',
						isNullable: false
					}
				],
                foreignKeys: [
					{
						name: "fk_posts_user",
						columnNames: ["user_id"],
						referencedTableName: "users",
						referencedColumnNames: ["user_id"]
					}
				]
			})
		)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('posts')
    }

}
