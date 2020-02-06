/*const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
 */
let firstNumber = null;
let secondNumber = null;
let plusOperator = null;
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

   firstNumber === null ? firstNumber = e.target.value : firstNumber += e.target.value;
       //getFirstNumber(firstNumber);
       console.log('This is the target value', firstNumber);
       renderInput(firstNumber);
       /*if(firstNumber !== null && plusOperator !== null) {
        e.target.value = secondNumber;
       renderInput(e.targe.value);
      }*/
   
   } 
buttonOne.addEventListener('click', numberButtonCallback);
buttonTwo.addEventListener('click', numberButtonCallback);


/*buttonOne.addEventListener('click', (e) => {
    getFirstNumber(e.target.value);
    renderInput(firstNumber);
    console.log('this is the first number', firstNumber);
    console.log('this is the target value', e.target.value);
});
buttonTwo.addEventListener('click', (e) => {
        display.value = 0;
        if(plus !== null) {getSecondNumber(e.target.value);
        renderInput(secondNumber);
        console.log('This is the second number', secondNumber);
        console.log('This is the target value', e.target.value);
        };
});*/
plus.addEventListener('click', (e) => {
    let plusOperator = e.target.value;
        console.log(plusOperator);
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