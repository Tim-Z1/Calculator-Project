//FUNCTIONS FOR EACH OPERATOR
function add(a,b) {
    return a + b;
}
function subtract(a,b) {
    return a - b;
}
function multiply(a,b) {
    return a * b;
}
function divide(a,b) {
    return a / b;
}

//Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
function operate(op,a,b) {
    if (op == 'add') {
       return add(a,b);
    } else if (op == 'subtract') {
        return subtract(a,b);
     } else if (op == 'multiply') {
        return multiply(a,b);
     } else if (op == 'divide') {
        return divide(a,b);
     } else {
        console.log ('oops something went wrong');
     }
}

/* Create the functions that populate the display when you click 
the number buttons. You should be storing the ‘display value’ 
in a variable somewhere for use in the next step.
*/

const one = document.querySelector('.one');
const screen = document.querySelector('.screen');
one.addEventListener('click', () => {
    screen.textContent = '1';
});