import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const servicioValidation = schema.create({
  nombre: schema.string({}, [
    rules.required(),
    rules.maxLength(30)
  ]),
  precio: schema.number([
    rules.required(),
    rules.range(0, 999999999)
  ]),
  descripcion: schema.string.optional({}, [
    rules.maxLength(2500)
  ]),
  duracion: schema.number.optional([
    rules.range(0, 999999999)
  ])
})
