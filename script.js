$(function () {
  // ハンバーガーメニュー
  $('.js-btn').on('click', function () { // js-btnクラスをクリックすると、
    $('.menu , .btn-line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
  })

  // ヘッダー背景色変更
  var header = $('#header');
  var about = $('#about');
  //ウィンドウ枠からのabout位置を取得
  var aboutTop = about.offset().top;

  $(window).scroll(function () {
    // ウィンドウ枠からのスクロール量を取得
    var winTop = $(this).scrollTop();
    //aboutがウィンドウ枠より上にきたらopacityで透過
    if (winTop >= aboutTop - 200) {
      header.css('background-color', 'rgba(0, 0, 0, 0.5)');
      //aboutがウィンドウ枠より下であれば透過させない
    } else if (winTop <= aboutTop) {
      header.css('background-color', 'rgba(0, 0, 0, 0)');
    }
  });

  // ページ内スムーススクロール
  $('a[href^="#"]').click(function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    var speed = 500;
    $("html, body").animate({
      scrollTop: position - 50
    }, speed, "swing");
    return false;
  });
})