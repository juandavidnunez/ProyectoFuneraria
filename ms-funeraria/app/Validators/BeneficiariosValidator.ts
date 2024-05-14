import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const beneficiarioValidation = schema.create({
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
  telefono: schema.string({}, [
    rules.required(),
    rules.maxLength(20)
  ]),
  titular_id: schema.number([
    rules.required(),
    rules.exists({ table: 'titulares', column: 'id' }) // Asumiendo que 'titulares' es la tabla asociada al titular
  ]),
  cliente_id: schema.number([
    rules.required(),
    rules.exists({ table: 'clientes', column: 'id' }) // Asumiendo que 'clientes' es la tabla asociada al cliente
  ])
})
