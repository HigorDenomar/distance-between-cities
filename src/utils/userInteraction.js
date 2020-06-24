const readline = require('readline-sync');

module.exports = {
  question(message) {
    let value = readline.questionInt(`\n\n${message} `, {
      limitMessage: '\n"$<lastInput>" nao e um valor valido, \npor favor, insira um numero inteiro.\n\n'
    });

    return value;
  },

  percentage() {
    var value = readline,
      MAX = 5, MIN = 0, percents = 0, key;
    console.log('\n\nQual a porcentagem de mutação da sua geração?  (use [Z] e [X] para aumentar/diminuir e [ESPAÇO] para selecionar)\n\n');
    while (true) {
      console.log('\x1B[1A\x1B[K|' +
        (new Array(percents + 1)).join('-') + 'O' +
        (new Array(MAX - percents + 1)).join('-') + '| ' + percents + '%');
      key = readline.keyIn('',
        { hideEchoBack: true, mask: '', limit: 'zx ' });
      if (key === 'z') { if (percents > MIN) { percents--; } }
      else if (key === 'x') { if (percents < MAX) { percents++; } }
      else { break; }
    }

    return value;
  },

  confirmation() {
    let yesOrNo = readline.keyInYN('\n\nQuer pausar a cada geracao? ');

    return yesOrNo;
  },

  stop() {
    console.log('\n');
    readline.keyInPause('Pressione qualquer tecla para continuar...');
  }
}