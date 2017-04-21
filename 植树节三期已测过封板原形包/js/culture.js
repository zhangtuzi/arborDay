$(function(){
  var jz_setval;//小蒙层动画变量
  var win_height=$(window).height();
  var body_height=$('body').height();
  //底部背景图片定位
  if(win_height<body_height+60){
    // 当页面内容超过一屏幕时
    $('.hd_gz_nr').css('margin-bottom',"0.6rem");
    $('.warpAll').css({"min-height":body_height});
    $('.bg_bottom').css('position',"relative");
  }else{
    // 当页面内容不足一屏幕时
     $('.warpAll').css("min-height",win_height);
  }

// 定义整体事件对象
var Func={
  // 弹层居中事件
  tc_jz:function(tcID){//传入弹层ID
    var tcID_height=$('#'+tcID+'').height();
    $('#'+tcID+'').css('top',(win_height-tcID_height)/2);
  },
  // 加载小蒙层动画
  jz_flash:function(){
      var jz_i=0;
      jz_setval=setInterval(function(){
          if(jz_i>$('.jz_sy').length-2){
            jz_i=0;
          }else{
            jz_i++;
          }
          $('.jz_sy').removeClass('jz_yd');
          $('.jz_sy').eq(jz_i).addClass('jz_yd');
      },500)
    },
  // 激活成功后
  After_jh_suc:function(){
    var jh_suc=$('#jh_con').css('display');//激活成功弹层是否显示
    if(jh_suc=='block'){//激活弹层显示
      var jhcg_p='';//激活后页面激活按钮提示区域显示内容
      jhcg_p+='<p class="padding020">亲，您已成功激活<span class="color1">1GB流量日包</span>，去';
      jhcg_p+='<a class="color1 underline" href="http://124.192.56.213:99/hongbaoyu/wodejiangping.html">我的背包</a>';
      jhcg_p+='查看详情~</p>';
      $('.jq_qd').html(jhcg_p);
      $('.jq_qd').removeClass('height130').addClass('height60');//激活后改变页面按钮提示区域的高度
    }
  },

  // 激活中小蒙层出现3s后消失
  jz_flash_zx:function(){
    //中奖弹层隐藏，加载中小蒙层出现并且动画，3s后小弹层消失，激活成功弹层出现
    $('.use_con').hide();//关闭领取弹层
    $('.mc,.jz_mc').show();//全屏蒙层和激活中小蒙层出现
    Func.jz_flash();//激活中小动画执行
    setTimeout(function(){
      clearInterval(jz_setval);//激活中小动画结束
      $('.jz_mc').hide();//激活中小动画隐藏
    },3000)
  },
  //激活成功弹层
  jh_suc:function(){
    Func.jz_flash_zx();
    setTimeout(function(){
      Func.tc_jz('jh_con');
      $('#jh_con').show();
      Func.After_jh_suc();
    },3000)
  },
  //激活失败弹层
  jh_fail:function(){
    Func.jz_flash_zx();
    setTimeout(function(){
      Func.tc_jz('jh_fail');
      $('#jh_fail').show();
    },3000)
  },
}

// 立即领取按钮
$('.ljlq_btn').bind('click',function(){
  if($(this).hasClass('lqsb')){//领取失败条件触发
    Func.tc_jz('use_fail');
    $('.mc,#use_fail').show();
  }else{//领取成功情况
    $(this).addClass('dn');//立即领取按钮隐藏
    $('.ljjh_btn').removeClass('dn');//立即激活按钮显示
    Func.tc_jz('use_con');
    $('.mc,#use_con').show();
  }
})

  //立即激活按钮
  $('#ljjh_Btn,.ljjh_btn').click(function(){
    if($(this).hasClass('jhsb')){//触发激活失败条件
      Func.jh_fail();//执行激活失败方法
      setTimeout(function(){
        Func.tc_jz('jh_fail');//激活失败弹层居中
        $('#jh_fail').show();//激活失败弹层出现
      },3000)
    }else{
      Func.jh_suc();//执行激活成功方法
    }

  })

  // 我知道了按钮，关闭所有弹层和蒙层
  $('#konwBtn').click(function(){
    $('.mc,#jh_con,#jh_fail,.use_con').hide();
  })

  // 关闭中奖弹层(不分中奖是否成功)
  $('.use_close_zhl').click(function(){
    $('.mc,#use_fail,#use_con').hide();
  })
  // 关闭激活弹层(不分激活是否成功)
  $('.jh_close_zhl').click(function(){
    $('.mc,#jh_fail,#jh_con').hide();
  })

})
