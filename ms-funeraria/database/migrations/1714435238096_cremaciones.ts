import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'cremaciones'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('ubicacion', 255).notNullable()
      table.dateTime('fecha_hora').notNullable()
<<<<<<< HEAD:ms-funeraria/database/migrations/1714435238096_cremaciones.ts

      table.integer('servicio_id').unsigned().references('servicios.id').onDelete('CASCADE').notNullable()

=======
>>>>>>> 07a784a2a3a30aeff993ffd7433ee42eb48aad4f:ms-funeraria/database/migrations/1712730791579_cremaciones.ts
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
