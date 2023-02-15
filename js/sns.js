// JavaScript Document

$(function(){
    var $container = $(".instagram");
    var html = "";
    $.ajax({
        url: "php/sns.php",
        type:"POST",
        dataType: "json"
     }).done(function(data){
     //通信成功時の処理
     $.each(data.data,function(i,item){
        var imgurl = item.images.standard_resolution.url; //画像のURLを取得
        var link = item.link; //リンクを取得
        html += "<li><a href='" + link + "' target='_blank'><img src='" + imgurl + "'></a></li>";
        if (i == 15) {
            return false;
        };
    });
    }).fail(function(){
    //通信失敗時の処理
        html = "<li>画像を取得できません。</li>";
    }).always(function(){
    //通信完了時の処理
        });
   });
});