'use strict';

// Initialization ------------------------------------------------

console.log('init');

alert('Hello, and welcome to my quiz. Be sure to type only yes or no answers.');

var score = 0;

// Question 1 ----------------------------------------------------

var answerOne = prompt('Do I think pineapple belongs on pizza?');
console.log(answerOne);

if ((answerOne.toLowerCase() === 'no') || (answerOne.toLowerCase() === 'n'))
{
  alert('Correct! Pineapple never belongs on pizza');
  score += 20;
  console.log('correct');
  console.log(score);
} 
else if ((answerOne.toLowerCase() === 'yes') || (answerOne.toLowerCase() === 'y')) 
{
  alert('Wrong! Pineapple never belongs on pizza');
  console.log('incorrect');
  console.log(score);
}
else {
  alert('Please enter yes or no');
}
// Question 2 -----------------------------------------------------

var answerTwo = prompt('Do I have all 10 of my toes?');
console.log(answerTwo);

if ((answerTwo.toLowerCase() === 'yes') || (answerTwo.toLowerCase() === 'y')) {
  score += 20;
  alert('Correct! I have all ten of my toes.');
  console.log('correct');
  console.log(score);
} 
else if ((answerTwo.toLowerCase() === 'no') || (answerTwo.toLowerCase() === 'n')) {
  alert('Wrong! I have all ten of my toes.');
  console.log('incorrect');
  console.log(score);
}
else {
  alert('Please enter yes or no');
}
// Question 3 ------------------------------------------------------

var answerThree = prompt('Have I ever been to California?');
console.log(answerThree);

if ((answerThree.toLowerCase() === 'yes') || (answerThree.toLowerCase() === 'y')) {
  score += 20;
  alert('Correct! I have been to California.');
  console.log('correct');
  console.log(score);
} 
else if ((answerThree.toLowerCase() === 'no') || (answerThree.toLowerCase() === 'n')) {
  alert('Wrong! I have been to California.');
  console.log('incorrect');
  console.log(score);
}
else {
  alert('Please enter yes or no');
}

// Question 4 ------------------------------------------------------

var answerFour = prompt("Do I like Cardi B's music?");
console.log(answerFour);

if ((answerFour.toLowerCase() === 'no') || (answerFour.toLowerCase() === 'n')) {
  score += 20;
  alert('Correct! I absolutely despise it.');
  console.log('correct');
  console.log(score);
} 
else if ((answerFour.toLowerCase() === 'yes') || (answerFour.toLowerCase() === 'y')) {
  alert('Wrong! I absolutely despise it.');
  console.log('incorrect');
  console.log(score);
}
else {
  alert('PLease enter yes or no');
}

// Question 5 ------------------------------------------------------

var answerFive = prompt('Is Pulp Fiction my favorite movie?');
console.log(answerFive);

if ((answerFive.toLowerCase() === 'yes') || (answerFive.toLowerCase() === 'y')) {
  score += 20;
  alert('Correctamundo!');
  console.log('correct');
  console.log(score);
} 
else if ((answerFive.toLowerCase() === 'no') || (answerFive.toLowerCase() === 'n')) {
  alert('Wrong!');
  console.log('incorrect');
  console.log(score);
}
else {
  alert('Please enter yes or no');
}

// Score display ---------------------------------------------------

document.getElementById("score").innerHTML = 'Score: ' + score + '%';