const Sequelize = require('sequelize'); // Importação da biblioteca

const database = require('./db'); // Importação do arquivo "db.js"

// Criando o banco de dados
const Produto = database.define('nome-do-banco',
    {
        // Passando os valores para o banco

        Id:
        {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        Nome:
        {
            type: Sequelize.STRING,
            allowNull: false,
        },
        DataCriacao:
        {
            type: Sequelize.DATE,
            allowNull: false,
        }
    }
)

module.exports = Produto;
