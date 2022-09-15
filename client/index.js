const quoteDisplay = document.querySelector("#quoteDisplay");
console.log(quoteDisplay)
const quoteBox = document.querySelector("#quoteBox");

const quotes = [
    'Be yourself; everyone else is already taken. ― Oscar Wilde',
    'Be who you are and say what you feel, because those who mind dont matter, and those who matter dont mind. ― Bernard M. Baruch',
    'You only live once, but if you do it right, once is enough. ― Mae West',
    'Ive learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.',
    'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. ― Ralph Waldo Emerson',
    'It is better to be hated for what you are than to be loved for what you are not. ― Andre Gide, Autumn Leaves',
    'There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle. ― Albert Einstein',
];


function newQuote() {
let randomNumber = Math.floor(Math.random() * (quotes.length));
quoteBox.innerHTML = quotes[randomNumber]


}

quoteDisplay.addEventListener("click",newQuote);



