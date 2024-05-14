import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Conductor from 'App/Models/Conductor'
import { conductorValidation } from 'App/Validators/ConductoresValidator'


export default class ConductoresController {
  // Create a new driver

  public async create({ request }: HttpContextContract) {
    const body = await request.validate(conductorValidation)
    const theConductor = await Conductor.create(body)
    return theConductor
  }

  // Get all drivers

  public async findAll({ request }: HttpContextContract) {
    const page = request.input('page', 1)
    const perPage = request.input('perPage', 20)
    let conductores: Conductor[] = await Conductor.query().paginate(page, perPage)
    return conductores
  }

  // Get a driver by id

  public async findById({ params }: HttpContextContract) {
    const theConductor = await Conductor.findOrFail(params.id)
    return theConductor
  }

  // Update a driver by id

  public async update({ params, request }: HttpContextContract) {
    const body = await request.validate(conductorValidation)
    const theConductor = await Conductor.findOrFail(params.id)
    theConductor.nombre = body.nombre
    theConductor.apellido = body.apellido
    theConductor.cedula = body.cedula
    theConductor.telefono = body.telefono ?? theConductor.telefono
    return theConductor.save()
  }

  // Delete a driver by id

  public async delete({ params, response }: HttpContextContract) {
    const theConductor = await Conductor.findOrFail(params.id)
    response.status(204)
    return await theConductor.delete()
  }
}
