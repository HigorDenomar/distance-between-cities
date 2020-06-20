
module.exports = {
  tournament(generation, size = 2, k = 0.75) {
    let selected = [];

    for(let i = 0; i < size; i++) {
      let ind1 = generation[Math.floor(Math.random() * generation.length)];
      let ind2 = generation[Math.floor(Math.random() * generation.length)];

      let aux = [ind1, ind2];

      let r = Math.floor(Math.random() * 2);

      if(r<k) {
        selected.push(aux[r]);
      } else {
        selected.push(aux[r]);
      }
    };

    return selected;
  },

  roulette(generation, size = 2) {
    let selected = [];

    let t = generation.map(individual => individual[1]).reduce((a, b) => a+b);

    for(let index = 0; index < size; index++) {
      let r = Math.floor(Math.random() * t);

      generation.forEach((ind, index) => {
        if(ind[1] >= r) {
          selected.push(ind);
        }
      });
    }

    if(selected.length != 2) {
      return this.roulette(generation);
    } else {
      return selected;
    }
  },
}