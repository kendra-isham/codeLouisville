/*
 A JS program that fills a canvas with balls of random colors and sizes 

 ISSUES: 

 it is not filling the whole canvas
*/

var canvas = document.getElementById("myCanvas");
//var parent = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var color, radius;
var balls = [];
var cWidth, cHeight; 
//starting points
var rX;
var rY;
//make it move values
var rDX;
var rDY;

resizeCanvas();

//resize the canvas to fill browser window dynamically
function resizeCanvas() {
        //visually make it dynamic
        canvas.style.width = '100%';
        canvas.style.height = '100%';

        //actually make it dynamic 
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        //timer
        setInterval(draw, 150);
}
    
//random color generator 
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
 }

 //populates and draws ONE Ball
function Ball(){
   //populate variables with "random" values 
    this.rX = Math.floor((Math.random() * 100) + 1);
    this.rY = Math.floor((Math.random() * 100) + 1); 
    this.rDX = Math.floor((Math.random() * 10) + 1);
    this.rDY = Math.floor((Math.random() * 10) + 1); 
    this.color = getRandomColor(); 
    this.radius = Math.floor((Math.random() * 15) + 1); 

    this.drawBall = function(){
        ctx.beginPath();
        ctx.arc(this.rX, this.rY, this.radius, 0, 2*Math.PI);
        ctx.fillStyle = this.color; 
        ctx.fill();
        ctx.closePath();
    }
}

//populates balls[] && animates
 function draw(){
    //populates balls[]
    for(var i = 0; i < 10; i++){
        balls[i] = new Ball(); 
    }  

    for(var i = 0; i < 10; i++){
        balls[i].drawBall();
        balls[i].rX += balls[i].rDX; 
        balls[i].rY += balls[i].rDY; 
    }
 }
