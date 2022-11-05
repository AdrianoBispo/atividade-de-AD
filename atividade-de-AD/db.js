//Conectando o banco de dados
const Sequelize = require('sequelize'); // Importação da biblioteca

const componenteSequelize = new Sequelize('nome-do-banco','nome-de-usuario','senha',
{
    dialect:'mysql', // mysql é o tipo de banco utilizado.
    
    host:'localhost' // é o local onde nosso banco está.
});

module.exports = componenteSequelize; // Para importação