const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
let firstNumber = null;
let secondNumber = null;
let theOperator = null;
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
        number = e.target.value
        renderInput(number);
        /*if (operator !== null) {
            getSecondNumber(e.target.value);
            display.value = renderInput(secondNumber);
        } else {
            getFirstNumber(e.target.value);
            renderInput(firstNumber);
        }*/
        console.log('this is the first number', firstNumber);
        console.log('this is the target value', e.target.value);
    });
}

for (let i =0; i < operators.length; i++) {
    let theOperator = operators[i];

theOperator.addEventListener('click', (e) => {
     
    console.log(e.target.value);
    });
}

equal.addEventListener('click', (e) => {

    display.value = calculate();
})

function clearDisplay() {
    clear.addEventListener('click', (e) => {
        display.value = 0;
        firstNumber = null;
        secondNumber = null;
        theOperator = null;
    })
};

function renderInput(args) {
    display.value = args;
    console.log(args);
};

function calculate(firstNumber, secondNumber, operator) {
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





 
