var canvas = document.getElementById("board");
var ctx = canvas.getContext("2d");
var clearButt = document.getElementById("clear");
var stopButt = document.getElementById("stop");
var circButt = document.getElementById("circle");
var dvdButt = document.getElementById("dvd");

var requestID;

var animateCirc = function(){
    var radius = 0;
    var isSmall = true;
    ctx.fillStyle = "pink";
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
    var previousX;
    var previousY;
    var currentX = 250;
    var currentY = 250;
    var angle = Math.PI / 3;
    
    stop();
    clear();
    ctx.arc(currentX,currentY,25,0,2*Math.PI);
    ctx.stroke();
    
    var move = function(){
	previousX = currentX;
	previousY = currentY;
	currentX += Math.sin(angle);
	currentY += Math.cos(angle);
	ctx.arc(currentX,currentY,25,0,2*Math.PI);
	ctx.stroke();
	window.requestAnimationFrame(move);
    }

    move();
    
}

var clear = function(){
    ctx.clearRect(0,0,500,500);
}

var stop = function(){
    window.cancelAnimationFrame(requestID);
}

circButt.addEventListener("click", animateCirc);
clearButt.addEventListener("click", clear);
stopButt.addEventListener("click", stop);
dvdButt.addEventListeer("click" animateDVD);
    
