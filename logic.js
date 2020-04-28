const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
let firstNumber = null;
let secondNumber = null;
let operator = null;
let equals = false;
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

    digit.addEventListener('click', function(e) {
      
         if (operator === null) {
             getFirstNumber(e.target.value);
             console.log('This is the firstNumber', firstNumber);
             renderInput(firstNumber);
         } else {
             getSecondNumber(e.target.value);
             console.log('This is the secondNumber', secondNumber);
             renderInput(secondNumber);
         }
         let point = document.getElementById("decimal");
        point.value = ".";
         if(firstNumber.includes(".")) {
          point.value = "";
        }
     else {
          point.value = ".";
        }
        if(secondNumber !== null && secondNumber.includes(".")) {
            point.value = ""; 
        }
        else {
            point.value = ".";
        }
    }
    )};
        



// function numberButtonCallback(e) {

//    } 

for (let i =0; i < operators.length; i++) {
   let theOperator = operators[i];
   console.log(theOperator.value);

theOperator.addEventListener('click', (e) => {
    operator = e.target.value;
    console.log('operator =', operator);
    });
}

equal.addEventListener('click', (e) => {

    renderInput(calculate(firstNumber, secondNumber));  
    firstNumber = display.value;
    secondNumber = null;
    console.log('display value is ', display.value);
    console.log('current firstNumber value is ', firstNumber);
    console.log('current secondNumber value is ', secondNumber);
});

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

    let num1 = parseFloat(firstNumber);
    let num2 = parseFloat(secondNumber);
    switch (operator) {
        
        case '+':
            display.value = num1 + num2
            break;
        case '-':
            display.value = num1 - num2
            break;
        case '*':
            display.value = num1 * num2
            break;
        case '/':
            display.value = num1 / num2
            break;
        default:
            display.value = 0;
    }
    return display.value;
};


clearDisplay();

console.log('operator value =', operator);




