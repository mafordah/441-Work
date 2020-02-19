//Shuffle function aquired from CoolAJ86 @ https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

//DOM Variables
var images = ["card0", "card1", "card2", "card3", "card4", "card5", "card6", "card7", "card8", "card9"];
var cardBack = "./images/cardsBack.png";
var cardFront = ["./images/cards-01.png", "./images/cards-02.png", "./images/cards-03.png", "./images/cards-04.png", "./images/cards-05.png", "./images/cards-01.png", "./images/cards-02.png", "./images/cards-03.png", "./images/cards-04.png", "./images/cards-05.png"];

//Display Blanks
function start(){
  //Run shuffleCards function
  shuffleCards();

  for(var i = 0; i < images.length; i++){
    document.getElementById(images[i]).src = cardBack;
    //document.getElementById(images[i]).addEventListener("click", flip(i));
  }
}


function shuffleCards(){
  var currentIndex = cardFront.length, temporaryValue, random;

  //Iterate through the card array backwards
  while (0 !== currentIndex) {

    //See what's left
    random = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    //Change
    temporaryValue = cardFront[currentIndex];
    cardFront[currentIndex] = cardFront[random];
    cardFront[random] = temporaryValue;
  }
}

function flip(i){
  //Flip Card
  console.log("flipped");
  document.getElementById(images[i]).src = cardFront[i];
}



//Run Function
start();
