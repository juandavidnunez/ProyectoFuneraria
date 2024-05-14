import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Ciudad from 'App/Models/Ciudad'
import { ciudadValidation } from 'App/Validators/CiudadesValidator'


export default class CiudadesController {
  // Create a new City
  public async create({ request }: HttpContextContract) {
    const body = await request.validate(ciudadValidation);
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
    const body = await request.validate(ciudadValidation);
    const theCiudad = await Ciudad.findOrFail(params.id)
    theCiudad.nombre = body.nombre
    return theCiudad.save()
  }

  // Delete a driver by id

  public async delete({ params, response }: HttpContextContract) {
    const theCiudad = await Ciudad.findOrFail(params.id)
    response.status(204)
    return await theCiudad.delete()
  }
}
