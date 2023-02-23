var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var players = {};
function onYouTubeIframeAPIReady() {
  $(".slick iframe").each(function(id) {
      var $iframe = $(this).get(0);
      if ($iframe) {
        players = new YT.Player($iframe, {
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }
  });
}
function onPlayerReady() {
  $('.slick').slick('slickPlay');
}
function onPlayerStateChange(obj) {
  if (obj.data == 1) {
    $('.slick').slick('slickPause');
  } else if (obj.data == 2) {
    $('.slick').slick('slickPlay');
  }
}

$(function(){
  $(".slick").on("beforeChange", function(event, slick) {
    var currentSlide, player, command;
    currentSlide = $(slick.$slider).find(".slick-current");
    player = currentSlide.find("iframe").get(0);
    command = {
      "event": "command",
      "func": "pauseVideo"
    };
    if ( player != undefined ) {
      player.contentWindow.postMessage(JSON.stringify(command), "*");
    }
  });
  $(".slick").slick({
    autoplay: false,
    arrows: false,
    dots: true,
    pauseOnFocus: false,
    pauseOnHover: true,
    pauseOnDotsHover: false,
    fade: true
  });
});JavaScript
