module.exports = function crossover(parents) {

/* reprodução sem ser de dois cortes
  let [dad, mom] = parents;
  console.log(dad)
  let son = [];
  let equals = [];
  
  dad.forEach((item, index) => {
    if(item === mom[index]) {
      equals.push(item);
      son[index] = item;
    } 
  })
  
  
  for(let i = 0; i < dad.length; i++) {
    if(equals.indexOf(dad[i]) != -1) {
      dad[i] = undefined;
    }
    const j = Math.floor(Math.random() * (i + 1));
    [dad[i], dad[j]] = [dad[j], dad[i]];
  }
  
  let i = 0;
  while(i < dad.length) {
    if(dad[i] == undefined) {
      i++;
    } else {
      
      son[i] = dad[i];
      
    }
    i++;
  }
  
 
  console.log(dad, mom);
  console.log('\n\n')
  
  return son;

*/
  

// reprodução de dois cortes:

  let [dad, mom] = parents;
  
  let son = dad.slice([0],[3]);
  
  // testes
  let aux = mom.slice([3], [6]);
  aux.map(a => son.push(a));
  
  aux = dad.slice([6],[10]);
  aux.map(a => son.push(a));

  return son;

}