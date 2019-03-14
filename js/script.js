'use strict';

// eslint-disable-next-line no-unused-vars
function start() {
// Initialization ------------------------------------------------

  console.log('init');

  alert('Hello, and welcome to my quiz. Be sure to type only yes or no answers.');

  var score = 0;

  // Question 1 ----------------------------------------------------
  function questionOne() {
    var answerOne = prompt('Do I think pineapple belongs on pizza?');
    console.log(answerOne);

    if ((answerOne.toLowerCase() === 'no') || (answerOne.toLowerCase() === 'n'))
    {
      alert('Correct! Pineapple never belongs on pizza');
      score ++;
      console.log('correct');
      console.log('Score: ' + score);
    }
    else if ((answerOne.toLowerCase() === 'yes') || (answerOne.toLowerCase() === 'y')) 
    {
      alert('Wrong! Pineapple never belongs on pizza');
      console.log('incorrect');
      console.log('Score: ' + score);
    }
    else {
      alert('Please enter yes or no');
    }
  }
  // Question 2 -----------------------------------------------------
  function questionTwo() {
    var answerTwo = prompt('Do I have all 10 of my toes?');
    console.log(answerTwo);
  
    if ((answerTwo.toLowerCase() === 'yes') || (answerTwo.toLowerCase() === 'y')) {
      score ++;
      alert('Correct! I have all ten of my toes.');
      console.log('correct');
      console.log('Score: ' + score);
    }
    else if ((answerTwo.toLowerCase() === 'no') || (answerTwo.toLowerCase() === 'n')) {
      alert('Wrong! I have all ten of my toes.');
      console.log('Answer: incorrect');
      console.log('Score: ' + score);
    }
    else {
      alert('Please enter yes or no');
    }
  }
  // Question 3 ------------------------------------------------------
  function questionThree() {
    var answerThree = prompt('Have I ever been to California?');
    console.log(answerThree);

    if ((answerThree.toLowerCase() === 'yes') || (answerThree.toLowerCase() === 'y')) {
      score ++;
      alert('Correct! I have been to California.');
      console.log('correct');
      console.log('Score: ' + score);
    } 
    else if ((answerThree.toLowerCase() === 'no') || (answerThree.toLowerCase() === 'n')) {
      alert('Wrong! I have been to California.');
      console.log('incorrect');
      console.log('Score: ' + score);
    }
    else {
      alert('Please enter yes or no');
    }
    
  }
  // Question 4 ------------------------------------------------------
  function questionFour() {

    var answerFour = prompt("Do I like Cardi B's music?");
    console.log(answerFour);

    if ((answerFour.toLowerCase() === 'no') || (answerFour.toLowerCase() === 'n')) {
      score ++;
      alert('Correct! I absolutely despise it.');
      console.log('correct');
      console.log('Score: ' + score);
    } 
    else if ((answerFour.toLowerCase() === 'yes') || (answerFour.toLowerCase() === 'y')) {
      alert('Wrong! I absolutely despise it.');
      console.log('incorrect');
      console.log('Score: ' + score);
    }
    else {
      alert('PLease enter yes or no');
    } 
  }
  // Question 5 ------------------------------------------------------
  function questionFive() {
    var answerFive = prompt('Is Pulp Fiction my favorite movie?');
    console.log(answerFive);

    if ((answerFive.toLowerCase() === 'yes') || (answerFive.toLowerCase() === 'y')) {
      score ++;
      alert('Correctamundo!');
      console.log('correct');
      console.log('Score: ' + score);
    } 
    else if ((answerFive.toLowerCase() === 'no') || (answerFive.toLowerCase() === 'n')) {
      alert('Wrong!');
      console.log('incorrect');
      console.log('Score: ' + score);
    }
    else {
      alert('Please enter yes or no');
    }
    
  }
  // Question 6 ------------------------------------------------------
  function questionSix() {
    for (var i = 0; i < 4; i++) {

      var answerSix = parseInt(prompt('Which original Star Wars episode is my favorite?'));
      console.log(answerSix);
  
      // answer validation and higher/lower message --------------------
  
      if (answerSix < 5) {
        alert('Wrong! Higher.');
        console.log('higher');
        continue;
      }
      else if (answerSix > 5) {
        alert('Wrong! Lower.');
        console.log('lower');
        continue;
      }
      else if (answerSix === 5) {
        alert('Correct! Empire is the best one.');
        console.log('correct');
        score ++;
        console.log(score);
        break;
      }
      else {
        alert('Please enter a number.');
        continue;
      }
    }
  }
  // Question 7 ------------------------------------------------------
  function questionSeven() {
    for (var j = 0; j < 4; j++) {
      console.log('init');
      var cars = ['Mustang', 'Camaro', 'Chevelle', 'Charger'];
  
      var answerSeven = prompt('What is my favorite classic muscle car? ' + cars[0] + ', ' + cars[1] + ', ' + cars[2] + ', or ' + cars[3] + '?');
      console.log(answerSeven);
  
      // answer validation ---------------------------------------------
  
      if (answerSeven.toLowerCase() !== cars[3].toLowerCase()) {
        alert('Wrong! Try again.');
        console.log('incorrect');
        continue;
      } else {
        alert('Correct!');
        console.log('correct');
        score ++;
        console.log(score);
        break;
      }
    }
  }
  

  questionOne();
  questionTwo();
  questionThree();
  questionFour();
  questionFive();
  questionSix();
  questionSeven();

  // Score display ---------------------------------------------------

  document.getElementById('score').innerHTML = 'Score: ' + score + '/7';
}