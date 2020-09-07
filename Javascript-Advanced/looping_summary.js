var elements = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

// regualr //
for(var i=0 ; i<elements.length ; ++i){
	console.log(elements[i]);
}

// forEach //
elements.forEach(function(element) {
	console.log(element)
	}
);

// forEach + arrowFunction //
 elements.forEach(element => console.log(element));

// for of //
// ITERATING over Array, Strings
for(element of elements){
	console.log(element);
}

const detailedBasket = {
	apples: 5,
	oranges: 10,
	grapes: 100
}
// for in - PROPERTIES //
// enumerating
// prints only the properties of the object 
for(item in detailedBasket){
	console.log(item);
}

for(listItem of Object.entries(detailedBasket)){
    console.log(`buy ${listItem[1]} ${listItem[0]} please`);
}