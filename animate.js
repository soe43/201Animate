var canvas = document.getElementById("board");
var ctx = canvas.getContext("2d");
var clearButt = document.getElementById("clear");
var stopButt = document.getElementById("stop");

var requestID;

var animate = function(){
    var radius = 0;
    var isSmall = true;
    ctx.fillStyle = "pink";
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

var clear = function(){
    ctx.clearRect(0,0,500,500);
}

var stop = function(){
    window.cancelAnimationFrame(requestID);
}

canvas.addEventListener("click", animate);
clearButt.addEventListener("click", clear);
stopButt.addEventListener("click", stop);
    
