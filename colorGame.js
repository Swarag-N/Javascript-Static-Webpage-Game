// alert("Color Game");
var numberOfColors = 6;
var colors = generatingColors(numberOfColors)
var sqr = document.querySelectorAll(".square")
var pColor = document.querySelector("#pColor")
var restart = document.getElementById("regame")
//dfdfsdfdsfdsfdsfdsfsa//
var num = pickNumberFor();
var pColor1=colors[num];

var selectingNumberOfColors =
restart.addEventListener("click",function()
	{
		Game();
	})

function Game() {
	restart.textContent="New Game";
	status1.textContent=""
	colors = generatingColors(numberOfColors);
	num = pickNumberFor();
	pColor.textContent=colors[num]
	pColor.style.textTransform="uppercase";
	pColor1=colors[num];
	for (var i = 0; i < 6; i++) {
		if (i<numberOfColors) {
			sqr[i].style.backgroundColor=colors[i];
		}
		else{
			sqr[i].style.background="none";
		}
	}
}

pColor.textContent=colors[num]
pColor.style.textTransform="uppercase";
var status1= document.querySelector("#status");

for (var i = 0; i < colors.length; i++) {
	//giving colors
	sqr[i].style.backgroundColor=colors[i];
	//selecting clicked colour
	sqr[i].addEventListener("click",function() {
		var selectedColor = this.style.backgroundColor;
		if (selectedColor==pColor1){
			console.log("Right");
			status1.textContent="You Did It";
			changeColor();
			pColor.style.backgroundColor=pColor1;
			restart.textContent="Play Again!!";
		}
		else if (selectedColor!=pColor1) {
			console.log("Wrong");
			status1.textContent="Try Again";
			this.style.backgroundColor="#80C645";
		}
	})
}

function changeColor() {
	pColor.style.background="none";
	for (var i = 0; i < 6; i++) {
	if (i<numberOfColors) {
		sqr[i].style.backgroundColor=pColor1;
	}
	else{
		sqr[i].style.background="none";
	}
	}
}

function pickNumberFor() {
	return Math.floor(Math.random() * colors.length);
}

function generatingColors(q) {
	var arr=[];
	for (var i = 0; i < q; i++) {
		arr.push(randomColor())
	}
	return arr;
}

function randomColor() {
	//synthesis of numbers
	var r = Math.floor(Math.random() *256);
	var g = Math.floor(Math.random() *256);
	var b = Math.floor(Math.random() *256);
	return "rgb"+"("+r+", "+g+", "+b+")";
}

var Hard = document.querySelector("#Hard")
var Easy = document.querySelector("#Easy")

Easy.addEventListener("click",function(){
	Hard.classList.remove("select");
	Easy.classList.add("select");
	numberOfColors=3;
	Game();

})

Hard.addEventListener("click",function(){
	Hard.classList.add("select");
	Easy.classList.remove("select");
	numberOfColors=6;
    Game();
})