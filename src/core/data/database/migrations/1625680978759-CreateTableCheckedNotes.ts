import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateTableCheckedNotes1625680978759 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "checked_notes",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        length: "36",
                        isNullable: false,
                        isPrimary: true
                    },
                    {
                        name: "title",
                        type: "varchar",
                        length: "60",
                        isNullable: false
                    },
                    {
                        name: "description",
                        type: "varchar",
                        length: "100",
                        isNullable: false
                    },
                    {
                        name: "user_id",
                        type: "varchar",
                        length: "36",
                        isNullable: false,
                    },
                    {
                        name: "date",
                        type: "timestamptz",
                        isNullable: false,
                    },
                ]
            })
        );

        await queryRunner.createForeignKey(
            "checked_notes",
            new TableForeignKey({
                columnNames: ["user_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "user",
                onDelete: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
