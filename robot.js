const robot = require("robotjs");
const coordinates = [500, 830, 1161,];
const targY = 300;

let targX;

let ansOne = false;
let ansTwo = false;
let ansThree = false;

if (ansOne) {
    targX = coordinates[0];
} else if (ansTwo) {
    targX = coordinates[1];
} else if (ansThree) {
    targX = coordinates[2];
}

robot.moveMouse(targX, targY);
robot.mouseClick();
