import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const clienteValidation = schema.create({
    nombre: schema.string({}, [
      rules.required(),
      rules.maxLength(30)
    ]),
    apellido: schema.string({}, [
      rules.required(),
      rules.maxLength(30)
    ]),
    cedula: schema.string({}, [
      rules.required(),
      rules.maxLength(20)
    ]),
    telefono: schema.string.optional({}, [
      rules.maxLength(20)
    ]),
    email: schema.string({}, [
      rules.required(),
      rules.email(),
      rules.maxLength(255)
    ]),
    usuario_id: schema.number([
      rules.required(),
      rules.exists({ table: 'usuarios', column: 'id' })
    ])
  })
