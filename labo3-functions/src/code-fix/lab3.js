// TODO: Fix the errors in the functions below!

const functions = {
  // Computes the total order of a command
  // Rule: if total order is > 1000 the shipping is free
  orderTotal(order) {
    // const totalNormalItems = order.items...;
    // const shippingItem = order.items...;
    // const shipping = ...;
    let normalTotal = order.items
      .filter((item) => item.quantity > 0)
      .reduce((acc, item) => acc + item.price * item.quantity, 0);

    if (normalTotal <= 1000) {
      const tax = order.items.find((item) => item.name === 'Tax');

      if (tax && tax.shipping) {
        normalTotal += tax.price;
      }
    }

    return normalTotal;
  },

  addPositiveNumbers(array) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
    return array.reduce((acc, n) => acc + Math.max(0, +n), 0);
  },

  // Takes a string, find the first consecutively repeating character in it and return the last index of the repeated character. If there are no repeating characters, return -1. This function should ignore any spaces and should be case insensitive - treat 'a' as eqivalent to 'A'
  repeatingCharacter(string) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
    const formattedString = string.replace(/\s/g, "").toUpperCase();
    const charMap = new Map();
  
    for (let i = 0; i < formattedString.length; i++) {
      const char = formattedString[i];
  
      if (charMap.has(char)) {
        return i;
      } else {
        charMap.set(char, true);
      }
    }
  
    return -1;
  },

  // Takes an array of 1's and 0's, find the maximum number of consecutive 1's
  // in this array. If there is any value other than 1 or 0 in the array,
  // this is an error, return -1. The 1's and 0's may be either string or
  // integer values, both are acceptable and should be considered equivalent
  maxOneNumber(array) {
    let maxCount = -1;
    let currentCount = 0;
  
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
  
      if (element === '1' || element === 1) {
        currentCount++;
        maxCount = Math.max(maxCount, currentCount);
      } else if (element !== '0' && element !== 0) {
        return -1;
      } else {
        currentCount = 0;
      }
    }
  
    return maxCount;
  }
};

module.exports = functions;
