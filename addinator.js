//takes in an array of numbers, and returns the sum 
//of all of the numbers


function addinator(numberArray) {
    var sum = 0
    for (var i = 0; i < numberArray.length; i++) {
        sum += numberArray[i];
    }
    return sum;
}

module.exports = addinator;