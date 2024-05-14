import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Administrador from 'App/Models/Administrador'
import { administradorValidation } from 'App/Validators/AdministradoresValidator'

export default class AdministradoresController {
  // Create a new administrator

  public async create({ request }: HttpContextContract) {
    const body = request.only(['email', 'name', 'age', 'usuario_id'])

    // Validar la solicitud utilizando el esquema de validación
    await request.validate({
      schema: administradorValidation,
      data: body,
    })

    // Crear la nueva sepultura
    const theSepultura = await Administrador.create(body)
    return theSepultura
  }

  // Get all administrators

  public async findAll({ request }: HttpContextContract) {
    const page = request.input('page', 1)
    const perPage = request.input('perPage', 20)
    let administradores: Administrador[] = await Administrador.query().paginate(page, perPage)
    return administradores
  }

  // Get an administrator by id

  public async findById({ params }: HttpContextContract) {
    const theAdministrador = await Administrador.findOrFail(params.id)
    return theAdministrador
  }

  // Update an administrator by id

  public async update({ params, request }: HttpContextContract) {
    const body = request.only(['email', 'name', 'age', 'usuario_id'])
    const theAdministrador = await Administrador.findOrFail(params.id)

    // Validar la solicitud utilizando el esquema de validación
    await request.validate({
      schema: administradorValidation,
      data: body,
    })

    // Actualizar la sepultura
    theAdministrador.merge(body)
    await theAdministrador.save()
    return theAdministrador
  }

  // Delete an administrator by id

  public async delete({ params, response }: HttpContextContract) {
    const theAdministrador = await Administrador.findOrFail(params.id)
    response.status(204)
    return await theAdministrador.delete()
  }
}
