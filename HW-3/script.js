const mainImg = document.getElementById("img");
const mainTxt = document.getElementById("txt");
const mainOpts = document.getElementById("opts");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");

let state = 0;
let stage = 1;
var type;
var sword;

function start(){
  state = 0;
  stage = 1;
}

function select(state){
  if (state == 1 && stage == 1){
    mainTxt.innerHTML = "You mustn't be a hard one to remember with such a name! I say, this is not your first quest. I would share my gifts with you, but it appears you already have such strength.";

    btn1.innerHTML = "I didn't mean it like that...";
    btn2.innerHTML = '"Thank you"';
    btn3.innerHTML = "Accept a gift anyway";
    btn4.innerHTML = "...";

    type = "strong";
    stage += 1;

  } else if (state == 2 && stage == 1){
    mainTxt.innerHTML = "Such a fine soul must live up to such a gorgeous name. You were born with a natural beauty stronger than anything I could give you.";

    btn1.innerHTML = "I didn't mean it like that...";
    btn2.innerHTML = '"Thank you"';
    btn3.innerHTML = "Accept a gift anyway";
    btn4.innerHTML = "...";

    type = "fair";
    stage += 1;
  } else if (state == 3 && stage == 1){
    mainTxt.innerHTML = "Only wise folk can hold such a title. No gift of mine could match the sharpness of your wit.";

    btn1.innerHTML = "I didn't mean it like that...";
    btn2.innerHTML = '"Thank you"';
    btn3.innerHTML = "Accept a gift anyway";
    btn4.innerHTML = "...";

    type = "bright";
    stage += 1;
  } else if (state == 4 && stage == 1){
    mainTxt.innerHTML = "A trouble maker are we?! After making that sort of name for yourself, well, someone ought to be keeping an eye on you...";

    btn1.innerHTML = "I didn't mean it like that...";
    btn2.innerHTML = '"Thank you"';
    btn3.innerHTML = "Take something";
    btn4.innerHTML = "...";

    type = "rogue";
    stage += 1;
  } else if (state == 1 && stage == 2){
    mainTxt.innerHTML = "Then say, what did you mean?";

    btn1.innerHTML = "Something bold";
    btn2.innerHTML = "Something beautiful";
    btn3.innerHTML = "Something brilliant";
    btn4.innerHTML = "Something brash";

    type = "none";
    stage -= 1;
  } else if ((state == 2 && stage == 2) || (state == 1 && stage == 3)){
    mainTxt.innerHTML = "There is no need for thanks, " + type + " one.";
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
  } else if (state == 3 && stage == 3){
    mainTxt.innerHTML = "You have been summoned as the savior of the Below. No one short of myself has ever made it this far unto the Realm of Creation. Your conciousness even just existing here is an anomaly curious enough to dub you as " + type + " as you claim.";

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
    mainTxt.innerHTML = "You pull yourself away from my voice but find there is nothing else to run towards. There is nothing but us here in the Creation Realm. As you run further into the expansive whiteness, you find your sanity begin to slip. In the endless void of white... Who am I? Who are you? Perhaps I should have summoned another... goodbye " + type + " one. Goodbye.";
    btn1.innerHTML = 'h..lo? .he.e .m I.';
    btn2.innerHTML = '...';
    btn3.innerHTML = '..';
    btn4.innerHTML = '.';

    stage+=1;
  } else if (stage == 5){
    mainTxt.innerHTML = "You begin the seemingly endless plummet out of the white abyss of the Realm of Creation. The white fades into a pleasant gradient of blue as you begin to see color for the first time. The greyish hues of your body change to the diverse tones of flesh. You begin to forget you're falling as you examine your newfound body. You begin to feel as though you're being submerged until suddenly. Darkness."

    btn1.innerHTML = 'To';
    btn2.innerHTML = 'be';
    btn3.innerHTML = 'continued';
    btn4.innerHTML = '...';
    stage+=1;
  }



}

start();
