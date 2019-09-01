function biggerNumber(firstNumber, secondNumber) {
    if (firstNumber > secondNumber) {
      console.log(`${firstNumber} is bigger than ${secondNumber}`)

    } else if (secondNumber > firstNumber) {
      console.log(`${secondNumber} is bigger than ${firstNumber}`)

    } else if (firstNumber === secondNumber) {
      console.log(`both numbers are ${firstNumber}`)

    } else if (typeof firstNumber != 'number' || typeof secondNumber != 'number') {
      console.log(`Not a number`)
    }
  }

biggerNumber(6, 3);

biggerNumber(2, 2);

biggerNumber(123, 'test');