const express = require("express");
const bodyParser = require("body-parser");
const  Sequelize  = require("sequelize");
const config = require("./config");
const produto = require("./models/produto");

const app = express();
const port = 80;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const banco = new Sequelize( config.development);

const Produto = banco.define("./models/produto.js");

banco.sync().then(() => {
  console.log("Tá na mão chefe");
});

app.get("/produto", async (req, res) => {
  const produtos = await Produto.findAll();
  res.json(produtos);
});

app.post("/produto", async (req, res) => {
  const { nome, foto, descricao, preco } = req.body;
  const produtos = await produto.create( {
    nome,
    foto,
    descricao,
    preco,
  });
  res.json(produtos);
});

app.put("/produto", async (req, res) => {
  const { id } = req.params;
  const { nome, foto, descricao, preco } = req.body;

  await Produto.update({ nome, foto, descricao, preco }, { where: { id } });
  const produto = await Produto.findByPk(id);

  res.json(produto);
});

app.delete("/produto", async (req, res) => {
  const { id } = req.params;

  await Produto.destroy({ where: { id } });
  res.json({ message: "Produto foi de base!" });
});

//Iniciar o server
app.listen(port, () => {
  console.log(`Server tá indo chefe ${port}`);
});
