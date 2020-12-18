
$(function(){
    let topBtn = $('.page-top');
    topBtn.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500){
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    $('.page-top').on('click',function(){
    $('body, html').animate({scrollTop:0},500);
    });

    // let iconBtn = $('.icon');
    // iconBtn.hide();
    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 500){
    //         iconBtn.fadeIn();
    //     } else {
    //         iconBtn.fadeOut();
    //     }
    // });

    // var MyLatLng = new google.maps.LatLng(35.6811673, 139.7670516);
    // var Options = {
    //     zoom: 15,      //地図の縮尺値
    //     center: MyLatLng,    //地図の中心座標
    //     mapTypeId: 'roadmap'   //地図の種類
    // };
    // var map = new google.maps.Map(document.getElementById('map'), Options);

    google.maps.event.addDomListener(window, 'load', function() {
        var mapdiv = document.getElementById('google-map'); //IDを入力
        var myOptions = {
            zoom: 15, //ズームのレベルを指定。数値が小さいほど、より広域に表示
            center: new google.maps.LatLng(33.675381,135.8853138,), //表示の基点となる緯度経度を入力
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scaleControl: true, //地図の縮尺（200mとかの目盛）。デフォルトは無効。
            scrollwheel: false, //マウスホイールでの拡大・縮小を無効
        };
        var map = new google.maps.Map(mapdiv, myOptions);
        var marker = new google.maps.Marker({
                position: new google.maps.LatLng(33.675381,135.8853138), //ピンの緯度経度を入力
                map: map,
                title: "那智の滝" //ピンにマウスカーソルを乗せたときに表示されるタイトルを入力
        });
    });
});
