let varOne;
let varTwo;

function equalityCompare(a, b) {
    if(a == b) {
        console.log(a + " and " + b + " are equal");
    }else {
        console.log(a + " and " + b + " are NOT equal");
    }
}

function degreeConversion(a){
    if (typeof a == "number") {
        let tmpr = ((a-32)*5)/9;
        return tmpr;
    }else {
        return false;
    }
}

varOne = 'hello';
varTwo = 'hello';
equalityCompare(varOne, varTwo);
varOne = 'hell';
varTwo = 20;
equalityCompare(varOne, varTwo);

varOne = 32;
console.log(varOne +" Fahrenheit in Celsius is: " + degreeConversion(varOne));
varOne = '32';
console.log(degreeConversion(varOne));