'use strict'

const getStrFunc = function(str) {
    if (typeof str !== 'string') {
      console.log('аргумент не строка');
      return;
    }
  
    str = str.trim(); 
    return str.length > 30 ? str.slice(0, 30) + '...' : str;
};

console.log(getStrFunc(' hello wooooooooooooooooooooooorld! '));