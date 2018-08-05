// Defining NPM modules required in the app
var Word = require('./Word');
var inquirer = require('inquirer');
var chalk = require('chalk');
var chalkAnimation = require('chalk-animation');

// Defining game variables
var wordList = ['INDIA', 'CANADA', 'AMERICA', 'JAPAN', 'SINGAPORE', 'DUBAI', 'PAKISTAN', 'MEXICO', 'ARGENTINA', 'SLOVAKIA', 'ZIMBABWE', 'AUSTRALIA', 'SWITZERLAND', 'TURKMENISTAN'];
var select = 0;
var chosenWord = "";
var gameWord = "";
var counter = 0;

// Coosing random word from the words list
function startGame() {
    select = (Math.floor(Math.random() * wordList.length));
    chosenWord = wordList[select];
    gameWord = new Word(chosenWord);

    gameWord.makeWord();
    
    if (select > -1) {
        wordList.splice(select, 1);
    };

    console.log(chalk.red(`You get 8 letter guesses to find the country name`));
    promptUser();
};

// Prompts user for guess, restarting game if guesses are over
function promptUser() {
    if (counter<6) {
        console.log(gameWord.showWord());
        inquirer.prompt([
            {
                type: "input",
                name: "letter",
                message: chalk.yellow(`\nPick a letter and press enter.`)
            }
        ]).then(function(data) {
            checkAnswer(data);
        });
    } else {
        console.log(chalk.red(`\n Sorry ! You are out of guesses.`));
        console.log(chalkAnimation.rainbow(chosenWord));
        chosenWord = "";
        gameWord = "";
        select = 0;
        counter = 0;
        startGame();
    }
};

// Cheking the user input format and comparing the letter to gameWord if the guess is correct
function checkAnswer(data) {
    if ((data.letter.length === 1) && /^[a-zA-Z]+$/.test(data.letter)) {
        var checkable = data.letter.toUpperCase();
        var temp = gameWord.showWord();
        gameWord.checkWord(checkable);
        if (temp === gameWord.showWord()) {
            console.log(`\nSorry, wrong letter!\n.`);
            counter++;
            console.log((8 - counter) + " guesses remaining");
            promptUser();
        }
        else {
            rightGuess();
        }
    }
    else {
        console.log("\nPlease enter a letter, one at a time.\n");
        promptUser();
    }
}

//If the user's guess is correct, the word array displays the word with the guessed letter(s), 
//If the entire word is correct (filled in), the game restarts.
function rightGuess() {
    console.log("\nYou guessed correctly.\n".green);
    if (chosenWord.replace(/ /g,"") == (gameWord.showWord()).replace(/ /g,"")) {
        console.log(gameWord.showWord().america);
        console.log('\nYou win!!\n'.america);
        chosenWord = "";
        gameWord = "";
        select = 0;
        counter = 0;
        startGame();
    }
    else {
        promptUser();
    }
}

startGame();
