module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define("Usuario", {
      Contrasena: {
        type: Sequelize.STRING
      },
      Correo: {
        type: Sequelize.STRING
      }
    },
      {
        tableName: "Usuario", // Reemplaza "NombreDeLaTablaEnLaBaseDeDatos" con el nombre correcto de tu tabla ya que sequelize pone los nombres de las tablas en plural
        timestamps: false, // para que automaticamente no cree automaticamente los campos [createdAt] y [updatedAt]
      }
    );
  
    return Usuario;
  };
  
  /*
  Este modelo Sequelize representa la tabla en la base de datos MSSQL
  */