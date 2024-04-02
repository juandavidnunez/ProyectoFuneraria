import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Rol from 'App/Models/Rol';

export default class RolesController {

    // GET /roles
    public async index({ response }: HttpContextContract) {
        const roles = await Rol.all();
        return response.json(roles);
    }

    // POST /roles

    public async store({ request, response }: HttpContextContract) {
        const data = request.only(['name', 'description']);
        const rol = await Rol.create(data);
        return response.json(rol);
    }

    // GET /roles/:id

    public async show({ params, response }: HttpContextContract) {
        const rol = await Rol.findOrFail(params.id);
        return response.json(rol);
    }

    // PUT /roles/:id

    public async update({ params, request, response }: HttpContextContract) {
        const rol = await Rol.findOrFail(params.id);
        const data = request.only(['name', 'description']);
        rol.merge(data);
        await rol.save();
        return response.json(rol);
    }

    // DELETE /roles/:id

    public async destroy({ params, response }: HttpContextContract) {
        const rol = await Rol.findOrFail(params.id);
        await rol.delete();
        return response.json({ message: 'Rol eliminado' });
    }
}
