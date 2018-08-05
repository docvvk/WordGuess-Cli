var Letter = require('./Letter');

function Word(wordArray) {
    
    this.wordArray = wordArray;
    
    this.guessedWord = [];

    this.makeWord = () => {
        for ( var i = 0; i < wordArray.length; i++ ) {
            var lettr = new Letter(wordArray[i]);
            this.guessedWord.push(lettr);
        };
    };

    this.showWord = () => {
        var displayWord = [];
        for ( var i = 0; i < this.guessedWord.length; i++ ) {
            displayWord.push(this.guessedWord[i].holder());
        };
        return displayWord.join('');
    };

    this.checkWord = (myGuess) => {
        for ( var i = 0; i < this.guessedWord.length; i++ ) {
            this.guessedWord[i].check(myGuess);
        };
    };
};

module.exports = Word;