import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Ciudad from 'App/Models/Ciudad'
import { ciudadValidation } from 'App/Validators/CiudadesValidator'


export default class CiudadesController {
  // Create a new City
  public async create({ request }: HttpContextContract) {
    const body = request.only(['nombre', 'departamento_id'])

    // Validar la solicitud utilizando el esquema de validación
    await request.validate({
      schema: ciudadValidation,
      data: body
    })

    // Crear la nueva ciudad
    const theCiudad = await Ciudad.create(body)
    return theCiudad
  }

  // Get all Citys
  public async findAll({ request }: HttpContextContract) {
    const page = request.input('page', 1)
    const perPage = request.input('perPage', 20)
    let ciudades: Ciudad[] = await Ciudad.query().paginate(page, perPage)
    return ciudades
  }

  // Get a City by id

  public async findById({ params }: HttpContextContract) {
    const theCiudad = await Ciudad.findOrFail(params.id)
    return theCiudad
  }

  // Update a city by id

  public async update({ params, request }: HttpContextContract) {
    const body = request.only(['nombre', 'departamento_id'])
    const theCiudad = await Ciudad.findOrFail(params.id)

    // Validar la solicitud utilizando el esquema de validación
    await request.validate({
      schema: ciudadValidation,
      data: body
    })

    theCiudad.nombre = body.nombre
    theCiudad.departamento_id = body.departamento_id
    return theCiudad.save()
  }

  // Delete a driver by id

  public async delete({ params, response }: HttpContextContract) {
    const theCiudad = await Ciudad.findOrFail(params.id)
    response.status(204)
    return await theCiudad.delete()
  }
}
