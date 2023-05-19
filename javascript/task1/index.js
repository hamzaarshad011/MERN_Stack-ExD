function add(num1, num2) {
    return Number(num1) + Number(num2);
  }

  function subtract(num1, num2) {
    return Number(num1) - Number(num2);
  }

  function multiply(num1, num2) {
    return Number(num1) * Number(num2);
  }

  function modulus(num1, num2) {
    return Number(num1) % Number(num2);
  }


  let num1 = prompt("Enter the first number:");
  let operator = prompt("Enter an operator")
  let num2 = prompt("Enter the second number:");
  if(operator==='+'){
    console.log("<h2>Calculator</h2>");
  console.log("<p>Number 1: " + num1 + "</p>");
  console.log("<p>Number 2: " + num2 + "</p>");
  alert("Sum: " + add(num1, num2) + "")
//   console.log("<p>Sum: " + add(num1, num2) + "</p>");

  }
  if(operator==='-'){
    console.log("<h2>Calculator</h2>");
  console.log("<p>Number 1: " + num1 + "</p>");
  console.log("<p>Number 2: " + num2 + "</p>");
  alert("Difference: " + subtract(num1, num2) + "")
//   console.log("<p>Difference: " + subtract(num1, num2) + "</p>");

  }
  if(operator==='*'){
    console.log("<h2>Calculator</h2>");
  console.log("<p>Number 1: " + num1 + "</p>");
  console.log("<p>Number 2: " + num2 + "</p>");
  alert("Product: " + multiply(num1, num2) + "")
//   console.log("<p>Product: " + multiply(num1, num2) + "</p>");
  }
  if(operator==='%'){
    console.log("<h2>Calculator</h2>");
  console.log("<p>Number 1: " + num1 + "</p>");
  console.log("<p>Number 2: " + num2 + "</p>");
  alert("Modulus: " + modulus(num1, num2) + "")
//   console.log("<p>Modulus: " + modulus(num1, num2) + "</p>");

  }

