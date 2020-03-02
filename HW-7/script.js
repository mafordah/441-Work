class ViewCard{
  //Constructor
  constructor(image, title, desc, name, year){
    this.image = image;
    this.title = title;
    this.desc = desc;
    this.name = name;
    this.year = year;
  }

  //Methods
  createImage(){
    return "./images/" + this.image;
  }

  imageTitle(){
    return this.title;
  }

  createDesc(){
    return "This image features " + this.desc;
  }

  authorName(){
    return this.name;
  }

  imageYear(){
    return this.year;
  }
}

//declare variables out of function to check for repeated values
var imageCardI;
var random;

function change(){
  //set object info
  let imageCard1 = new ViewCard("badlandsMap.JPG", "Badlands Visitor Guide", "the visitor guide given to you at the Wall, South Dakota entrance to the Badlands.", "Miya Fordah", "2019")
  let imageCard2 = new ViewCard("badlandsSign.JPG", "Informative Sign", "one of the many signs outside of the various walk-outs on the drive through the Badlands.", "Miya Fordah", "2019")
  let imageCard3 = new ViewCard("badlandsTree.JPG", "Nest in a Tree", "a birds nest in a Plains Cottonwood tree.", "Miya Fordah", "2019")
  let imageCard4 = new ViewCard("badlandsBench.JPG", "On a Bench", "Theodore Jupka sitting on a bench in the Badlands", "Miya Fordah", "2019")
  let imageCard5 = new ViewCard("badlandsBun.JPG", "Bunny in the Badlands", "a bunny near a walkway in the Bandlands National Park", "Theodore Jupka", "2019")

  //create array of objects
  var imageCards = [imageCard1, imageCard2, imageCard3, imageCard4, imageCard5];

  //prevent repeats
  while(random === imageCardI){
    random = Math.floor(Math.random() * 5);
    console.log(random);
  }

  //set index
  imageCardI = random;

  //set card
  document.getElementById("image").src = imageCards[imageCardI].createImage();
  document.getElementById("title").innerHTML = imageCards[imageCardI].imageTitle();
  document.getElementById("desc").innerHTML = imageCards[imageCardI].createDesc();
  document.getElementById("name").innerHTML = imageCards[imageCardI].authorName();
  document.getElementById("year").innerHTML = imageCards[imageCardI].imageYear();
}
