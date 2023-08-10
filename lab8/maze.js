let isStarted = false;
$(function (){
  $("#start").on('click', function () {
    isStarted = true;
    reset();
    lose();
    win();
  });
});

function lose() {
  $("div.boundary").mouseover(function (){
    if(isStarted) {
      isStarted = false;
      $("div.boundary").addClass("youlose");
      $("#boundary1").text("You lose");
    }
  });
  $("#maze").mouseleave(function (){
    if(isStarted) {
      isStarted = false;
      $("div.boundary").addClass("youlose");
      $("#boundary1").text("You lose");
    }
  });
}

function win() {
  $("#end").mouseover(function (){ //mouseenter
    if(isStarted) {
      isStarted = false;
      $("#boundary1").text("You win");
    }
  });
}

function reset(){
  $("div.boundary").removeClass("youlose");
  $("#boundary1").text("");
}
