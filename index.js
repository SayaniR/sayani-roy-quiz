var readlineSync=require('readline-sync');
var chalk=require('chalk');

//welcoming user
var userName=readlineSync.question("What is your name? ");
console.log("Welcome ",chalk.red(userName), "to HOW WELL DO YOU KNOW SAYANI");

var score=0;

var highScore={
  name: "Sayani ",
  score: "10"
}


function play(question, answer)
{
  var userAnswer=readlineSync.question(question);
  if(userAnswer.toUpperCase()===answer.toUpperCase())
  {
    console.log(chalk.green("Correct Answer!"));
    score=score+1;
  }
  else
  {
    console.log(chalk.red("Wrong Answer! "));
  }
  console.log("----------------");
}

//array of objects to store questions
var questions=[
  {question: "Where do I live? ",
   answer: "Kolkata"},
  {question: "Where do I study? ",
   answer: "RCCIIT"},
  {question: "What is my favourite colour? ",
   answer: "Black"},
  {question: "What is my favourite beverage? ",
   answer: "coffee"},
  {question: "Who is my favourite female musician? ",
   answer: "taylor swift"},
  {question: "Do I watch superhero movies? ",
   answer: "No"},
  {question: "What was my undergrad subject? ",
   answer: "maths"},
  {question: "How old am I? ",
   answer: "23"},
  {question: "How many languages can I speak? ",
   answer: "3"},
  {question: "Am I a night owl or an early bird? ",
   answer: "night owl"},
];

//loop for questions
for(var i=0; i<questions.length; i++)
{
  play(questions[i].question, questions[i].answer);
}


//displaying current score and high score
console.log(chalk.cyan("Check out the highest score: "));
console.log(highScore.name+" - "+highScore.score);
console.log(chalk.magenta("Your score is ", score));
if(score>=highScore.score)
{
  console.log("Yay! You set a new high score");
  console.log("Send a screenshot and I'll update your name");
}