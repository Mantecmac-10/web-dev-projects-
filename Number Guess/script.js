let comment = document.getElementById('ques');

let input = document.getElementById('num');

let submitBtn = document.getElementById('sub');

let resetBtn = document.getElementById('res');

let rand = Math.floor(Math.random() * 10);

submitBtn.addEventListener('click', () => {
  let num = Number(input.value);
  if (num === rand) {
    comment.textContent = 'YOU GUESSED THE RIGHT NUMBER !!';
  } else if (num > rand) {
    comment.textContent = 'TOO HIGH!!';
  } else if (num < rand) {
    comment.textContent = 'TOO LOW!!';
  } else {
    comment.textContent = 'WRONG GUESS !! TRY AGAIN';
  }
});

resetBtn.addEventListener('click', () => {
  comment.textContent = 'Enter a Number from 0 to 9.';
  input.value = '';
  rand = Math.floor(Math.random() * 10);
});
