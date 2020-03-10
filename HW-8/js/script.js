var cats = ["cat1.png", "cat2.png", "cat3.png", "cat4.png", "cat5.png", "cat6.png"];
var catI = 0;
var adj = ["Big", "Little", "Fluffy", "Kitty", "Scaredy", "Clever", "Lazy", "Wild"];
var adjI = 0;


$(document).ready(function(){
  function imageLoop(){
    $("#catImage").fadeOut("slow", function(){
      $("#catImage").attr("src", "./img/"+cats[catI]);
      $("#catImage").fadeIn("slow");
    });

    $("#adj").fadeOut(5000, function(){
      $("#adj").html(adj[adjI]);
      $("#adj").fadeIn(5000);
    });

    $("#mover").animate({right: "0"}, 5000, function(){
      $("#mover").fadeOut(500, function(){
        $("#mover").attr("src", "./img/daisy.png");
        $("#mover").fadeIn(500, function(){
          $("#mover").animate({right: null, left: 0}, 5000, function(){
            $("#mover").fadeOut(500, function(){
              $("#mover").attr("src", "./img/rose.png");
              $("#mover").fadeIn(500);
            });
          });
        });
      });
    });

    catI = catI + 1;
    if(catI > 5){
      catI = 0;
    };

    adjI = adjI + 1;
    if(adjI > 7){
      adjI = 0;
    };
  };

  imageLoop();
  setInterval(imageLoop, 3000);
});
