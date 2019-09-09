const mutants = 
[
    `Professor X`,
    `Cyclops`,
    `Iceman`,
    `Angel`,
    `Magneto`,
    `Beast`,
    `Phoenix`,
    `Logan`,
    `Gambit`,
];

 const removedMutants = mutants.filter(function(mutants) {
   return (mutants !== 'Magneto') && (mutants !== 'Iceman') && (mutants !== 'Gambit');
 })
console.log(removedMutants);
