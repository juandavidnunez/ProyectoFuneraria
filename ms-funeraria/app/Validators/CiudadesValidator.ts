import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const ciudadValidation = {
    schema: schema.create({
        nombre: schema.string({}, [
          rules.required(),
          rules.maxLength(50)
        ]),
        departamento_id: schema.number([
          rules.required(),
          rules.exists({ table: 'departamentos', column: 'id' })
        ])
      })
}
