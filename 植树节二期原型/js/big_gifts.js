/**
 * Created by mrbean on 17/3/22.
 */


var progress_num=400; // 后台数据
var max_num=500; // 最大值
var WIDTH=5.8; //进度条总长
var wi=progress_num/max_num*WIDTH;
$("#progress_inner").css({"width":wi+"rem"});
$("#progress_num").html(progress_num);

$("#coupons li").bind("click",function () { // 使用说明
  $(".mengceng").css("display","block");
  $("#use_instruction").css("display","block");
});

$("#close_lll").bind("click",function () { // 关闭使用说明弹层
  $(".mengceng").css("display","none");
  $("#use_instruction").css("display","none");
});

$("#btn_get").bind("click",function () {  // 领取
  $(".mengceng").css("display","block");
  $("#use_con").css("display","block");
});

$("#btn_back").bind("click",function () {
  $(".mengceng").css("display","none");
  $("#use_con").css("display","none");
});

$("#btn_share").bind("click",function () {
  $(".mengceng").css("display","none");
  $("#use_con").css("display","none");
});


$(".gray_btn").bind("click",function () { //按钮置灰
  $(".btn_bg").css({"background": "url('images/gray_btn_lll.png') no-repeat",
    "background-size": "100%"});
  $("#btn_get").attr("disabled","disabled");
});