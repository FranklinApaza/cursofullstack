const auth = require('../app/middlewares/auth');

const mainController = require('../app/controllers').main;
const productoController = require('../app/controllers').producto;
const ventaController = require('../app/controllers').venta;
const usuarioController = require('../app/controllers').usuario;

module.exports = (app) => {

    app.get('/', (req, res) => {
        //res.send('Hello World!')
        res.json({ mensaje: 'API operativo' });
    });

    app.get('/api', (req, res) => res.status(200).send({
        mensaje: 'Otra ruta'
    }));

    app.get('/api/products/:id', mainController.getProductById);

    app.post('/api/pruebapost', mainController.pruebaPost);

    app.post('/api/productos', productoController.create);
    app.get('/api/productos', auth.verificaUsuario, productoController.list);
    app.get('/api/productos/:id', productoController.getProductById);
    app.put('/api/productos/:id', productoController.update);
    app.delete('/api/productos/:id', productoController.delete);

    app.get('/api/ventas/cliente/:id', auth.verificaUsuario, productoController.ventasByClienteId);

    app.get('/api/cuentas', mainController.listCuentas);

    /* Para probar la venta - venta_detalle, primero actualizar la tabla venta_detalle incorporando cantidad y enviando los siguientes datos en el body
    {
        "total": 1234,
        "productos": [
        {"id":3, "cantidad": 2,"precio": 222},
        {"id":4, "cantidad": 1,"precio": 888},
        {"id":5, "cantidad": 5,"precio": 22}
        ],
        "cliente": {
        "nombre":"Cliente Nuevo",
        "telefono":"123456",
        "email":"correo@email.com"}
    }
    */
    app.post('/api/ventas', ventaController.create);

    app.post('/api/usuarios', usuarioController.create);

    app.post('/api/auth/login', usuarioController.authenticate);
};