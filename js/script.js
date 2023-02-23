let varOne;
let varTwo;
let op;

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

function basicCalc(a, b , operation) {
    switch(operation) {
        case '/':
            if (a !== 0 && b !== 0) {
                return a / b;
            }else {
                return false;
            }
        case '*':
            return a * b;
        case '+':
            return a + b;
        case '-':
            return a - b;
        default:
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
// when the variable is not a number
varOne = '32';
console.log(degreeConversion(varOne));

varOne = 100;
varTwo = 2;
op = '+';
console.log(basicCalc(varOne, varTwo, op));
// wrong operator
op = 'a';
console.log(basicCalc(varOne, varTwo, op));
// dividing 0 
op = '/';
varOne = 0;
console.log(basicCalc(varOne, varTwo, op));
