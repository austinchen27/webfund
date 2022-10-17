// Dice Roller 

function d6() {
  var roll = Math.random();
  roll = Math.ceil(Math.random() * 6);
  return roll;
}

var playerRoll = d6();
console.log("The player rolled: " + playerRoll);

// Consult the Oracle 

var lifesAnswers = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes - definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful."
];

// return

var i = Math.floor(Math.random() * 20);
var response = lifesAnswers[i];

console.log(response);

while (i != 19) {
  i=Math.floor(Math.random()*20);
  console.log(i)
}


// unfinished

function answer() {
  var len = lifesAnswers.length;
  var i = Math.floor(Math.random()*len);
  return lifesAnswers(i);
}

console.log(answer(i))
