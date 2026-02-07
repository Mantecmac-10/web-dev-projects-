const input = document.getElementById('temp');
const result = document.getElementById('result');
const from = document.getElementById('from');
const to = document.getElementById('to');
const btn = document.getElementById('btn');

let temp;

function convert() {
  if ((from.value = 'celsius')) {
    console.log('C');
  } else if ((from.value = 'fahrenheit')) {
    console.log('F');
  }
}
convert();
