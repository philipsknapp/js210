/*
set up an empty array of scores
have the user enter a score
then let them choose whether to keep going.
X once they choose not to, pass the array to a method that calculates the average.
X pass the average to another method that calculates the grade
X return a message with interpolated grade
*/

let rlSync = require('readline-sync');

function average(score_arr) {
  let sum = score_arr.reduce(
    (accumulator, currentVal) => accumulator + currentVal
  );
  console.log(sum);
  return Math.round(sum / score_arr.length);
}

function grade(score) {
  if (score >= 90) {
    return 'A'
  } else if (score >= 70) {
    return 'B'
  } else if (score >= 50) {
    return 'C'
  } else {
    return 'F'
  }
}

let scoreArr = []
while (true) {
  scoreArr.push(Number(rlSync.question(`Enter score ${scoreArr.length + 1}: `)))
  let keepGoing = rlSync.question("Want to enter another score? Type 'n' for no.")
  if (keepGoing === 'n') {
    break
  }
}

let avg = average(scoreArr)
console.log(avg)
current_grade = grade(avg)

console.log(`Based on the average of your ${scoreArr.length} scores, your letter grade is "${current_grade}"`)