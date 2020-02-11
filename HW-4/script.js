//Adopted from Web Dev Simplified @ https://www.youtube.com/watch?v=R1S_NhKkvGA
//source code from https://github.com/WebDevSimplified/JavaScript-Text-Adventure/blob/master/game.js

//DOM Variables
const mainImg = document.getElementById("img");
const mainTitle = document.getElementById("title");
const mainTxt = document.getElementById("txt");
const mainOpts = document.getElementById("opts");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");

var inputTxt = document.getElementById("input");
var submitBtn = document.getElementById("btnSubmit");

//Changing Variables
let state = 0;
let stage = 1;
var name;
var type;
var sword;

var backgroundColor = 0;

//Hide text imput
inputTxt.style.display = "none";
submitBtn.style.display = "none";

//Submit input text
function submit(){
  if (stage == 10 || stage == 12){
    name = inputTxt.value;
    if (name !== " " && name !== "" && name !== null){
      select(1);
    }
  }
  console.log(inputTxt.value);
}

//Check for weapon
function hasWeapon(){
  if (sword != "none"){return true}
}

//Useless while loop...
function backgroundChange(){
  while (backgroundColor < 255){
    backgroundColor+=1;
    console.log(backgroundColor);
  }
}

//Set State
function select(state){
  if (stage == 0){
    //Reset to initial settings
    name = "";
    type = null;
    sword = "none";


    img.src = "";
    inputTxt.style.visibility = "visible";
    submitBtn.style.visibility = "visible";
    mainTitle.style.visibility = "visible";
    mainTxt.innerHTML = "Tell me, what do they call you?";

    btn1.style.visibility = "visible";
    btn2.style.visibility = "visible";
    btn3.style.visibility = "visible";
    btn4.style.visibility = "visible";

    mainTitle.innerHTML = "Welcome traveler";

    btn1.innerHTML = "Something bold";
    btn2.innerHTML = "Something beautiful";
    btn3.innerHTML = "Something brilliant";
    btn4.innerHTML = "Something brash";

    stage += 1;

    //Stage 1: Set Type
  }else if (state == 1 && stage == 1){
    mainTitle.style.visibility = "hidden";
    mainTxt.innerHTML = "You mustn't be a hard one to remember with such a name! I say, this is not your first quest. I would share my gifts with you, but it appears you already have such strength.";

    btn1.innerHTML = "I didn't mean it like that...";
    btn2.innerHTML = '"Thank you"';
    btn3.innerHTML = "Accept a gift anyway";
    btn4.innerHTML = "...";

    type = "strong";
    stage += 1;
  } else if (state == 2 && stage == 1){
    mainTitle.style.visibility = "hidden";
    mainTxt.innerHTML = "Such a fine soul must live up to such a gorgeous name. You were born with a natural beauty stronger than anything I could give you.";

    btn1.innerHTML = "I didn't mean it like that...";
    btn2.innerHTML = '"Thank you"';
    btn3.innerHTML = "Accept a gift anyway";
    btn4.innerHTML = "...";

    type = "fair";
    stage += 1;
  } else if (state == 3 && stage == 1){
    mainTitle.style.visibility = "hidden";
    mainTxt.innerHTML = "Only wise folk can hold such a title. No gift of mine could match the sharpness of your wit.";

    btn1.innerHTML = "I didn't mean it like that...";
    btn2.innerHTML = '"Thank you"';
    btn3.innerHTML = "Accept a gift anyway";
    btn4.innerHTML = "...";

    type = "bright";
    stage += 1;
  } else if (state == 4 && stage == 1){
    mainTitle.style.visibility = "hidden";
    mainTxt.innerHTML = "A trouble maker are we?! After making that sort of name for yourself, well, someone ought to be keeping an eye on you...";

    btn1.innerHTML = "I didn't mean it like that...";
    btn2.innerHTML = '"Thank you"';
    btn3.innerHTML = "Take something";
    btn4.innerHTML = "...";

    type = "rogue";
    stage += 1;

  } else if (state == 1 && stage == 2){
    //Reset Type
    mainTxt.innerHTML = "Then say, what did you mean?";

    btn1.innerHTML = "Something bold";
    btn2.innerHTML = "Something beautiful";
    btn3.innerHTML = "Something brilliant";
    btn4.innerHTML = "Something brash";

    type = "none";
    stage -= 1;
  } else if ((state == 2 && stage == 2) || (state == 1 && stage == 3)){
    mainTxt.innerHTML = "There is no need for thanks, " + type + " one.";
    //if gift isn't taken, sword is set to none
    if(sword == null){
      sword = "none";
    }

    btn1.innerHTML = '...';
    if(sword != "none"){
      btn2.innerHTML = '"What is this for?"';
    } else {
      btn2.innerHTML = "...";
    }
    btn3.innerHTML = '"Why am I here?"';
    btn4.innerHTML = '"Who are you?"';

    stage = 3;
  } else if (state == 3 && stage == 2){
    //Take a weapon
    if (type == "rogue"){
      mainTxt.innerHTML = "You lean forward into the stark emptiness and grab the only thing that seems to exist before you: a tattered sword. Perhaps it may be of some use to you...";
      sword = "tattered sword";
    } else if (type == "strong") {
      mainTxt.innerHTML = "A broad sword manifests into the emptiness before you. You grasp it proudly then store it amongst your other weapons.";
      sword = "broad sword";
    } else if (type == "bright") {
      mainTxt.innerHTML = "A white dagger manifests into the emptiness before you. You stroke it's sharp edge before consealing it benieth your coat.";
      sword = "dagger";
    } else if (type == "fair"){
      mainTxt.innerHTML = "A silver lance manifests into the emptiness before you. You thrust it upward in a show of grace as you shieth it on your waist.";
      sword = "lance";
    }

    btn1.innerHTML = '"Thank you"';
    btn2.innerHTML = '"What is this for?"';
    btn3.innerHTML = '"Why am I here?"';
    btn4.innerHTML = '"Who are you?"';

    stage+= 1;
  } else if (state == 4 && stage == 2){
    mainTxt.innerHTML = "Quiet, aren't we...";
    sword = "none";
  } else if (state == 2 && stage == 3 && sword != "none"){
    mainTxt.innerHTML = "That " + sword  + " is the weapon of your character. It may aid you on your quest if you so choose.";
    btn2.innerHTML = "...";
  } else if (state == 3 && stage == 3){
    mainTxt.innerHTML = "You have been summoned here as the savior of the Below. No one short of myself has ever made it this far unto the Realm of Creation. Your conciousness even just existing here is an anomaly curious enough to dub you as " + type + " as you claim.";

    btn1.innerHTML = '"The Below?"';
    btn2.innerHTML = '"Creation?"';
    btn3.innerHTML = '"I understand"';
    btn4.innerHTML = "Run.";

    stage += 1;
  } else if (state == 4 && stage == 3){
    mainTxt.innerHTML = "I am... a creator. Yours, specifically. I have summoned you as the savior of the Below, another creation that has begun to stray from my design. Being as " + type + " as they say, I trust you to bring peace once again.";

    btn1.innerHTML = '"The Below?"';
    btn2.innerHTML = '"Creation?"';
    btn3.innerHTML = '"I understand"';
    btn4.innerHTML = "Run.";

    stage += 1;
  } else if (state == 1 && stage == 4){
    mainTxt.innerHTML = "The Below is a realm of beings, some quite like yourself. It, like all things, was created. It started as a relatively peaceful place, but after going out on a a bit of a bender and creating 'free will'... Well, things have gotten out of hand, but that's what you're here for.";

    btn1.innerHTML = "...";
    btn2.innerHTML = '"Creation?"';
    btn3.innerHTML = '"I understand"';
    btn4.innerHTML = "Run.";
  } else if (state == 2 && stage == 4){
    mainTxt.innerHTML = "Creation? How do I say... Well everything is created. By what or whom and where is up for much debate, but for certain, I created you here, In the Realm of Creation. The clay-like beginning-realm for all of my creations. You, " + type + " one. Created to bring peace to the Below once more";

    btn1.innerHTML = '"The Below?"';
    btn2.innerHTML = '...';
    btn3.innerHTML = '"I understand"';
    btn4.innerHTML = "Run.";
  } else if (state == 3 && stage == 4){
    mainTxt.innerHTML = "Oh just spendid! Off you go!"

    btn1.innerHTML = '"Wait what?!"';
    btn2.innerHTML = '"What do you mean?"';
    btn3.innerHTML = 'I guess this is it';
    btn4.innerHTML = "To the Below";
    stage += 1;
  } else if (state == 4 && stage == 4){
    mainTxt.innerHTML = "You pull yourself away from my voice but find there is nothing else to run towards. There is nothing but us here in the Realm of Creation. As you run further into the expansive whiteness, you find your sanity begin to slip. In the endless void of white... Who am I? Who are you? Perhaps I should have summoned another... goodbye " + type + " one. Goodbye.";

    btn1.innerHTML = 'h..lo? .he.e .m I.';
    btn2.style.visibility = "hidden";
    btn3.style.visibility = "hidden";
    btn4.style.visibility = "hidden";
    stage=0;
  } else if (stage == 5){
    mainTxt.innerHTML = "You begin the seemingly endless plummet out of the white abyss of the Realm of Creation. The white fades into a pleasant gradient of blue as you begin to see color for the first time. The greyish hues of your body change to the diverse tones of flesh. You begin to forget you're falling as you examine your newfound body. You begin to feel as though you're being submerged until suddenly";

    btn1.innerHTML = '...';
    btn2.style.visibility = "hidden";
    btn3.style.visibility = "hidden";
    btn4.style.visibility = "hidden";
    stage+=1;
  } else if (stage == 6){
    document.getElementById("main").style.background = '#222222';
    document.getElementById("main").style.color = '#ffffff';
    mainTxt.innerHTML = "Darkness";

    btn1.innerHTML = '...';
    btn2.style.visibility = "hidden";
    btn3.style.visibility = "hidden";
    btn4.style.visibility = "hidden";
    stage += 1;
  } else if (stage == 7){
    img.style.visibility = "visible";

    //Change background color and call currently useless while loop...
    backgroundChange();
    document.getElementById("main").style.background = '#ffffff';
    document.getElementById("main").style.color = '#000000';

    if (type == 'strong'){
      img.src = "./images/hallway.jpg";
      mainTxt.innerHTML = "You awake slowly as the sunrise pours in from beyond the mountains. You must've dozed off at your post. That's unusual... You straighten up sharply in hopes no one caught you in a moment of weekness. Someone will be here to releave you shortly.";
    } else if (type == 'fair'){
      img.src = "./images/castle.jpg";
      mainTxt.innerHTML = "You awake as your carriage finally slows to a stop. It feels like you've been travelling a lifetime. You sit eager to stretch your legs as the draw bridge lowers for your party.";
    } else if (type == 'bright'){
      img.src = "./images/library.jpg";
      mainTxt.innerHTML = "You awake at your desk nearly smothered by a falling pile of books and paperwork. That's odd. You remember putting these away... You must have fallen asleep before tidying up.";
    } else if (type == 'rogue'){
      img.src = "./images/room.jpg";
      mainTxt.innerHTML = "You awake as the sunrise flutters into the windows of a strange room. You have no idea where you are, or how you got there, but one thing is for certain. You have a splitting headache.";
    }
    stage += 1;
  } else if (stage == 8){
    btn2.style.visibility = "visible";
    btn3.style.visibility = "visible";
    mainTitle.style.visibility = "visible";

    if (type == 'strong'){
      mainTitle.innerHTML = "AAaaUGH!"
      mainTxt.innerHTML = 'A frazzled woman comes barrelling down the hallway headed straight for you. "THERE IS A DRUNKARD IN THE CASTLE!" she screams at you from a far, but it might as well be directly in your ear. "DRUNKARD!" As she gets closer, you recognise here as one of the lady in waiting. "YOU! HOW DARE YOU LET A DRUNKARD IN THE CASTLE! I WILL BE REPORTING TO YOU THE ROYAL GUARD!! GIVE ME YOUR NAME, AND FOR THE LOVE OF ALL THINGS! GET. RID. OF. HIM."';

      btn1.innerHTML = 'Give your name';
      btn2.innerHTML = 'Offer to help';
      btn3.innerHTML = 'Refuse';
    } else if (type == 'fair'){
      mainTitle.innerHTML = "Welcome, welcome!!"
      mainTxt.innerHTML = "As you enter the castle grounds a short, stout man in a waist coat hops from your carriage and removes your things from back of the carriage. A second, jolly looking man walks to your door and opens it. 'Hello! And welcome to Cardamon Castle. We've been expecting you and will have your things brought to your room imediately. Am the Duke of Cardamon...'s right hand, Denland. I don't believe we've been formally introduced...";

      btn1.innerHTML = 'Give Denland your name';
      btn2.innerHTML = 'Help with your bags';
      btn3.innerHTML = 'Exit through the other door';
    } else if (type == 'bright'){
      mainTitle.innerHTML = "Oh?"
      mainTxt.innerHTML = "After returning the stacks to their rightful places, you notice a scientific report left on your desk that has yet to be signed";

      btn1.innerHTML = 'Sign the document';
      btn2.innerHTML = 'Read the document';
      btn3.innerHTML = 'Do it later';
    } else if (type == 'rogue'){
      mainTitle.innerHTML = "AAaaUGH!";
      mainTxt.innerHTML = "If your head was not ringing enough, it certainly is now. After the auditory asault, you see a woman running out of the corner of your eye, only to then see a castle guard standing over you " + '"You there! What do you think you are doing?! Give me your name before I take you straight to the barracks!"';

      btn1.innerHTML = 'Give the guard your name';
      btn2.innerHTML = 'Walk yourself to the barracks';
      btn3.innerHTML = 'Attempt escape';
    }
    stage +=1;
  } else if (state == 1 && stage == 9 || state == 2 && stage == 11){
    //Input Name
    inputTxt.style.display = "block";
    submitBtn.style.display = "block";
    mainTxt.style.visibility = "hidden";
    mainTitle.style.visibility = "visible";

    btn1.style.display = "none";
    btn2.style.display = "none";
    btn3.style.display = "none";
    btn4.style.display = "none";

    mainTitle.innerHTML = "Your Name";

    //if (name != " " && name != null){
    stage = 10;
    //}
  } else if (state == 2 && stage == 9){
    //This choice leads to input name
    btn2.style.visibility = "hidden";
    btn3.style.visibility = "hidden";
    mainTitle.style.visibility = "hidden";

    if (type == 'strong'){
      mainTxt.innerHTML = "NOT BEFORE I GET YOUR NAME! And with such an important guest coming today!! HOW DARE YOU!";

      btn1.innerHTML = 'Give your name';
    } else if (type == 'fair'){
      mainTitle.innerHTML = "Welcome, welcome!!"
      mainTxt.innerHTML = '"Oh! Thank you, but you really need not trouble yourself. It is no problem for the lot of us. But if you insist..." You eye the troop of people bustling around the castle. "Now, who might we have the pleasure of serving this evening?"';

      btn1.innerHTML = 'Give Denland your name';
    } else if (type == 'bright'){
      mainTitle.innerHTML = "Oh?"
      var choose = Math.random(3);
      console.log(choose);
      var study;
      if (choose <= 1){
        study = "swine mating habits. ";
      }else if (choose <= 2){
        study = "quill pen dexterity. ";
      }else if (choose <= 3){
        study = "wolf to boy cry ratios. ";
      }
      mainTxt.innerHTML = "You eye the document closely. It is a full and expansive report on your comprehensive study of " + study + "Better sign this one.";

      btn1.innerHTML = 'Sign the document';
    } else if (type == 'rogue'){
      mainTitle.innerHTML = "AAaaUGH!";
      mainTxt.innerHTML = 'Yeah, yeah, you know the drill. You get up to turn yourself in... again, but the guard grabs you forcefully by the arm. "Your name, swine."';

      btn1.innerHTML = 'Give the guard your name';
    }

  } else if (state == 3 && stage == 9){
    btn2.style.visibility = "hidden";
    btn3.style.visibility = "hidden";
    mainTitle.style.visibility = "hidden";

    if (type == 'strong'){
      mainTxt.innerHTML = 'You refuse to act cordial with the crazed woman. You stand completely still and hope your shift is over shortly.';

      btn1.innerHTML = 'To be continued';
      stage = 0;
    } else if (type == 'fair'){
      mainTxt.innerHTML = "Almost offended by the idea that you would ever need to be this coddled, you exit the opposing side of the carriage and walk to the castle gate unaided.";

      btn1.innerHTML = 'To be continued';
      stage = 0;
    } else if (type == 'bright'){
      mainTxt.innerHTML = "What's the harm in leaving it unsigned for awhile yet. It's not going anywhere You have better things to do with your time this morning anyhow. Infact you are running late for council.";

      btn1.innerHTML = 'To be continued';
      stage = 0;
    } else if (type == 'rogue'){
      if (hasWeapon() == true){
        mainTxt.innerHTML = "You rifle amongst what few things to aid in an escape, and find the the hilt of a tattered sword. It looks as though it has seen battle many times. You stand up, draw it slowly, and back towards a window. The guard acts swiftly, drawing a much more intimidating weapon, and slices your sword clean in half. You silently thank fallen weapon for saving you from the same fate as you jump through the window.";
        btn1.innerHTML = 'To be continued';
        sword = "none";
        stage = 0;
      } else {
        mainTxt.innerHTML = 'You rifle amongst what few things to aid in an escape, and find nothing but empty bottles. You attempt to stand up, but the guard reaches for your arm. "Your name, swine."';
        btn1.innerHTML = 'Give the guard your name';
      }

    }

  } else if (state == 1 && stage == 10){
    inputTxt.style.display = "none";
    submitBtn.style.display = "none";
    mainTxt.style.visibility = "visible";
    btn1.style.display = "block";
    btn2.style.display = "block";
    btn2.style.visibility = "visible";

    mainTitle.innerHTML = name;

    if (type == "strong" || type == "fair" || type == "rogue"){
      mainTxt.innerHTML = name + "... The name feels odd coming out of your mouth. Unfamiliar. Almost... new? But you're certain that's it... aren't you?";
    } else if (type == "bright"){
      mainTxt.innerHTML = name + "... The name looks odd as it's scrawled out of your quill. Unfamiliar. Almost... new? But you're certain that's it... aren't you?";
    }

    btn1.innerHTML = 'Yes';
    btn2.innerHTML = 'No...';

    stage += 1;
  } else if (state == 1 && stage == 11){
    inputTxt.style.display = "none";
    submitBtn.style.display = "none";
    btn2.style.display = "none";
    mainTitle.innerHTML = "To be continued";

    btn1.innerHTML = 'Return';
    stage = 0;
  }

  console.log(stage);
}
