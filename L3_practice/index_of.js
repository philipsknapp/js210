/*
Write two functions that each take two strings as arguments. Their expected behaviors are as follows:

The indexOf function searches for the first instance of a substring in firstString that matches the string secondString, and returns the index of the character where that substring begins.

The lastIndexOf function searches for the last instance of a substring in firstString that matches the string secondString, and returns the index of the character where that substring begins.

Both functions return -1 if firstString does not contain the substring specified by secondString.

P
Input: two strings, a large string and a substring
Output: an integer
Rules:
for indexOf, integer should be index at which the substring matches the main string - the index of the first character of the match
case sensitive
if not found, return -1

may only use [] and length

A
for each character in the string,
  look for a match for the first substring character
    if i find it, set a tracker to the current index - actually, I don't need this b/c index will remain in place throughout this next check. And I don't really need an if condition, since I'm already performing an if check here.
      for each substring character
      check that it matches the subsequent str character
      can use a counter to keep track of matches - actually, just need to make sure the for loop completes.
      if it completes, return tracker
if the process ends with no matches, return -1
*/


function indexOf(firstString, secondString) {
  for (let index = 0; index <= (firstString.length - secondString.length); index++) {
    let match = true
    for (let subIndex = 0; subIndex < secondString.length; subIndex++)  {
      if (firstString[index + subIndex]  !== secondString[subIndex]) {
        match = false;
        break;
      }
    }
    if (match) {
      return index;
    }
  }
  return -1;
};

// function lastIndexOf(firstString, secondString) {
//   for (let index = (firstString.length - secondString.length); index >= 0; index--) {
//     let match = true
//     for (let subIndex = 0; subIndex < secondString.length; subIndex++)  {
//       if (firstString[index + subIndex]  !== secondString[subIndex]) {
//         match = false;
//         break;
//       }
//     }
//     if (match) {
//       return index;
//     }
//   }
//   return -1;
// };

function lastIndexOf(firstString, secondString) { // further exploration
  firstString = firstString.split('').reverse().join('')
  secondString = secondString.split('').reverse().join('')
  reverse_match = indexOf(firstString, secondString)
  return (reverse_match === -1) ? -1 : (firstString.length - secondString.length - reverse_match)
};

console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'leB'));                      // -1

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1