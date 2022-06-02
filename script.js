'use strict'

const arr = ['152', '254', '386', '423', '571', '657', '235'];

arr.forEach((item) => {

    if (item.startsWith('2') || item.startsWith('4')) {
      console.log(item);
    }

});

function getPrimes(num) {
  let seive = [];
  let primes = [];

  for (let i = 2; i <= num; i++) {

    if (!seive[i]) {

      primes.push(i)

      for(let j = i * i; j <= num; j += i) {
        seive[j] = true
      }
    }
  }

  return primes.forEach((item) => {
    console.log(item + ' Делители этого числа: 1 и ' + item)
  })
}

getPrimes(100)