const express = require("express");
const router = express.Router();
const bodyparser = require("body-parser");

module.exports = router;

router.get("/index", (req, res)=>{
    const valores = {
        numBoleto: req.query.numBoleto,
        destino: req.query.destino,
        cliente: req.query.cliente,
        edad: req.query.edad,
        tipoViaje: req.query.tipoViaje,
        precio: req.query.precio,
        total: req.query.total
    }
    res.render('index.html', valores)
})

router.post("/index", (req, res)=>{
    const valores = {
        numBoleto: req.body.numBoleto,
        destino: req.body.destino,
        cliente: req.body.cliente,
        edad: req.body.edad,
        tipoViaje: req.body.tipoViaje,
        precio: req.body.precio,
        total: req.body.total
    }
    res.render('index.html', valores)
})

function limpiarCampos(){
    document.getElementById("numBoleto").value = "";
    document.getElementById("destino").value = "";
    document.getElementById("cliente").value = "";
    document.getElementById("edad").selectIndex = 0;
    document.getElementById("precio").value = "";
    document.getElementById("subtotal").value = "";
    document.getElementById("impuesto").value = "";
    document.getElementById("descuento").value = "";
    document.getElementById("preciof").value = "";
}