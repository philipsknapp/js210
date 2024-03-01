/*
Create a function that computes the Greatest Common Divisor of two positive integers.
- ceiling is the smaller number
- can we recurse this somewhat?
  - if we find a divisor, divide both values by the divisor and repeat the process.
    - return the product of all divisors
  - if not, return 1

- to find a divisor, start at 2 and iterate to the ceiling, checking for divisibility
*/

function gcd(num1, num2) {
  let ceiling = Math.min(num1, num2)
  let denominator = 1
  for (let divisor = 2; divisor <= ceiling; divisor++) {
    if (num1 % divisor === 0 && num2 % divisor === 0) {
      denominator = divisor;
      break;
    }
  }
  if (denominator === 1) {
    return 1;
  } else {
    return denominator * gcd((num1 / denominator), (num2 / denominator))
  }
}

console.log(gcd(12, 4))
console.log(gcd(10, 5))
console.log(gcd(9, 2))
console.log(gcd(109, 6))
console.log(gcd(100, 80))