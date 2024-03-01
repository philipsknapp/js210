/*
log every pair of primes that sum to the argument
if argument is odd or less than 4, return null
otherwise, for each value from 2 to half the number
  - check if prime
    - not divisible by any value between 2 and the sqrt of the number
    - if so, check if argument - num is prime
      - if so, log the pair
*/
function checkGoldbach(arg) {
  if (arg % 2 === 1 || arg < 4) {
    console.log(null);
    return;
  }

  function isPrime(arg){
    for (let factor = 2; factor <= Math.sqrt(arg); factor++) {
      if (arg % factor === 0) {
        return false;
      }
    }
    return true;
  };

  for (let current_val = 2; current_val <= arg / 2; current_val++) {
    if (isPrime(current_val) && isPrime(arg - current_val)) {
      console.log(`${current_val} ${arg - current_val}`);
    }
  }
}

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);