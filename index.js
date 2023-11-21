const express = require("express");
const server = express();
const peixes = require("./src/data/peixes.json");

server.get("/peixes", (req, res) => {
  return res.json(peixes);
});

server.listen(3000, () => {
  console.group("Servidor está funcionando fi");
});
