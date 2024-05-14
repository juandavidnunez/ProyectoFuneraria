import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Sepultura from 'App/Models/Sepultura'
import { sepulturaValidation } from 'App/Validators/SepulturasValidator'

export default class SepulturasController {
  //create a new sepultura

  public async create({ request }: HttpContextContract) {
    const body = request.only(['ubicacion', 'fecha_hora', 'servicio_id'])

    // Validar la solicitud utilizando el esquema de validación
    await request.validate({
      schema: sepulturaValidation,
      data: body,
    })

    // Crear la nueva sepultura
    const theSepultura = await Sepultura.create(body)
    return theSepultura
  }

  // Get all sepultura

  public async findAll({ request }: HttpContextContract) {
    const page = request.input('page', 1)
    const perPage = request.input('perPage', 20)
    let sepultura: Sepultura[] = await Sepultura.query().paginate(page, perPage)
    return sepultura
  }

  // Get a sepultura by id

  public async findById({ params }: HttpContextContract) {
    const theSepultura = await Sepultura.findOrFail(params.id)
    return theSepultura
  }

  // Update a sepultura by id

  // Actualizar una sepultura por su ID
  public async update({ params, request }: HttpContextContract) {
    const body = request.only(['ubicacion', 'fecha_hora'])
    const theSepultura = await Sepultura.findOrFail(params.id)

    // Validar la solicitud utilizando el esquema de validación
    await request.validate({
      schema: sepulturaValidation,
      data: body,
    })

    // Actualizar la sepultura
    theSepultura.merge(body)
    await theSepultura.save()
    return theSepultura
  }

  // Delete a sepultura by id

  public async delete({ params, response }: HttpContextContract) {
    const theSepultura = await Sepultura.findOrFail(params.id)
    response.status(204)
    return await theSepultura.delete()
  }
}
