/*
create an empty output str
iterate through the argued string. At each position:
  - if it's not the delimiter character, append the char to output
  - if we get the delimiter character (or delimiter is ''), log output and reset it
*/
function splitString(string, delimiter) {
  if (delimiter === undefined) {
    console.log("ERROR: No delimiter")
  }
  let output = ''
  for (let index = 0; index < string.length; index++) {
    let char = string[index]
    if (delimiter === '') {
      console.log(char)
    } else if (char === delimiter) {
      console.log(output);
      output = '';
    } else {
      output += char;
    }
  }
  console.log(output);
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello