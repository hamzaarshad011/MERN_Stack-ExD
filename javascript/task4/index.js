function changeObjectValue(obj, key, value) {

    obj[key] = value;
    return obj;
  }
  const person = { name: 'Jane', age: 30 };
  changeObjectValue(person, 'age', 35);
  console.log(person); 

  
