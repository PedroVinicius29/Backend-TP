// Define que estamos utilizando o sequelize
const Sequelize = require('sequelize');

// Obtem dados de conexão entre sequelize e banco de dados MySQL
const sequelize = require('../database/database.js');


// Cria tabela no BD e seus campos
const Pedidos = sequelize.define("pedidos", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
  
    dataPedido: {
        allowNull: false,
        type: Sequelize.DATE(),
       
    }, 

    produtoPedido: { 

        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [3, 100]
        }

    }, 

    qtdPedido: { 

        allowNull: false,
        type: Sequelize.INTEGER(),

    },

    valorPedido: {
        allowNull: false,
        type: Sequelize.DOUBLE(),
        validate: {
            len: [1, 999999]
    } 
}, 

    cliente: { 

    allowNull: false,
    type: Sequelize.STRING(100),
    validate: {
        len: [3, 100]}


}
   
}); 


module.exports = Pedidos;
