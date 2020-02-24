//Shuffle function aquired from CoolAJ86 @ https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

//DOM Variables
var images = ["card0", "card1", "card2", "card3", "card4", "card5", "card6", "card7", "card8", "card9", "card10", "card11", "card12", "card13", "card14", "card15", "card16", "card17", "card18", "card19"];
var cardBack = "./images/cardsBack.png";
var cardFront = ["./images/cards-01.png", "./images/cards-02.png", "./images/cards-03.png", "./images/cards-04.png", "./images/cards-05.png", "./images/cards-06.png", "./images/cards-07.png", "./images/cards-08.png", "./images/cards-09.png", "./images/cards-10.png","./images/cards-11.png", "./images/cards-12.png", "./images/cards-13.png", "./images/cards-14.png", "./images/cards-15.png", "./images/cards-16.png", "./images/cards-17.png", "./images/cards-18.png", "./images/cards-19.png", "./images/cards-20.png"];

//Suits
var a = ["./images/cards-01.png", "./images/cards-06.png", "./images/cards-11.png", "./images/cards-16.png"];
var jack = ["./images/cards-02.png", "./images/cards-07.png", "./images/cards-12.png", "./images/cards-17.png"];
var queen = ["./images/cards-03.png", "./images/cards-08.png", "./images/cards-13.png", "./images/cards-18.png"];
var king = ["./images/cards-04.png", "./images/cards-09.png", "./images/cards-14.png", "./images/cards-19.png"];
var joker = ["./images/cards-05.png", "./images/cards-10.png", "./images/cards-15.png", "./images/cards-20.png"];

//check suit variables
var flip1 = "none";
var flip2 = "none";

//index variables for flip back
var card1;
var card2;

//Sounds
var flipSound = new Audio("./media/cardFlip.mp3");
var matchedSound = new Audio("./media/ding.mp3");
var unmatchedSound = new Audio("./media/flipBack.wav");

//moves
var data = localStorage.getItem("data");
var attempts = 0;
var moves;
var matches = 0;

//timer code from Bakudan @https://stackoverflow.com/questions/5517597/plain-count-up-timer-in-javascript
var sec = 0;
  function pad ( val ) { return val > 9 ? val : "0" + val; }
  setInterval( function(){
      document.getElementById("seconds").innerHTML=pad(++sec%60);
      document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));
  }, 1000);


function start(){//Display Blanks
  //Run shuffleCards function
  shuffleCards();

  for(var i = 0; i < images.length; i++){

    document.getElementById(images[i]).src = cardBack;
    //document.getElementById(images[i]).addEventListener("click", flip(i));

  }

  //get items from local storage
  moves = JSON.parse(data).moves;
  document.getElementById("score").innerHTML ="Moves: " + moves;
  document.getElementById("name").innerHTML = JSON.parse(data).firstName;
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


function flip(i){//Flip Card
  flipSound.currentTime = 0;
  flipSound.play();
  console.log("flipped");
  document.getElementById(images[i]).src = cardFront[i];
  //disable click while flipped to prevent errors
  document.getElementById(images[i]).style.pointerEvents = 'none';
  //document.getElementById(images[i]).onclick = null;

  if (flip1 == "none"){ //First Card
    //save index if unmatched
    card1 = i;
    //check suit
    if (a.includes(cardFront[i])){
      flip1 = "a";
    } else if (jack.includes(cardFront[i])){
      flip1 = "jack";
    } else if (queen.includes(cardFront[i])){
      flip1 = "queen";
    } else if (king.includes(cardFront[i])){
      flip1 = "king";
    } else if (joker.includes(cardFront[i])){
      flip1 = "joker";
    }
    //print suit
    console.log(flip1)

  } else if (flip2 == "none") { //Second Card
    //save index if unmatched
    card2 = i;
    //check suit
    if (a.includes(cardFront[i])){
      flip2 = "a";
    } else if (jack.includes(cardFront[i])){
      flip2 = "jack";
    } else if (queen.includes(cardFront[i])){
      flip2 = "queen";
    } else if (king.includes(cardFront[i])){
      flip2 = "king";
    } else if (joker.includes(cardFront[i])){
      flip2 = "joker";
    }

    //update Moves
    attempt();

    //print suite
    console.log(flip2)

    //disable documment mouse events during animation
    document.body.style.pointerEvents = 'none';

    //compare suites
    if (flip1 == flip2){ //matched
      console.log("matched");
      //run function
      matched();

    } else if (flip1 !== flip2){ //unmatched
      console.log("nah");
      //run function
      unmatched();

    }
  }


  function attempt(){//increase move #
    attempts = attempts + 1;
    //get items from local storage
    moves = JSON.parse(data).moves + attempts;
    document.getElementById("score").innerHTML ="Moves: " + moves;
  }


  function matched(){
    matchedSound.currentTime = 0;
    matchedSound.play();

    //add matches
    matches = matches + 1;
    if(matches == 10){
      endGame();
    }

    //set back to none
    flip1 = "none";
    flip2 = "none";

    //allow click
    document.body.style.pointerEvents = 'auto';
  }


  function unmatched(){
    //document.getElementById(images[card1]).onclick = "flip(card1)";
    //document.getElementById(images[card2]).onclick = "flip(card2)";

    //change back to cardBack if unmatched
    setTimeout(function(){

      document.getElementById(images[card1]).src = cardBack;
      document.getElementById(images[card2]).src = cardBack;

      unmatchedSound.currentTime = 0;
      unmatchedSound.play();

      //set back to none
      flip1 = "none";
      flip2 = "none";

      //allow click
      document.getElementById(images[card1]).style.pointerEvents = 'auto';
      document.getElementById(images[card2]).style.pointerEvents = 'auto';
      document.body.style.pointerEvents = 'auto';
    }, 500)
  }

  //end game
  function endGame(){
    window.location = "gameEnd.html";
  }
}

//Run Function
start();
