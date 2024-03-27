const fs = require('fs');
const questionData = require('./questionData.json')
let currentQuestion = require('./currentQuestion.json')

function findQuestion(x) { //Enter current question here
    return questionData.find(questionData => questionData.question === x);
}

const foundQuestion = findQuestion(currentQuestion[0].question);

if (foundQuestion) {
    console.log("-- Question found --");
    console.log("Question:", foundQuestion.question);
    console.log("Answer:", foundQuestion.answer);
} else {
    console.log(`Question "${currentQuestion[0].question}" not found.`);
}
