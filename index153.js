const arithmetic  = {
    add : function (number1, number2) {
        return confirmtype(number1,number2) ? number1 + number2 : 'Parameters need to be numbers'; 
    },
    subtract: function (number1, number2) {
        return confirmtype(number1,number2) ? number1 - number2 : 'Parameters need to be numbers'; 
    },
    multiply: function (number1, number2) {
        return confirmtype(number1,number2) ? number1 * number2 : 'Parameters need to be numbers'; 
    },
    divide: function (number1, number2) {
        return confirmtype(number1,number2) ? number1 / number2 : 'Parameters need to be numbers'; 
    },
    remainder: function (number1, number2) {
        return confirmtype(number1,number2) ? number1 % number2 : 'Parameters need to be numbers'; 
    },
}

const confirmtype = function (number1, number2) {
    return typeof number1 === 'number' && typeof number2 === 'number' ? true : false;
}

console.log('2 + 10  =', arithmetic.add(2, 10));
console.log('10 - 5  =', arithmetic.subtract(10, 5));
console.log('3 * 100  =', arithmetic.multiply(3, 100));
console.log('40 / 2  =', arithmetic.divide(40, 2));
console.log('20 % 2  =', arithmetic.remainder(20, 2));