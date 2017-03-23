
    $(document).ready(function() {
        (function() {
            $('.tool b').each(function(index, el) {
                if ($(this).text() == 0) {
                    $(this).hide()
                }
            });
            var height = $('.user_ex').height();
            var number = $('.jingyanzhi i').text();
            $('.jingyanzhi').css({
                'height': height
                // 'line-height': height + 'px'
            });
            $('.user_ex_color').css({
                'height': height
                // 'width': number + '%'
            })
            if (number >= 5000) {
                $('.user_ex_color').css({
                    'width': '100%'
                })
                $('.user_ex_color').css('border-radius', '.1rem');
            };
            if (number <= 50) {

                $('.shumiao').hide();
                $('.tree_tree').show();
                $('.jingyanzhi b').text('50')
                var Height = $('.shumiao').height();
                var Width = $('.shumiao').width();
                number=number*2;
                $('.user_ex_color').css({
                    'width': number + '%'
                })
                $(".dingwei").css({
                    'height': Height,
                    'width': Width
                });
                $('.fruit_flash').css({'width':'0.6rem','top':'0.5rem','left':'0.5rem'});
                $('.fruit_flash').css({'width':'1.3rem','top':'0.2rem','left':'0.1rem'});
                $('.tree').css('margin-left', '-' + Width / 2 + 'px');
            }

            if (number > 50 && number <= 150) {
                $('.shumiao').hide();
                $('.shu_2').show();
                $('.jingyanzhi b').text('400');
                $('.position_jiang img').eq(1).show().siblings().hide();
                var Height = $('.shumiao').height();
                var Width = $('.shumiao').width();
                var baifenbi = Math.floor(number / 400 * 100) + '%';
                $('.user_ex_color').css({
                    'width': baifenbi
                })
                var widX = Width * 1.22
                $(".dingwei").css({
                    'height': Height * 1.86,
                    'width': Width * 1.22
                });
                $('.fruit').css({'width':'0.6rem','top':'0.5rem','left':'0.8rem'});
                $('.fruit_flash').css({'width':'1.3rem','top':'0.1rem','left':'0.4rem'});
                $('.tree').css('margin-left', '-' + widX / 2 + 'px');
            }
            if (number > 150 && number <= 300) {
                $('.shumiao').hide();
                $('.shu_3').show();
                $('.jingyanzhi b').text('1000');
                $('.position_jiang img').eq(2).show().siblings().hide();
                var Height = $('.shumiao').height();
                var Width = $('.shumiao').width();
                var baifenbi = Math.floor(number / 1000 * 100) + '%';
                var widX = Width * 1.2
                $('.user_ex_color').css({
                    'width': baifenbi
                })
                $(".dingwei").css({
                    'height': Height * 2.06,
                    'width': Width * 1.2
                });
                $('.fruit').css({'width':'0.6rem','top':'0.5rem','left':'0.7rem'});
                $('.fruit_flash').css({'width':'1.3rem','top':'0.2rem','left':'0.3rem'});
                $('.tree').css('margin-left', '-' + widX / 2 + 'px');
            }
            if (number >300 && number <= 550) {
                $('.shumiao').hide();
                $('.shu_4').show();
                $('.jingyanzhi b').text('3000');
                $('.position_jiang img').eq(3).show().siblings().hide();
                var Height = $('.shumiao').height();
                var Width = $('.shumiao').width();
                var widX = Width * 1.2
                var baifenbi = Math.floor(number / 3000 * 100) + '%';
                $('.user_ex_color').css({
                    'width': baifenbi
                })
                $(".dingwei").css({
                    'height': Height * 1.9,
                    'width': Width * 1.2
                });
                $('.fruit').css({'width':'0.6rem','top':'0.7rem','left':'1.2rem'});
                $('.fruit_flash').css({'width':'1.2rem','top':'0.45rem','left':'0.8rem'});
                $('.tree').css('margin-left', '-' + widX / 2 + 'px');
            }
            if (number > 550 && number <=1000) {
                $('.shumiao').hide();
                $('.shu_5').show();
                $('.jingyanzhi b').text('6000');
                $('.position_jiang img').eq(4).show().siblings().hide();
                var Height = $('.shumiao').height();
                var Width = $('.shumiao').width();
                var widX = Width * 1.1
                var baifenbi = Math.floor(number / 6000 * 100) + '%';
                $('.user_ex_color').css({
                    'width': baifenbi
                })
                $(".dingwei").css({
                    'height': Height * 2,
                    'width': Width * 1.1
                });
                $('.fruit').css({'width':'0.6rem','top':'0.4rem','left':'1.5rem'});
                $('.fruit_flash').css({'width':'1.3rem','top':'0.1rem','left':'1.2rem'});
                $('.tree').css('margin-left', '-' + widX / 2 + 'px');
            }
            if (number > 1000 && number <= 10000) {
                $('.shumiao').hide();
                $('.shu_6').show();
                $('.jingyanzhi b').text('10000');
                $('.position_jiang img').eq(5).show().siblings().hide();
                var Height = $('.shumiao').height();
                var Width = $('.shumiao').width();
                var baifenbi = Math.floor(number / 10000 * 100) + '%';
                var widX = Width * 1.5
                $('.user_ex_color').css({
                    'width': baifenbi
                })
                $(".dingwei").css({
                    'height': Height * 2,
                    'width': Width * 1.5
                });
                $('.fruit').css({'width':'0.6rem','top':'0.8rem','left':'1.8rem'});
                $('.fruit_flash').css({'width':'1.3rem','top':'0.5rem','left':'1.5rem'});
                $('.tree').css('margin-left', '-' + widX / 2 + 'px');
            }
            if (number >= 10000) {
                $('.shumiao').hide();
                $('.shu_6').show();
                $('.jingyanzhi b').text('10000');
                $('.position_jiang img').eq(5).show().siblings().hide();
                var Height = $('.shumiao').height();
                var Width = $('.shumiao').width();
                var widX = Width * 1.5
                $('.user_ex_color').css({
                    'width': '100%'
                })
                $(".dingwei").css({
                    'height': Height * 2,
                    'width': Width * 1.5
                });
                $('.tree').css('margin-left', '-' + widX / 2 + 'px');
            }
        })();
        //var arrnum = [100, 400, 1000, 3000, 6000, 10000];

        // 新的等级值
        var arrnum=[50,150,300,550,1000,10000];
        // 初始化一个宽高
        var swidth = 120,
            sheight = 104;
        // 定义目前的经验值，目前的经验总值，目前的等级
        var Length,maxlength,new_si;
        new_si=1;
        //        全局时间对象
        var Timeevent = {
            time: function() {
                setTimeout(function() {
                    $('.tree span').addClass('jingyan');
                    $('.tree span').delay(400).fadeOut(200);
                }, 300);
            },
            //            水壶旋转事件
            shui_time: function() {
                setTimeout(function() {
                    $('.shui_1').addClass('zhuan1');
                    // var itext = $('.jingyanzhi i').text(Text);
                    $('.jingyanzhi i').text(Text + exNumber);
                    var Length = parseInt($('.jingyanzhi i').text());
                    var maxlength = parseInt($('.jingyanzhi b').text());
                    //传值：目前的经验值，目前的经验值总和，目前的等级
                    setTimeout(function(){
                      Timeevent.shengji(Length,maxlength,new_si);
                    },1500)
                }, 1400)
            },
            //            浇水重置事件
            zhuan1: function() {
                setTimeout(function() {

                    $('.shui').hide()
                    $('.shui_1').css({
                        right: '-1.6rem',
                        top: '-0.9rem'
                    }).removeClass('zhuan1');
                }, 2500)
            },
            //            锄头旋转事件
            chu_time: function() {
                setTimeout(function() {
                    $('.chu_1').addClass('zhuan2');
                    $('.jingyanzhi i').text(Text + exNumber);
                    var Length = parseInt($('.jingyanzhi i').text());
                    var maxlength = parseInt($('.jingyanzhi b').text());
                    //传值：目前的经验值，目前的经验值总和，目前的等级
                    setTimeout(function(){
                      Timeevent.shengji(Length,maxlength,new_si);
                    },1500)
                }, 1000)
            },
            //            松土重置事件
            zhuan2: function() {
                setTimeout(function() {
                    // .delay(1600).fadeOut(100);
                    $('.chu').hide()
                    $('.chu_1').css({
                        right: '-1.4rem',
                        bottom: '0.5rem'
                    }).removeClass('zhuan2');
                }, 2000)
            },
            //            杀虫重置事件
            peng_time: function() {
                setTimeout(function() {
                    $('.jingyanzhi i').text(Text + exNumber);
                    var Length = parseInt($('.jingyanzhi i').text());
                    var maxlength = parseInt($('.jingyanzhi b').text());
                    $('.peng,.chongchong').hide()
                    $('.peng_1').css({
                        right: '-1.2rem',
                        top: '0.1rem'
                    });

                    //传值：目前的经验值，目前的经验值总和，目前的等级
                    setTimeout(function(){
                      Timeevent.shengji(Length,maxlength,new_si);
                    },1500)

                }, 2000)
            },
            //      剪刀事件
            jian_time: function() {
                setTimeout(function() {
                    $('.jian_2').fadeOut(100);
                    $('.jingyanzhi i').text(Text + exNumber);
                    var Length = parseInt($('.jingyanzhi i').text());
                    var maxlength = parseInt($('.jingyanzhi b').text());
                    //传值：目前的经验值，目前的经验值总和，目前的等级
                    setTimeout(function(){
                      Timeevent.shengji(Length,maxlength,new_si);
                    },1500)
                }, 1100)
            },
            //            剪刀重置事件
            jian_chong: function() {
                setTimeout(function() {

                    $('.jian').hide()
                    $('.jian_2').css({
                        right: '-1.2rem',
                        top: '.5rem'
                    });
                }, 2200)
            },
            //            提示语
            arr: ['快来帮我浇水吧，我要长高高~',
                '快来帮我修剪哦，我要变漂亮~',
                '只有订购立即生效的流量包，才能获得修剪机会哦~',
                '种树好处多多，可以净化空气，防止水土流失呢~',
                '定期会有惊喜奖励活动，一定要每天都来哦~'
            ],
            arr1: [
                '更多培养机会正在筹建中，表着急哦~',
                '免费机会用完啦！订购流量包可获得修剪机会呢，一般人我不告诉他~~<a href="" style="color:#ff6600;text-decoration:underline ">订购流量包</a>'
            ],
            //       事件间隔时间蒙层
            mengceng: function() {
                setTimeout(function() {
                    $('.mengceng').hide();
                }, 2000)
            },
            mengceng1: function() {
                setTimeout(function() {
                    $('.kuang').delay(1000).fadeOut(300);
                    $('.mengceng1').fadeOut();

                }, 1000)
            },
            mengceng2: function() {
                setTimeout(function() {
                    $('.mengceng2,.kuang').fadeOut();

                }, 2000)
            },
            mengceng3: function() {
                $('mengceng3')
            },
            //礼包闪光事件 张豪亮新增 2017-03-21
            gift_bg_flash: function flash_small(){
              setInterval(function(){
                $('.gift_bg').fadeOut(1000).fadeIn(1000);
              },2000)

            },
            //施肥动效
            fertilizer: function(){
              // 肥料图片循环显示消失
                $('.fei_1').fadeIn(200);
                $('.fei_2').delay(300).fadeIn(100);
                $('.fei_3').delay(400).fadeIn(150);
                $('.fei_2').delay(450).fadeOut(150);
                $('.fei_3').delay(600).fadeOut(100);
                 $('.fei_2').delay(300).fadeIn(200);
                 $('.fei_3').delay(500).fadeIn(200);
                $('.fei_2,.fei_3').delay(800).fadeOut(200);
                $('.fei_1').delay(2000).fadeOut(200);

                setTimeout(function(){
                  // 把最新的经验值赋值到相应位置
                  $('.jingyanzhi i').text(Text + exNumber);
                  // 获取到最新的经验值
                  Length = parseInt($('.jingyanzhi i').text());
                  //获取到现在目前的升级所需经验总值
                   maxlength = parseInt($('.jingyanzhi b').text());

                   //传值：目前的经验值，目前的经验值总和，目前的等级
                   Timeevent.shengji(Length,maxlength,new_si);
                },3000)
            },
            //升级后等级计算
            //传值：目前的经验值，目前的经验值总和，目前的等级
            shengji:function(Length,maxlength,new_si){
              // 如果经验值不足以升级则计算新的比例
              if(Length<maxlength){
                // 计算新的比例
                  var userex_width=Math.floor(Length / maxlength * 100) + '%';
                  $('.user_ex_color').width(userex_width);
              }else{
                 // 如果经验值足以升级则赋值新的总值后，计算新的比例
                for(var new_i=0;new_i<arrnum.length;){
                  // 目前的经验值大于现在的总值，小于下一阶段的总值
                  if(arrnum[new_i]<Length&&Length<=arrnum[new_i+1]){
                    maxlength=arrnum[new_i+1];//获取新的总值
                    console.log(maxlength+'.............2')
                    //new_si=new_i+2;
                    $('.jingyanzhi b').text(maxlength);
                    var userex_width=Math.floor(Length / maxlength * 100) + '%';
                    $('.user_ex_color').width(userex_width);
                    Timeevent.shengjitc(Length,maxlength,new_si);
                  }

                  new_i++;
                }
              }

            },
            // 升级弹层以及树苗变化
            //传值：目前的经验值，目前的经验值总和，目前的等级
            shengjitc:function(Length,maxlength,new_si){
              $('.content_shengji_text').text('V'+new_si);
              for (var i = 0; i < arrnum.length; i++) {
                  if (arrnum[i] == maxlength) {
                      if (Length > 10000) {
                          alert('manjile')
                      } else {
                          var numI = i + 1;
                          var baifenbi = Math.floor(Length / maxlength * 100) + '%';
                          $('.user_ex_color').width(baifenbi);
                          $('.position_jiang img').eq(numI-1).show().siblings().hide();
                          $('.shumiao').hide();
                          $('.content_shengji_text').text('V'+numI);
                          $('.mengceng3').delay(400).fadeIn(50).delay(2000).fadeOut(100);
                          $('.shumiao').delay(200).eq(i).fadeIn();
                          switch (numI) {
                              case 1:
                                  setTimeout(function() {

                                      // var shuwidth = swidth * 1.16,
                                      //     shuheight = sheight * 1.8;
                                      var shuwidth = $('.shumiao').delay(200).eq(i + 1).width(),
                                          shuheight = $('.shumiao').delay(200).eq(i + 1).height();
                                          console.log(shuheight);
                                          console.log(shuwidth);
                                      $(".dingwei").css({
                                          'height': shuheight + 'px',
                                          'width': shuwidth + 'px'
                                      });
                                      $('.fruit_flash').css({'width':'0.6rem','top':'0.5rem','left':'0.5rem'});
                                      $('.fruit_flash').css({'width':'1.3rem','top':'0.2rem','left':'0.1rem'});
                                      $('.tree').css('margin-left', '-' + shuwidth / 2 + 'px');
                                  }, 1800)
                                  break;
                              case 2:

                                  setTimeout(function() {
                                      // var shuwidth = swidth * 1.2,
                                      //     shuheight = sheight * 1.6;
                                      var shuwidth = $('.shumiao').delay(200).eq(i + 1).width(),
                                          shuheight = $('.shumiao').delay(200).eq(i + 1).height();
                                          console.log(shuheight);
                                          console.log(shuwidth);

                                      $(".dingwei").css({
                                          'height': shuheight + 'px',
                                          'width': shuwidth + 'px'
                                      });
                                      $('.fruit').css({'width':'0.6rem','top':'0.5rem','left':'0.8rem'});
                                      $('.fruit_flash').css({'width':'1.3rem','top':'0.1rem','left':'0.4rem'});
                                      $('.tree').css('margin-left', '-' + shuwidth / 2 + 'px');
                                  }, 1800)
                                  break;
                              case 3:

                                  setTimeout(function() {
                                      // var shuwidth = swidth * 1.2,
                                      //     shuheight = sheight * 2.1;
                                      var shuwidth = $('.shumiao').delay(200).eq(i + 1).width(),
                                          shuheight = $('.shumiao').delay(200).eq(i + 1).height();
                                          console.log(shuheight);
                                          console.log(shuwidth);
                                      $(".dingwei").css({
                                          'height': shuheight + 'px',
                                          'width': shuwidth + 'px'
                                      });
                                      $('.fruit').css({'width':'0.6rem','top':'0.5rem','left':'0.7rem'});
                                      $('.fruit_flash').css({'width':'1.3rem','top':'0.2rem','left':'0.3rem'});
                                      $('.tree').css('margin-left', '-' + shuwidth / 2 + 'px');
                                  }, 1800)
                                  break;
                              case 4:

                                  setTimeout(function() {
                                    // var shuwidth = swidth * 1.18,
                                    //     shuheight = sheight * 1.9;
                                    var shuwidth = $('.shumiao').delay(200).eq(i + 1).width(),
                                        shuheight = $('.shumiao').delay(200).eq(i + 1).height();
                                        console.log(shuheight);
                                        console.log(shuwidth);
                                      $(".dingwei").css({
                                          'height': shuheight + 'px',
                                          'width': shuwidth + 'px'
                                      });
                                      $('.fruit').css({'width':'0.6rem','top':'0.7rem','left':'1.2rem'});
                                      $('.fruit_flash').css({'width':'1.2rem','top':'0.45rem','left':'0.8rem'});
                                      $('.tree').css('margin-left', '-' + shuwidth / 2 + 'px');
                                  }, 1800)
                                  break;
                              case 5:

                                  setTimeout(function() {
                                    // var shuwidth = swidth * 1.3,
                                    //     shuheight = sheight * 1.6;
                                    var shuwidth = $('.shumiao').delay(200).eq(i + 1).width(),
                                        shuheight = $('.shumiao').delay(200).eq(i + 1).height();
                                        console.log(shuheight);
                                        console.log(shuwidth);
                                      $(".dingwei").css({
                                          'height': shuheight + 'px',
                                          'width': shuwidth + 'px'
                                      });
                                      $('.fruit').css({'width':'0.6rem','top':'0.4rem','left':'1.5rem'});
                                      $('.fruit_flash').css({'width':'1.3rem','top':'0.1rem','left':'1.2rem'});
                                      $('.tree').css('margin-left', '-' + shuwidth / 2 + 'px');
                                  }, 1800)
                                  break;
                              default:
                              setTimeout(function() {
                                // var shuwidth = swidth * 1.3,
                                //     shuheight = sheight * 1.6;
                                var shuwidth = $('.shumiao').delay(200).eq(i).width(),
                                    shuheight = $('.shumiao').delay(200).eq(i).height();
                                    console.log(shuheight);
                                    console.log(shuwidth);
                                  $(".dingwei").css({
                                      'height': shuheight + 'px',
                                      'width': shuwidth + 'px'
                                  });
                                  $('.fruit').css({'width':'0.6rem','top':'0.8rem','left':'1.8rem'});
                                  $('.fruit_flash').css({'width':'1.3rem','top':'0.5rem','left':'1.5rem'});
                                  $('.tree').css('margin-left', '-' + shuwidth / 2 + 'px');
                              }, 1800)
                              break;

                          }

                          return;
                      }

                  }
              }
            },

            //果实发光事件
            fruitFlash:function(){
              var fruitFlash_i=0;
              setInterval(function(){
                if(fruitFlash_i%2==0){
                   //$('.fruit_flash').css('z-index','11');
                   $('.fruit_flash').fadeIn(900);
                }else{
                  //$('.fruit_flash').css('z-index','9');
                   $('.fruit_flash').fadeOut(1000);
                }
                fruitFlash_i++;
              },1000)
            }
        };

        //礼包闪光事件执行 张豪亮新增 2017-03-21
        Timeevent.gift_bg_flash();
        //果实发光事件执行
        Timeevent.fruitFlash();



        // 提示文案

        $('.dingwei').on('click', 'img', function() {
          $('.mengceng1,.kuang').hide();
            var index_number = Math.floor(Math.random() * 5);
            var treeH,treemH;
            var shumiaoi=0;
            for(var i=0;i<$('.shumiao').length;i++){
              var dis=$('.shumiao').eq(i).css('display');
              if(dis=='block'){
                shumiaoi=i;
                treeH = $('.shumiao').eq(i).height()+'px';
                treemH = $('.shumiao').eq(i).height()+8+'px';
              }
            }
            var fruitH = $('.fruit').height()+'px';
            var fruitmH = $('.fruit').height()+3+'px';

                    $('.shumiao').eq(shumiaoi).stop().animate({
                        height: treemH
                    }, 300);
                    $('.fruit').stop().animate({
                        height: fruitmH
                    }, 300);
                    $('.shumiao').eq(shumiaoi).delay(80).animate({
                        height: treeH
                    }, 300);
                    $('.fruit').delay(80).animate({
                        height: fruitH
                    }, 300);

            $('.kuang').text(Timeevent.arr[index_number]).stop().fadeIn(300);

            $(".mengceng1").show();
            Timeevent.mengceng1()

        });
        $('.dingwei').on('click', '.fruit,.fruit_flash', function(){
          window.location='http://124.192.56.213:99/arborDay/big_gifts.html';
        });

        $(".tool ul li").on('click', 'img', function() {
            var Index = $(this).parent().index();
            var b_number = parseInt($(this).siblings('b').text());
            Text = parseInt($('.jingyanzhi i').text());

            switch (Index) {
                case 0:
                    switch (b_number) {
                        case 0:
                            var index_text = Timeevent.arr1[1];
                            $(".kuang").html(index_text).fadeIn(200);
                            $(".mengceng2").show();
                            Timeevent.mengceng2()

                            break;

                        default:
                            $('.mengceng').show();
                            $(this).siblings('b').text('0').fadeOut();;
                            // 这里传事件的基数
                            var jishu = jishu || 5;
                            exNumber = Math.round(jishu * b_number);
                            $(this).fadeOut().delay(2000).fadeIn(200);
                            if (exNumber == 0) {
                                exNumber = 1;
                            }
                            $('.exnumber').text(exNumber);
                            $('.tree span').delay(1800).fadeIn();
                            Timeevent.time()
                            $('.tree span').removeClass('jingyan');

                            Timeevent.mengceng();
                            $('.shui_1').delay(200).fadeIn(200).animate({
                                right: '-1rem',
                                top: '-0.7rem'
                            }, 600);
                            Timeevent.shui_time();
                            $('.shui_2').delay(1800).fadeIn(100);

                            Timeevent.zhuan1();


                    }
                    break;
                case 1:
                    switch (b_number) {
                        case 0:
                            var index_text = Timeevent.arr1[1];
                            $(".kuang").html(index_text).fadeIn(200);
                            $(".mengceng2").show();
                            Timeevent.mengceng2()
                            break;

                        default:
                            $('.mengceng').show();
                            $(this).siblings('b').text('0').fadeOut();;
                            // 这里传事件的基数
                            var jishu = jishu || 5;
                            exNumber = Math.round(jishu * b_number);
                            $(this).fadeOut().delay(2000).fadeIn(200);
                            if (exNumber == 0) {
                                exNumber = 1;
                            }
                            $('.exnumber').text(exNumber);
                            $('.tree span').delay(1500).fadeIn();
                            Timeevent.time()
                            $('.tree span').removeClass('jingyan');

                            Timeevent.mengceng();

                            $('.chu_1').delay(200).fadeIn(200).animate({
                                right: '-0.4rem',
                                bottom: '0.1rem'
                            }, 600);
                            Timeevent.chu_time();
                            $('.chu_2').delay(1200).fadeIn(100);

                            Timeevent.zhuan2()
                    }
                    break;
                case 2:
                    switch (b_number) {
                        case 0:
                            var index_text = Timeevent.arr1[1];
                            $(".kuang").html(index_text).fadeIn(200);
                            $(".mengceng2").show();
                            Timeevent.mengceng2()
                            break;


                        default:
                            $('.mengceng').show();
                            $(this).siblings('b').text('0').fadeOut();;
                            // 这里传事件的基数
                            var jishu = jishu || 5;
                            exNumber = Math.round(jishu * b_number);
                            $('.chongchong').fadeIn();
                            $(this).fadeOut().delay(2000).fadeIn(200);
                            if (exNumber == 0) {
                                exNumber = 1;
                            }
                            $('.exnumber').text(exNumber);
                            $('.tree span').delay(1500).fadeIn();
                            Timeevent.time();
                            $('.tree span').removeClass('jingyan');

                            Timeevent.mengceng();
                            $('.peng_1').delay(200).fadeIn(200).animate({
                                right: '-1rem',
                                top: '0.1rem'
                            }, 600);

                            $('.peng_2').delay(1200).fadeIn(100);

                            Timeevent.peng_time()
                    }
                    break;
                case 3:
                    switch (b_number) {
                        case 0:
                            var index_text = Timeevent.arr1[1];
                            $(".kuang").html(index_text).fadeIn(200);
                            $(".mengceng2").show();
                            Timeevent.mengceng2()
                            break;

                        default:
                            $('.mengceng').show();
                            $(this).siblings('b').text('0').fadeOut();;
                            // 这里传事件的基数
                            var jishu = jishu || 5;
                            exNumber = Math.round(jishu * b_number);
                            $(this).fadeOut().delay(2000).fadeIn(200);
                            if (exNumber == 0) {
                                exNumber = 1;
                            }
                            $('.exnumber').text(exNumber);
                            $('.tree span').delay(1600).fadeIn();
                            Timeevent.time()
                            $('.tree span').removeClass('jingyan');

                            Timeevent.mengceng();
                            $('.jian_2').delay(200).fadeIn(200).animate({
                                right: '-0.5rem',
                                top: '0.2rem'
                            }, 600);
                            Timeevent.jian_time()
                            //                            Timeevent.chu_time();
                            $('.jian_1').delay(1100).fadeIn(100);
                            $('.jian_3').delay(1300).fadeIn(50);
                            Timeevent.jian_chong()
                    }
                    break;
                default:

                  switch (b_number) {
                      case 0:
                          var index_text = Timeevent.arr1[1];
                          $(".kuang").html(index_text).fadeIn(200);
                          $(".mengceng2").show();
                          Timeevent.mengceng2()

                          break;

                      default:
                          $('.mengceng').show();
                          $(this).siblings('b').text('0').fadeOut();;
                          // 这里传事件的基数
                          var jishu = jishu || 5;
                          exNumber = Math.round(jishu * b_number);
                          $(this).fadeOut().delay(2000).fadeIn(200);
                          if (exNumber == 0) {
                              exNumber = 1;
                          }
                          $('.exnumber').text(exNumber);
                          $('.tree span').delay(1800).fadeIn();
                          Timeevent.time()
                          $('.tree span').removeClass('jingyan');

                          Timeevent.mengceng();

                          Timeevent.fertilizer();

                          Timeevent.zhuan1();


                  }
                  break;
            }

        })

    });
