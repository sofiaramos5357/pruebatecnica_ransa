require("dotenv").config();
const jwt = require("jsonwebtoken");

//La función authenticateToken es un middleware de Express que se utiliza para autenticar las solicitudes.

function authenticateToken(req, res, next) {
  // Obtiene el encabezado "Authorization" de la solicitud HTTP
  const authHeader = req.headers["authorization"];

  // Divide el encabezado para extraer el token (se espera que esté en el formato "Bearer <token>")
  const token = authHeader && authHeader.split(" ")[1];

  // Si no se proporciona un token, responde con un código de estado 401 (No autorizado)
  if (token == null) return res.sendStatus(401);

  // Verifica el token utilizando la clave secreta (process.env.ACCESS_TOKEN)
  jwt.verify(token, process.env.ACCESS_TOKEN, (err, response) => {
    // Si hay un error en la verificación, responde con un código de estado 403 (Prohibido)
    if (err) {
      return res.sendStatus(403);
    }

    // Si el token es válido, establece los datos del usuario autenticado en res.locals
    res.locals = response;

    // Llama a la siguiente función en la cadena de middleware
    next();
  });
}


module.exports = { authenticateToken: authenticateToken };
