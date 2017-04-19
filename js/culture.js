$(function(){
    var jz_setval;//小蒙层动画变量
  var win_height=$(window).height();
  var body_height=$('body').height();
  if(win_height<body_height+60){
    // 当页面内容超过一屏幕时
    $('.hd_gz_nr').css('margin-bottom',"0.6rem");
    $('.warpAll').css("min-height",body_height);
  }else{
    // 当页面内容不足一屏幕时
     $('.warpAll').css("min-height",win_height);
  }

// 定义整体事件对象
var Func={
  // 弹层居中事件
  tc_jz:function(tcID){
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
  jh_tc:function(){
    var jh_suc=$('#jh_con').css('display');//激活成功弹层是否显示
    if(jh_suc=='block'){//激活弹层显示
      var jhcg_p='';
      jhcg_p+='<p class="padding020">亲，您已成功激活<span class="color1">1GB流量日包</span>，去';
      jhcg_p+='<a class="color1 underline" href="http://124.192.56.213:99/hongbaoyu/wodejiangping.html">我的背包</a>';
      jhcg_p+='查看详情~</p>';
      $('.jq_qd').html(jhcg_p);
      $('.jq_qd').removeClass('height130').addClass('height60');
    }
  },

  // 激活中小蒙层出现3s后消失
  jz_flash_zx:function(){
    //中奖弹层隐藏，加载中小蒙层出现并且动画，3s后小弹层消失，激活成功弹层出现
    $('.use_con').hide();
    $('.mc,.jz_mc').show();
    Func.jz_flash();
    setTimeout(function(){
      clearInterval(jz_setval);
      $('.jz_mc').hide();

    },3000)
  },
  //激活成功弹层
  jh_suc:function(){
    Func.jz_flash_zx();
    setTimeout(function(){
      Func.tc_jz('jh_con');
      $('#jh_con').show();
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
  $('.ljlq_btn').bind('click',function(){
    if($(this).hasClass('ljjh_Btn2')){//领取按钮变成了激活按钮，并且激活失败
      Func.jh_fail();
      setTimeout(function(){
        Func.tc_jz('jh_fail');
        $('#jh_fail').show();
      },3000)
    }else{
      if(!$(this).hasClass('ljjh_Btn')){//领取按钮第一次点击
        if($(this).hasClass('lqsb')){//领取失败弹层
          Func.tc_jz('use_fail');
          $('.mc,#use_fail').show();
        }else{//领取成功弹层
          $(this).attr('class','ljjh_Btn');
          $(this).text('立即激活');
          Func.tc_jz('use_con');
          $('.mc,#use_con').show();
          $('.ljlq_btn').unbind('click');
        }
      }else{//领取按钮变成了激活按钮
          Func.jh_fail();
          setTimeout(function(){
            Func.tc_jz('jh_con');
            $('.mc,#jh_con').show();
            Func.jh_tc();
          },3000)
      }
    }


  })

  //中奖弹层隐藏，加载中小蒙层出现并且动画，3s后小弹层消失，激活弹层出现
  $('#ljjh_Btn').click(function(){
    Func.jh_suc();

  })

  // 关闭激活弹层
  $('#konwBtn').click(function(){
    $('.mc,#jh_con,#jh_fail').hide();
  })

  // 关闭中奖弹层

  $('.close_lll,.close_lll_b').click(function(){
    $('.mc,.use_con').hide();
  })

})
