// Importando os módulos e pacotes:
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const middleApi = express();
const userRoute = require("../routes/userRoutes");

// Configuração do CORS autorizando a acesso do endereço especificado:
var corsOptions = {
  origin: "*", // Aqui está permitindo o acesso de todos ao endpoint.
  methods: "GET,PUT,POST,DELETE",
  optionsSuccessStatus: 204,
};

// Configurando os middlewares:
middleApi
  .use(morgan("dev"))
  .use(cors(corsOptions))
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use("/", userRoute);

// Configurando tratamento de erro de caminho:
middleApi.use((req, res, next) => {
  const err = new Error(`${req.url} server não encontrado.`);
  err.status = 404;
  next(err);
});
// Tratamento de outros erros:
middleApi.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message });
});
// export middleApi
module.exports = middleApi;
