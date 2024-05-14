import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Traslado from 'App/Models/Traslado'
import { trasladoValidation } from 'App/Validators/TrasladosValidator'


export default class TrasladosController {
  //create a new traslado

  public async create({ request }: HttpContextContract) {
    const body = request.only(['origen', 'destino', 'fecha_hora', 'tipo_vehiculo', 'servicio_id'])

    // Validar la solicitud utilizando el esquema de validación
    await request.validate({
      schema: trasladoValidation,
      data: body,
    })

    // Crear la nueva sepultura
    const theSepultura = await Traslado.create(body)
    return theSepultura
  }

  // Get all traslados

  public async findAll({ request }: HttpContextContract) {
    const page = request.input('page', 1)
    const perPage = request.input('perPage', 20)
    let traslado: Traslado[] = await Traslado.query().paginate(page, perPage)
    return traslado
  }

  // Get a traslado by id

  public async findById({ params }: HttpContextContract) {
    const theTraslado = await Traslado.findOrFail(params.id)
    return theTraslado
  }

  // Update a traslados by id

  public async update({ params, request }: HttpContextContract) {
    const body = request.only(['origen', 'destino', 'fecha_hora', 'tipo_vehiculo'])
    const theTraslado = await Traslado.findOrFail(params.id)

    // Validar la solicitud utilizando el esquema de validación
    await request.validate({
      schema: trasladoValidation,
      data: body,
    })

    // Actualizar la sepultura
    theTraslado.merge(body)
    await theTraslado.save()
    return theTraslado
  }
  // Delete a traslados by id

  public async delete({ params, response }: HttpContextContract) {
    const theTraslado = await Traslado.findOrFail(params.id)
    response.status(204)
    return await theTraslado.delete()
  }
}
