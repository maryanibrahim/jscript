const tripExpenses = [1000,1500,500];

const hotelFees = tripExpenses[0];
const tripFees = tripExpenses[1];
const mealsFees = tripExpenses[2];

const budget  = tripExpenses.reduce(function(accumulator,currentValue) {
    return accumulator + currentValue;
});

console.log(`hotel: ${hotelFees}, trip: ${tripFees}, meals: ${mealsFees}`);
console.log('Total trip budget: '+ budget)