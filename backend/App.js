const express = require('express');
const newsRoute = require('./routes/newsRoute');
const path = require('path');

const app = express();

app.use(express.json());

app.use("/api/v1", newsRoute);

app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
})

module.exports = app;