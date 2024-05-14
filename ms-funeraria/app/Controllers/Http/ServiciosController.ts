import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Servicio from 'App/Models/Servicio'
import { servicioValidation } from 'App/Validators/ServiciosValidator'

export default class ServiciosController {
  //create a new servicio

  public async create({ request }: HttpContextContract) {
    const body = request.only(['nombre', 'precio', 'descripcion', 'duracion'])

    // Validar la solicitud utilizando el esquema de validación
    await request.validate({
      schema: servicioValidation,
      data: body,
    })

    // Crear el nuevo servicio
    const theServicio = await Servicio.create(body)
    return theServicio
  }

  // Get all servicios
  public async findAll({ request }: HttpContextContract) {
    const page = request.input('page', 1)
    const perPage = request.input('perPage', 20)
    let servicio: Servicio[] = await Servicio.query().paginate(page, perPage)
    return servicio
  }

  // Get a servio by id

  public async findById({ params }: HttpContextContract) {
    const theServicio = await Servicio.findOrFail(params.id)
    return theServicio
  }

  // Update a servicios by id

  public async update({ params, request }: HttpContextContract) {
    const body = request.only(['nombre', 'precio', 'descripcion', 'duracion'])
    const theServicio = await Servicio.findOrFail(params.id)

    // Validar la solicitud utilizando el esquema de validación
    await request.validate({
      schema: servicioValidation,
      data: body,
    })

    // Actualizar el servicio
    theServicio.merge(body)
    await theServicio.save()
    return theServicio
  }

  // Delete a servicios by id

  public async delete({ params, response }: HttpContextContract) {
    const theServicio = await Servicio.findOrFail(params.id)
    response.status(204)
    return await theServicio.delete()
  }
}
