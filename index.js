const readline = require('readline-sync');

const createRadomGeneration = require('./src/generations/createRandomGeneration');
const selection = require('./src/selection');
const crossover = require('./src/generations/crossover');
const mutation = require('./src/generations/mutation');

// interação com o usuário no terminal


let populationSize = readline.questionInt('\n\nQual o tamanho da populacao? ', {
  limitMessage: '\n"$<lastInput>" nao e um valor valido, \npor favor, insira um numero inteiro.\n\n'
});

numberOfPopulations = readline.questionInt('\n\nQuantas geracoes? ', {
  limitMessage: '\n"$<lastInput>" nao e um valor valido, \npor favor, insira um numero inteiro.\n\n'
});

let count = 2;

var a = readline,
  MAX = 100, MIN = 0, percents = 0, key;
console.log('\n\n' + (new Array(20)).join(' ') +
  '[Z] <- -> [X]  FIX: [SPACE]\n');
while (true) {
  console.log('\x1B[1A\x1B[K|' +
    (new Array(percents + 1)).join('-') + 'O' +
    (new Array(MAX - percents + 1)).join('-') + '| ' + percents + '%');
  key = readline.keyIn('',
    {hideEchoBack: true, mask: '', limit: 'zx '});
  if (key === 'z') { if (percents > MIN) { percents--; } }
  else if (key === 'x') { if (percents < MAX) { percents++; } }
  else { break; }
}

console.log('\nAs gerações terão ' + percents + '% de mutação');


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
  
  while (generation.length < populationSize) {
    selected = selection.tournament(population);
   // console.log(selected);

    // realiza a reprodução dos individuos selecionados e retorna seus filhos
   // console.log('\n\nFilho')
    let children = crossover(selected);
  //  console.log(children);
    let mutated = mutation(children, percents);
    generation.push(mutated);
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