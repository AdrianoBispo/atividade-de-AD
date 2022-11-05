// Primeiro, criamos uma "arrow function" assíncrona com parametro vazio

(async () => {
    // Importação dos arquivos criados
    const database = require('./db');
    const produto = require('./produto');

    // Função assíncrona que integra o banco
    await database.sync();

    // Função que cria uma tabela
    await produto.create(
        {
            // Valores da tabela
            
            Nome: "Primeiro Teste",
            DataCriacao: Date()
        }
    )

    await produto.create(
        {
            Nome: "Segundo Teste",
            DataCriacao: Date()
        }
    )
    await produto.create(
        {
            Nome: "Terceiro Teste",
            DataCriacao: Date()
        }
    )

    // Função que altera a tabela
    const alterProd = await produto.findByPk(2); // Seleciona a tabela 
    alterProd.Nome = "Arquivo 2 Alterado"; // Alterando
    await alterProd.save(); // Salvando alteração

    produto.destroy({ where: { id: 1 } }); // Excluindo Primeira tabela 

    const findProd = await produto.findByPk(3); // Seleciona a terceira tabela
    console.log(findProd); // Mostra o valor dela no DevTools

    const findAllProd = await produto.findAll(); // Seleciona todas as tabelas
    console.log(findAllProd); // Mostra os valores de todas as tabelas

})();