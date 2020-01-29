const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
const display = document.querySelector('.display');
display.innerHTML = 0;
let firstNumber = null;
let secondNumber = null;


//detect and render the digit that has been pressed
for(let i = 0; i < digits.length; i++) {
    let theDigit = digits[i];
    theDigit.addEventListener('click', (e) => {
        
        let firstNumber = `<span> ${theDigit.innerHTML} </span>`
        display.innerHTML = firstNumber;
        
    })

    };

    function calculate() {
        for(let i = 0; i < operators.length; i++) {
            let theOperator = operators[i];

            theOperator.addEventListener('click', (e) =>{
                console.log('This is the operator', theOperator.innerHTML);
            })
            

            if(theOperator === "add") {
               return firstNumber + secondNumber;


            } 
    }};

    calculate();
//detect and render operator that has been pressed
/*for(let i = 0; i < operators.length; i++) {
    let theOperator = operators[i];
    theOperator.addEventListener('click', (e) => {
        
        const operator = `<span> ${theOperator.innerHTML} </span>`
        display.innerHTML = operator;
    })
    };*/
    