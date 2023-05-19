function calculateArea(length, width) {
    
    const area = length * width;
  
    return area;
  }
  const length = prompt("Enter length of Rectangle");
  const width = prompt("Enter width of Rectangle ")
  const area = calculateArea(length, width);
  
  alert("The Area of Rectangle:"+ area)
    