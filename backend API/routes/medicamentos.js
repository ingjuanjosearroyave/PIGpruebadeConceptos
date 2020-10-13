const express = require("express");
const router = express.Router();
const _controlador = require("../controllers/medicamentos");

/**
 * Consultar medicamentos
 */
router.get("/medicamentos", (req, res) => {
    _controlador
      .consultarMedicamento()
      .then(respuestaDB => {
        let medicamentos = respuestaDB.rows;
        res.send({ ok: true, info: medicamentos, mensaje: "Medicamento Consultado" });
      })
      .catch(error => {
        res.send(error);
      });
  });
  
  /**
   * Insertar medicamentos
   */
  router.post("/medicamentos", async (req, res) => {
    try {
      let info_medicamentos = await req.body;
  
     _controlador.validar(info_medicamentos);
  
      _controlador
        .insertarMedicamento(info_medicamentos)
        .then(respuestaDB => {
          res.send({ ok: true, mensaje: "Medicamento Registrado", info: info_medicamentos });
        })
        .catch(error => {
          res.send(error);
        });
  
    } catch (error) {
      res.send(error);
    }
  });
  
  module.exports = router
