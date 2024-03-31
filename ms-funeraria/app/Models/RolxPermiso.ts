import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class RolxPermiso extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public rol_id: number

  @column()
  public permiso_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}