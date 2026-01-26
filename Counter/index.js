const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const reset = document.getElementById("reset");
const count = document.getElementById("count");

let number = 0;

plus.onclick = function(){
    number++;
    count.textContent = number;
}
minus.onclick = function(){
    number--;
    count.textContent = number;
}
reset.onclick = function(){
    number=0;
    count.textContent = number;
}