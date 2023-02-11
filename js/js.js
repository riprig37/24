//ハンバーガーメニュー
$(function () {
    $('.hamburger').click(function () {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });
});

$('.menu a[href]').on('click', function(event) {
    $('.hamburger').trigger('click');
});

//スクロール
$(window).scroll(function () {
    var scrollAnimationElm = document.querySelectorAll('.scroll_up , .scroll_left , .scroll_right');
    var scrollAnimationFunc = function () {
        for (var i = 0; i < scrollAnimationElm.length; i++) {
            var triggerMargin = 200;
            if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
                scrollAnimationElm[i].classList.add('on');
            }
        }
    }
    window.addEventListener('load', scrollAnimationFunc);
    window.addEventListener('scroll', scrollAnimationFunc);
});


// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
    fadeAnime();
});


//スクロール2
$(function () {
    $('a[href^="#"]').click(function () {
        var adjust = 0;
        var speed = 400;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top + adjust;
        $('body,html').animate({ scrollTop: position }, speed, 'swing');
        return false;
    });
});

//スクロールした際の動き
function PageTopAnime() {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {//上から200px移動した場合
        $('#page-top').removeClass('RightMove');
        $('#page-top').addClass('LeftMove');
    } else {
        if (
            $('#page-top').hasClass('LeftMove')) {
            $('#page-top').removeClass('LeftMove');
            $('#page-top').addClass('RightMove');
        }
    }
}

// 画面をスクロールをしたら動かしたい場合の記述
function PageTopAnime() {
    var scroll = $(window).scrollTop();
    if (scroll >= 200){//上から200pxスクロールしたら
        $('#page-top').removeClass('RightMove');//#page-topについているRightMoveというクラス名を除く
        $('#page-top').addClass('LeftMove');//#page-topについているLeftMoveというクラス名を付与
    }else{
        if(
            $('#page-top').hasClass('LeftMove')){//すでに#page-topにLeftMoveというクラス名がついていたら
            $('#page-top').removeClass('LeftMove');//LeftMoveというクラス名を除き
            $('#page-top').addClass('RightMove');//RightMoveというクラス名を#page-topに付与
        }
    }
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});


// #page-topをクリックした際の設定
$('#page-top').click(function () {
$('body,html').animate({
    scrollTop: 0//ページトップまでスクロール
}, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
return false;//リンク自体の無効化
});



var unit = 100,
    canvasList, // キャンバスの配列
    info = {}, // 全キャンバス共通の描画情報
    colorList; // 各キャンバスの色情報

/**
 * Init function.
 * 
 * Initialize variables and begin the animation.
 */
function init() {
    info.seconds = 0;
    info.t = 0;
		canvasList = [];
    colorList = [];
    // canvas1個めの色指定
    canvasList.push(document.getElementById("waveCanvas"));
    colorList.push(['#3982f7']);
	// 各キャンバスの初期化
		for(var canvasIndex in canvasList) {
        var canvas = canvasList[canvasIndex];
        canvas.width = document.documentElement.clientWidth; //Canvasのwidthをウィンドウの幅に合わせる
        canvas.height = 1500;//波の高さ
        canvas.contextCache = canvas.getContext("2d");
    }
    // 共通の更新処理呼び出し
		update();
}

function update() {
		for(var canvasIndex in canvasList) {
        var canvas = canvasList[canvasIndex];
        // 各キャンバスの描画
        draw(canvas, colorList[canvasIndex]);
    }
    // 共通の描画情報の更新
    info.seconds = info.seconds + .014;
    info.t = info.seconds*Math.PI;
    // 自身の再起呼び出し
    setTimeout(update, 35);
}

/**
 * Draw animation function.
 * 
 * This function draws one frame of the animation, waits 20ms, and then calls
 * itself again.
 */
function draw(canvas, color) {
		// 対象のcanvasのコンテキストを取得
    var context = canvas.contextCache;
    // キャンバスの描画をクリア
    context.clearRect(0, 0, canvas.width, canvas.height);

    //波を描画 drawWave(canvas, color[数字（波の数を0から数えて指定）], 透過, 波の幅のzoom,波の開始位置の遅れ )
    drawWave(canvas, color[0], 1, 3, 0);//drawWave(canvas, color[0],0.5, 3, 0);とすると透過50%の波が出来る
}

/**
* 波を描画
* drawWave(色, 不透明度, 波の幅のzoom, 波の開始位置の遅れ)
*/
function drawWave(canvas, color, alpha, zoom, delay) {
		var context = canvas.contextCache;
    context.fillStyle = color;//塗りの色
    context.globalAlpha = alpha;
    context.beginPath(); //パスの開始
    drawSine(canvas, info.t / 0.5, zoom, delay);
    context.lineTo(canvas.width + 10, canvas.height); //パスをCanvasの右下へ
    context.lineTo(0, canvas.height); //パスをCanvasの左下へ
    context.closePath() //パスを閉じる
    context.fill(); //波を塗りつぶす
}

/**
 * Function to draw sine
 * 
 * The sine curve is drawn in 10px segments starting at the origin. 
 * drawSine(時間, 波の幅のzoom, 波の開始位置の遅れ)
 */
function drawSine(canvas, t, zoom, delay) {
    var xAxis = Math.floor(canvas.height/2);
    var yAxis = 0;
    var context = canvas.contextCache;
    // Set the initial x and y, starting at 0,0 and translating to the origin on
    // the canvas.
    var x = t; //時間を横の位置とする
    var y = Math.sin(x)/zoom;
    context.moveTo(yAxis, unit*y+xAxis); //スタート位置にパスを置く

    // Loop to draw segments (横幅の分、波を描画)
    for (i = yAxis; i <= canvas.width + 10; i += 10) {
        x = t+(-yAxis+i)/unit/zoom;
        y = Math.sin(x - delay)/3;
        context.lineTo(i, unit*y+xAxis);
    }
}

init();



//非表示ヘッダー
(function() {
  const fh = document.getElementById('fixed-header');
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 80) {
      fh.classList.add('is-show');
    } else {
      fh.classList.remove('is-show');
    }
  });
}());


  $(function () {
    var headerHight = 100; //ヘッダーの高さを指定しheaderHightに代入
    $('a[href^="#"]').click(function () {　//アンカーリンクをクリックでイベント処理
      var href = $(this).attr("href");　//アンカーリンクの属性を取得
      var target = $(href == "#" || href == "" ? "html" : href);　//hrefの値が"#"または""だった場合"html"が、それ以外の場合はhrefをtargetに代入
      var position = target.offset().top - headerHight;　//画面上部からターゲット要素までの距離 - ヘッダー高さをpositionに代入
      $("html, body").animate({ scrollTop: position }, 500, "swing");　// 取得したpositionの位置まで0.5秒でゆっくり移動
      return false;　//clickイベント実行後にaタグのhrefリンクを打ち消す
    });
  });
  
  $(function () {
    $(".ham").click(function () {
      // トリガーをクリックした時の条件分岐
      if ($(this).hasClass("is-active")) {
        // ナビを閉じるときの処理
        $("html").removeClass("is-fixed"); // 背景固定解除！
      } else {
        // ナビを開くときの処理
        $("html").addClass("is-fixed"); // 背景固定！
      }
      $(".ham").toggleClass("is-active");
    });
  });