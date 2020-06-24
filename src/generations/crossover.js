function selectGenes(dad) {
  let index = [];

  // selectiona quantos genes do pai vai se manter iguais
  let randG = Math.floor(Math.random() * 4 + 2);
  while (index.length < randG) {
    let rand = Math.floor(Math.random() * 10);
    if (index.indexOf(rand) == -1) index.push(rand);
  }

  let selected = [];
  index.forEach((ind, incr) => {
    selected.push(dad[ind])
  });

  return [selected, index];
}

function markParents(dad, mom, selected) {
  let gene = selected;
  // marca a mãe
  mom.forEach((ind, incr) => {
    if (gene.indexOf(ind) === -1) {
      mom[incr] = 'f';
    }
  });

  // marca o pai
  dad.forEach((ind, incr) => {
    if (gene.indexOf(ind) !== -1) {
      dad[incr] = 'f';
    }
  });


  return [dad, mom];
}

function JoinGenes(marked, position) {
  let [dad, mom] = marked;
  let son = [];

  mom.forEach((gene, index) => {
    if (gene !== 'f') {
      son[index] = gene;
    } else {
      son[index] = 'f';
    }
  });

  /* embaralha os genes do pai
  for (let i = 0; i < dad.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [dad[i], dad[j]] = [dad[j], dad[i]];
  }
  */

  dad.forEach((gene, index) => {
    if (gene !== 'f') {
      for (let i = 0; i < son.length; i++) {
        if (son[i] === 'f') {
          son[i] = gene;
          break;
        }
      }
    }
  });

  return son;
}

module.exports = function crossover(parents) {
  let [dad, mom] = parents;
  let [selected, index] = selectGenes(dad);
  let marked = markParents(dad, mom, selected);
  let son = JoinGenes(marked, index);

  return son;
}



/*
// reprodução de dois cortes:
module.exports = function crossover(parents) {
  let [dad, mom] = parents;

  let son = dad.slice([0], [3]);


  let aux = mom.slice([3], [6]);
  aux.map(a => son.push(a));

  aux = dad.slice([6], [10]);
  aux.map(a => son.push(a));

  return son;
}

*/