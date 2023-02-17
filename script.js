/*
BROAD OVERVIEW OF TASKS
Create calculator functions +-/*
Create the appearance of the calculator with html and css
Use DOM methods to link JS calculator functions with button clicks created from html and css

Extra:
Add functionality to use keyboard to input things into the calculator
Add a 'backspace' functionality that allows users to delete inputted numbers 
Add functionality to calculate floating point numbers (decimals?) like 10.3 but not do numbers like 10.1.2
*/

/*
TASK TO ATTEMPT
create a 'screen'
create buttons for numbers that when clicked -> will display on the screen

create a + and = button that will add two numbers together and when = button is pressed, displays the result on the screen 
*/

/*
create a + and = button that will add two numbers together
when = button is pressed, displays the result on the screen 
next: add a - button, result number can be minused (i.e. even after being added)
*/

const display = document.querySelector('.display');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const plus = document.querySelector('.plus');
const equals = document.querySelector('.equals');
//there might be a way to not repeat myself so much, there's going to be a lot of querySelectors 

let screen = 0;
let memory;

one.addEventListener('click', () => {
    display.textContent = screen + '1';
    memory = 1;
});

two.addEventListener('click', () => {
    display.textContent = screen + '2';
    memory = 2;
});

three.addEventListener('click', () => {
    display.textContent = screen + '3';
});

plus.addEventListener('click', () => {
    //adds a + to the variable
});

equals.addEventListener('click', () => {
    //
});

/* PSEUDOCODE
input 12 then + button then input 13 then = button, result display is 25

(create a loop that creates variables??) -> apparently this is creating an array 

each number button press is a string number '1' or '2' or '3' etc. to allow them to be joined together

let n = [];
n[0], n[1]

//first button presses are stored in n[0]
n[0] = 0;   //not sure if initialising variable to 0 is necessary or not
    n[0] = n[0] + '1';
    n[0] = n[0] + '2';

//when + button is pressed the next button presses are stored in n[1]

let n[1] = 0;
    n[1] = n[1] + '3';

when = button or another operator button (+ - / *) is pressed a calculation is performed like:
+n[0] + +n[1];

*/
  

/* Sample Code for Creating multiple item Array using a loop 
function createVariables(){
  var accounts = [];

  for (var i = 0; i <= 20; ++i) {
      accounts[i] = "whatever";
  }

  return accounts;
}
*/