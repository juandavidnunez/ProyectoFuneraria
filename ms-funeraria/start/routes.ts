import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

import "./routes/administradores";
import "./routes/beneficiarios";
import "./routes/clientes";
import "./routes/conductores";
import "./routes/titulares";
