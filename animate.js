var canvas = document.getElementById("board");
var ctx = canvas.getContext("2d");
var clearButt = document.getElementById("clear");
var stopButt = document.getElementById("stop");

var requestID;

var animate = function(){
    var radius = 0;
    var circ=function(){
	clear();
	ctx.beginPath();
	ctx.fillStyle = "pink";
	ctx.arc(250,250,radius,0,2*Math.PI);
	ctx.stroke();
	ctx.fill();
	radius++;
	requestID = window.requestAnimationFrame(circ);
    }

    circ();
}

var clear = function(){
    ctx.clearRect(0,0,500,500);
}

var stop = function(){
    window.cancelAnimationFrame(requestID);
}

canvas.addEventListener("click", animate);
clearButt.addEventListener("click", clear);
stopButt.addEventListener("click", stop);
    
