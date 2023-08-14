$(function () {
  const width = $("#width");
  const ggrowth = $("#ggrowth");
  const grate = $("#grate");
  const numberOfCircles = $("#numberOfCircles");

  $("#btnStart").on("click", function(evt){
    console.log(numberOfCircles.val());
    for(let i = 0; i < parseInt(numberOfCircles.val()); i++){
      createNewCircle();
    }
  });

  $("#circles").on("click", function (event) {
    createNewCircle();
  });

  function createNewCircle () {

    const $div = $('<div>', {class: 'circle'});
    $div.css("background-color", createColor());
    $("#circles").append($div);

    $div.css("top", getXPosition($div) + 'px');
    $div.css("left", getYPosition($div) + 'px');
    $div.css("height", width + 'px');
    $div.css("width", width + 'px');

    const id = setInterval(() => {
      const size = parseInt($($div).css("height")) + parseInt(ggrowth.val()) + "px";
      $($div).css("height", size);
      $($div).css("width", size);

    },  parseFloat(grate.val()));

    $div.click(function () {
      $div.remove();
      clearInterval(id);
    });
  }

  function getXPosition(elem) {
    return Math.floor(Math.random() * document.body.offsetHeight-elem.height());
  }

  function getYPosition(elem) {
    return Math.floor(Math.random() * document.body.offsetWidth-elem.width());
  }

  function createColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
  };
});
