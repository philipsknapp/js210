/*
If either start or end is less than 0 or NaN, treat it as 0.
If either start or end is greater than the length of the string, treat it as equal to the string length.

Take these cases one at a time.
at baseline, just need to go from first to last index
*/

function substring(string, start, end) {
  let result = '';
  if (typeof end === 'undefined') {
    end = string.length;
  }

  function handleInputs(arg) {
    if (typeof arg !== 'number' || arg < 0) {
      arg = 0
    } else if (arg > string.length) {
      arg = string.length
    }
    return arg;
  };

  start = handleInputs(start)
  end = handleInputs(end)

  let arr = [start, end].sort((a, b) => a - b);
  [start, end] = arr;

  for (let i = start; i < end; i++) {
    result += string[i];
  }

  return result;
}

let string = 'hello world';

console.log(substring(string, 2, 4));    // "ll"
console.log(substring(string, 2, 2));    // ""
console.log(substring(string, 4, 2));    // "ll"
console.log(substring(string, 0, -1));   // ""
console.log(substring(string, 2));       // "llo world"
console.log(substring(string, 'a'));     // "hello world"
console.log(substring(string, 8, 20));   // "rld"