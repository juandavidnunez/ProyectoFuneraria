import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cliente from 'App/Models/Cliente'

export default class ClientesController {

    // Create a new client

    public async create({ request }: HttpContextContract) {
        let body = request.body()
        const theCliente = await Cliente.create(body)
        return theCliente
    }

    // Get all clients

    public async findAll({request}: HttpContextContract) {
        const page = request.input('page', 1)
        const perPage = request.input('perPage', 20)
        let clientes:Cliente[] = await Cliente.query().paginate(page, perPage)
        return clientes
    }

    // Get a client by id

    public async findById({ params }: HttpContextContract) {
        const theCliente = await Cliente.findOrFail(params.id)
        return theCliente
    }

    // Update a client by id

    public async update({ params, request }: HttpContextContract) {
        const body = request.body()
        const theCliente = await Cliente.findOrFail(params.id)
        theCliente.nombre = body.nombre
        theCliente.apellido = body.apellido
        theCliente.cedula = body.cedula
        theCliente.telefono = body.telefono
        return theCliente.save()
    }

    // Delete a client by id

    public async delete({ params, response }: HttpContextContract) {
        const theCliente = await Cliente.findOrFail(params.id)
        response.status(204)
        return await theCliente.delete()
    }
}
