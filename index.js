const words = require("./words.json");

function allWords() {
    console.log(words);
}

function firstTenWords() {
    const wordBank1 = words.slice(0, 10);
    console.log(wordBank1);
}

function nextTenWords() {
    const wordBank2 = words.slice(10, 20);
    console.log(wordBank2);
}

function firstXWords(x) {
    const wordBankX = words.slice(0, x);
    console.log(wordBankX);
}

function subsetOfWords(startIndex, endIndex) {
    const subset = words.slice(startIndex, endIndex);
    console.log(subset);
}

function sortWords() {
    const sortedWords = [...words].sort();
    console.log(sortedWords);
}

function wordsWithQ() {
    const wordsWithQ = words.filter(word => word.toLowerCase().includes('q'));
    return wordsWithQ;
}

function findWordsWithLetter(letter) {
    const wordsWithLetter = words.filter(word => word.includes(letter));
    return wordsWithLetter;
}

const userLetter = process.argv[2];

if (!userLetter) {
    console.log("Please provide a letter as a command-line argument.");
} else {
    const matchingWords = findWordsWithLetter(userLetter);
    console.log(`Words containing the letter '${userLetter}':`);
    matchingWords.forEach(word => console.log(word));
}

allWords();
firstTenWords();
nextTenWords();
firstXWords(5); // Number must be provided in order to pass an argument
subsetOfWords(10, 20); // Two numbers must be provided in order to pass an arguments
sortWords();
wordsWithQ();

