import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const sepulturaValidation = {
  schema: schema.create({
    ubicacion: schema.string({}, [
      rules.required(),
      rules.maxLength(30)
    ]),
    fecha_hora: schema.date({ format: 'yyyy-MM-dd HH:mm:ss' }, [
      rules.required()
    ]),
    servicio_id: schema.number([
      rules.required(),
      rules.exists({ table: 'servicios', column: 'id' })
    ])
  })
}
