/*const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
 */
let firstNumber = null;
let secondNumber = null;
let operator = null;
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

function numberButtonCallback(e) {
   
    if (plusOperator === null) {
        getFirstNumber(e.target.value);
        console.log('This is the firstNumber', firstNumber);
        renderInput(firstNumber);
    } else {
        getSecondNumber(e.target.value);
        console.log('This is the secondNumber', secondNumber);
        renderInput(secondNumber);
    }
   } 
buttonOne.addEventListener('click', numberButtonCallback);
buttonTwo.addEventListener('click', numberButtonCallback);

plus.addEventListener('click', (e) => {
    plusOperator = e.target.value;
        console.log('This is the plusOperator value', plusOperator);
    });
equal.addEventListener('click', (e) => {
    const result = parseFloat(firstNumber) + parseFloat(secondNumber);
    display.value = result;
    console.log('Your result is', result);
    firstNumber = null;
    secondNumber = null;
    plusOperator = null;

});

clear.addEventListener('click', (e) => {
        display.value = 0;
        firstNumber = null;
        secondNumber = null;
        plusOperator = null;
})
function renderInput(args) {
    display.value = args;
    console.log(args);
};

console.log('plusOperator value =', plusOperator);