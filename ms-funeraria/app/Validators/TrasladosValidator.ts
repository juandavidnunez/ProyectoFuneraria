import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const trasladoValidation = schema.create({
    origen: schema.string({}, [
      rules.required(),
      rules.maxLength(30)
    ]),
    destino: schema.string({}, [
      rules.required(),
      rules.maxLength(30)
    ]),
    fecha_hora: schema.date({ format: 'yyyy-MM-dd HH:mm:ss' }, [
        rules.required()
    ]),
    tipo_vehiculo: schema.string({}, [
      rules.required(),
      rules.maxLength(30)
    ]),
    servicio_id: schema.number([
      rules.required(),
      rules.exists({ table: 'servicios', column: 'id' })
    ])
  })

