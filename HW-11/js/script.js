var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//user vars
var x = 0;
var y = 300;
var w = 30;
var h = 30;

//arrays
var obstacleArray = [];
var collectableArray = [];

//score
var score = 0;

var sound = document.getElementById("sound");
sound.loop = true;
sound.load();


$(document).ready(function(){
  setup();

  $(this).keyup(function(event){
    getKey(event);
    sound.play();
  });
});


function getKey(event){
  var char = event.which || event.keyCode;
  var actualLetter = String.fromCharCode(char);
  //console.log(actualLetter);
  //user move
  if(actualLetter == "w" || actualLetter == "W" || actualLetter == "&"){
    y = y - 60;
  } else if(actualLetter == "s" || actualLetter == "S" || actualLetter == "("){
    y = y + 60;
  } else if(actualLetter == "a" || actualLetter == "A" || actualLetter == "%"){
    x = x - 60;
  } else if(actualLetter == "d" || actualLetter == "D" || actualLetter == "'"){
    x = x + 60;
  }
}


class Obstacle{
  constructor(xVal, yVal, widthVal, heightVal){
    this.xVal = xVal;
    this.yVal = yVal;
    this.widthVal = widthVal;
    this.heightVal = heightVal;
  }

  get x(){
    return this.xVal;
  }

  set x(value){
    this.xVal = value;
  }

  get y(){
    return this.yVal;
  }

  set y(value){
    this.yVal = value;
  }

  get height(){
    return this.heightVal;
  }

  get width(){
    return this.widthVal;
  }
}


class Collectable{
  constructor(xVal, yVal, widthVal, heightVal){
    this.xVal = xVal;
    this.yVal = yVal;
    this.widthVal = widthVal;
    this.heightVal = heightVal;
  }

  get x(){
    return this.xVal;
  }

  set x(value){
    this.xVal = value;
  }

  get y(){
    return this.yVal;
  }

  set y(value){
    this.yVal = value;
  }

  get height(){
    return this.heightVal;
  }

  get width(){
    return this.widthVal;
  }
}


// let obstacle = new Obstacle(60, 80, 10, 100);
// let collectable = new Collectable(120, 80, 10, 10);
setInterval(update, 1000/60);

function setup(){
  $.getJSON("json/obstacles.json", function(result) {
    for(var i = 0; i < result.obstacles.length; i++) {
      obstacleArray.push(new Obstacle(result.obstacles[i].x, result.obstacles[i].y, result.obstacles[i].width, result.obstacles[i].height));
    }
  });

  $.getJSON("json/collectables.json", function(result) {
    for(var i = 0; i < result.collectables.length; i++) {
      collectableArray.push(new Collectable(result.collectables[i].x, result.collectables[i].y, result.collectables[i].width, result.collectables[i].height));
    }
  });

  draw();
}


function update(){
  //user canvas collisions
  if(y <= 0){
    y = 0;
  } else if (y >= 630 - h){
    y = 630 - h;
  }

  if (x <= 0){
    x = 0;
  } else if (x >= 780){
    x = 780
  }

  draw();
}


function draw(){
  document.getElementById("score").innerHTML = score;
  ctx.clearRect(0, 0, 840, 630);
  ctx.fillStyle = "#136aff";
  ctx.fillRect(x, y, w, h);

  for(var i = 0; i < collectableArray.length; i++) {
    ctx.fillStyle = "#8fff54";
    ctx.fillRect(collectableArray[i].x + 10, collectableArray[i].y + 10, collectableArray[i].width, collectableArray[i].height);

    if(((x + w) >= (collectableArray[i].x)) && (x <= (collectableArray[i].x + collectableArray[i].width)) && ((y + h) >= collectableArray[i].y) && (y <= (collectableArray[i].y + collectableArray[i].height))){
      score = score + 1;
      collectableArray.splice(i, 1);
    }
  }

  for(var i = 0; i < obstacleArray.length; i++) {
    ctx.fillStyle = "#ff287e";
    ctx.fillRect(obstacleArray[i].x + 5, obstacleArray[i].y, obstacleArray[i].width, obstacleArray[i].height);
    obstacleArray[i].y = obstacleArray[i].y + 3;

    if(obstacleArray[i].y > 600 + obstacleArray[i].height){
      obstacleArray[i].y = 0 - obstacleArray[i].height;
    }

    //collisions
    if(((x + w) >= (obstacleArray[i].x)) && (x <= (obstacleArray[i].x + obstacleArray[i].width)) && ((y + h) >= obstacleArray[i].y) && (y <= (obstacleArray[i].y + obstacleArray[i].height))){
      y = 300;
      x = 0;
      score = 0;

      collectableArray.splice(0, 6);

      $.getJSON("json/collectables.json", function(result) {
        for(var i = 0; i < result.collectables.length; i++) {
          collectableArray.push(new Collectable(result.collectables[i].x, result.collectables[i].y, result.collectables[i].width, result.collectables[i].height));
        }
      });
    }
  }

}
