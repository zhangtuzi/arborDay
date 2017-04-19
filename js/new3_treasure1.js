$(function(){
  var box_flash;
  var win_height=$(window).height();
  $('.mc,.tc_div,.warpAll').height(win_height);

  // 点击出现弹层
  $('.go_btn').click(function(){
    box_icon_flash();
    $('.mc,.tc_div').show();
  })
  // 隐藏弹层
  $('.backActive').click(function(){
    $('.mc,.tc_div').hide();
    clearInterval(box_flash);
  })

  // 宝箱动画

  function box_icon_flash(){
    var gift_i=0;
    box_flash=setInterval(function(){
      switch (gift_i%32){
          case 0:
          $('.box_icon').css({
             'top':'0.09rem',
            'transform':'rotate(1deg)'
          },50);
          break;
          case 1:
          $('.box_icon').css({
             'top':'0.07rem',
            'transform':'rotate(2deg)'
          },50);
          break;
          case 2:
          $('.box_icon').css({
             'top':'0.05rem',
            'transform':'rotate(3deg)'
          },50);
          break;
          case 3:
          $('.box_icon').css({
             'top':'0.04rem',
            'transform':'rotate(4deg)'
          },50);
          break;
          case 4:
          $('.box_icon').css({
            'top':'0.05rem',
            'transform':'rotate(3deg)'
          },50);
          break;
          case 5:
          $('.box_icon').css({
             'top':'0.07rem',
            'transform':'rotate(2deg)'
          },50);
          break;
          case 6:
          $('.box_icon').css({
            'top':'0.09rem',
            'transform':'rotate(1deg)'
          },50);
          break;
          case 7:
          $('.box_icon').css({
             'top':'0.09rem',
            'transform':'rotate(-1deg)'
          },50);
          break;
          case 8:
          $('.box_icon').css({
             'top':'0.07rem',
            'transform':'rotate(-2deg)'
          },50);
          break;
          case 9:
          $('.box_icon').css({
             'top':'0.05rem',
            'transform':'rotate(-3deg)'
          },50);
          break;
          case 10:
          $('.box_icon').css({
             'top':'0.04rem',
            'transform':'rotate(-4deg)'
          },50);
          break;
          case 11:
          $('.box_icon').css({
             'top':'0.05rem',
            'transform':'rotate(-3deg)'
          },50);
          break;
          case 12:
          $('.box_icon').css({
             'top':'0.07rem',
            'transform':'rotate(-2deg)'
          },50);
          break;
          case 13:
          $('.box_icon').css({
            'top':'0.09rem',
            'transform':'rotate(-1deg)'
          },50);
          break;
          default:
          $('.box_icon').css({
            'top':'0.1rem',
             'transform':'rotate(0deg)'
          },50);
          break;

        }
        gift_i++;
      },50)
  }

})
