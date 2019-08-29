const name = 'marta';
let message = null;

switch (name) {
  case 'Miriam':
    message = 'The name is Miriam';
    break;
  case 'Felipa':
    message = 'The name is Felipa';
    break;
  case 'Xime':
    message = 'The name is Xime';
    break;
  case 'Belu':
    message = 'The name is Belu';
    break;
  default:
     message = 'The name is not Marta, Felipa, Xime or Belu';
}

console.log(message);