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

const removerElemento = function(nomeProdutos){
    //Cria uma cópia do array
    let novaLista = listaProdutos.slice();
    let nome = nomeProdutos;
    let indice = novaLista.indexOf(nome);
    let status;

    //splice - permite remover um elemento do array pelo indice
    if(indice >= 0){
        novaLista.splice(indice, 1);
        status = true;
    }else{
        status = false;
    }
    
    if(status)
        return novaLista;
    else 
        return status;

};

console.log(removerElemento('Monitor'));
console.log(listaProdutos);










