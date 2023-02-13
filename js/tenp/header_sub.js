// JavaScript Document

function header(){
var html = "";

html += '<div id="header">';
html += '<h1 id="header-logo"><a href="../index.html"><img src="../images/logo.png" width="230" alt="株式会社ビット・エイ リクルート" /></a></h1>';
html += '<div id="menu-btn"></div>';
html += '<div class="komeri">';
html += '<a href="https://www.facebook.com/bit.jp/" target="_blank"><img src="../images/facebook.png" class="komerilogo" alt="フェイスブック" /></a>';
html += '<a href="https://twitter.com/bit_recruit" target="_blank"><img src="../images/twitter.png" class="komerilogo" alt="Twitter" /></a>';
html += '<a href="https://www.instagram.com/bit_recruit/" target="_blank"><img src="../images/instagram_n.png" class="komerilogo" alt="instagram" /></a>';	
html += '</div>';

html += '</div><!--/header-->';


html += '<!--================================================================';
html += '	ハンバーガーメニュー';
html += '====================================================================-->';
html += '<div id="menu">';
html += '<ul id="ham-menu">';
html += '<li><a href="about.html">会社概要</a></li>';
html += '<li><a href="works.html">事業内容</a></li>';
html += '<li><a href="staff.html">社員紹介</a></li>';
html += '<li><a href="recruit.html">採用情報</a></li>';
html += '<li><a href="newg.html">募集要項</a></li>';
html += '<li><a href="training.html">教育制度</a></li>';
html += '<li><a href="faq.html">FAQ</a></li>';
html += '<li><a href="contact.html">お問い合わせ</a></li>';
html += '<li><a href="https://twitter.com/bit_recruit">Twitter</a></li> ';
html += '<li><a href="https://www.facebook.com/bit.jp/">Facebook</a></li> ';
html += '<li><a href="https://www.instagram.com/bit_recruit/">Instagram</a></li>';
html += '</ul>';
html += '</div>';

document.write(html);
}

