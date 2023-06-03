const Venta = require('../models').Venta;
const Cliente = require('../models').Cliente;
const VentaDetalle = require('../models').VentaDetalle;

module.exports = {
    create(req, res) {
        try {
            var resp = Cliente.findOne({
                where: { nombre: req.body.cliente.nombre }
            })
                .then(cliente => {
                    if (cliente == null) {
                        Cliente.create({
                            nombre: req.body.cliente.nombre,
                            telefono: req.body.cliente.telefono,
                            email: req.body.cliente.email
                        })
                            .then((data) => {
                                Venta.create({
                                    cliente_id: data.id,
                                    total: req.body.total,
                                    fecha: new Date()
                                })
                                    //.then((data) => res.status(201).send(data))
                                    .then((venta) => {
                                        var dataVD = [];
                                        var prods = req.body.productos;
                                        prods.forEach(element => {
                                            dataVD.push({
                                                producto_id: element.id,
                                                venta_id: venta.id,
                                                precio: element.precio,
                                                cantidad: element.cantidad
                                            });
                                        });
                                        return VentaDetalle
                                            .bulkCreate(dataVD)
                                            .then((result) => res.status(201).send(result))
                                            .catch((error) => { res.status(400).send(error) });
                                    })
                                    .catch((error) => {
                                        console.log('error', error);
                                        res.status(500).send(error)
                                    });
                            })
                    } else {
                        return Venta.create({
                            cliente_id: cliente.id,
                            total: req.body.total,
                            fecha: new Date()
                        })
                            //.then((data) => res.status(201).send(data))
                            .then((venta) => {
                                var dataVD = [];
                                var prods = req.body.productos;
                                prods.forEach(element => {
                                    dataVD.push({
                                        producto_id: element.id,
                                        venta_id: venta.id,
                                        precio: element.precio,
                                        cantidad: element.cantidad
                                    });
                                });
                                return VentaDetalle
                                    .bulkCreate(dataVD)
                                    .then((result) => res.status(201).send(result))
                                    .catch((error) => { res.status(400).send(error) });
                            })
                            .catch((error) => {
                                console.log('error', error);
                                res.status(500).send(error)
                            });
                    }
                })
                .catch((error) => {
                    console.log('error', error);
                    res.status(500).send(error)
                });
            return resp;
        } catch (ex) {
            console.log('error', ex);
            res.status(500).send(ex)
        }
    },
};