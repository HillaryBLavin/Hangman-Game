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
        "scurvy"
    ];
    // Randomly chosen word
    // Number of letters in the chosen word (wordBlanks)
    // Correct letters guess (filled in wordBlanks??)
    // Incorrect letters guessed
    // Number of guesses remaining 
    // Wins and Losses
    // Is the game running?

// Create Functions
    // Start/Reset game
    // Randomly choose word
        var randomWord = words[Math.floor(Math.random() * words.length)];
    // Display "blanks" for each letter of the chosen word
        var wordBlanks = [];

        for (i = 0; i < randomWord.length; i++) {
            wordBlanks[i] = "_";
        };

    // Register the keys pressed (letters guessed) by the user
        // onkeyup event
        // check if letter is in word
        // push results
    // Show that the guess is either correct or not correct
        // If correct, make that letter appear in the appropriate blank(s) in the chosen word
        // If incorrect, decrement the "guesses" counter


    // If "guesses" counter reaches 0, game over


    // If user guesses word correctly, they win!

    // Record wins and losses in appropriate counters.


// Check Your Work
var checkWork = document.getElementById("game-word");
checkWork.innerHTML = wordBlanks;
checkWork.innerHTML = wordBlanks.join(" ");
// Use this in your HTML to check your work <div id="game-word"></div>