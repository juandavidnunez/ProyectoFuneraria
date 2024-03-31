import { DateTime } from 'luxon'
import { BaseModel, ManyToMany, column, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Rol from './Rol'

export default class Permiso extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public url: string

  @column()
  public method: string

  @manyToMany(() => Rol,{
    pivotTable: 'rolesxpermisos',
    pivotForeignKey: 'permiso_id',
    pivotRelatedForeignKey: 'rol_id',
    pivotColumns: ['rol']
  })
  public roles: ManyToMany<typeof Rol>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
