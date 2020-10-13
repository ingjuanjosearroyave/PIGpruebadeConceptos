const express = require("express");
const router = express.Router();
const _controlador = require("../controllers/controlRetiro");

/**
 * Obtener 
 */
router.get("/controlRetiro", (req, res) => {
  _controlador
    .consultarControlRetiro()
    .then(respuestaDB => {
      let controlRetiro = respuestaDB.rows;
      res.send({ ok: true, info: controlRetiro, mensaje: "Control Retiro de Leche Consultado" });
    })
    .catch(error => {
      res.send(error);
    });
});

/**
 * Guardar 
 */
router.post("/controlRetiro", async (req, res) => {
  try {
    let info_control = await req.body;

   _controlador.validar(info_control);

    _controlador
      .insertarControlRetiro(info_control)
      .then(respuestaDB => {
        res.send({ ok: true, mensaje: "Control Retiro de Leche Registrado", info: info_control });
      })
      .catch(error => {
        res.send(error);
      });

  } catch (error) {
    res.send(error);
  }
});

module.exports = router