const numbers = [];

for (var value = 1000; value >= 1; value--) {
    numbers.push(value);
}

const even = numbers.filter(function (number, index) {
    return ((number % 2 === 0) && (index < 40));
})

const odd = numbers.filter(function (number, index) {
    return (number % 2 === 1) && (index < (numbers.length)) && (index >= (numbers.length - 20));
})

console.log(`even numbers: ${even}`);
console.log(`odd numbers: ${odd}`)