import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const titularValidation = {
    schema: schema.create({
        nombre: schema.string({ trim: true }, [
          rules.required(),
          rules.maxLength(255),
        ]),
        apellido: schema.string({ trim: true }, [
          rules.required(),
          rules.maxLength(255),
        ]),
        cedula: schema.string({ trim: true }, [
          rules.required(),
          rules.maxLength(20),
        ]),
        telefono: schema.string({ trim: true }, [
          rules.required(),
          rules.maxLength(20),
        ]),
        cliente_id: schema.number([
          rules.required(),
          rules.exists({ table: 'clientes', column: 'id' }),
        ]),
        usuario_id: schema.number([
          rules.required(),
          rules.exists({ table: 'usuarios', column: 'id' }),
        ]),
      })
      
}