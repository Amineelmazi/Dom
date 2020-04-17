var button = document.getElementById("enter") ;
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deletebutton = document.getElementsByClassName("Delete");


for (var i = 0; i < deletebutton.length; i++) {
	deletebutton[i].addEventListener("click" , removeParent);
};

function removeParent (evt) {
	evt.target.removeEventListener("click", removeParent);
  	evt.target.parentNode.remove();
};





function inputLength () {
	return input.value.length;
};

function createListElements () {
	var btn = document.createElement("button");
	btn.innerHTML = "Delete";
	btn.onclick = removeParent;

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(btn);

	ul.appendChild(li);
	input.value="";

}

function addListAfterClick () {

	if (inputLength() >= 1) {
	createListElements();
	}
};

function addListAfterkeypress (event) {
	if (inputLength() >= 1 && event.keyCode ===13) {
	createListElements();

	}
};

button.addEventListener("click" , addListAfterClick);

input.addEventListener("keypress", addListAfterkeypress );




