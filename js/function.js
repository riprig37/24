$(function(){
	// ページTOPへ
    var topBtn = $("#pageTop");
    topBtn.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
	// スムーズスクロール
    topBtn.click(function () {
        $("body,html").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

	// スマホ headerメニュー
	$("#menu-btn").click(function(){
		$("#menu").stop().slideToggle();
		$(this).toggleClass("active");
	});

});



$(function() {
	$("body").find("a").hover(
		function(){  
			$(this).stop().animate({"opacity" : 0.75}, 200);  
		},
		function(){
			$(this).stop().animate({"opacity" : 1}, 200);
		}
	); 
});

$(function() {
	var bg = $(".bg-scroll");
	$(window).scroll(function(){
		var y = $(this).scrollTop();
		bg.css('backgroundPositionY', 0 + parseInt( -y / 3 ) + 'px');
	});
});


$(document).ready(function(e) {
	var effect = $(".effect, #shinei-50th #main dt, #shinei-50th #main dd");
	var before_action = { "opacity":0 , "position":"relative" , "top":"-20px" };
	var after_action = { "opacity":1 , "top":0};
	
	effect.css(before_action);
	$(window).scroll(function(){
		var windowHeight = $(window).height();
		var topWindow = $(window).scrollTop();
		effect.each(function(){
			var targetPosition = $(this).offset().top;
			if(topWindow > targetPosition - windowHeight + windowHeight/5){
				$(this).stop().animate(after_action, 300);
			}
		});
	});
});







