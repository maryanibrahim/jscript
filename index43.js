let text = 'game of thrones';
let firstChar=text.charAt(0);
let secondChar=text.charAt(5);
let thirdChar=text.charAt(8);
let invalidChar=text.charAt(1000);
let message=firstChar.concat(secondChar,thirdChar);
console.log('The Final Result is: ' + message);
console.log('Invalid: ' + invalidChar);