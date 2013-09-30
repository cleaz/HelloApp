function displayResult(){
	var textContainer = document.getElementById("textContainer");
	var text = document.createTextNode("Hello " + document.getElementById("text").value + "! Have a nice day");
	while(textContainer.firstChild){
		textContainer.removeChild(textContainer.firstChild);
	}
	textContainer.appendChild(text);
}