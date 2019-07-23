//  A JS program that fills a canvas with balls of random colors and sizes 
//  Prompts the user to use a different browser if using IE, as canvas is not fully supported 
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var color, radius;
var balls = [];
//starting points
var rX;
var rY;

/* Sample function that returns boolean in case the browser is Internet Explorer*/
function isIE() {
    ua = navigator.userAgent;
    /* MSIE used to detect old browsers and Trident used to newer ones*/
    var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
    
    return is_ie; 
  }
  /* Create an alert to show if the browser is IE or not */
  if (isIE()){
      alert('This website is not yet fully optimized for Internet Explorer. Please use Chrome for best results.');
  }

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
    var colors = ['#29648A', '#8A2964', '#648A29'];
    for (var i = 0; i < colors.length; i++) {
       color = colors[Math.floor(Math.random() * colors.length)];
     }
    return color;
 }

//populates and draws ONE Ball
function Ball(){
   //populate variables with "random" values 
    this.rX = Math.floor((Math.random() * window.innerWidth) + 1);
    this.rY = Math.floor((Math.random() * window.innerHeight) + 1); 
    this.color = getRandomColor(); 
    this.radius = Math.floor((Math.random() * 50) + 1); 

    this.drawBall = function(){
        ctx.beginPath();
        ctx.arc(this.rX, this.rY, this.radius, 0, 2*Math.PI);
        ctx.lineWidth = 2;
        ctx.fillStyle = this.color; 
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    }
}

//populates balls[] && animates
 function draw(){ 
    for(var i = 0; i < 20; i++){
        balls[i] = new Ball(); 
        balls[i].drawBall();
    }  
 }
