const fitness = require('./fitness');

module.exports = function createRandomGeneration(size = 15, individualSize = 10) {
  let generation = [];

  for (let i = 0; i < size; i++) {
    let individual = [];

    while (individual.length < individualSize) {
      let rand = Math.floor(Math.random() * 10)
      if (individual.indexOf(rand) == -1)
        individual.push(rand)
    }

    let distance = fitness(individual); // envia o indivíduo pra função de aptidão (fitness) e returna a sua distancia;
    individual.push({total: distance})
    generation.push(individual);
  }

  return generation;
}