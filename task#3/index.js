const user1 = {
  firstName: "user1",
  lastName: "1",
  age: 46,
  gender: "male",
  lastOrderDate: "feb",
  totalOrders: 5,
};
const user2 = {
  firstName: "user2",
  lastName: "2",
  age: 25,
  gender: "male",
  lastOrderDate: "March",
  totalOrders: 16,
};
const user3 = {
  firstName: "user3",
  lastName: "3",
  age: 19,
  gender: "male",
  lastOrderDate: "March",
  totalOrders: 61,
};
const user4 = {
  firstName: "user4",
  lastName: "4",
  age: 66,
  gender: "male",
  lastOrderDate: "March",
  totalOrders: 90,
};
const user5 = {
  firstName: "user5",
  lastName: "5",
  age: 29,
  gender: "male",
  lastOrderDate: "March",
  totalOrders: 15,
};
const user6 = {
  firstName: "user6",
  lastName: "6",
  age: 56,
  gender: "male",
  lastOrderDate: "March",
  totalOrders: 40,
};
const user7 = {
  firstName: "user7",
  lastName: "7",
  age: 33,
  gender: "male",
  lastOrderDate: "March",
  totalOrders: 16,
};
const user8 = {
  firstName: "user8",
  lastName: "8",
  age: 36,
  gender: "male",
  lastOrderDate: "March",
  totalOrders: 210,
};
const user9 = {
  firstName: "user9",
  lastName: "9",
  age: 26,
  gender: "male",
  lastOrderDate: "March",
  totalOrders: 20,
};
const user10 = {
  firstName: "user10",
  lastName: "10",
  age: 41,
  gender: "male",
  lastOrderDate: "March",
  totalOrders: 105,
};

let users = [
  user1,
  user2,
  user3,
  user4,
  user5,
  user6,
  user7,
  user8,
  user9,
  user10,
];
function addOneToAges(users) {
  const newUsers = users.map((user) => {
    return { ...user, age: user.age + 1 };
  });
  return newUsers;
}

// const updatedUsers = addOneToAges(users);
// console.log(updatedUsers);


  
  // 2. Return an array of all users with total orders greater than a given number
  function getUsersWithTotalOrdersGreaterThan(usersValues, minTotalOrders) {
    const filteredUsers = usersValues.filter((user) =>{
      console.log(user.totalOrders>50);
      
      return user.totalOrders > 50 
    }

    //    user.totalOrders > minTotalOrders
        );
        return filteredUsers
  }
  
  
  const usersWithTotalOrdersGreaterThan = getUsersWithTotalOrdersGreaterThan(users, 25);
  console.log("users that give more orders than",usersWithTotalOrdersGreaterThan); 
  
  // 3. Find the first user with total orders greater than a given number
  function findFirstUserWithTotalOrdersGreaterThan(users, minTotalOrders) {
    const foundUser = users.find(user => user.totalOrders > minTotalOrders);
    return foundUser;
  }
  
  // const firstUserWithTotalOrdersGreaterThan = findFirstUserWithTotalOrdersGreaterThan(users, 25);
  // console.log(firstUserWithTotalOrdersGreaterThan); 
  