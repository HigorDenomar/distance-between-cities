module.exports = function crossover(parents) {
  let [dad, mom] = parents;

  dad = dad.slice(0, (Math.floor(Math.random() * 6) + 2));

  let son = [];

  dad.forEach((a, b) => {
    son.push(a);
  });

  mom.forEach((a, b) => {
    if (son.indexOf(a) === -1) son.push(a);
  });

  return son;
}