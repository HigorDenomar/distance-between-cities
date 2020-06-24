const fitness = require('./fitness');

module.exports = function createRandomGeneration(size = 15, individualSize = 10) {
  let generation = [];

  for (let i = 0; i < size; i++) {
    let individual = [];

    while (individual.length < individualSize) {
      let rand = Math.floor(Math.random() * 10)
      if (individual.indexOf(rand) == -1) individual.push(rand);
    }

    let apt = fitness(individual); // envia o indivíduo pra função de aptidão (fitness) e retorna a sua distância;

    let verify = generation.map(ind => {
      if(ind.toString() === individual.toString()) {
        return true;
      } else return false;
    });

    if(verify.indexOf(true) === -1) generation.push(apt);
  }

  return generation;
}