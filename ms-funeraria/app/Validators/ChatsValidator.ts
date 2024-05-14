import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const chatValidation = schema.create({
    Eservicio_id: schema.string({}, [
      rules.required(),
      rules.maxLength(2500),
    ]),
  })
