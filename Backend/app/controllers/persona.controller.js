const db = require("../models");
const Persona = db.Personas;
const Op = db.Sequelize.Op;

// Crea y guarda
exports.create = (req, res) => {
  //console.log(req.body.Nombre);
   // Validate request
   if (!req.body.Nombre || !req.body.Apellido || !req.body.FechaNacimiento) {
    res.status(400).json({
      message: "Falta informacion de la persona"
    });
    return;
  }

  // Create a rol
  const persona = {
    Nombre: req.body.Nombre,
    Apellido: req.body.Apellido,
    FechaNacimiento: req.body.FechaNacimiento
  };
  // GUARDA LA PERSONA  EN LA BASE DE DATOS
  Persona.create(persona)
    .then(data => {
      res.status(200).json({ message: "Usuario registrado." });
    })
    .catch(err => {
     // console.log(rol.Nombre)
      res.status(500).json({
        message: "Error al registrar el usuario." 
      });
    });
};

//---------------------------------------------------
// Devuelve la personas por id de la base de datos

exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Persona.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "No se encontro persona con id=" + id
        });
      });
  };



// actualiza una persona por id
exports.update = (req, res) => {
    const id = req.params.id;
  
    Persona.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "La persona ha sido modificada."
          });
        } else {
          res.send({
            message: `No se pudo modificar la persona con id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error al actualizar persona con id=" + id
        });
      });
  };

  // Obtener las primeras N personas
  exports.findAll = (req, res) => {
    const offset = req.query.offset || 0;
    const limit = req.query.limit || 5;
    const direction = req.query.direction || 'next'; // Por defecto, carga hacia adelante
  
    const options = {
      offset: parseInt(offset),
      limit: parseInt(limit),
    };
  
    if (direction === 'prev') {
      options.offset = Math.max(options.offset - options.limit, 0);
    }
  
    Persona.findAll(options)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ha ocurrido un error al recuperar las personas."
        });
      });
  };
  