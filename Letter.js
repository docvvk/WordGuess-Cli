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

