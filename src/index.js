
exports.min = function min (array) {
    if (typeof array === "undefined" || array.length < 1) {
        return 0;
    }

    let firstNumber = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < firstNumber) {
            firstNumber = array[i];
        }
    }

    return firstNumber;
}

exports.max = function max (array) {
    if (typeof array === "undefined" || array.length < 1) {
        return 0;
    }

    let firstNumber = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > firstNumber) {
            firstNumber = array[i];
        }
    }

    return firstNumber;

}

exports.avg = function avg (array) {
    if (typeof array === "undefined" || array.length < 1) {
        return 0;
    }

    let sum = array.reduce(function(a, b) {
        return a + b;
    });

    return sum/array.length;

}
