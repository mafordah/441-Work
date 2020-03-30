var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
//auto vars
var autoX = 750;
var autoY = 50;
var autoW = 10;
var autoH = 200;
var autoSpeed = 5;
//user vars
var x = 50;
var y = 50;
var w = 50;
var h = 10;
var speed = 10;

var sound = document.getElementById("sound");
sound.loop = true;
sound.load();

$(document).ready(function(){
  $(this).keypress(function(event){
    getKey(event);
    sound.play();
  });
});

function getKey(event){
  var char = event.which || event.keyCode;
  var actualLetter = String.fromCharCode(char);

  //user move
  if(actualLetter == "w" || actualLetter == "W"){
    y = y - speed;
  } else if(actualLetter == "s" || actualLetter == "S"){
    y = y + speed;
  } else if(actualLetter == "a" || actualLetter == "A"){
    x = x - speed;
  } else if(actualLetter == "d" || actualLetter == "D"){
    x = x + speed;
  }

}

ctx.fillStyle = "#5edad3";

draw();
setInterval(update, 1000/60);

function update(){
  //auto move
  autoY = autoY + autoSpeed;
  //auto canvas collisions
  if (autoY >= 600 - autoH){
    autoSpeed = -5;
  } else if (autoY <= 0){
    autoSpeed = 5;
  }

  //user canvas collisions
  if(y <= 0){
    y = 0;
  } else if (y >= 600 - h){
    y = 600 - h;
  }

  if (x <= 0){
    x = 0;
  } else if (x >= 800 - w){
    x = 800 - w;
  }

  //auto user collisions
  if(((x + w) >= (autoX)) && (x <= (autoX + autoW)) && ((y + h) >= autoY) && (y <= (autoY + autoH))){
    document.body.style.background = "#e975d3";
    autoH = autoH - 5;
    h = h + 1;
    speed = speed - 0.015;

    if(autoH <= 0){
      autoX = Math.floor(Math.random() * (800 - autoW));
      autoH = 200;
    }

    if(h >= 600){
      end();
    }
  } else {
    document.body.style.background= "#222222";
  }
  draw();
}

function end(){
  speed = 10;
  h = 10;
}

function draw(){
  ctx.clearRect(0, 0, 800, 600);
  ctx.fillRect(autoX, autoY, autoW, autoH);
  ctx.fillRect(x, y, w, h);
}
