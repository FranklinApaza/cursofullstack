module.exports = {
    getProductById(req, res) {
        console.log(req.params);
        res.json({ mensaje: 'Llegó desde GET ' + req.params.id });
    },

    pruebaPost(req, res) {
        //console.log(req.body.valor);
        res.json({ mensaje: 'Llegó desde POST ' + req.body.otrodato });
    }

};