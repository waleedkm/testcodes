alert("connected")
var colors = fillColors(6);
fillColors(6);
console.log(colors);
var pickedColor = pickRandom(colors,5);
var rgbDisplayValue = document.getElementById("rgbTrueValue");
rgbDisplayValue.textContent = pickedColor;
var squares = document.querySelectorAll(".square");
var rstBtn = document.getElementById("rstBtn");

addEveLis();
var easyBtnd = document.getElementById("easyBtn");
rstBtn.addEventListener("click", function(){
	fillColors(6);
	addEveLis();
	pickedColor = pickRandom(colors,5);
	

})
easyBtnd.addEventListener("click", function(){
	easyBtnd.classList.add("clicked");
	this.classList.add("clicked");
	fillColors(6);
	fillColors(3);
	pickedColor = pickRandom(colors,3);
	addEveLis();
	squares[i].style.background=colors[i];
	for(i=3;i<6;i++){
		squares[i].style.background = "none";
	}
	console.log("class changed");
})


function pickRandom(color,v){
	console.log("Picked")
	var random = Math.floor(Math.random()*v+1);
	console.log(random);
	return color[random];
}

function pickRandomrgb(){
	var random = Math.floor(Math.random()*256);
	return random
}
function rtnRgb(){
	return ("rgb" + "("+pickRandomrgb()+","+" "+pickRandomrgb()+","+" "+pickRandomrgb()+")");
}

function fillColors(n){
	colors=[];
	for(i=0;i<n;i++){
		colors[i]=rtnRgb();
	}
}

function addEveLis(){
	for (var i=0;i<squares.length;i++) {
	squares[i].style.background=colors[i];
	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.background;
		console.log(clickedColor)
//		console.log(pickedColor)
		if(pickedColor == clickedColor){
			for (var i=0;i<squares.length;i++) {
	squares[i].style.background=pickedColor;}
	rstBtn.textContent="Play Again"
		}
		else{
			this.style.background = "black";
			rstBtn.textContent="New Colors"
		}

	})
}
}