// Pick a random word
    // Create an array of words
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

    var randomWord = words[Math.floor(Math.random() * words.length)]

// Display "blanks" for each letter of the chosen word

    var wordBlanks = [];

    for (i = 0, i < randomWord.length, i++) {
        wordBlanks[i] = "_";
    }


// Display buttons featuring letters of the alphabet 


// Display "guesses" counter



// Register the keys pressed (letters guessed) by the user



// Show that the guess is either correct or not correct



// If guess is correct, make that letter appear in the appropriate blank(s) in the chosen word


// If guess is incorrect, decrement the "guesses" counter


// If "guesses" counter reaches 0, game over


// If user guesses word correctly, they win!