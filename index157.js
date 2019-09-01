const ps4 = 'PS4';
const xbox = 'Xbox';

const games = [
  {
    name: 'Crash Bandicoot N.Sane Trilogy',
    price: 1060,
    sold: 20,
    console: ps4,
  },
  {
    name: 'Lego Marvel Super Heroes',
    price: 700,
    sold: 25,
    console: xbox,
  },
  {
    name: 'Gta V',
    price: 1449,
    sold: 30,
    console: ps4,
  }
];

const ps4Games = games.filter(game => {
  return game.console === ps4;
});

const xboxGames = games.filter(game => {
  return game.console === xbox;
});

console.log(ps4Games);
console.log(xboxGames);
