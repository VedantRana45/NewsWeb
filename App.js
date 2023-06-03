const express = require('express');
const newsRoute = require('./routes/newsRoute');

const app = express();

app.use(express.json());

app.use("/api/v1", newsRoute);

module.exports = app;