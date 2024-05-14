import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const mensajeValidation = {
    schema: schema.create({
        contenido: schema.string({}, [
            rules.required(),
            rules.maxLength(30)
          ]),
        user_id: schema.number(),
        chat_id: schema.number(),
      })
      
}