import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const departamentoValidation = {
    schema: schema.create({
        nombre: schema.string({ trim: true }, [
          rules.required(),
          rules.maxLength(255),
        ]),
      })
}
