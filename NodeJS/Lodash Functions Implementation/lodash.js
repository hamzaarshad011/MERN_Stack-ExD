const _ = require("lodash");
// forEach
const arr = ["foo", "bar", "baz"];

_.forEach(arr, (item) => {
  console.log("Using forEach() function of lodash", item);
});

//.map()
const arr1 = [1, 2, 3];

const result1 = _.map(arr1, (item) => {
  return item * 2;
});

console.log("Using Map() function of lodash", result1);

//.filter()
const arr2 = [1, 2, 3, 4, 5];

const result2 = _.filter(arr2, (item) => {
  return item % 2 === 0;
});

console.log("Using Filter function of lodash", result2);

//. reduce()
const arr3 = [1, 2, 3, 4, 5];

const result3 = _.reduce(
  arr3,
  (sum, item) => {
    return sum + item;
  },
  0
);

console.log("Using Reduce function of lodash", result3);

//.find()
const arr4 = [1, 2, 3, 4, 5];

const result4 = _.find(arr4, (item) => {
  return item % 2 === 0;
});

console.log("Using Find function of lodash", result4);

//.sortBy()

const arr5 = ["apple", "banana", "cherry"];

const result5 = _.sortBy(arr5, (item) => {
  return item.length;
});

console.log(result5);
