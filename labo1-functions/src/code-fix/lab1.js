// TODO: Fix the errors in the functions below!

const functions = {
  sum(a, b) {
    // Todo use typeof and throw
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw    
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Not a number');
    }

    return a + b;
  },

  doubleNumbersInArray: function doubleNumbersInArray(array) {
    // Todo: use Array/map
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    const double = function (elt) {
      return elt * 2;
    };

    return array.map(double);
  },

  checkForBadWords(input) {
    // Todo: use Array/forEach and throw
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    let grosMot = ['merde'];

    grosMot.forEach((elt) => {
      if (input.includes(elt)) {
        throw new Error('Bad word');
      }
    });
  },

  nameOfWeekDay(index) {
    const jours = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return jours[index];
  },

  sortNumbers(array) {
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

    return array.sort((a, b) => a - b);
  },

  createCounterFunction(input) {
    return () => {
      return input += 1;
    };
  },

  createHelloMessage(name) {
    // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
    return `Hello ${name}. Are you well?`;
  },

  callTheCallback(callback) {
    // Docs: https://developer.mozilla.org/en-US/docs/Glossary/Callback_function pas ;cc ENZO <3
    return callback(1, 2);
  },

  combineArrays(array1, array2) {
    return array1.concat(array2);
  },

  promiseMeMoney() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('send message');
      }, 1000);
    });
  },
};

module.exports = functions;
