// JavaScript Document
function footer(){
var html = "";

html += '<div id="footer">';

html += '<!----- フッターロゴ ----->';
html += '<div id="footer-logo"><a href="/"><img src="../images/footer-logo.png" alt="ビット・エイ" width="158" height="56"></a></div>';


html += '<!----- フッターナビゲーション ----->';
html += '<div id="footer-nav">';
html += '<ul>';
html += '<li><a href="//www.bit.or.jp/profile/access/">交通アクセス</a></li>';
html += '<li><a href="//www.bit.or.jp/bita_recruit/contents/contact.html">お問い合わせ</a></li>';
html += '<li><a href="//www.bit.or.jp/security.html">情報セキュリティポリシー</a></li>';
html += '<li><a href="//www.bit.or.jp/privacy.html">プライバシーポリシー</a></li>';
html += '<li><a href="//www.bit.or.jp/bita_recruit/contents/environment.html">推奨閲覧環境</a></li>';
html += '</ul>';
html += '</div><!--/footer-nav-->';

html += '<div id="copyright"><script type="text/javascript" src="../js/copyright.js"></script></div>';
html += '</div><!--/footer-->';


document.write(html);
}