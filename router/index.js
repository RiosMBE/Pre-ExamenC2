const express = require("express");
const router = express.Router();
const bodyparser = require("body-parser");

router.get('/index', (req, res) => {
    const num_boleto = req.query.num_boleto;
    const destino = req.query.destino;
    const nombre = req.query.nombre;
    const edad = req.query.edad;
    const tipo_viaje = req.query.tipo_viaje;
    const precio = req.query.precio;
    res.render('index.html', num_boleto, destino, nombre, edad, tipo_viaje, precio);
});

router.post('/index', (req, res) => {
    const num_boleto = req.body.num_boleto;
    const destino = req.body.destino;
    const nombre = req.body.nombre;
    const edad = req.body.edad;
    const tipo_viaje = req.body.tipo_viaje;
    const precio = req.body.precio;

    const subtotal = precio;

    if (tipo_viaje == 2) {
        subtotal += precio * 0.8;
    }

    let descuento = 0;
    if (edad >= 60) {
        descuento = subtotal * 0.5;
    }

    const impuesto = subtotal * 0.16;
    const total = (subtotal) - descuento + impuesto;

res.render('index.html', {
        num_boleto,
        destino,
        nombre,
        edad,
        tipo_viaje,
        precio,
        subtotal,
        impuesto,
        descuento,
        total,
    });
});

module.exports=router;