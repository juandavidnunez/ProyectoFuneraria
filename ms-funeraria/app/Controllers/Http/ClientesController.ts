import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cliente from 'App/Models/Cliente'
import { clienteValidation } from 'App/Validators/ClientesValidator'


export default class ClientesController {
  // Create a new client

  public async create({ request }: HttpContextContract) {
    const body = request.only(['nombre', 'apellido', 'cedula', 'telefono', 'email', 'usuario_id'])

    // Validar la solicitud utilizando el esquema de validación
    await request.validate({
      schema: clienteValidation,
      data: body,
    })

    // Crear el nuevo cliente
    const theCliente = await Cliente.create(body)
    return theCliente
  }

  // Get all clients

  public async findAll({ request }: HttpContextContract) {
    const page = request.input('page', 1)
    const perPage = request.input('perPage', 20)
    let clientes: Cliente[] = await Cliente.query().paginate(page, perPage)
    return clientes
  }

  // Get a client by id

  public async findById({ params }: HttpContextContract) {
    const theCliente = await Cliente.findOrFail(params.id)
    return theCliente
  }

  // Update a client by id

  public async update({ params, request }: HttpContextContract) {
    const body = request.only(['nombre', 'apellido', 'cedula', 'telefono', 'email', 'usuario_id'])
    const theCliente = await Cliente.findOrFail(params.id)

    // Validar la solicitud utilizando el esquema de validación
    await request.validate({
      schema: clienteValidation,
      data: body,
    })

    // Actualizar la sepultura
    theCliente.merge(body)
    await theCliente.save()
    return theCliente
  }

  // Delete a client by id

  public async delete({ params, response }: HttpContextContract) {
    const theCliente = await Cliente.findOrFail(params.id)
    response.status(204)
    return await theCliente.delete()
  }
}
