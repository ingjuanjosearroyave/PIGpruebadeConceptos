//Importar express
const express = require("express");
const cors = require("cors");
//Inicializar librerÃ­a
const app = express();
app.use(express.json());
app.use(cors());

//Endpoint
app.get("/", (req, res) => {
  res.send("PIG (Plataforma de Gestión Ganadera)");
});

const vs = "/api/v1/";

const ruta_controlRetiro = require("./routes/controlRetiro");
app.use(vs,ruta_controlRetiro);

const ruta_bovinos = require("./routes/bovinos");
app.use(vs,ruta_bovinos);

const ruta_medicamentos = require("./routes/medicamentos");
app.use(vs,ruta_medicamentos);

//Puerto
const port = process.env.PORT || 3001;


//Levantamiento
app.listen(port, () => {
  console.log(`Escuchando API en http://localhost:${port}`);
});
