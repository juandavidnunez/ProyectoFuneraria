import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Beneficiario from 'App/Models/Beneficiario'
import { beneficiarioValidation } from 'App/Validators/BeneficiariosValidator'


export default class BeneficiariosController {
  // Create a new beneficiary

  public async create({ request }: HttpContextContract) {
    const body = await request.validate(beneficiarioValidation);
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
    const body = await request.validate(beneficiarioValidation);
    const theBeneficiario = await Beneficiario.findOrFail(params.id)
    theBeneficiario.nombre = body.nombre
    theBeneficiario.apellido = body.apellido
    theBeneficiario.cedula = body.cedula
    theBeneficiario.telefono = body.telefono
    return theBeneficiario.save()
  }

  // Delete a beneficiary by id

  public async delete({ params, response }: HttpContextContract) {
    const theBeneficiario = await Beneficiario.findOrFail(params.id)
    response.status(204)
    return await theBeneficiario.delete()
  }
}
