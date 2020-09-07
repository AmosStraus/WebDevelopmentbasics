// cloning //
let obj = {
	a: "pita",
	b: "cracker",
	c: {
		deeper: "bagutte"
	}
};
// same object different ref //
let ref = obj;

// SHALLOW CLONING //
// one way //
let clone = Object.assign({}, obj);
// second way //
let clone2 = {...obj};

// DEEP copy //
let superClone = JSON.parse(JSON.stringify(obj));


// Change some stuff //
obj.c.deeper = "bun roll"; // changes all but deep copy
obj.a = "fokacha";         // changes reference
clone.a = "change";
clone.b = "change";
clone.c = "change";

console.log("org", obj);
console.log("ref", ref);
console.log("clone1", clone);
console.log("clone2", clone2);
console.log("superClone", superClone);