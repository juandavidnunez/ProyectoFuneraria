import { schema } from '@ioc:Adonis/Core/Validator'

export const ejecucionServicioValidation = {
    schema: schema.create({
        servicio_id: schema.number(),
        cliente_id: schema.number(),
      })
      
}