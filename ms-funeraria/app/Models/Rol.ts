import { DateTime } from 'luxon'
import { BaseModel, HasMany, ManyToMany, column, hasMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Usuario from './Usuario'
import Permiso from './Permiso'

export default class Rol extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public description: string

  @hasMany(() => Usuario,{
    foreignKey: 'rol_id' ,
  })
  public usuarios: HasMany<typeof Usuario>

  @manyToMany(() => Permiso,{
    pivotTable: 'rolesxpermisos',
    pivotForeignKey: 'rol_id',
    pivotRelatedForeignKey: 'permiso_id',
    pivotColumns: ['rol']
  })
  public permisos: ManyToMany<typeof Permiso>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
