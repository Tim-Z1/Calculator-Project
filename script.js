//functions for each operator
function plus(a,b) {
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

//performs one of the four operations based on input and 2 numbers
function operate(op,a,b) {
    if (op == 'plus') {
       return plus(a,b);
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

const screen = document.querySelector('.screen');
const clear = document.querySelector('.clear');
const zero = document.querySelector('.zero');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const equals = document.querySelector('.equals');
const add = document.querySelector('.add');
const minus = document.querySelector('.minus');
const times = document.querySelector('.multiply');
const division = document.querySelector('.divide');

operators();
numberPresses();
let memory = '';
let n1 = '';
let n2 = '';
let operator = '';

//not sure if it's okay to use a function just to bundle the event listeners together (for readability)
function numberPresses() {
    clear.addEventListener('click', () => {
        memory = '';
        n1 = '';
        n2 = '';
        operator = '';
        screen.textContent = '0';
    });
    zero.addEventListener('click', () => {
        if (memory == '') {
            screen.textContent = '0';
        } else {
            memory = memory + '0';
            screen.textContent = memory;
        }
    });
    one.addEventListener('click', () => {
        memory = memory + '1';
        screen.textContent = memory;
    });
    two.addEventListener('click', () => {
        memory = memory + '2';
        screen.textContent = memory;
    });
    three.addEventListener('click', () => {
        memory = memory + '3';
        screen.textContent = memory;
    });
    four.addEventListener('click', () => {
        memory = memory + '4';
        screen.textContent = memory;
    });
    five.addEventListener('click', () => {
        memory = memory + '5';
        screen.textContent = memory;
    });
    six.addEventListener('click', () => {
        memory = memory + '6';
        screen.textContent = memory;
    });
    seven.addEventListener('click', () => {
        memory = memory + '7';
        screen.textContent = memory;
    });
    eight.addEventListener('click', () => {
        memory = memory + '8';
        screen.textContent = memory;
    });
    nine.addEventListener('click', () => {
        memory = memory + '9';
        screen.textContent = memory;
    });
}

function operators(){
equals.addEventListener('click', () => {    //memory is '' or '1' depending on operator to fix an issue of multiply/divide resulting in 0 (2*5=10* causes display to be 0)
    if (operator == 'plus' || operator == 'subtract') {
        n2 = memory;
        memory = operate(operator,+n1,+n2);
        screen.textContent = memory;
        n1 = memory;
        memory = '';
    } else {
        n2 = memory;
        memory = operate(operator,+n1,+n2);
        screen.textContent = memory;
        n1 = memory;
        memory = '1';
    }
});
add.addEventListener('click', () => {
    if (operator == '') {
        n1 = memory; 
        operator = 'plus';
        memory = '';
    } else {
        n2 = memory;
        memory = operate(operator,+n1,+n2)
        screen.textContent = memory;
        n1 = memory;
        operator = 'plus'; 
        memory = '';  
    }
});
minus.addEventListener('click', () => {
    if (operator == '') {
        n1 = memory; 
        operator = 'subtract';
        memory = '';
    } else {
        n2 = memory;
        memory = operate(operator,+n1,+n2)
        screen.textContent = memory;
        n1 = memory;
        operator = 'subtract'; 
        memory = '';  
    }
});
times.addEventListener('click', () => {
    if (operator == '') {
        n1 = memory; 
        operator = 'multiply';
        memory = '';
    } else {
        n2 = memory;
        memory = operate(operator,+n1,+n2)
        screen.textContent = memory;
        n1 = memory;
        operator = 'multiply'; 
        memory = '';  
    }
});
division.addEventListener('click', () => {
    if (operator == '') {
        n1 = memory; 
        operator = 'divide';
        memory = '';
    } else {
        n2 = memory;
        memory = operate(operator,+n1,+n2)
        screen.textContent = memory;
        n1 = memory;
        operator = 'divide'; 
        memory = '';  
    }
});
}

/* Bugs to Address
Multiple presses of an operator button
    pressing an operator multiple times shouldn't be allowed (i.e. should not compute anything)
    it doesnt change when pressing + or - multiple times but it does change when pressing * or /
    pressing = multiple times causes memory to become '' resulting in no display
Overflowing Display Screen
    long decimals or manually pressing more than 14 numbers causes display screen numbers to overflow out of screen

(not a bug but) TOP asks to display a msg if trying to divide by 0, it doesnt crash my calc but it displays Infinity
*/

/* Extra features that may be worth adding
Display screen fully shows current calculation at the top e.g.
5+3 =
8
Decimal button to calculate decimals
Backspace button to delete inputs
Keyboard support: using keyboard works to enter in numbers (and maybe also operators too?)
*/