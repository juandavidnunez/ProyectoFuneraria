import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cremacion from 'App/Models/Cremacion'
import { cremacionValidation } from 'App/Validators/CremacionesValidator'


export default class CremacionesController {
  //create a new cremacion

  public async create({ request }: HttpContextContract) {
    const body = request.only(['ubicacion', 'fecha_hora', 'servicio_id'])

    // Validar la solicitud utilizando el esquema de validación
    await request.validate({
      schema: cremacionValidation,
      data: body,
    })

    // Crear la nueva sepultura
    const theSepultura = await Cremacion.create(body)
    return theSepultura
  }

  // Get all cremacion

  public async findAll({ request }: HttpContextContract) {
    const page = request.input('page', 1)
    const perPage = request.input('perPage', 20)
    let cremacion: Cremacion[] = await Cremacion.query().paginate(page, perPage)
    return cremacion
  }

  // Get a cremacion by id

  public async findById({ params }: HttpContextContract) {
    const theCremacion = await Cremacion.findOrFail(params.id)
    return theCremacion
  }

  // Update a cremacion by id

  public async update({ params, request }: HttpContextContract) {
    const body = request.only(['ubicacion', 'fecha_hora'])
    const theSepultura = await Cremacion.findOrFail(params.id)

    // Validar la solicitud utilizando el esquema de validación
    await request.validate({
      schema: cremacionValidation,
      data: body,
    })

    // Actualizar la sepultura
    theSepultura.merge(body)
    await theSepultura.save()
    return theSepultura
  }

  // Delete a cremacion by id

  public async delete({ params, response }: HttpContextContract) {
    const theCremacion = await Cremacion.findOrFail(params.id)
    response.status(204)
    return await theCremacion.delete()
  }
}
