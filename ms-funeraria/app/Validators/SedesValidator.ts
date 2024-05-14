import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const sedeValidation = {
    schema: schema.create({
        nombre: schema.string({ trim: true }, [
          rules.required(),
          rules.maxLength(255),
        ]),
        direccion: schema.string({ trim: true }, [
          rules.required(),
          rules.maxLength(255),
        ]),
        telefono: schema.number([
          rules.required(),
          rules.unique({
            table: 'sedes',
            column: 'telefono',
          }),
        ]),
        correo_electronico: schema.string({}, [
          rules.required(),
          rules.email(),
          rules.unique({
            table: 'sedes',
            column: 'correo_electronico',
          }),
        ]),
        ciudad_id: schema.number([
          rules.required(),
          rules.exists({ table: 'ciudades', column: 'id' }),
        ]),
      })      
}