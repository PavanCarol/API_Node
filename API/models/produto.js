module.exports = (sequelize, DataTypes) => {
  const Produto = sequelize.define(
    "Peixe",
    {
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descricao: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      preco: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      tableName: "Peixe",
      timestamps: true,
      createdAt: "dataCeiacao",
      updateAt: "dataAtualizacao",
      version: "versao",
    }
  );
  return Peixe;
};
