$(function(){
  var box_flash;
  var win_height=$(window).height();
  var use_con_height=$('#use_con').height();
  $('.mc,.tc_div,.warpAll').height(win_height);
  $('#use_instruction').height(win_height*0.74);
  $('#use_con').css('top',(win_height-use_con_height)/2);


  // 点击出现弹层
  $('.go_btn').click(function(){
    box_icon_flash();
    $('.mc,.tc_div').show();
  })
  // 隐藏宝箱弹层
  $('.backActive').click(function(){
    $('.mc,.tc_div').hide();
    clearInterval(box_flash);
  })

  // 点击宝箱
  $('.box_icon').click(function(){
    clearInterval(box_flash);
    $('.tc_div').hide();
    $('.use_con').show();
  })

// 奖品详情弹层弹出
$('.gift_ul li').click(function(){
  $('.mc,.use_instruction').show();
  $('.use_rule_word_con').scrollTop(0);
})


// 奖品详情弹层关闭
$('#close_lll').click(function(){
  $('.mc,.use_instruction').hide();
})

// 中奖弹层关闭
$('#use_close').click(function(){
  $('.mc,.use_con').hide();
})









  // 宝箱动画

  function box_icon_flash(){
    var gift_i=0;
    box_flash=setInterval(function(){
      switch (gift_i%32){
          case 0:
          $('.box_icon').css({
             'top':'4.09rem',
            'transform':'rotate(3deg)'
          },50);
          break;
          case 1:
          $('.box_icon').css({
             'top':'4.07rem',
            'transform':'rotate(6deg)'
          },50);
          break;
          case 2:
          $('.box_icon').css({
             'top':'4.05rem',
            'transform':'rotate(9deg)'
          },50);
          break;
          case 3:
          $('.box_icon').css({
             'top':'4.04rem',
            'transform':'rotate(11deg)'
          },50);
          break;
          case 4:
          $('.box_icon').css({
            'top':'4.05rem',
            'transform':'rotate(9deg)'
          },50);
          break;
          case 5:
          $('.box_icon').css({
             'top':'4.07rem',
            'transform':'rotate(6deg)'
          },50);
          break;
          case 6:
          $('.box_icon').css({
            'top':'4.09rem',
            'transform':'rotate(3deg)'
          },50);
          break;
          case 7:
          $('.box_icon').css({
             'top':'4.09rem',
            'transform':'rotate(-3deg)'
          },50);
          break;
          case 8:
          $('.box_icon').css({
             'top':'4.07rem',
            'transform':'rotate(-6deg)'
          },50);
          break;
          case 9:
          $('.box_icon').css({
             'top':'4.05rem',
            'transform':'rotate(-9deg)'
          },50);
          break;
          case 10:
          $('.box_icon').css({
             'top':'4.04rem',
            'transform':'rotate(-11deg)'
          },50);
          break;
          case 11:
          $('.box_icon').css({
             'top':'4.05rem',
            'transform':'rotate(-9deg)'
          },50);
          break;
          case 12:
          $('.box_icon').css({
             'top':'4.07rem',
            'transform':'rotate(-6deg)'
          },50);
          break;
          case 13:
          $('.box_icon').css({
            'top':'4.09rem',
            'transform':'rotate(-3deg)'
          },50);
          break;
          default:
          $('.box_icon').css({
            'top':'4.1rem',
             'transform':'rotate(0deg)'
          },50);
          break;

        }
        gift_i++;
      },50)
  }

})
