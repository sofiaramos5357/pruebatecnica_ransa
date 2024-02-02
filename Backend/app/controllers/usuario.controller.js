const db = require("../models");
const Usuario = db.Usuarios;
const Op = db.Sequelize.Op;

const jwt = require('jsonwebtoken');

async function login(usuario, res) {
  try {
    // Buscar al usuario por su correo.
    const usuarioEncontrado = await Usuario.findOne({
      where: {
        [Op.or]: [
          { Correo: usuario.Correo }
        ]
      }
    });

    // Si no se encuentra ningún registro, devolver un error de autenticación.
    if (!usuarioEncontrado) {
      return res.status(401).json({ message: "Correo o contraseña incorrecta." });
    }

    // Si la contraseña coincide generar un token de acceso.
    if (usuarioEncontrado.Contrasena === usuario.Contrasena) {
      const payload = {
        Correo: usuarioEncontrado.Correo,
        Id: usuarioEncontrado.Id,
      };

      // Generar un token de acceso JWT con un tiempo de expiración de 8 horas.
      const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN, {
        expiresIn: "8h",
      });

      // Devolver el token de acceso como respuesta exitosa.
      return res.status(200).json({ token: accessToken });
    } else {
      // Si la contraseña no coincide, devolver un error de autenticación.
      return res.status(401).json({ message: "Correo o contraseña incorrecta." });
    }

  } catch (err) {
    console.error(err);
    // En caso de error interno del servidor, devolver una respuesta de error.
    return res.status(500).json({ message: "Error interno del servidor." });
  }
}

module.exports = { login };

