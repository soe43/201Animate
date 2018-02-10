var canvas = document.getElementById("board");
var ctx = canvas.getContext("2d");
var clearButt = document.getElementById("clear");
var stopButt = document.getElementById("stop");
var circButt = document.getElementById("circle");
var dvdButt = document.getElementById("dvd");
var dvdButtRect = document.getElementById("dvdRect");

var requestID;
ctx.fillStyle = "pink";

var animateCirc = function(){
    var radius = 0;
    var isSmall = true;
    stop();
    var circ=function(){
	clear();
	ctx.beginPath();
	if(radius == 250){
	    isSmall = false;
	}
	if(isSmall){
	    ctx.arc(250,250,radius,0,2*Math.PI);
	    ctx.stroke();
	    ctx.fill();
	    radius++;
	}
	else{
	    ctx.arc(250,250,radius,0,2*Math.PI);
	    ctx.stroke();
	    ctx.fill()
	    radius--;
	    if(radius == 0){
		isSmall = true;
	    }
	}
	requestID = window.requestAnimationFrame(circ);
    }
    circ();
}

var animateDVD = function(){
    var currentX = 250;
    var currentY = 250;
    var angle = Math.PI / 8;
    stop();
    
    var dx = Math.cos(angle) * 4;
    var dy = Math.sin(angle) * 4;
    
    var move = function(){
	clear();
	ctx.beginPath();
	ctx.arc(currentX, currentY, 25,0,2*Math.PI);
	ctx.stroke();
	ctx.fill();

	if(currentX <= 25 || currentX >= 475){
	    angle = Math.PI / Math.floor((Math.random() * 8) + 3);
	    dx *= -1;
	}
	if(currentY <= 25 || currentY >= 475){
	    angle = Math.PI / Math.floor((Math.random() * 8) + 3);
	    dy *= -1;
	}
	currentX += dx;
	currentY += dy;
	requestID = window.requestAnimationFrame(move);
    }

    move();
}

var animateDVDRect = function(){
    var centerX = 250;
    var centerY = 250;
    var angle = Math.PI / 8;
    stop();
    
    var dx = Math.cos(angle) * 4;
    var dy = Math.sin(angle) * 4;

    var move = function(){
	clear();
	ctx.fillRect(centerX-20, centerY-10, 40, 20);

	if(centerX <= 20 || centerX >= 480){
	    angle = Math.PI / Math.floor((Math.random() * 8) + 3);
	    dx *= -1;
	}
	if(centerY <= 10 || centerY >= 490){
	    angle = Math.PI / Math.floor((Math.random() * 8) + 3);
	    dy *= -1;
	}
	centerX += dx;
	centerY += dy;
	console.log(centerX, centerY);
	requestID = window.requestAnimationFrame(move);
    }

    move();
}

var clear = function(){
    ctx.clearRect(0,0,500,500);
}

var stop = function(){
    window.cancelAnimationFrame(requestID);
    console.log("STOPPPP");
}

circButt.addEventListener("click", animateCirc);
clearButt.addEventListener("click", clear);
stopButt.addEventListener("click", stop);
dvdButt.addEventListener("click", animateDVD);
dvdButtRect.addEventListener("click", animateDVDRect);    
