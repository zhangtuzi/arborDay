$(function(){
  var box_flash;
  var win_height=$(window).height();
  var use_con_height=$('#use_con').height();
  var cj_fail_height=$('#cj_fail').height();
  $('.mc,.tc_div,.warpAll').height(win_height);
  $('#use_instruction').css('max-height',win_height*0.74);
  var use_instruction_height=$('#use_instruction').height();
   $('.use_rule_word').css('max-height',win_height*0.74-80);
  $('#use_instruction').css('top',(win_height-use_instruction_height)/2);
  $('#use_con').css('top',(win_height-use_con_height)/2);
  $('#cj_fail').css('top',(win_height-cj_fail_height)/2);
})
