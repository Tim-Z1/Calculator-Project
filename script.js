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
FIRST TASK TO ATTEMPT
create a 'screen'
create buttons for numbers that when clicked -> will display on the screen

create a + button that will add two numbers together and display the result on the screen 
*/

/*
step 1: create a 'screen' and buttons of numbers
make a 'screen' container, have a border around the container
    -
make a 'number button' container, have a border around the container

*/

const one = document.querySelector('.one');
const display = document.querySelector('display');

//code not working, work on it next session
one.addEventListener('click', ()=> {
    //code to run here on click of button 1
    display.textContent = '1';
});


  