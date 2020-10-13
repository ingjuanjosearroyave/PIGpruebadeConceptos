const ServicioPG = require("../services/postgress");

let validar = control => {
    if (!control) {
        throw { ok: false, mensaje: "La información del Control del Retiro de Leche es obligatoria" };
    } else if (!control.id) {
        throw { ok: false, mensaje: "El Id es obligatorio" };
    } else if (!control.tipo) {
        throw { ok: false, mensaje: "La Tipo de Bovino es obligatorio" };
    } else if (!control.nombreBovino) {
        throw { ok: false, mensaje: "El Nombre del Bovino es obligatorio" };
    } 
};

let consultarBovino = async () => {
    let _servicio = new ServicioPG();
    let sql = `SELECT id, "nombreBovino" FROM public."Bovinos"`;
    let respuesta = await _servicio.ejecutarSql(sql);
    return respuesta;
};

let insertarBovino = async (control) => {
    let _servicio = new ServicioPG();
    let sql = `INSERT INTO public."Bovinos"(
        id, tipo, "nombreBovino")
       VALUES (
           '${control.id}',
           '${control.tipo}',
           '${control.nombreBovino}');`;
    let respuesta = await _servicio.ejecutarSql(sql);
    return respuesta;
};


module.exports = { validar, insertarBovino, consultarBovino }