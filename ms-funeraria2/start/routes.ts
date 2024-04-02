import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.get("/usuarios", "UsuariosController.index");
    Route.get("/usuarios/:id", "UsuariosController.show");
    Route.post("/usuarios", "UsuariosController.store");
    Route.put("/usuarios/:id", "UsuariosController.update");
    Route.delete("/usuarios/:id", "UsuariosController.destroy");
})

Route.group(() => {
    Route.get("/roles", "RolesController.index");
    Route.get("/roles/:id", "RolesController.show");
    Route.post("/roles", "RolesController.store");
    Route.put("/roles/:id", "RolesController.update");
    Route.delete("/roles/:id", "RolesController.destroy");
})

Route.group(() => {
    Route.get("/permisos", "PermisosController.index");
    Route.get("/permisos/:id", "PermisosController.show");
    Route.post("/permisos", "PermisosController.store");
    Route.put("/permisos/:id", "PermisosController.update");
    Route.delete("/permisos/:id", "PermisosController.destroy");
})

Route.group(() => {
    Route.get("/rolespermisos", "RolesPermisosController.index");
    Route.get("/rolespermisos/:id", "RolesPermisosController.show");
    Route.post("/rolespermisos", "RolesPermisosController.store");
    Route.put("/rolespermisos/:id", "RolesPermisosController.update");
    Route.delete("/rolespermisos/:id", "RolesPermisosController.destroy");
})

