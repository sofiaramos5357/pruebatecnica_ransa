module.exports = (sequelize, Sequelize) => {
    const Persona = sequelize.define("Persona", {
      Id: {
        type: Sequelize.INTEGER,
        //sequelize crea un id para el modelo pero en la base de datos esta propiedad existe autoincrementable, agregamos esta propiedad para que tome esta propiedad como Id
        //y como en la based de datos es autoincrementable en autoIncrement se configura como true
        primaryKey: true, 
        autoIncrement: true,
      },
      Nombre: {
        type: Sequelize.STRING
      },
      Apellido: {
        type: Sequelize.STRING
      },
      FechaNacimiento: {
        type: Sequelize.DATE
      },
      Estado: {
      type: Sequelize.BOOLEAN
      },
    },
      {
        tableName: "Persona", // Reemplaza "NombreDeLaTablaEnLaBaseDeDatos" con el nombre correcto de tu tabla ya que sequelize pone los nombres de las tablas en plural
        timestamps: false, // para que automaticamente no cree automaticamente los campos [createdAt] y [updatedAt]
      }
    );
  
    return Persona;
  };
  
  /*
  Este modelo Sequelize representa la tabla en la base de datos MSSQL
  */