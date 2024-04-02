import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import RolxPermiso from "App/Models/RolxPermiso";

export default class RolxPermisosController {

    //Create

    public async store({ request }: HttpContextContract) {
        let body = request.body();
        const theRolxPermiso = await RolxPermiso.create(body);
        return theRolxPermiso;
    }

    //Get

    public async index({ request }: HttpContextContract) {
        const page = request.input('page', 1);
        const perPage = request.input('per_page', 20);
        let RolxPermisos:RolxPermiso[] = await RolxPermiso.query().paginate(page, perPage);
        return RolxPermisos;
    }

    public async show({ params }: HttpContextContract) {
        let theRolxPermiso : RolxPermiso = await RolxPermiso.query().where('id', params.id).firstOrFail();
        return theRolxPermiso;
    }

    //Update

    public async update({ params, request }: HttpContextContract) {
        const body = request.body();
        const theRolxPermiso: RolxPermiso = await RolxPermiso.findOrFail(params.id);
        theRolxPermiso.rol_id = body.rol_id;
        theRolxPermiso.permiso_id = body.permiso_id;
        return theRolxPermiso.save();
    }

    //Delete

    public async destroy({ params, response }: HttpContextContract) {
        const theRolxPermiso: RolxPermiso = await RolxPermiso.findOrFail(params.id);
        response.status(204);
        return theRolxPermiso.delete;
    }
}
