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
    var randomWord = '';
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
        // As long as the user has hit the start button and there have been no guesses so far...
        if (isgameRunning === true && guessedLetterBank.indexOf(letter) === -1) {
            // Run Game logic
            guessedLetterBank.push(letter);
            // Check if guessed letter is in my picked word
            for (var i = 0; i < randomWord.length; i++) {
                // Convert both values to lower case for comparison purposes...
                if (randomWord[i].toLowerCase() === letter.toLowerCase()) {
                    // ...and if they match, replace the "blank" with the actual letter
                    wordBlanks[i] = randomWord[i];
                }
            }
            $wordBlanks.textContent = wordBlanks.join('');
            // Call upon the checkIncorrect function to check if the guess was INCORRECT
            checkIncorrect(letter);
        } 
        else {
            // Alert player to hit the start button if they start typing first
            if (!isgameRunning) {
                alert("Ye best Weigh Anchor button to start yer game, Matey!");
            // Alert player if they have already guessed that letter    
            } else {
                alert("Ye've already guessed that, try again!");
            }
        }
    }
    // This function will check if the letter the user guesses is INCORRECT
    function checkIncorrect(letter) {
        if (
          // Check both lowercase and uppercase
          wordBlanks.indexOf(letter.toLowerCase()) === -1 && wordBlanks.indexOf(letter.toUpperCase()) === -1
        ) {
          // Decrement guesses left  
          guessesLeft--;
          // Push incorrect letters to incorrectLetters and write to DOM
          incorrectLetters.push(letter);
          $wrongLetters.textContent = incorrectLetters.join(' ');
          // Display how many guesses are left (write to DOM)
          $guessesLeft.textContent = guessesLeft;
        }
        checkLose();

    }
    


    // checkLose - If "guesses" counter reaches 0, they lose!
    function checkLose() {
        if (guessesLeft === 0) {
            losses++;
            isgameRunning = false;
            $losses.textContent = losses;
        }
        checkWin();
    }
    

    // checkWin - If user guesses word correctly, they win!
    function checkWin() {
        if (randomWord.toLowerCase() === wordBlanks.join('').toLowerCase()) {
            wins++;
            isgameRunning = false;
            $wins.textContent = wins;
        }
    }



}