/*const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
 */

let firstNumber = null;
let secondNumber = null;

const buttonOne = document.querySelector('.button-one');
const plus = document.querySelector('.plus-button');
const buttonTwo = document.querySelector('.button-two');
const display = document.getElementById('display');
const clear = document.querySelector('.clear');
const equal = document.querySelector('.equal-key');


function getFirstNumber(number) {
    firstNumber === null ? firstNumber = number : firstNumber += number;
};

function getSecondNumber(number) {
    secondNumber === null ? secondNumber = number : secondNumber += number;
};

buttonOne.addEventListener('click', (e) => {
    getFirstNumber(e.target.value);
    renderInput(firstNumber);
    console.log('this is the first number', firstNumber);
    console.log('this is the target value', e.target.value);
});

buttonTwo.addEventListener('click', (e) => {
        getSecondNumber(e.target.value);
        renderInput(secondNumber);
        console.log('This is the second number', secondNumber);
        console.log('This is the target value', e.target.value);
    
});

plus.addEventListener('click', (e) => {
    const plusOperator = e.target.value;
        console.log(plusOperator);
    });

equal.addEventListener('click', (e) => {
    const result = parseFloat(firstNumber) + parseFloat(secondNumber);
    display.value = result;
    console.log('Your result is', result);
})

clear.addEventListener('click', (e) => {
    display.value = 0;
})

function renderInput(args) {
    display.value = args;
    console.log(args);
};




 
