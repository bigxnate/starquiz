const sharp = require('sharp');
const inputFile = './images/screenshot.png';


// Main Question

let left = 490;
let top = 237;
let width = 940;
let height = 50;

sharp(inputFile)
    .extract({ left, top, width, height })
    .toFile('./images/output_image.png', (err, info) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Image cropped and saved successfully:', info);
        }
    });


// Option 1

left = 495;

// Gotta click at coordinate (left+20,top+20)

//Only need to set this once now
top = 345;
width = 270;
height = 40;

sharp(inputFile)
    .extract({ left, top, width, height })
    .toFile('./images/option_one.png', (err, info) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Image cropped and saved successfully:', info);
        }
    });

// Option 2

left = 831;

sharp(inputFile)
    .extract({ left, top, width, height })
    .toFile('./images/option_two.png', (err, info) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Image cropped and saved successfully:', info);
        }
    });

// Option 3

left = 1162;

sharp(inputFile)
    .extract({ left, top, width, height })
    .toFile('./images/option_three.png', (err, info) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Image cropped and saved successfully:', info);
        }
    });