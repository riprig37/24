// JavaScript Document

function header(){
var html = "";

html += '<div id="header">';
html += '<h1 id="header-logo"><a href="../index.html"><img src="../images/logo.png" width="230" alt="株式会社ビット・エイ リクルート" /></a></h1>';
html += '<ul id="header-nav">';
html += '<li><a href="about.html">会社概要</a></li>';
html += '<li><a href="works.html">事業内容</a></li>';
html += '<li><a href="staff.html">社員紹介</a></li>';
html += '<li><a href="recruit.html">採用情報</a></li>';
html += '<li><a href="newg.html">募集要項</a></li>';
html += '<li><a href="training.html">教育制度</a></li>';
html += '<li><a href="faq.html">FAQ</a></li>';
html += '<li><a href="contact.html">お問い合わせ</a></li>';
html += '</ul>';
html += '<div id="menu-btn"></div>';
html += '<div id="header-entry"><a href="recruit.html" target="_blank">ENTRY</a></div>';

html += '<div class="komeri">';
html += '<a href="//www.komeri.bit.or.jp/" target="_blank"><img src="../images/common/komerilogo.jpg" class="komerilogo" alt="コメリロゴ" /></a>';
html += '<span class="komerilogotxt" style="">株式会社ビット･エイは、<br />株式会社コメリの<br />グループ企業です。</span>';
html += '</div>';

html += '</div><!--/header-->';


html += '<!--================================================================';
html += '	スマホメニュー';
html += '====================================================================-->';
html += '<div id="menu">';
html += '<ul id="sp-menu">';
html += '<li><a href="about.html">会社概要</a></li>';
html += '<li><a href="works.html">事業内容</a></li>';
html += '<li><a href="staff.html">社員紹介</a></li>';
html += '<li><a href="recruit.html">採用情報</a></li>';
html += '<li><a href="newg.html">募集要項</a></li>';
html += '<li><a href="training.html">教育制度</a></li>';
html += '<li><a href="faq.html">FAQ</a></li>';
html += '<li><a href="contact.html">お問い合わせ</a></li>';
html += '</ul>';
html += '</div>';

document.write(html);
}

