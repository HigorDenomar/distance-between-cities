/*

// [  [ 4, 2, 0, 6, 3, 5, 1, 8, 7],
//   [ 5, 1, 8, 6, 0, 3, 7, 2, 4] ]


// Retorna um array de tres numeros aleatórios e únicos

function selectRandom(n) {
  let res = [];

  while (res.length < n) {
    let rand = Math.floor(Math.random() * 9 + 0)
    if (res.indexOf(rand) == -1) {
      res.push(rand)
    }
  }

  return res

};


// retorna metade os genes de um individuo

function fatherGens(res, individual) {
  let child = [];

  for (let i = 0; i < 9; i++) {
    if (res.indexOf(i) > -1) {
      child.push(individual[i])
    } else {
      child.push(NaN)
    }
  }

  return child
}


// Retorna a localização dos genes do pai na cadeia de dna da mae

function motherGens(father, mother) {

  let result = []
  mother.forEach((e, i, a) => {
    if (father.indexOf(father[i]) > -1) {
      result.push(i)
    }
  });

  return result
}


// Geração de novo individuo

module.exports = function crossover(father, mother) {

  let aux = [];

  mother.forEach((e, i, a) => {
    if (father.indexOf(e) > -1) {
      aux.push(NaN)
    } else {
      aux.push(e)
    }
  });

  let res = []


  for (let i = 0; i <= 9; i++) {
    if (!isNaN(father[i])) {
      res.push(father[i])
    }
    if (!isNaN(aux[i])) {
      res.push(aux[i])
    }
  }

  return res;
}

*/


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




/*
module.exports = function crossover(parents) {
  let [dad, mom] = parents;

  let [selected, index] = selectGenes(dad);

  let marked = markParents(dad, mom, selected);

  let son = JoinGenes(marked, index);

  return son;
}


function Rand(size) {
  let rand = Math.floor(Math.random() * size);
  return rand;
}

function selectGenes(dad) {
  let index = [];
  // selectiona quantos genes do pai vai se manter iguais
  let randG = Rand(4) + 2;
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
      // mom.splice(dad.indexOf(gene.indexOf(ind)), 1);
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
      son[index] = gene
    } else {
      son[index] = 'f';
    }
  });

  // embaralha os genes do pai
  for (let i = 0; i < dad.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [dad[i], dad[j]] = [dad[j], dad[i]];
  }

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

*/