import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Rol from 'App/Models/Rol';

export default class RolesController {

    //Create

    public async store({ request }: HttpContextContract) {
        let body = request.body();
        const theRol = await Rol.create(body);
        return theRol;
    }

    //Get

    public async index({ request }: HttpContextContract) {
        const page = request.input('page', 1);
        const perPage = request.input('per_page', 20);
        let roles: Rol[] = await Rol.query().paginate(page, perPage);
        return roles;
    }

    public async show({ params }: HttpContextContract) {
        return Rol.findOrFail(params.id);
    }

    //Update

    public async update({ params, request }: HttpContextContract) {
        const body = request.body();
        const theRol: Rol = await Rol.findOrFail(params.id);
        theRol.name = body.name;
        theRol.description = body.description;
        return theRol.save();
    }

    //Delete

    public async destroy({ params, response }: HttpContextContract) {
        const theRol: Rol = await Rol.findOrFail(params.id);
        response.status(204);
        return theRol.delete;
    }
}
