module.exports = function printGeneration(generation, count) {
  console.log(`\n${count}ª geração:`);
  generation.forEach((ind, i) => {
    printFormatedIndividual(i, ind);
  });
}

function printFormatedIndividual(i, individual) {
  console.log(`Indivíduo ${i + 1}: ${individual[0].slice().join(', ')}   Distância: ${individual[1]}`);
}