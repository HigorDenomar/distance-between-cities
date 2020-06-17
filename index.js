const readline = require('readline-sync');

const createRadomGeneration = require('./src/generations/createRandomGeneration');

const qnt = readline.questionInt('Qual o tamanho da populacao? ', {
  limitMessage: '\n"$<lastInput>" nao e um valor valido, \npor favor, insira um numero inteiro.\n\n'
});


console.log(createRadomGeneration(qnt));