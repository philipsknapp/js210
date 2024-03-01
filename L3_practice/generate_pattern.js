/*
given 7:
1******
12*****
123****
1234***
12345**
123456*
1234567

create arg rows
iterate from 1 to arg (rows). For each row:
  create empty string
  iterate from 1 to arg (indices). For each index:
    - if index <= row, append index to string
    - otherwise, append * to string
  log the row
*/

let generatePattern = function(arg) {
  for (let row = 0; row < arg; row++) {
    let str = '';
    for (let index = 0; index < arg; index++) {
      let index_value = String(index + 1)
      if (index > row) {
        index_value = index_value.replace(/./g, '*')
      }
      str += index_value
    }
    console.log(str)
  }
};

generatePattern(17);