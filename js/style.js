$(function () {
  var topBtn = $('#pagetop');
  topBtn.hide();
  //スクロールが300に達したらボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });
  //スクロールでトップへもどる
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});

$(function () {
  $('.js-btn, .anchor').on('click', function () {// js-btnクラスをクリックすると、
    $('.menu , .btn-line').toggleClass('open');// メニューとバーガーの線にopenクラスをつけ外しする
  })

  $('a[href^=#]').on('click', function (){
    // スクロールの速度
    var speed = 400; // ミリ秒
    // アンカーの値取得
    var href= $(this).attr("href");
    // 移動先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を数値で取得
    var position = target.offset().top;
    // スムーススクロール
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  })

});
// a[href^=#1]
