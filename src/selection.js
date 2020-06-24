
module.exports = {
  tournament(generation, numberOfFighters, size = 2, k = 75) {
    let selected = [];

    for(let i = 0; i < size; i++) {
      let ind = [];
      
      while(ind.length < numberOfFighters) {
        let sort = generation[Math.floor(Math.random() * generation.length)];
        if(ind.indexOf(sort) == -1) ind.push(sort);
      }

      let winner;
      ind.forEach((a, b) => {
        if(winner) {
          if(a[1] < winner[1]) winner = a;
        } else {
          winner = a;
        }
      });

      selected.push(winner[0]);

      /*
      let r = Math.floor(Math.random() * 101);

      if(r<k) {
        selected.push(ind[0][0]);
      } else {
        selected.push(ind[1][0]);
      }*/
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
          selected.push(ind[0]);
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