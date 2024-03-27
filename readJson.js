const fs = require('fs');
const currentQuestion = require('./currentQuestion.json')

console.log('changed to: ' + currentQuestion)

fs.writeFileSync('currentQuestion.json', JSON.stringify(currentQuestion))

// fs.writeFileSync('currentQuestion.json', JSON.stringify(data));