var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var bodyBackground = document.querySelector(".background-gradient");
var textInput = document.getElementById("userinput");

console.log(css);
console.log(color1);
console.log(color2);

function addListAfterKeypress(event) {
	if (textInput.value.length > 0 && event.keyCode === 13) {
		css.textContent = textInput.value;
	}
}

textInput.addEventListener("keypress", addListAfterKeypress);

color1.addEventListener("input", function() {
	css.textContent = color1.value + ";";
})