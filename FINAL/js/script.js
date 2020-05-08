var dialog = document.getElementById("dialog");
var characterSpeaking = document.getElementById("character");
var buttons = document.getElementById("buttons");
var type;

let player = {};
let deaths = [];


function newGame(){
  player = {};
  deaths = [];

  startGame();
}


function continueGame(){
  //startGame();
}


//determine which json file to parse from
function startGame(){
  //Button Code adapted from Web Dev Simplified @https://www.youtube.com/watch?v=R1S_NhKkvGA
  //remove all buttons
  while(buttons.firstChild){
    buttons.removeChild(buttons.firstChild)
  }

  //get text from specific json object
  $.getJSON("json/start.json", function(result) {
    $("#character").html(result.state[0].character + ":");
    $("#dialog").html(result.state[0].dialog);

    //add buttons with avaliable options back in
    for(let i = 0; i < result.state[0].options.length; i++){
      //create buttons
      const button = document.createElement('button');
      if (deaths.includes(result.state[0].options[i].type) == false){ //if character is alive
        button.innerHTML = result.state[0].options[i].text;
        button.classList.add('button');

        //select option function
        button.addEventListener('click', function(){
          //console.log(i);
          type = result.state[0].options[i].type;
          runGame(0);
        })
      } else { //if dead
        button.innerHTML =result.state[0].options[i].text.strike();
        button.classList.add('button');
      }

      //show buttons
      buttons.appendChild(button);
    }
  });
}


function runGame(index){
  if (index == -1){
     startGame();
  } else if (index == -2){
    death();
  }

  //Button Code adapted from Web Dev Simplified @https://www.youtube.com/watch?v=R1S_NhKkvGA
  //remove all buttons
  while(buttons.firstChild){
    buttons.removeChild(buttons.firstChild)
  }

  //get text from specific json object
  $.getJSON("json/" + type + ".json", function(result) {
    $("#character").html(result.state[index].character + ":");

    //match text using a regular expression to break up dialog
    var textSplit = result.state[index].dialog.match(/\(?[^\.\?\!]+[\.!\?]+\)?/g);
    //var textSplit = result.state[index].dialog.split(". ");
    console.log(textSplit);
    console.log("next Id: " + result.state[index].nextId);
    var textI = 0;
    $("#dialog").html(textSplit[textI]);

    checkText();
    $("#navArrow").click(function() {
      if (textI + 1 < textSplit.length){
        textI += 1;
        console.log("current text: " + textI);
        checkText();
        $("#dialog").html(textSplit[textI]);
      }
    });

    //check if text array is finishes
    function checkText(){
      //show buttons or arrow
      if (textI + 1 >= textSplit.length){
        $("#navArrow").css("display", "none");

        //add buttons with avaliable options back in
        for(let i = 0; i < result.state[index].options.length; i++){
          const button = document.createElement('button');

          //Finally found a work around for the navigation arrow! Thanks again!!
          //If there is only one option, the button becomes the arrow :)
          if (result.state[index].options.length == 1){
            button.classList.add('arrow');
          } else {
            button.innerHTML = result.state[index].options[i].text;
            button.classList.add('button');
          }

          button.addEventListener('click', function(){
            var newIndex = result.state[index].options[i].nextText;
            runGame(newIndex);
          })
          buttons.appendChild(button);
        }
      } else {
        $("#navArrow").css("display", "block");
      }
    }



  });

}


function death(){
  deaths.push(type);
  startGame();
}


//Tab code from w3schools @ https://www.w3schools.com/howto/howto_js_tabs.asp
document.getElementById("homeTab").click();
function openTab(evt, tab) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tab).style.display = "block";
  evt.currentTarget.className += " active";
}

newGame();
