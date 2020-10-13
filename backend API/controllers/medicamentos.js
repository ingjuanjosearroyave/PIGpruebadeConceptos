const ServicioPG = require("../services/postgress");

let validar = control => {
    if (!control) {
        throw { ok: false, mensaje: "La información del Control del Retiro de Leche es obligatoria" };
    } else if (!control.codigo) {
        throw { ok: false, mensaje: "El Id es obligatorio" };
    } else if (!control.nombreMedicamento) {
        throw { ok: false, mensaje: "eL Nombre del medicamento es obligatorio" };
    } else if (!control.descripcion) {
        throw { ok: false, mensaje: "La descripcion es obligatoria" };
    }  else if (!control.horasRetiroLeche) {
        throw { ok: false, mensaje: "Las horas de retiro son necesarias es obligatorio" };
    } 
};

let consultarMedicamento = async () => {
    let _servicio = new ServicioPG();
    let sql = `SELECT codigo, "nombreMedicamento", "horasRetiroLeche" FROM public.medicamentos;`;
    let respuesta = await _servicio.ejecutarSql(sql);
    return respuesta;
};

let insertarMedicamento = async (control) => {
    let _servicio = new ServicioPG();
    let sql = `INSERT INTO public.medicamentos(
        codigo, "nombreMedicamento", descripcion, "horasRetiroLeche" )
       VALUES (
           '${control.codigo}',
           '${control.nombreMedicamento}',
           '${control.descripcion}',
           '${control.horasRetiroLeche}');`;
    let respuesta = await _servicio.ejecutarSql(sql);
    return respuesta;
};


module.exports = { validar, insertarMedicamento, consultarMedicamento }