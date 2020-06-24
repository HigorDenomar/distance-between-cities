const fitness = require('./fitness');

module.exports = function mutation(individual, percents) {
  let rand = Math.floor(Math.random() * 101);

  if (rand <= percents) {
    let index = [];

    while(index.length < 2) {
      let rand = Math.floor(Math.random() * 10);
      if(index.indexOf(rand) == -1) index.push(rand);
    }

    let aux = individual[index[0]];
    individual[index[0]] = individual[index[1]];
    individual[index[1]] = aux;
  }

  let apt = fitness(individual);
  return apt;
}