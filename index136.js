const mutants = ['Professor X', 'Cyclops', 'Iceman', 'Angel', 'Magneto','Beast','Phoenix', 'Logan', 'Gambit' ];

mutants.forEach(function(mutantsName,position) {
    console.log('position', position);
    console.log(mutantsName);
  });

  showMutants('iceman');
  mutants.forEach(showMutants);
  console.log(showMutants);