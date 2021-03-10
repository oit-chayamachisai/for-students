var images = [ 'url(../img/Top_1.jpg)', 'url(../img/Top_2.jpg)', 'url(../img/Top_3.jpg)' ];  // ランダム表示させたい画像のパス

    $(function(){
      var backgroundRandom = function(){
        var number = Math.floor(Math.random() * images.length); // 0~3の数値を算出
        var selectedImg = images[number]; // 算出された数値を元に、1行目の配列から取り出す
        $('#randomImg').css('background-image',selectedImg); // cssにランダムに選ばれた画像を背景設定する
      };
      setInterval(backgroundRandom, 1000);  // 1000msごとにランダム切り替えを繰り返す
    });
