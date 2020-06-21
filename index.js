const readline = require('readline-sync');

const createRadomGeneration = require('./src/generations/createRandomGeneration');
const selection = require('./src/selection');
const crossover = require('./src/generations/crossover');

// interação com o usuário no terminal
const chooseSelection = readline.keyInSelect(['Torneio', 'Roleta'], 'Qual tipo de selecao? ');

let populationSize;
if (chooseSelection != -1) {
  populationSize = readline.questionInt('\n\nQual o tamanho da populacao? ', {
    limitMessage: '\n"$<lastInput>" nao e um valor valido, \npor favor, insira um numero inteiro.\n\n'
  });
} else {
  console.log('\n');
  return;
}

numberOfPopulations = readline.questionInt('\n\nQuantas geracoes? ', {
  limitMessage: '\n"$<lastInput>" nao e um valor valido, \npor favor, insira um numero inteiro.\n\n'
});

let count = 2;

// cria a geração inicial
console.log('\n1ª geração:')
const initialGeneration = createRadomGeneration(populationSize);
printGeneration(initialGeneration); // mostra a geração no terminal

// loop pra criar as proximas gerações
console.log('\n');
readline.keyInPause();
// for (let count = 1; count < numberOfPopulations; count++) {

function main(population) {
  let generation = [];
  let selected;
  
  // verifica qual tipo de seleção foi escolhida pelo usuário
  if (chooseSelection === 0) {
    while (generation.length < populationSize) {
      selected = selection.tournament(population);

      // realiza a reprodução dos individuos selecionados e retorna seus filhos
      let children = crossover(selected);
      generation.push(children);
    }

  } else if (chooseSelection === 1) {
    while (generation.length < populationSize) {
      selected = selection.roulette(population);
      
      // realiza a reprodução dos individuos selecionados e retorna seus filhos
      let children = crossover(selected);
      generation.push(children);
    }
  }

  console.log(`\n${count}ª geração:`);
  printGeneration(generation);
  //console.log(generation);

  console.log('\n');
  readline.keyInPause();

  if(count < numberOfPopulations) {
    count++;
    main(generation);
  } else {
    console.log('\nCabô!\n');
  }

}

main(initialGeneration);

// aux dev functions
function printGeneration(generation) {
  generation.forEach((ind, i) => {
    printFormatedIndividual(i, ind)
  });
}

function printFormatedIndividual(i, individual) {
  console.log(`Indivíduo ${i + 1}: ${individual[0].slice().join(', ')}   Distância: ${individual[1]}`);
}