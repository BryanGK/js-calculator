const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
const display = document.querySelector('.display');
let result = 0;

function displayNumber(number) {

}
//detect and render the digit that has been pressed

for(let i = 0; i < digits.length; i++) {
    let theDigit = digits[i];

    theDigit.addEventListener('click', (e) => {
        console.log(theDigit);
        theDigit = e.target.value;
        display.innerHTML = theDigit;
    })
}
