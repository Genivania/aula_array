/******************************************************************
 * Objetivo: Trabalhando com ARRAY
 * Data: 24/02/2023
 * Autor: Genivania
 * Versão: 1.0
 *****************************************************************/


//[ ] - significa que estamos manipulando um array de dados
//{ } - significa que estamos manipulando um formato JSON de dados

//typeof serve para ver o tipo de dados desse elemento
const listaNomes = ['José', 'Maria', 'Carol', 'Leo', 'Zé'];
const listaProdutos = ['Teclado', 'Mouse', 'Monitor', 'Computador', 'Fone', 'Impressora', 'Scanner', 'WebCam'];
const listaProdutosJSON = {};  //manipulando um json e nao um array 
const listProdutosJSON = {};

/**
 * Exemplo de um JSON com strutura de array

    produtos = {
                [
                    {nome : "Teclado", cor : "Preto", qunatidade : 50}
                    {nome : "Monitor", cor : "Branco", qunatidade : 30}
                    {nome : "Mouse", cor : "Branco", qunatidade : 200}
                ]
    }
 */


const manipulandoElementos = function () {

    //Forma ERRADA de manipular um conjunto de dados
    // const nome1 = 'José'
    // const nome2 = 'Maria'
    // const nome3 = 'carol'
    // const nome4 = 'Leo'

    //verifica o tipo de dados da listaNome
    //console.log(typeof(listaNomes));

    //Verifica o tipo de dados de um indice (item) do array
    console.log(typeof (listaNomes[1]));

    //Exibe todos os elementos do array
    console.log(listaNomes);

    //Exibe apenas um elemento conforme o seu indice 
    console.log(listaNomes[0]);

    console.log('o nome do usuário é ' + listaNomes[0]);
    console.log(`O nome do usuário é ${listaNomes[3]}`);

    //length - permite contar quantos elementos tem em um array
    console.log(`A quantidade do meu array é: ${listaNomes.length}`);

    //Percorrendo um array usando while
    let cont = 0; //start
    let qtdItens = listaNomes.length; //stop


    console.log('---------------------------------------------')
    console.log('Exibindo dados do ARRAY com While:')
    while (cont <= qtdItens) {
        console.log(`Nome: ${listaNomes[cont]}`);
        cont += 1;
    }

    //Percorrendo um array com o for
    console.log('\n---------------------------------------------')
    console.log('Exibindo dados do ARRAY com o FOR:')
    let qtdNomes = listaNomes.length; //stop

    for (let cont = 0; cont < qtdItens; cont++)
        console.log(`Nome: ${listaNomes[cont]}`);

    //Percorrendo um array com o FOREACH
    console.log('\n---------------------------------------------')
    console.log('Exibindo dados do ARRAY com o FOREACH:')

    //forEach é um metodo de um objeto array, que retorna uma função de call back
    listaNomes.forEach(function (nomes) {
        console.log(`Nome: ${nomes}`)
    });

    //Adicionando elementos novos no array
    //PUSH - Adicioa elementos no final do array
    console.log('\n----------------PUSH----------------------')
    listaNomes.push('Melque');
    listaNomes.push('Geni', 'Lucas');
    console.log(listaNomes);

    //unshift - adicionar elementos no inicio do array (ele muda a posição
    // de todos os proximos elementos )
    console.log('\n----------------UNSHIFT----------------------')
    listaNomes.unshift('Ana', 'Pedro');
    console.log(listaNomes);

    //Removendo elementos do Array
    //POP - remove o ultimo elemento do Array
    console.log('\n----------------POP------------------------')
    listaNomes.pop();
    console.log(listaNomes);

    //SHIFT - remove o primeiro elemento do array (reorganiza todos
    // os proximos elementos)
    console.log('\n-----------------SHIFT---------------------')
    listaNomes.shift();
    console.log(listaNomes);
};

const filtrandoElementos = function () {

    //indexOf - permite buscar elementos dentro de um array  
    console.log('\n-------------LISTA DE PRODUTOS------------------')
    console.log(listaProdutos);
    //console.log(listaProdutos.indexOf('Fone de ouvido'));

    if (listaProdutos.indexOf('Monitor') >= 0)
        console.log('O item pesquisado foi encontrado.')
    else
        console.log('Item não encontrado.')

    //SLICE - permite criar uma cópia do array, podendo selecionar os itens
    //const novosProdutos = lista.slice();
    const novosProdutos = listaProdutos.slice(0, 3);
    console.log('\n-----------------Slice---------------------')
    console.log(listaProdutos);
    console.log(novosProdutos);

};

const removerElemento = function (array, nomeProdutos) {
    //Cria uma cópia do array
    let novaLista = array.slice();
    let nome = nomeProdutos;
    let indice = novaLista.indexOf(nome);
    let status;

    //splice - permite remover um elemento do array pelo indice
    if (indice >= 0) {
        novaLista.splice(indice, 1);
        status = true;
    } else {
        status = false;
    }

    if (status)
        return novaLista;
    else
        return status;

};


const listagemProdutos = function () {

    let listProdutos = [
        { nome: 'Teclado DELL', valor: 200, quantidade: 50 },
        { nome: 'Monitor DELL', valor: 1000, quantidade: 70 },
        { nome: 'Mouse DELL', valor: 100, quantidade: 350 },
    ];

    let listCores = ['Branco', 'Preto', 'Cinza'];
    let listTipoTeclado = ['Mecanico', 'Semi-Mecanico', 'Membrana'];
    let listTipoMonitor = ['LCD', 'Full-HD', '4K', 'OLED'];


    //Adiciona chaves (opções) no teclado;

    listProdutos[0].cores = listCores;
    listProdutos[0].tipo = listTipoTeclado;

    //Adiciona chaves (opções) no Monitor;

    listProdutos[1].cores = listCores;
    listProdutos[1].tipo = listTipoMonitor;

    //Adiciona chaves (opções) no Mouse;
    listProdutos[2].cores = listCores;

    //Adiciona uma chave produtos e coloca toda a estrutura dos produtos dentro dela
    listProdutosJSON.produtos = listProdutos;

    listaProdutosJSON.produtos = listaProdutos;
    listaProdutosJSON.clientes = listaNomes;

    console.log(listProdutosJSON);

    console.log('---------------------------------------------------------------------------------------------------\n')

    //RETORNA TODOS OS DADOS DE PRODUTO (1º nível do dados do JSON)
    listProdutosJSON.produtos.forEach(function(dadosProduto){
        console.log('Nome: ' + dadosProduto.nome);
        console.log('Valor: ' + dadosProduto.valor);
        
        //Validação para tratar quando não existe cores de produtos
        if(dadosProduto.cores != undefined){
        //RETORNA TODAS AS CORES EXISTENTES PARA CADA PRODUTO
        console.log('Cores: ');
        dadosProduto.cores.forEach(function(dadosCores){
            console.log('** ' + dadosCores );
        
        });
        }

        //Validação para tratar quando não existe tipos de produtos
        if(dadosProduto.tipo != undefined){
        //RETORNA OS TIPOS EXISTENTES DE CADA PRODUTO
        console.log('Tipos: ');
        dadosProduto.tipo.forEach(function(dadosTipo){
            console.log('**' + dadosTipo);
        });
        }
       
        console.log('------------------------\n')
    });


    // console.log('Nome: ' + listProdutosJSON.produtos[1].nome);
    // console.log('Valor: ' +listProdutosJSON.produtos[1].valor);
    // console.log('Cor: ' + listProdutosJSON.produtos[1].cores[1]);


    // console.log(listaProdutosJSON);
    //console.log(listaProdutosJSON.clientes[2]);
};

listagemProdutos();

// console.log(removerElemento(listaProdutos,'PC'));
//console.log(listaProdutos);










