module.exports = app => {
  const persona = require("../controllers/persona.controller.js");
  var auth = require('../services/authentication'); //Verificar que la solicitud reciba un jsonwebtoken

  var router = require("express").Router();

  // crea una persona
  router.post("/", auth.authenticateToken, persona.create);

  // retorna una persona por id
  router.get("/:id", persona.findOne);

  // actualizar personas por id
  router.put("/:id", auth.authenticateToken, persona.update);

  // Ruta para obtener las primeras N personas
  app.get("/api/persona/all", auth.authenticateToken, persona.findAll);

  app.use('/api/persona', router);
};