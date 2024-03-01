/*
create empty result string
iterate over characters of arg string
for each character:
  - if it's within the uppercase part of the ASCII table (65-90),
    - add the downcased version (add 32) to result
  - otherwise, add it to result
return result
*/

function toLowerCase(string) {
  const CONVERSION_OFFSET = 32;
  const ASCII_A = 65
  const ASCII_Z = 90
  let result = '';

  for (let index = 0; index < string.length; index++) {
    let ascii = string.charCodeAt(index);
    result += (ascii >= ASCII_A && ascii <= ASCII_Z) ? String.fromCharCode(ascii + CONVERSION_OFFSET) : string[index];
  }
  return result;
}

console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEF'));      // "abcdef"