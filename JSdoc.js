
//change background of bosy to red
document.body.style.backgroundColor = "red";

//Change the background color of just the "about me" portion to blue
document.querySelector("h1").style.backgroundColor = "blue";
document.querySelector("h1").style.color = "white";

//Change the font-style of the entire document to sans-serif
document.querySelector("html").style.fontFamily = "sans-serif";

//Add your nickname
document.getElementById("nickname").innerHTML = "dmakk767";

//Add your favorites
document.getElementById("favorites").innerHTML = "Poker and Coding";

//Add your hometown
document.getElementById("hometown").innerHTML = "Flint";


//EXTRA CREDIT
//************************************
//Iterate through each li and change the class to "listitem".
var items = document.getElementsByTagName("li");
	for (var i = 0; i<items.length; i++){
		items[i].className = "listitem";		
	}
	
// Add a style tag that sets a rule for "listitem" to make the color red.
var x = document.getElementsByClassName("listitem");
for (i = 0; i < x.length; i++) {
	x[i].style.color = "red";
	x[i].style.backgroundColor = "green";
}

//Create a new img element and set its src attribute to a picture of you. Append that element to the page.
var pic =document.createElement("img");
pic.setAttribute("src", "me.jpg");
pic.style.marginLeft = "50px";
document.querySelector("body").append(pic);

