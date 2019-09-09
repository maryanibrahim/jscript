const firstPerson = ['ibrahim', 'youssef', 'sinclair street', 32];
const secondPerson = ['mark', 'botros', 'sinclair Street', 4]


    const resultFirstPerson = firstPerson.reduce(function (firstPerson) {
        return firstPerson + secondPerson;
    });

    const resultSecondPerson = secondPerson.reduce(function (secondPerson) {
        return secondPerson + firstPerson;
    });

    if (resultFirstPerson === resultSecondPerson) {
        console.log('They are the same person.')
    } else {
        console.log('They are not the same person.')
    }