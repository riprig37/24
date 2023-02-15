// JavaScript Document

function header(){
var html = "";

html += '<header id="header"><a href="../index.html">';
html += '<img alt="株式会社ビット・エイ採用サイト" class="rectuit-logo" src="../images/logo.png"> </a>';
html +=  '<div class="navigation" id="fixed-header">';
html += '<input type="checkbox" id="overlay-input" />';
html += '<label for="overlay-input" id="overlay-button"><span></span></label>';
html += '<div id="overlay">';
html +='<ul><li><a href="../index.html">株式会社ビット・エイ　採用サイト</a></li><li><a href="../contents/about.html">会社概要</a></li><li><a href="../contents/works.html">事業内容</a></li><li><a href="../contents/recruit.html">採用情報</a></li><li><a href="../contents/training.html">教育制度</a></li><li><a href="../contents/staff.html">社員紹介</a></li><li><a href="../contents/newg.html">募集要項</a></li><li><a href="../contents/faq.html">FAQ</a></li><li><a href="../contents/contact.html">お問い合わせ</a></li><div class="overlay-sns"><a href="https://twitter.com/bit_recruit" target="_blank"><img alt="Twitter" src="../images/twitter.png"></a> <a href="https://www.instagram.com/bit_recruit/" target="_blank"><img alt="Instagram" src="../images/instagram.png"></a> <a href="https://www.facebook.com/bit.jp/" target="_blank"><img alt="Facebook" src="../images/facebook.png"></a> <a href="https://www.youtube.com/@bitaweb" target="_blank"><!--申請承認してからimg alt="YouTube" src="images/youtube.png"--></a></div></ul>';
html += '</header>';
html += '</div>';
html += '<div class="sns">';
html += '<a href="https://twitter.com/bit_recruit" target="_blank"><img alt="Twitter" src="../images/twitter.png"></a> <a href="https://www.instagram.com/bit_recruit/" target="_blank"><img alt="Instagram" src="../images/instagram.png"></a> <a href="https://www.facebook.com/bit.jp/" target="_blank"><img alt="Facebook" src="../images/facebook.png"></a> <a href="https://www.youtube.com/@bitaweb" target="_blank"><!--申請承認してからimg alt="YouTube" src="images/youtube.png"--></a>';
html += '</div>';

document.write(html);
}

