let menu = prompt("Enter task: \n Comparing Two Variables - type: '1' \n Degree Conversion - type: '2' \n Simple calculator - type: '3'");
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
    if(typeof a === 'number') {
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

switch (menu) {

    case '1':
        varOne = prompt("Enter first variable: ");
        varTwo = prompt("Enter second variable: ");
        equalityCompare(Number(varOne), Number(varTwo));
        break;
    case '2':
        varOne = prompt("Enter Fahrenheit: ");
        console.log(Number(varOne) +" Fahrenheit in Celsius is: " + degreeConversion(Number(varOne)));
        break;
    case '3':
        varOne = prompt("Enter first number: ");
        varTwo = prompt("Enter second number: ");
        op = prompt("Enter operator '+', '-', '*', '/'");
        console.log(basicCalc(Number(varOne), Number(varTwo), op));
        break;
    default:
        console.error("Enter valid option !!!");
        break;

}