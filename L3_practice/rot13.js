/*
given a string, for each uppercase/lowercase character,
change it to the character 13 positions later, looping around z -> a
Other characters are not changed

Implement a helper method to do this with one character at a time.
  Check the case (maybe by checking ascii table position).
  hold an uppercase offset and lowercase offset corresponding to the position of A/a
  If it's in range 65-90, use offset 65
  If it's in range 97-122, use offset 97
  Otherwise, return it as is
  for a value in one of the ranges, subtract the offset to get its alph position
  add 13, then get remainder of dividing by 26 to accommodate looping.
  Then add offset back in
    a(97) - 97 = 0 + 13 = 13 % 26 = 13 + 97 = 110 = n
    T(84) - 65 = 19 + 13 = 32 % 26 = 6 + 65 = 71 = G
  Get character and return value

In the main method:
Create an empty result string
Iterate over every character of argued string
apply the helper method to each character and append it to the result string
return the result string
*/

function rot13(str) {
  function rot_char(char, offset) {
    const UPPER_A = 65;
    const UPPER_Z = 90;
    const LOWER_A = 97;
    const LOWER_Z = 122;
    const ALPH_SIZE = 26;

    let ascii = char.charCodeAt(0);
    let base;

    if (ascii >= UPPER_A && ascii <= UPPER_Z) {
      base = UPPER_A;
    } else if (ascii >= LOWER_A && ascii <= LOWER_Z) {
      base = LOWER_A;
    } else { return char; }

    ascii = ((ascii - base + offset) % ALPH_SIZE) + base;
    return String.fromCharCode(ascii);
  };

  let result = ''
  for (let index = 0; index < str.length; index++) {
    result += rot_char(str[index], 13);
  }

  return result;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));