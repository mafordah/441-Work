var i = -1;

(function($){
  $.fn.screen = function () {
    this.css("background-color", "#688b63");
    return this;
    console.log("running");
  };
}(jQuery));

$(document).ready(function(){

  $("button").click(function(){
    i = i + 1;
    if (i > 150){
      i = 0;
    }
    $(".screen").screen().fadeTo(300, 0.7).fadeTo(500, 1);
    $("#entry").load("pokedex.json", function(result){
      var pokedex = JSON.parse(result);
      $("#number").html("#" + pokedex.pokemon[i].num);
      $("img").attr("src", pokedex.pokemon[i].img);
      $("#name").html(pokedex.pokemon[i].name);
      $("#entry").html('A ');

      for(j = 0; j < pokedex.pokemon[i].type.length; j++){
        $("#entry").append(pokedex.pokemon[i].type[j] + " ");
      }
      $("#entry").append(' Pokemon');
      $("#entry").append("<br>Height: " + pokedex.pokemon[i].height);
      $("#entry").append("<br>Weight: " + pokedex.pokemon[i].weight);
    });
  });
});
