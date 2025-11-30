const express = require('express');

const api = express();

const logger = require("morgan");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");


const contract = require("./swagger-word-api.json");

api.use("/api-docs", swaggerUi.serve, swaggerUi.setup(contract));

api.use(bodyParser.json({ limit: '5mb' }));
api.use(logger("dev"));



api.listen(process.env.API_PORT || 3000, () => {
    console.log(`API is running on port ${process.env.API_PORT || 3000}`);
});

const getApi = () => api;

exports.getApi = getApi;