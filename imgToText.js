const fs = require('fs');
const T = require("tesseract.js");
const sqArray = require('./currentQuestion.json');


//MAIN QUESTION
T.recognize('./images/output_image.png', 'eng', { logger: e => console.log(e) })
    .then(out => {
        let newQuestion = out.data.text.replace(/\n/g, ' ').trim(); // Modify and save text
        sqArray[0].question = newQuestion;
        // console.log('Data pushed to array: ' + sqArray);
    })
    .catch(error => console.error('Error:', error));

//OPTION ONE
T.recognize('./images/option_one.png', 'eng')
    .then(out => {
        let newAnsOne = out.data.text.replace(/\n/g, ' ').trim();
        sqArray[0].ansOne = newAnsOne;
        // console.log('Data pushed to array: ' + sqArray);
    })
    .catch(error => console.error('Error:', error));

//OPTION TWO
T.recognize('./images/option_two.png', 'eng')
    .then(out => {
        let newAnsTwo = out.data.text.replace(/\n/g, ' ').trim();
        sqArray[0].ansTwo = newAnsTwo;
        // console.log('Data pushed to array: ' + sqArray);
    })
    .catch(error => console.error('Error:', error));

//OPTION THREE
T.recognize('./images/option_three.png', 'eng')
    .then(out => {
        let newAnsThree = out.data.text.replace(/\n/g, ' ').trim();
        sqArray[0].ansThree = newAnsThree;
    })
    .catch(error => console.error('Error:', error));

setTimeout(() => { console.log("this is a test " + sqArray) }, 3000)
setTimeout(() => { fs.writeFileSync('currentQuestion.json', JSON.stringify(sqArray)) }, 3000)

// fs.writeFileSync('currentQuestion.json', JSON.stringify(currentQuestion))