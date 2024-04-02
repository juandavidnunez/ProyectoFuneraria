import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Usuario from 'App/Models/Usuario';

export default class UsuariosController {
    //Create

    public async store({ request }: HttpContextContract) {
        let body = request.body();
        const theUsuario = await Usuario.create(body);
        return theUsuario;
    }


    //Get

    public async index({ request }: HttpContextContract) {
        const page = request.input('page', 1);
        const perPage = request.input('per_page', 20);
        let usuarios: Usuario[] = await Usuario.query().paginate(page, perPage);
        return usuarios;
    }

    public async show({ params }: HttpContextContract) {
        return Usuario.findOrFail(params.id);
    }


    //Update

    public async update({ params, request }: HttpContextContract) {
        const body = request.body();
        const theUsuario: Usuario = await Usuario.findOrFail(params.id);
        theUsuario.email = body.email;
        theUsuario.password = body.password;
        theUsuario.name = body.name;
        theUsuario.rol_id = body.rol_id;
        return theUsuario.save();
    }


    //Delete

    public async destroy({ params, response }: HttpContextContract) {
        const theUsuario: Usuario = await Usuario.findOrFail(params.id);
        response.status(204);
        return theUsuario.delete;
    }
}
