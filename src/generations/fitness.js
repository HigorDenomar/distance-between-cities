
const distances = [
  [1],
  [42, 1],
  [2, 9, 1],
  [4, 11, 23, 1],
  [7, 190, 10, 5, 1],
  [5, 83, 3, 46, 6, 1],
  [6, 1, 200, 22, 120, 5, 75],
  [9, 2, 155, 6, 27, 3, 78, 1],
  [3, 280, 3, 51, 30, 6, 30, 8, 1],
  [8, 40, 21, 4, 1, 6, 7, 110, 9, 234]
];

module.exports = function fitness(individual) {
  let distance = [];

  individual.forEach((a, b, c) => {
    let next = c[b+1]
    if(next) {
      distance.push(sumDistance(a, next));
    }
  });

  let totalDistance = distance.reduce((cityA, cityB) => cityA + cityB);

  return [individual, totalDistance];
}


function sumDistance(a, b) { // soma a distância entre duas cidades
  let aux = [a, b].sort().reverse();

  return distances[aux[0]][aux[1]];
}