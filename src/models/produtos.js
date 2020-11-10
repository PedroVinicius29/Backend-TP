// Define que estamos utilizando o sequelize
const Sequelize = require('sequelize');

// Obtem dados de conexão entre sequelize e banco de dados MySQL
const sequelize = require('../database/database.js');

// Cria tabela no BD e seus campos
const Produtos = sequelize.define("produtos", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    nome: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [3, 100]
        }
    },
    precoCusto: {
        allowNull: false,
        type: Sequelize.DOUBLE(),
        validate: {
            len: [1, 999999]
        }
    },
    precoVenda: {
        allowNull: false,
        type: Sequelize.DOUBLE(),
        validate: {
            len: [1, 999999]
    } 
},
    qtdEstoque: {
        allowNull: false,
        type: Sequelize.INTEGER(),
    }
});

module.exports = Produtos;
