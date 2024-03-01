/*
The start argument is the starting index. If negative, treat it as strLength + start where strLength is the length of the string. For example, if start is -3, treat it as strLength - 3.
The length argument is the maximum length of the desired substring. If length exceeds the number of characters available, just use the available characters.

if start is negative, reassign start
endpoint is start + length or string length, whichever is less
from start to end, add chars to a new str

*/

function substr(string, start, length) {
  let result = '';

  if (start < 0) {
    start = string.length + start
  }

  let end = (string.length < start + length) ? string.length : start + length;

  for (let i = start; i < end; i++) {
    result += string[i];
  }

  return result;
}

let string = 'hello world';

console.log(substr(string, 2, 4));      // "llo "
console.log(substr(string, -3, 2));     // "rl"
console.log(substr(string, 8, 20));     // "rld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 0, 0));      // ""