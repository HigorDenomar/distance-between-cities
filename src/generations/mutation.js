const fitness = require('./fitness');

module.exports = function mutation(individual, percents) {
  let rand = Math.floor(Math.random() * 100 + 1);

  if (rand <= percents) {
    let index = [];

    for (let i = 0; i < 2; i++) {
      let rand = Math.floor(Math.random() * 10);
      index.push(rand);
    }

    let aux = individual[index[0]];
    individual[index[0]] = individual[index[1]];
    individual[index[1]] = aux;
  }

  let apt = fitness(individual);
  return apt;
}