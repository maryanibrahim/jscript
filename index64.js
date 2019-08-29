const name = 'MARYAN';

if (name == null) {
  console.log('Please input a valid name'); //falsy
 
} else {
  console.log('Your name is: ' + name); //truthy
}

// The program checks for name wether it is null or not.
// If it is null, it asks user to enter a valid name. if the name is valid, it shows the name