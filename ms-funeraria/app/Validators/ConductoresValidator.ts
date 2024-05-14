import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const conductorValidation = {
    schema: schema.create({
        nombre: schema.string({}, [
          rules.required(),
          rules.maxLength(255),
        ]),
        apellido: schema.string({}, [
          rules.required(),
          rules.maxLength(255),
        ]),
        cedula: schema.string({}, [
          rules.required(),
          rules.maxLength(20),
        ]),
        telefono: schema.string.optional({}, [
          rules.maxLength(20),
        ]),
        usuario_id: schema.number([
          rules.required(),
        ]),
      })
}
