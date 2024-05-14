import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Beneficiario from 'App/Models/Beneficiario'
import { beneficiarioValidation } from 'App/Validators/BeneficiariosValidator'


export default class BeneficiariosController {
  // Create a new beneficiary

  public async create({ request }: HttpContextContract) {
    // Obtener el cuerpo de la solicitud
    const body = request.only(['nombre', 'apellido', 'cedula', 'telefono', 'titular_id', 'cliente_id'])

    // Validar la solicitud utilizando el esquema de validación
    await request.validate({
      schema: beneficiarioValidation,
      data: body,
    })

    // Crear el nuevo beneficiario
    const theBeneficiario = await Beneficiario.create(body)
    return theBeneficiario
  }

  // Get all beneficiaries

  public async findAll({ request }: HttpContextContract) {
    const page = request.input('page', 1)
    const perPage = request.input('perPage', 20)
    let beneficiarios: Beneficiario[] = await Beneficiario.query().paginate(page, perPage)
    return beneficiarios
  }

  // Get a beneficiary by id

  public async findById({ params }: HttpContextContract) {
    const theBeneficiario = await Beneficiario.findOrFail(params.id)
    return theBeneficiario
  }

  // Update a beneficiary by id

  public async update({ params, request }: HttpContextContract) {
    const body = request.only(['nombre', 'apellido', 'cedula', 'telefono', 'titular_id', 'cliente_id'])
    const theBeneficiario = await Beneficiario.findOrFail(params.id)

    // Validar la solicitud utilizando el esquema de validación
    await request.validate({
      schema: beneficiarioValidation,
      data: body,
    })

    // Actualizar la sepultura
    theBeneficiario.merge(body)
    await theBeneficiario.save()
    return theBeneficiario
  }

  // Delete a beneficiary by id

  public async delete({ params, response }: HttpContextContract) {
    const theBeneficiario = await Beneficiario.findOrFail(params.id)
    response.status(204)
    return await theBeneficiario.delete()
  }
}
