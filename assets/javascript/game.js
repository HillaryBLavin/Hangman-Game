window.onload=function(){ 
    // Grab DOM elements
    var $newGameButton = document.getElementById("new-game-button");
    var $wordBlanks = document.getElementById("word-blanks");
    var $wrongLetters = document.getElementById("wrong-letters");
    var $guessesLeft = document.getElementById("guesses-left");
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
    // Letters guessed by user
    var guessedLetterBank = [];
    // Incorrect letters guessed
    var incorrectLetters = [];
    // Number of guesses remaining 
    var guessesLeft = 10;
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
        guessesLeft = 10;
        guessedLetterBank = [];
        incorrectLetters = [];
        wordBlanks = [];

        // Randomly choose word
        randomWord = words[Math.floor(Math.random() * words.length)];

        // Display "blanks" for each letter of the randomly chosen word
        for (i = 0; i < randomWord.length; i++) {
            if (randomWord[i] === " ") {
                wordBlanks.push(" ");
            } else {
                wordBlanks.push("_");
            }
        // Write all new game info to DOM
        $guessesLeft.textContent = guessesLeft;
        $wordBlanks.textContent = wordBlanks.join(" ");
        $wrongLetters.textContent = incorrectLetters;
        } 
    }
    // Add event listener for Start Game Button
    $newGameButton.addEventListener('click', newGame);


    // Register the keys pressed (letters guessed) by the user
    // onkeyup event
    document.onkeyup = function(event) {
        // Force user to use ONLY letters a-z
        console.dir(event);
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            checkLetter(event.key)
        }
    }
    // Check if the letter the user guesses is CORRECT
    function checkLetter(letter) {
        console.log(letter);
        
        if (isgameRunning === true && guessedLetterBank.indexOf(letter) === -1) {
            // Run Game logic
            guessedLetterBank.push(letter);
            // Check if guessed letter is in my picked word
            for (var i = 0; i < randomWord.length; i++) {
                // Convert both values to lower case for comparison purposes...
                if (randomWord[i].toLowerCase() === letter.toLowerCase()) {
                    // ...and if they match, replace the "blank" for the actual letter
                    wordBlanks[i] = randomWord[i];
                }
            }
            $wordBlanks.textContent = wordBlanks.join(" ")
        } 
        else {
            if (!isgameRunning) {
                alert("Ye best be hittin' the Weigh Anchor button to start yer game, Matey!");
            } else {
                alert("Ye've already guessed that, try again!");
            }
        }
    }
    // Check if the letter the user guesses is INCORRECT
    function checkIncorrect(letter) {
        if (
          wordBlanks.indexOf(letter.toLowerCase()) === -1
          &&
          wordBlanks.indexOf(letter.toUpperCase()) === -1
        ) {
          guessesLeft--;
          incorrectLetters.push(letter);
          $wrongLetters.textContent = incorrectLetters
          $guessesLeft.textContent = guessesLeft;
        }
    }

    // push results
    // Show that the guess is either correct or not correct
        // If incorrect, decrement the "guesses" counter


    // checkLose - If "guesses" counter reaches 0, they lose!

    // checkWin - If user guesses word correctly, they win!

    // Record wins and losses in appropriate counters.


}