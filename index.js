const readline = require('readline-sync');

const createRadomGeneration = require('./src/generations/createRandomGeneration');
const selection = require('./src/selection');

// interação com o usuário no terminal
const chooseSelection = readline.keyInSelect(['Torneio', 'Roleta'], 'Qual tipo de selecao? ');

let populationSize;
if(chooseSelection != -1) {
  populationSize = readline.questionInt('\n\nQual o tamanho da populacao? ', {
    limitMessage: '\n"$<lastInput>" nao e um valor valido, \npor favor, insira um numero inteiro.\n\n'
  });
} else {
  console.log('\n');
  return;
}

// cria a geração inicial
const initialGeneration = createRadomGeneration(populationSize);
printGeneration(initialGeneration); // mostra a geração no terminal

// verifica qual tipo de seleção foi escolhida pelo usuário
let selected;
if(chooseSelection === 0) {
  selected = selection.tournament(initialGeneration);
} else if(chooseSelection === 1) {
  selected = selection.roulette(initialGeneration);
}

console.log(selected);




// aux dev functions
function printGeneration(generation) {
  console.log('\n');
  generation.forEach((ind, index) => {
    printFormatedIndividual(index, ind)
  });
}

function printFormatedIndividual(index, individual) {
  console.log(`Indivíduo ${index+1}: ${individual[0].slice().join(', ')}   Distância: ${individual[1]}`);
}