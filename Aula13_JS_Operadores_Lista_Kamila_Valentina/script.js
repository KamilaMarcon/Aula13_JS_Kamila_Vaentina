//MAP
//percorre todo o array e executa a ação que tivermos programado

//ctrl k ctrl c comenta todos os itens selecionados

// let lista = ['Altamiro','Barnabé','Cremildo'];

// lista.map((nome,posicao)=>{console.log(`o nome é ${nome} e ele ocupa a posiçãõ ${posicao}`)});

//REDUCCE
//procura reduzir um arra, normalmente através de
// operações matemáticas, transformando todo o conteúdo 
//do array em um único valor

// let numeros = [2, 3, 5, 10]
// let total = numeros.reduce((acumulador, numero, indice, original) => {
//     console.log(`${acumulador} -total até agora`);
//     console.log(`${numero} Valor atual`);
//     console.log(`${indice} posição até agora`);
//     console.log(`${original} Array original`);

//     console.log('---------------------');
//     return acumulador += numero;
// });

// console.log(`total do reduce é ${total}`);

//FIND
//FAZ UMA BUSCA DENTRO DO ARRAY E DELVOLVE O PRIMEIRO ITEM QUE ENCOTRA QUE CORRESPONDE AO CRITERIO DE BUSCA

// let listagem = [2, 3, 'Kamila', 8, 'Valentina'];

// let busca = listagem.find((item2) => {
//     if (item2 == "Kamila") {
//         return console.log('nome encontrado')
//     } else {
//         return console.log('nome não encontrado')
//     };

// });

// console.log(busca);

//Filter
//filtra itens dentro do array

let palavras =[ 'alface', 'beterraba', 'cenoura', 'dedo'];
resultado = palavras.filter((palavra)=>{
    return palavra.length <=7;
})

console.log(resultado);