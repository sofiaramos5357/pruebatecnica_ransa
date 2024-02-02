module.exports = app => {
    const usuario = require("../controllers/usuario.controller.js");
  
    var router = require("express").Router();

  // Ruta para autenticación (login)
  router.post("/login", async (req, res) => {
    const usuarioreq = req.body;
    try {
      const resultadoLogin = await usuario.login(usuarioreq, res);
      // res.status(200).json({ mensaje: 'Login exitoso', token: resultadoLogin.token });
    } catch (error) {
      // Manejar errores si es necesario
       res.status(500).json({ message: 'Error en el servidor' });
    }
  });
  
  
    app.use('/api/usuario', router);
  };