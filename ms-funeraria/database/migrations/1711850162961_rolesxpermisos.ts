import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'rolesxpermisos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')



      //foreign key

      table.integer('rol_id').unsigned()
                             .references('roles.id')
                             .onDelete('CASCADE')
      table.integer('permiso_id').unsigned()
                                 .references('permisos.id')
                                 .onDelete('CASCADE')

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
