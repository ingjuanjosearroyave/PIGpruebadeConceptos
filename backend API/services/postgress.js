const { Pool } = require("pg");

//Clase con informacion de la base de datos  

class ServicioPG {
    constructor() {
      this.pool = new Pool({
        user: "postgres",
        host: "localhost",
        database: "PIG",
        password: "1234",
        port: 5432,
      });
    }
  

// Ejecuta la clase y el metodo se debe hacer
// de forma asincrona para que respuesta tenga un valor
  
async ejecutarSql(sql,params) {
    let respuesta = await this.pool.query(sql,params);
    return respuesta;
  }
}

// Exporta la clase, para poder ser utilizada desde otros archivos

module.exports = ServicioPG;