import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Traslado extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public origen : string

  @column()
  public destino : string

  @column()
  public fecha_hora : DateTime

  @column()
  public tipo_vehiculo : string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
