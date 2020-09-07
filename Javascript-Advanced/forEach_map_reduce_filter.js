const array = [1,2,10,16];

// Array.from() //
const powerArray = Array.from(array, (x,i) => x*x);
const doubleArray = [];

// forEach
array.forEach(num => doubleArray.push(num+num)); //this one no return

// map
const mapArray = array.map(num => num*3);        // here we return

// filter
const filterArray = array.filter(num => num>5);

// reduce
let sumArray = (array) => array.reduce((accumulator, num) => accumulator + num, 0);
const reduceArray1 = sumArray(array);
const reduceArray2 = sumArray(powerArray);
const reduceArray3 = sumArray(doubleArray);

console.log("powerArray", powerArray);
console.log("doubleArray", doubleArray);
console.log("mapArray", mapArray);
console.log("filterArray", filterArray);
console.log("sum1", reduceArray1);
console.log("sum2", reduceArray2);
console.log("sum3", reduceArray3);


