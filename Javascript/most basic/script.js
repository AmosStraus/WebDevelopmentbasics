function sayHello() {
	console.log("Hello");
}

var sayBye = function() {
	console.log("Bye");
}

function sing(song){
	alert(song);
}

sayHello();
sayBye();
sing(prompt("Enter a song name: "));

var todos = [
	"clean room",
	"brush teeth",
	"exercise",
	"study javascript",
	"eat healthy"
];

var todos2 = [
	"smoke weed",
	"wear tweed"
];

function logTodos(item, i){
	console.log(i+1+". "+item);
}
// print the array //
todos.forEach(function(item, i) {
	console.log(i+1+" "+item);
})

todos.forEach(logTodos);
todos2.forEach(logTodos);