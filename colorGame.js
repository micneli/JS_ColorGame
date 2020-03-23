var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var reset = document.querySelector("#reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");
var h1 = document.querySelector("h1");
var pickedColor = pickColor();

colorDisplay.textContent = pickedColor;

easyBtn.addEventListener("click", function() {
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    for(var i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.background = "steelblue";
});

hardBtn.addEventListener("click", function() {
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
        }
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.background = "steelblue";
});

reset.addEventListener("click", function() {
    reset.textContent = "New Colors";
    h1.style.background = "steelblue";
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
    }
});

for(var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
    squares[i].addEventListener("click", function() {
        var clickedColor = this.style.background;
        if(clickedColor === pickedColor) {
            changeColor(pickedColor);
            message.textContent = "Success!";
            h1.style.background = clickedColor;
            reset.textContent = "Play Again";
            
            } else {
            this.style.background = "#232323";
            message.textContent = "Try Again!";
        }
    });
}

function changeColor(color) {
    for(var i = 0; i < numSquares; i++) {
        squares[i].style.background = color;
    }
}

function pickColor() {
    random = Math.floor(Math.random() * numSquares);
    return colors[random];
}

function generateRandomColors(num) {
    var arr = []
    for(var i = 0; i < num; i++) {
        arr.push(randomColors());
    }
    return arr;
}

function randomColors() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
