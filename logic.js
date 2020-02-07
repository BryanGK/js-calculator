const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
let firstNumber = null;
let secondNumber = null;
let operator = null;
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

    digit.addEventListener('click', numberButtonCallback);
}

function numberButtonCallback(e) {
   
    if (operator === null) {
        getFirstNumber(e.target.value);
        console.log('This is the firstNumber', firstNumber);
        renderInput(firstNumber);
    } else {
        getSecondNumber(e.target.value);
        console.log('This is the secondNumber', secondNumber);
        renderInput(secondNumber);
    }
   } 

for (let i =0; i < operators.length; i++) {
   let theOperator = operators[i];
   console.log(theOperator.value);

theOperator.addEventListener('click', (e) => {
    operator = e.target.value
    console.log('operator =', operator);
    });
}

equal.addEventListener('click', (e) => {

    renderInput(calculate());
})

function clearDisplay() {
    clear.addEventListener('click', (e) => {
        display.value = 0;
        firstNumber = null;
        secondNumber = null;
        operator = null;
    })
};

function renderInput(args) {
    display.value = args;
    console.log(args);
};

function calculate(firstNumber, secondNumber) {
    switch (operator) {
        case '+':
            display.value = firstNumber + secondNumber
            break;
        case '-':
            display.value = firstNumber - secondNumber
            break;
        case '*':
            display.value = firstNumber * secondNumber
            break;
        case '/':
            display.value = firstNumber / secondNumber
            break;
        default:
            display.value = 0;
    }
};


clearDisplay();

console.log('operator =', operator);



 
