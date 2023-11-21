const express = require("express");
const bodyParser = require("body-parser");
const { Sequelize } = require("sequelize");
const config = require("./config");

const app = express();
const port = 11550;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const banco = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: "mysql",
  }
);

const Produto = banco.define("./models/produto");

banco.sync().then(() => {
  console.log("Tá na mão chefe");
});

//Rotas
app.get("/produtos", async (req, res) => {
  const produtos = await Produto.findAll();
  res.json(produtos);
});

app.post("/produtos", async (req, res) => {
  const { nome, descricao, preco } = req.body;
  const produtos = {
    nome,
    descricao,
    preco,
  };
  res.json({ produtos, erro: false, message: "LOUCURA HAHAHA" });
});

app.put("/produtos/:id", async (req, res) => {
  const { id } = req.params;
  const { nome, descricao, preco } = req.body;

  await Produto.update({ nome, descricao, preco }, { where: { id } });
  const produto = await Produto.findByPk(id);

  res.json(produto);
});

app.delete("/produtos/:id", async (req, res) => {
  const { id } = req.params;

  await Produto.destroy({ where: { id } });
  res.json({ message: "Produto foi de base!" });
});

//Iniciar o server
app.listen(port, () => {
  console.log(`Server tá indo chefe ${port}`);
});