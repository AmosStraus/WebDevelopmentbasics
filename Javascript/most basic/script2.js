// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
var user1 = {
	username: "Nahlieli",
	password: "1234",
};

var user2 = {
	username: "Mitch",
	password: "1234",
};

var user3 = {
	username: "ingrid",
	password: "supersecret"
}

var user4 = {
	username: "sally",
	password: "123"
}
// 2. Create an array which contains the object you have made above and name the array "database".
var database = [user1, user2, user3, user4];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsfeed = [
	{
		username: "Nahlieli",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	},
	{
		username: "Sally",
		timeline: "That's right"
	}
];

var userNamePrompt = prompt("Username: ");
var passwordPrompt = prompt("password: ");

function isUserValid(user, pass) {
	// same as for(i in database)) //
	for (var i=0; i<database.length; i++){
		if (database[i].username === user && database[i].password === pass){
			return true;
		}
	}
	return false;
}

function signIn(user,pass) {
	if(isUserValid(user,pass)){
		console.log(newsfeed);
	}
	else{
		alert("Wrong username or password");
	}
}

signIn(userNamePrompt, passwordPrompt);