const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
let firstNumber = null;
let secondNumber = null;
const display = document.getElementById('display');
const clear = document.querySelector('.clear');
const equal = document.querySelector('.equal-key');


function getFirstNumber(number) {
    firstNumber === null ? firstNumber = number : firstNumber += number;
};

function getSecondNumber(number) {
    secondNumber === null ? secondNumber = number : secondNumber += number;
};

for (let i =0; i < digits.length; i++) {
    let digit = digits[i];

    digit.addEventListener('click', (e) => {
        getFirstNumber(e.target.value);
        renderInput(firstNumber);
        console.log('this is the first number', firstNumber);
        console.log('this is the target value', e.target.value);
    });
}


for (let i =0; i < operators.length; i++) {
    let operator = operators[i];

operator.addEventListener('click', (e) => {
    let theOperator = e.target.value;
    console.log(theOperator);
    });
}

equal.addEventListener('click', (e) => {
    
   // const result = parseFloat(firstNumber) + parseFloat(secondNumber);
   // display.value = result;
    renderInput(calculate());
    console.log('Your result is', result);
})

clear.addEventListener('click', (e) => {
    display.value = 0;
})

function renderInput(args) {
    display.value = args;
    console.log(args);
};

function calculate(firstNumber, secondNumber, operator) {
    switch (operator) {
        case '+':
            result = firstNumber + secondNumber
            break;
        case '-':
            result = firstNumber - secondNumber
            break;
        case '*':
            result = firstNumber * secondNumber
            break;
        case '/':
            result = firstNumber / secondNumber
            break;
        default:
            result = 0;


    }

};




 
