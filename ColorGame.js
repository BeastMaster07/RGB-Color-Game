var colors = getRandomColors(6);
var numSquares=6;
var squares = document.querySelectorAll(".square");
var pickedColor =  pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton= document.querySelector("#reset");
var easyButton=document.querySelector("#easyBtn");
var hardButton=document.querySelector("#hardBtn");

easyButton.addEventListener("click", function() {
   easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    numSquares=3;
    colors = getRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0;i<squares.length;i++) {
        if(colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        }   else {
            squares[i].style.display= "none";
        }
    }
});

hardButton.addEventListener("click", function() {
    easyButton.classList.remove("selected");
    hardButton.classList.add("selected");
    numSquares=6;
    colors=getRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0;i<squares.length;i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function() {
    colors = getRandomColors(numSquares);
    pickedColor =  pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    for( var i=0; i< squares.length; i++) {
        squares[i].style.backgroundColor =  colors[i];
    };
});

colorDisplay.textContent = pickedColor;

for (var i =0; i<colors.length; i++) {
	squares[i].style.backgroundColor=colors[i];

	squares[i].addEventListener("click", function() {
		var clickedColor = this.style.backgroundColor;
		if(clickedColor===pickedColor) {
			messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
            h1.style.backgroundColor=clickedColor;

		}	else {
				this.style.backgroundColor = "steelblue";
				messageDisplay.textContent = " Try Again!";
			}
	});
}
 
function changeColors (color) {
	for(var i= 0;i<squares.length;i++) {
		squares[i].style.backgroundColor= color;
	}
}

function pickColor() {
	var random=Math.floor(Math.random()*colors.length);
    return colors[random];
}

function getRandomColors(num) {
    var arr= [];
    for(var i=0;i < num;i++) {
        arr.push(RandomColor());
    }
    return arr;
}

function RandomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    
    return "rgb(" + r + ", " + g + ", " + b + ")";
}