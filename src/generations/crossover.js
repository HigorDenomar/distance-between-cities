const fitness = require('./fitness')

module.exports = function crossover(parents) {
  let [dad, mom] = parents;
  
  let son1 = dad.slice([0],[3]);
  
  // testes
  let aux = mom.slice([3], [6]);
  aux.map(a => son1.push(a));
  
  aux = dad.slice([6],[10]);
  aux.map(a => son1.push(a));

  
  let apt = fitness(son1); 

  return apt;
}