let counter = 0;
let countBtn = document.getElementById("count-btn");
let resetBtn = document.getElementById("reset-btn");
let decBtn = document.getElementById("dec-btn");
let counterDisplay = document.getElementById("counter");

countBtn.addEventListener("click", function() {
  counter++;
  counterDisplay.innerHTML = counter;
});
decBtn.addEventListener("click", function() {
  if(counter!==0){
    counter = counter-1;
  }
    
    counterDisplay.innerHTML = counter;
  });
resetBtn.addEventListener("click", function() {
    counter=0;
    counterDisplay.innerHTML = counter;
  });
