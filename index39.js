const firstName = 'maryan';
const lastName = 'ibrahim';

const firstNameCount = firstName.length;
const lastNameCount = lastName.length;
const charsDiff = lastNameCount-firstNameCount;
const lastminfirst = lastNameCount<firstNameCount;

console.log('My name is '+firstName+ 'and it is '+firstNameCount+ ' characters long');
console.log('My last name is ' +lastName+ ' and it is '+lastNameCount+ ' characters long');
console.log('The character difference between my first name and last name is: ' + charsDiff);
console.log('My first name is longer than my last name: ' + lastminfirst );