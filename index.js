const createRadomGeneration = require('./src/generations/createRandomGeneration');
const selection = require('./src/selection');
const crossover = require('./src/generations/crossover');
const mutation = require('./src/mutation');

const userInteraction = require('./src/utils/userInteraction');
const printGeneration = require('./src/utils/printGeneration');

// interação com o usuário no terminal
let populationSize = userInteraction.question('Qual o tamanho da populacao?');
let numberOfPopulations = userInteraction.question('Quantas geracoes?');
let percents = userInteraction.percentage();

const initialGeneration = createRadomGeneration(populationSize); // cria a geração inicial
printGeneration(initialGeneration, 1); // mostra a geração no terminal

userInteraction.stop(); // espera confirmação do usuário pra continuar

let count = 2;

function main(population) { // função pra criar as próximas gerações
  let generation = []; // nova geração

  while (generation.length < populationSize) {
    let selected = selection.tournament(population); // 2 indivíduos da população anterior
    console.log('\n\nPais:');
    console.log(selected);

    let children = crossover(selected); // reproduz os individuos selecionados
    console.log('\nFilho:');
    console.log(children);

    let mutated = mutation(children, percents); // realiza ou não a mutação do filho
    generation.push(mutated); // adiciona o filho na nova população (geração)
  }

  printGeneration(generation, count); // mostra a nova geração pro usuário
  userInteraction.stop(); // espera confirmação pra continuar

  if (count < numberOfPopulations) {
    count++;
    main(generation); // se ainda não chegou no número de gerações escolhido pelo usuário, a função é chamada novamente passando a geração atual
  } else {
    console.log('\nFIM.\n');
  }
}

main(initialGeneration);