# Projects Related to DOM

## project link 
[Click here](https://stackblitz.com/edit/stackblitz-starters-3ykykf?file=package.json)

# Solution code
## project 1

```javascript
const getNewColor = () => {
  //for box 1
  const rand_num1 = Math.floor(Math.random() * 16777215);
  const rand_hex_code1 = '#' + rand_num1.toString(16);
  const color_box1 = document.getElementById('grey'); //fetching id
  console.log(color_box1);
  // console.log(color_box1.textContent)
  color_box1.innerText = rand_hex_code1;
  color_box1.style.backgroundColor = color_box1.innerText; //setting hexa code in the box
  color_box1.style.color = '#fff';
  // console.log(rand_hex_code1);

  //for box 2
  const rand_num2 = Math.floor(Math.random() * 16777215);
  const rand_hex_code2 = '#' + rand_num2.toString(16);
  const color_box2 = document.getElementById('white'); //fetching id
  console.log(color_box2);
  // console.log(color_box2.textContent)
  color_box2.style.backgroundColor = rand_hex_code2; //setting hexa code in the box
  color_box2.style.color = '#fff';
  color_box2.innerText = rand_hex_code2;
  // console.log(rand_hex_code2);

  //for box 3
  const rand_num3 = Math.floor(Math.random() * 16777215);
  const rand_hex_code3 = '#' + rand_num3.toString(16);
  const color_box3 = document.getElementById('blue'); //fetching id
  // console.log(color_box3.textContent)
  color_box3.style.backgroundColor = rand_hex_code3; //setting hexa code in the box
  color_box3.style.color = '#fff';
  color_box3.innerText = rand_hex_code3;
  // console.log(rand_hex_code3);

  //for box 4
  const rand_num4 = Math.floor(Math.random() * 16777215);
  const rand_hex_code4 = '#' + rand_num4.toString(16);
  const color_box4 = document.getElementById('yellow'); //fetching id
  // console.log(color_box4.textContent)
  color_box4.style.backgroundColor = rand_hex_code4; //setting hexa code in the box
  color_box4.style.color = '#fff';
  color_box4.innerText = rand_hex_code4;
  // console.log(rand_hex_code4);
};

const changeButton = document.querySelector('.change_btn');
changeButton.addEventListener('click', getNewColor);
const btn = document.querySelectorAll('.button');
console.log(btn);
const body = document.querySelector('body');
btn.forEach((btn) => {
  console.log(btn);
  btn.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target);
    if (e.target.innerText === document.getElementById('grey').innerText) {
      //target from event listener is getting compared to the inner text of the color box
      body.style.backgroundColor = e.target.innerText; //setting the body bg color as the inner text of the color box
    }
    if (e.target.innerText === document.getElementById('white').innerText) {
      body.style.backgroundColor = e.target.innerText;
    }
    if (e.target.innerText === document.getElementById('blue').innerText) {
      body.style.backgroundColor = e.target.innerText;
    }
    if (e.target.innerText === document.getElementById('yellow').innerText) {
      body.style.backgroundColor = e.target.innerText;
    }
  });
});


```
## Project 2 Solution

```javascript
const form = document.querySelector('form');
form.addEventListener('submit', (inputs) => {
  inputs.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results_value = document.querySelector('.results_value');
  const results_category = document.querySelector('.results_category');
  console.log(height);
  console.log(weight);
  if ((height < 0 || isNaN(height)) && (weight < 0 || isNaN(weight))) {
    results_value.innerHTML =
      '<span>Please enter a valid height and weight</span>';
  } else if (weight < 0 || isNaN(weight)) {
    results_value.innerHTML = '<span>Please enter a valid weight</span>';
  } else if (height < 0 || isNaN(height)) {
    results_value.innerHTML = '<span>Please enter a valid height</span>';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results_value.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      results_category.innerHTML = `<span>Under Weight</span>`;
      results_category.style.color = 'red';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      results_category.innerHTML = `<span>Normal Weight</span>`;
      results_category.style.color = 'rgb(18 255 0)';
    } else {
      results_category.innerHTML = `<span>Over Weight</span>`;
      results_category.style.color = 'red';
    }
  }
});
// console.log(document.querySelector('.bmiCalculator').parentElement)
````
## Project 3 Solution

```javascript

const clock = document.querySelector('.clock');
console.log(clock);
setInterval(function(){
  let date=new Date();
  clock.innerHTML=date.toLocaleTimeString()
},1000)

```
## Project 4 Solution

```javascript
let random = parseInt(Math.random() * 100 + 1);
console.log(random);
const sumbit = document.querySelector('#btn');
const user_input = document.querySelector('#guessfield');
const guess_slots = document.querySelector('.guesses');
const guess_remaining = document.querySelector('.remaining');
const lowOrhigh = document.querySelector('.loworhigh');
const start_over = document.querySelector('.results');
const p = document.createElement('p');
let noofGuesses = 10;
guess_remaining.innerHTML = `${noofGuesses}`;
sumbit.addEventListener('click', (e) => {
  e.preventDefault();
  const guess = parseInt(user_input.value);
  console.log('working');
  validateGuess(guess);
});

function validateGuess(guess) {
  //to check the input type
  if (isNaN(guess)) {
    alert('please enter a valid number');
  } else if (guess < 1) {
    alert('please enter a number which is greater than 1');
  } else if (guess > 100) {
    alert('please enter a number which is lesser than 100');
  } else {
    // prevGuess.push(guess);
    if (noofGuesses > 10 || noofGuesses <= 1) {
      if (noofGuesses == 1) {
        //lastcheck
        if (guess === random) {
          noofGuesses--;
          displayGuess(guess);
          displayMessage(`you guessed it right at your last attempt!!`);
          endGame();
        } else {
          noofGuesses--;
          displayGuess(guess);
          displayMessage(`Game Over.Random number was ${random}`);
          endGame();
        }
      } else {
        //extra check if the noofGuesses hit 0 or >10
        noofGuesses--;
        displayGuess(guess);
        displayMessage(`Game Over.Random number was ${random}`);
        endGame();
      }
    } else {
      noofGuesses--;
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  //to check the number is equal to random number or not
  if (guess === random) {
    displayMessage(`you guessed it right`);
    endGame();
  } else if (guess < random) {
    displayMessage(`number is too low`);
  } else displayMessage(`number is too high`);
}
function displayGuess(guess) {
  //to display the number
  user_input.value = '';
  guess_slots.innerHTML += `${guess} `;

  guess_remaining.innerHTML = `${noofGuesses}`;
}
function displayMessage(message) {
  //to display the message
  lowOrhigh.innerHTML = `<h4>${message}</h4>`;
}
function endGame() {
  //ends the game
  user_input.value = '';
  user_input.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = '<h3 id="restart">Restart</h3>';
  start_over.appendChild(p);
  newGame();
}
function newGame() {
  //starts the same game again
  const restart = document.querySelector('#restart');
  restart.style = 'display:flex,justify-content: center ,align-items: center';
  restart.addEventListener('click', (e) => {
    //method 1(easy)
    location.reload();
    //method 2(systematic)
    // random = parseInt(Math.random() * 100 + 1);
    // user_input.removeAttribute('disabled');
    // guess_slots.innerHTML = '';
    // lowOrhigh.innerHTML = '';
    // noofGuesses = 10;
    // guess_remaining.innerHTML = `${noofGuesses}`;
    // start_over.removeChild(p);
  });
}

```
## Project 5 Solution

```javascript
const random_col = function () {
  let color = '#';
  const hex = '0123456789ABCDEF';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  // console.log(color);
  return color;
};
let start;
document.querySelector('.btn_start').addEventListener('click', () => {
  if (start == null) {
    start = setInterval(() => {
      document.body.style.backgroundColor = random_col();
    }, 1000);
  }
  console.log('start');
});
document.querySelector('.btn_end').addEventListener('click', () => {
  clearInterval(start);
  start = null;
  console.log('end');
});

```
## Project 6 Solution

```javascript
const field = document.querySelector('.input_field');
window.addEventListener('keydown', (e) => {
  console.log(e);

  field.innerHTML = `
  <div class='keyboard_table'>
  <table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  </div>`;
});

```