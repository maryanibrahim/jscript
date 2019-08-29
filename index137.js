const pets = ['Amelia', 'Ciro', 'Ulises', 'Carlos'];

const petsNameInUpperCase = pets.map(function(pet) {
  return pet.toUpperCase();
});

console.log(petsNameInUpperCase) // [ 'AMELIA', 'CIRO', 'ULISES', 'CARLOS' ] new array with all upper cases value
console.log(pets)