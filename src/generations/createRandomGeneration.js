const fitness = require('./fitness');

module.exports = function createRandomGeneration(size = 15, individualSize = 10) {
  let generation = [];

  for (let i = 0; i < size; i++) {
    let individual = [];
    let verifify = [];

    while (individual.length < individualSize) {
      let rand = Math.floor(Math.random() * 10)
      if (individual.indexOf(rand) == -1)
        individual.push(rand)
    }

    let distance = fitness(individual); // envia o indivíduo pra função de aptidão (fitness) e returna a sua distancia;
    
    individual.push({total: distance});

    verify = generation.map(ind => {
      if(ind.toString() === individual.toString()) {
        return true;
      } else return false;
    });

    if(verify.indexOf(true) === -1) generation.push(individual);
  }

  return generation;
}