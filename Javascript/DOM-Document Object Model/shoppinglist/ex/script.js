var enterButton = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.getElementById("list1");
var counter = 1;

function verifyInput() {
	return input.value.length > 0;
}



function addButton(parent, title) {
	var newButton = document.createElement("button");
	newButton.appendChild(document.createTextNode(title));
	newButton.classList.add("coolbtn");
	parent.appendChild(newButton);
	if(title === "Done"){
		newButton.addEventListener("click", function() {
			parent.children[0].classList.toggle("done");
		});
	} else if(title === "Delete") {
		newButton.addEventListener("click", function(){ 
			parent.remove();
		});
	} else if(title === "MakeMeCool"){
		newButton.addEventListener("click", function(){
			parent.classList.toggle("coolTitle");
		});
	}
}

function addListElement() {
	var li = document.createElement("li");
	let div = document.createElement("div");
	let p = document.createElement("p");
	p.appendChild(document.createTextNode(input.value[0].toUpperCase() + 
		input.value.substring(1, input.value.length)));
	div.appendChild(li);
	li.appendChild(p);
	addButton(li,"Done");
	addButton(li,"Delete");
	addButton(li,"MakeMeCool");
	ul.appendChild(div);
	li.classList.toggle("list-item");
	input.value = ""; 
}

function addItemOnClick(){
	if(verifyInput()){
		addListElement();
	}
}

function addItemOnEnter(event){
	if(verifyInput() > 0 && event.keyCode == 13){
		addListElement();
	}
}

// adding with button clicks //
enterButton.addEventListener("click", addItemOnClick);

// the enter keycode is 13! //
input.addEventListener("keypress", addItemOnEnter);