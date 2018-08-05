var Letter = (guess) => {
    this.guess = guess;
    this.guessed = false;

    this.holder = () => {
        if (this.guess = " ") {
            return " "
        } else if (!this.guess) {
            return "_"
        } else {
            return this.guess;
        }
    };
    this.check = (userGuess) => {
        if (this.guess === userGuess) {
            this.guessed = true;
        }
    };
};

exports.module = Letter;

const chalk = require('chalk');
 
console.log(chalk.blue('Hello world!'));

const chalkAnimation = require('chalk-animation');
 
// chalkAnimation.rainbow('Lorem ipsum dolor sit amet');
// chalkAnimation.pulse('Lorem ipsum dolor sit amet');
// chalkAnimation.glitch('Lorem ipsum dolor sit amet');
// chalkAnimation.neon('Lorem ipsum dolor sit amet');
// chalkAnimation.radar('Lorem ipsum dolor sit amet');
// chalkAnimation.karaoke('Lorem ipsum dolor sit amet');