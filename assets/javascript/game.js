window.onload=function(){ 
    // Grab DOM elements
    var $startGameButton = document.getElementById("start-game-button");
    var $wordBlanks = document.getElementById("word-blanks");
    var $guessedLetters = document.getElementById("guessed-letters");
    var $remainingGuesses = document.getElementById("remaining-guesses");
    var $wins = document.getElementById("wins");
    var $losses = document.getElementById("losses");

    // Create variables
    // Words to choose from
    var words = [
        "pirate",
        "dubloons",
        "booty",
        "treasure chest",
        "Jolly Roger",
        "captain",
        "parrot",
        "cannonball",
        "eyepatch",
        "Blackbeard",
        "sword",
        "buccaneer",
        "anchor",
        "island",
        "scurvy",
        "mutiny",
        "rum"
    ];
    // Randomly chosen word
    var randomWord = "";
    // Number of letters in the randomly chosen word (wordBlanks)
    var wordBlanks = [];
    // Correct letters guess (filled in wordBlanks??)
    var correctLetters = [];
    // Incorrect letters guessed
    var incorrectLetters = [];
    // Number of guesses remaining 
    var remainingGuesses = 10;
    // Wins and Losses
    var wins = 0;
    var losses = 0;
    // Is the game running?
    var isgameRunning = false;

    // Create Functions
    // Start/Reset game
    function newGame() {
        // Reset all game info
        isgameRunning = true;
        remainingGuesses = 10;
        correctLetters = [];
        incorrectLetters = [];
        wordBlanks = [];

        // Randomly choose word
        var randomWord = words[Math.floor(Math.random() * words.length)];

        // Display "blanks" for each letter of the randomly chosen word
        for (i = 0; i < randomWord.length; i++) {
            if (randomWord[i] === " ") {
                wordBlanks.push(" ");
            } else {
                wordBlanks.push("_");
            }
        // Write all new game info to DOM
        $remainingGuesses.textContent = remainingGuesses;
        $wordBlanks.textContent = wordBlanks.join(" ");
        $guessedLetters.textContent = incorrectLetters;
        } 
    }
        // Add event listener for Start Game Button
        $startGameButton.addEventListener('click', newGame);


    // Register the keys pressed (letters guessed) by the user
        // onkeyup event
        // check if letter is in word
        // push results
    // Show that the guess is either correct or not correct
        // If correct, make that letter appear in the appropriate blank(s) in the chosen word
        // If incorrect, decrement the "guesses" counter


    // checkLose - If "guesses" counter reaches 0, they lose!

    // checkWin - If user guesses word correctly, they win!

    // Record wins and losses in appropriate counters.


}