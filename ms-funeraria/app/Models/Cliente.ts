import { DateTime } from 'luxon'
import { BaseModel, HasMany, HasOne, column, hasMany, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Titular from './Titular'
import Beneficiario from './Beneficiario'

export default class Cliente extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nombre: string

  @column()
  public apellido: string

  @column()
  public cedula: string

  @column()
  public telefono: string

  @column()
  public email: string

  @hasOne(() => Titular, {
    foreignKey: 'cliente_id'
  })
  public titular: HasOne<typeof Titular>

  @hasMany(() => Beneficiario, {
    foreignKey: 'cliente_id'
  })
  public beneficiarios: HasMany<typeof Beneficiario>


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}