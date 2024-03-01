/*
create an empty output str
iterate through the argued string. At each position:
  - if it's not the delimiter character, append the char to output
  - if we get the delimiter character (or delimiter is ''), log output and reset it
*/

function splitString(string, delimiter) {
  if (delimiter = undefined) {
    console.log("ERROR: No delimiter")
  }
  let output = ''
  for (let index = 0; index < string.length; index++) {
    if (string[index] === delimiter || string[index] === '') {
      console.log(output);
      output = '';
    } else {
      output += string[index];
    }
  }
}

console.log(splitString('abc,123,hello world', ','));
// logs:
// abc
// 123
// hello world

console.log(splitString('hello'));
// logs:
// ERROR: No delimiter

console.log(splitString('hello', ''));
// logs:
// h
// e
// l
// l
// o

console.log(splitString('hello', ';'));
// logs:
// hello

console.log(splitString(';hello;', ';'));
// logs:
//  (this is a blank line)
// hello