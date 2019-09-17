function add() {
    var step = 0;
    var result = 0;

    for (step; step < arguments.length; step++) {
        result += arguments[step];
    }
    console.log(result);
}

add(1, 2, 3, 4, 5);
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);