import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const salaValidation = {
    schema: schema.create({
        nombre: schema.string({ trim: true }, [
          rules.required(),
          rules.maxLength(255),
        ]),
        capacidad: schema.number([
          rules.required(),
          rules.range(1, 999999999), // La capacidad debe ser mayor que cero
        ]),
        disponibilidad: schema.boolean.optional(),
        sede_id: schema.number([
          rules.required(),
          rules.exists({ table: 'sedes', column: 'id' }), // Asegura que la sede exista
        ]),
      })
}
