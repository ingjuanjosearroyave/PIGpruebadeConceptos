const ServicioPG = require("../services/postgress");

let validar = control => {
    if (!control) {
        throw { ok: false, mensaje: "La información del Control del Retiro de Leche es obligatoria" };
    } else if (!control.codigo) {
        throw { ok: false, mensaje: "El Codigo  es obligatorio" };
    } else if (!control.fechaIngreso) {
        throw { ok: false, mensaje: "La Fecha de Ingreso es obligatorio" };
    } else if (!control.numeroOrdeñosaDescartar) {
        throw { ok: false, mensaje: "La Numero Ordeños A Descartar es obligatorio" };
    } else if (!control.fechaSalida) {
        throw { ok: false, mensaje: "El Fecha de Salida es obligatoria" };
    } else if (!control.observaciones) {
        throw { ok: false, mensaje: "Las Observación es obligatoria" };
    } else if (!control.bovino) {
        throw { ok: false, mensaje: "El Bovino es obligatorio" };
    } else if (!control.medicamento) {
        throw { ok: false, mensaje: "El medicamento es obligatoria" };
    }
    else if (!control.horaIngreso) {
        throw { ok: false, mensaje: "La Hora de Ingreso es obligatoria" };
    }
};

let insertarControlRetiro = async (control) => {
    let _servicio = new ServicioPG();
    let sql = `INSERT INTO public."control_Retiro_Leche" (
        codigo, "fechaIngreso", "numeroOrdenosaDescartar", "fechaSalida", observaciones, bovino, medicamento, "horaIngreso")
       VALUES (
           '${control.codigo}',
           '${control.fechaIngreso}',
           '${control.numeroOrdeñosaDescartar}',
           '${control.fechaSalida}',
           '${control.observaciones}',
           '${control.bovino}',
           '${control.medicamento}',
           '${control.horaIngreso}');`;
    let respuesta = await _servicio.ejecutarSql(sql);
    return respuesta;
};

let consultarControlRetiro = async () => {
    let _servicio = new ServicioPG();
    let sql = `SELECT "control_Retiro_Leche".codigo, "control_Retiro_Leche"."fechaIngreso", "control_Retiro_Leche"."numeroOrdenosaDescartar", "control_Retiro_Leche"."fechaSalida", "control_Retiro_Leche".observaciones, "medicamentos"."nombreMedicamento", "Bovinos"."nombreBovino", "medicamentos"."horasRetiroLeche", "control_Retiro_Leche"."horaIngreso"
	FROM public."control_Retiro_Leche"
	INNER JOIN medicamentos ON "control_Retiro_Leche".medicamento = "medicamentos".codigo
	INNER JOIN "Bovinos" ON "control_Retiro_Leche".bovino = "Bovinos".id;`;
    let respuesta = await _servicio.ejecutarSql(sql);
    return respuesta;
};


module.exports = { validar, insertarControlRetiro, consultarControlRetiro }