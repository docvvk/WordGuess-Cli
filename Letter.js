function Letter(guess) {
    
    this.guess = guess;
    
    this.guessed = false;

    this.holder = () => {
        if (this.guess === " ") {
            return " "
        } else if (!this.guessed) {
            return "_ "
        } else {
            return this.guess;
        }
    };

    this.check = (userGuess) => {
        if ( userGuess === this.guess) {
            this.guessed = true;
        }
    };
};


module.exports = Letter;

// const chalk = require('chalk');
 
// // console.log(chalk.blue(L));

// const chalkAnimation = require('chalk-animation');
 
// chalkAnimation.rainbow('Lorem ipsum dolor sit amet');
// chalkAnimation.pulse('Lorem ipsum dolor sit amet');
// chalkAnimation.glitch('Lorem ipsum dolor sit amet');
// chalkAnimation.neon('Lorem ipsum dolor sit amet');
// chalkAnimation.radar('Lorem ipsum dolor sit amet');
// chalkAnimation.karaoke('Lorem ipsum dolor sit amet');