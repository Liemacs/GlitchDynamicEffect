var words = [
    'unicorn',
    'cheeseburger',
    'carrot',
    'potato',
    'bubbles',
    'pizza'
];

var letters = "abcdefghijklmnopqrstuvwxyz#%&^+=-",
    speed = 250,
    steps = 4,
    loader = document.querySelector('#loader');

function getRandomWord() {
    var randomWord = words[Math.floor(Math.random() * words.length)];
    return randomWord;
}

function getRandomLetter() {
    var randomLetter = letters[Math.floor(Math.random() * letters.length)];
    return randomLetter;
}

function randomWordLoop() {
    var word = getRandomWord();
    var textLenght = word.length;
    for(var i = 0; i < textLenght; i++){
        (function(i,word) {
            letterAppear(i, word);
        })(i,word)
    }

function letterAppear(i, word) {
    setTimeout(function() {
        randomLetters(i, word);
    }, speed*i);
}

function randomLetters(i, word) {
    for(var j = 0; j <= steps; j++) {
        charsAnim(i, word, j);
    }
}

function charsAnim (i, word, j) {
    setTimeout(function() {
        var count = j;
        if (j < steps){
            randomChar(i, word, count, j);
        } else {
            goodChar(i, word, count, j);
        }
    }, ((speed/steps)*j) - (speed/steps));
}

function randomChar (i, word, count, j) {
    var letter = getRandomLetter();
    if( j > 0 ){
        var oldText = loader.textContent.slice(0, -1);
    } else {
        var oldText = loader.textContent;
    }
    loader.textContent = oldText + letter;
}

function goodChar (i, word, count, j) {
    var oldText = loader.textContent.slice(0, -1);
    loader.textContent = oldText + word[i];
    if( i== textLenght -1) {
        removeWord();
    }
}

function removeWord () {
    setTimeout(function() {
        for(var k = 0; k < textLenght; k++) {
            removeLeters(k);
        }
    }, speed*2);
}

function removeLeters(k) {
    setTimeout(function() {
        removeLeter(k);
    }, 78*k);
}

function removeLeter(k) {
    var actualText = loader.textContent.slice(0, -1);
    loader.textContent = actualText;
    if( k == textLenght - 1) {
        randomWordLoop();
    }
}

}


randomWordLoop();