const mutants = ['Professor X','Cyclops','Iceman','Angel','Beast','Phoenix','Logan','Gambit'];

mutants.forEach(function(mutantsName) {
    console.log(mutantsName);
  });

  console.log('-------------')

  mutants.push('Magneto')

  const Magneto = mutants.pop();

 const mutantsInUpperCase = mutants.map(function(mutants) {
    return mutants.toUpperCase();
  });

  console.log(mutantsInUpperCase);