import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const comentarioValidation = {
  schema: schema.create({
    contenido: schema.string({ trim: true }, [
      rules.required(),
      rules.maxLength(255)
    ]),
    Eservicio_id: schema.number([
      rules.required(),
      rules.exists({ table: 'ejecucion_servicios', column: 'id' })
    ])
  })}
