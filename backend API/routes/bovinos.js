const express = require("express");
const router = express.Router();
const _controlador = require("../controllers/bovinos");

/**
 * Consultar Bovinos
 */
router.get("/bovinos", (req, res) => {
    _controlador
      .consultarBovino()
      .then(respuestaDB => {
        let Bovino = respuestaDB.rows;
        res.send({ ok: true, info: Bovino, mensaje: "Bovino Consultado" });
      })
      .catch(error => {
        res.send(error);
      });
  });
  
  /**
   * Insertar Bovino
   */
  router.post("/bovinos", async (req, res) => {
    try {
      let info_bovino = await req.body;
  
     _controlador.validar(info_bovino);
  
      _controlador
        .insertarBovino(info_bovino)
        .then(respuestaDB => {
          res.send({ ok: true, mensaje: "Bovino Registrado", info: info_bovino });
        })
        .catch(error => {
          res.send(error);
        });
  
    } catch (error) {
      res.send(error);
    }
  });
  
  module.exports = router
