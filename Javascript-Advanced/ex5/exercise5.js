// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const excitedArray = [];
array.forEach(person => {
  let {username, team, score, items} = person;
  username += "!";
  excitedArray.push({username, team, score, items});
  });
console.log(excitedArray);

//Create an array using map that has all the usernames with a "? to each of the usernames

const askingArray = array.map(person => {
  let {username, team, score, items} = person;
  username += "?";
  return {username, team, score, items};
});
console.log(askingArray);
//Filter the array to only include users who are on team: red
const filteredArray = array.filter(person => person.team === "red");
console.log(filteredArray);

//Find out the total score of all users using reduce
let totalScore = array.reduce((accumulator, person) => accumulator + person.score, 0);
console.log(totalScore);

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	// console.log(num, i);
	// alert(num);
	return num * 2;
})

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const bonusArray = array.map((user1) => {
  let user = {...user1};
  let {username, team, score, items} = user;
  user.items = items.map(item => item+"!");
  console.log(items);
  return user;
  }
);

console.log(bonusArray);

const bonus2 = array.map(user => {
  let clone = {...user};
  clone.items = clone.items.map(item => { return item +"!"});
  return clone;
});
console.log(bonus2);

bonus2.forEach(user => {user.items.forEach(item => console.log(item))});
bonusArray.forEach(user => {user.items.forEach(item => console.log(item))});
array.forEach(user => {user.items.forEach(item => console.log(item))});