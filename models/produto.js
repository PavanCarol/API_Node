module.exports = (sequelize, DataTypes) => {
  const Produto = sequelize.define(
    {
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      foto: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      descricao: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      preco: {
        type: DataTypes.INT,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      tableName: "produtos",
      timestamps: true,
      createdAt: "dataCriacao",
      updatedAt: "dataAtualizacao",
      version: "versao",
    }
  );
  return Produto;
};
