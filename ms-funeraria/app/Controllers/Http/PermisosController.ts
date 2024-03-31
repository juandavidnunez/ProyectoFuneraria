import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Permiso from 'App/Models/Permiso';

export default class PermisosController {

    //Create

    public async store({ request }: HttpContextContract) {
        let body = request.body();
        const thePermiso = await Permiso.create(body);
        return thePermiso;
    }
    //Get

    public async index({ request }: HttpContextContract) {
        const page = request.input('page', 1);
        const perPage = request.input('per_page', 20);
        let permisos:Permiso[] = await Permiso.query().paginate(page, perPage);  
        return permisos;
    }

    public async show({ params }: HttpContextContract) {
        return Permiso.findOrFail(params.id);
    }

    //Update

    public async update({ params, request }: HttpContextContract) {
        const body = request.body();
        const thePermiso : Permiso = await Permiso.findOrFail(params.id);
        thePermiso.url = body.url;
        thePermiso.method = body.method;
        return thePermiso.save();
    }

    //Delete

    public async destroy({ params, response }: HttpContextContract) {
        const thePermiso : Permiso = await Permiso.findOrFail(params.id);
        response.status(204);
        return thePermiso.delete;
    }
}
