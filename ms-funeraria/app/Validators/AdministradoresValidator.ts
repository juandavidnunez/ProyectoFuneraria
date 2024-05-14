import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const administradorValidation = {
  schema: schema.create({
    name: schema.string({}, [
      rules.required(),
      rules.maxLength(255)
    ]),
    email: schema.string({}, [
      rules.required(),
      rules.email(),
      rules.maxLength(255)
    ]),
    age: schema.number([
      rules.required(),
      rules.range(0, 100) 
    ]),
    usuario_id: schema.number([
      rules.required(),
      rules.exists({ table: 'usuarios', column: 'id' }) // Asegúrate de ajustar la tabla y columna según corresponda
    ])
  })}



