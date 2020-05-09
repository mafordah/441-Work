var dialog = document.getElementById("dialog");
var characterSpeaking = document.getElementById("character");
var buttons = document.getElementById("buttons");
var items = document.getElementById("items");
var type;

let player = [];
let deaths = [];


function newGame(){
  player = [];
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

  //remove all items
  while(items.firstChild){
    items.removeChild(items.firstChild)
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
          type = result.state[0].options[i].type;
          //add in default items
          if(type == "strong"){
            player = ["helmet"];
          } else if (type == "fair"){
            player = ["ring"];
          } else if (type == "bright"){
            player = ["studyKey"];
          } else if (type == "rogue"){
            player = ["bottle"];
          }
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

  //remove all items
  while(items.firstChild){
    items.removeChild(items.firstChild)
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

    //add avaliable items back in
    for(let i = 0; i < player.length; i++){
      const item = document.createElement('img');
      item.src = "assets/" + player[i] + ".png";
      item.classList.add('item');

      item.addEventListener('click', function(){
        //if there is an item event activate item event
        if (Array.isArray(result.state[index].events) == false){//no event
          document.getElementById("itemText").innerHTML = "You can't use that here";
          setTimeout(function(){document.getElementById("itemText").innerHTML = ""}, 2000)

        } else { //event
          for (let j = 0; j < result.state[index].events.length; j++){
            if (player[i] == result.state[index].events[j].item){
              var newIndex = result.state[index].events[j].nextText;
              runGame(newIndex);
              document.getElementById("homeTab").click();
            } else { //event exists but item cannot be used
              document.getElementById("itemText").innerHTML = "You can't use that here";
              setTimeout(function(){document.getElementById("itemText").innerHTML = ""}, 2000)
            }
          }
        }
      })
      items.appendChild(item);
    }

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
            if (result.state[index].options[i].item !== undefined){
              player.push(result.state[index].options[i].item)
            }
            var newIndex = result.state[index].options[i].nextText;
            runGame(newIndex);
            document.getElementById("homeTab").click();
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
  player = [];
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
