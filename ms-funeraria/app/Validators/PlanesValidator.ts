import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const planValidation = {
    schema: schema.create({
        nombre: schema.string({ trim: true }, [
          rules.required(),
          rules.maxLength(255),
        ]),
        precio: schema.number([
          rules.required(),
          rules.range(0, 999999999),
        ]),
        duracion: schema.number([
          rules.required(),
          rules.range(0, 999999999),
        ]),
        descuento: schema.number.optional([
          rules.range(0, 100), // Asumiendo que el descuento está en porcentaje (0-100)
        ]),
        precio_final: schema.number.optional([
          rules.range(0, Infinity),
        ]),
        estado: schema.boolean.optional(),
      })
}
