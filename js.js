$(function(){
	/*nav下滑效果*/
	$('li.subhov').mouseover(function(){
						  	
		$(this).find('.submenu').stop().slideDown();								
	})		
	$('li.subhov').mouseleave(function(){
		$(this).find('.submenu').stop().slideUp();							   								   
	})
	
	$('li.subhov2').mouseover(function(){
		$(this).find('.submenu-r').stop().slideDown();								
	})		
	$('li.subhov2').mouseleave(function(){
		$(this).find('.submenu-r').stop().slideUp();							   								   
	})
	
	/*main效果*/
	$('.search input[type="text"]').focus(function(){
		$('.top form span').css('display','none');	
		
	})
	$('.center ul li').eq(1).mouseover(function(){
						  	
		$(this).find('.c-submenu').stop().slideDown();								
	})		
	$('.center ul li').eq(1).mouseleave(function(){
		$(this).find('.c-submenu').stop().slideUp();							   								   
	})

	$('.center>ul>li').eq(5).mouseover(function(){
						  	
		$(this).find('.c-submenu2').stop().slideDown();								
	})		
	$('.center>ul>li').eq(5).mouseleave(function(){
		$(this).find('.c-submenu2').stop().slideUp();							   								   
	})
	
	//main轮播图左侧导航
	
	//lenovo电脑
	$('.center-left>ul>li:eq(0)').mouseover(function(){
		$(this).css('background-color','rgb(247,247,247)');
		$(this).css('border-right','none');
		
		//出现右侧菜单				  	
		$(this).find('.subpage').show();
		
		//span小图标换色
		$('.center-left>ul>li:eq(0)>span').css({'background-image':'url(images/redarrow.png)','bottom':'0px','right':'9px'});
		
	})	
	//鼠标离开
	$('.center-left>ul>li:eq(0)').mouseleave(function(){
		$(this).css('background-color','white');
		$(this).css('border-right','1px solid #ccc');											  
													  
		$(this).find('.subpage').hide();	
		$('.center-left>ul>li:eq(0)>span').css({'background-image':'url(images/%7EDFPYRN%60F4AL0X@@S_QX%5B9N.png)','bottom':'0px','right':'10px'});
	})
	
	//ThinkPad电脑
	$('.center-left>ul>li:eq(1)').mouseover(function(){
		$(this).css('background-color','rgb(247,247,247)');
		$(this).css('border-right','none');											 
		$(this).find('.subpage').css('top','-37px');								   
		//出现右侧菜单				  	
		$(this).find('.subpage').show();
		//span小图标换色
		$('.center-left>ul>li:eq(1)>span').css({'background-image':'url(images/redarrow.png)','bottom':'0px','right':'9px'});
		
	})	
	//鼠标离开
	$('.center-left>ul>li:eq(1)').mouseleave(function(){
		$(this).css('background-color','white');
		$(this).css('border-right','1px solid #ccc');											  
													  											  
		$(this).find('.subpage').hide();
		$('.center-left>ul>li:eq(1)>span').css({'background-image':'url(images/%7EDFPYRN%60F4AL0X@@S_QX%5B9N.png)','bottom':'0px','right':'10px'});
	})
	
	//平板电脑
	$('.center-left>ul>li:eq(2)').mouseover(function(){
		$(this).css('background-color','rgb(247,247,247)');
		$(this).css('border-right','none');											 
		$(this).find('.subpage').css('top','-73px');								   
		//出现右侧菜单				  	
		$(this).find('.subpage').show();
		//span小图标换色
		$('.center-left>ul>li:eq(2)>span').css({'background-image':'url(images/redarrow.png)','bottom':'0px','right':'9px'});
		
	})	
	//鼠标离开
	$('.center-left>ul>li:eq(2)').mouseleave(function(){
		$(this).css('background-color','white');
		$(this).css('border-right','1px solid #ccc');											  
													  											  
		$(this).find('.subpage').hide();
		$('.center-left>ul>li:eq(2)>span').css({'background-image':'url(images/%7EDFPYRN%60F4AL0X@@S_QX%5B9N.png)','bottom':'0px','right':'10px'});
	})
	
	//通讯卡
	$('.center-left>ul>li:eq(4)').mouseover(function(){
		$(this).css('background-color','rgb(247,247,247)');
		$(this).css('border-right','none');											 
		$(this).find('.subpage').css('top','-145px');								   
		//出现右侧菜单				  	
		$(this).find('.subpage').show();
		//span小图标换色
		$('.center-left>ul>li:eq(4)>span').css({'background-image':'url(images/redarrow.png)','bottom':'0px','right':'9px'});
		
	})	
	//鼠标离开
	$('.center-left>ul>li:eq(4)').mouseleave(function(){
		$(this).css('background-color','white');
		$(this).css('border-right','1px solid #ccc');											  
													  											  
		$(this).find('.subpage').hide();
		$('.center-left>ul>li:eq(4)>span').css({'background-image':'url(images/%7EDFPYRN%60F4AL0X@@S_QX%5B9N.png)','bottom':'0px','right':'10px'});
	})
	
	//打印机
	$('.center-left>ul>li:eq(6)').mouseover(function(){
		$(this).css('background-color','rgb(247,247,247)');
		$(this).css('border-right','none');											 
		$(this).find('.subpage').css('top','-217px');								   
		//出现右侧菜单				  	
		$(this).find('.subpage').show();
		//span小图标换色
		$('.center-left>ul>li:eq(6)>span').css({'background-image':'url(images/redarrow.png)','bottom':'0px','right':'9px'});
		
	})	
	//鼠标离开
	$('.center-left>ul>li:eq(6)').mouseleave(function(){
		$(this).css('background-color','white');
		$(this).css('border-right','1px solid #ccc');											  
													  											  
		$(this).find('.subpage').hide();
		$('.center-left>ul>li:eq(6)>span').css({'background-image':'url(images/%7EDFPYRN%60F4AL0X@@S_QX%5B9N.png)','bottom':'0px','right':'10px'});
	})
	
	//智能数码
	$('.center-left>ul>li:eq(7)').mouseover(function(){
		$(this).css('background-color','rgb(247,247,247)');
		$(this).css('border-right','none');											 
		$(this).find('.subpage').css('top','-253px');								   
		//出现右侧菜单				  	
		$(this).find('.subpage').show();
		//span小图标换色
		$('.center-left>ul>li:eq(7)>span').css({'background-image':'url(images/redarrow.png)','bottom':'0px','right':'9px'});
		
	})	
	//鼠标离开
	$('.center-left>ul>li:eq(7)').mouseleave(function(){
		$(this).css('background-color','white');
		$(this).css('border-right','1px solid #ccc');											  
													  											  
		$(this).find('.subpage').hide();
		$('.center-left>ul>li:eq(7)>span').css({'background-image':'url(images/%7EDFPYRN%60F4AL0X@@S_QX%5B9N.png)','bottom':'0px','right':'10px'});
	})
	
	//电脑增值服务
	$('.center-left>ul>li:eq(8)').mouseover(function(){
		$(this).css('background-color','rgb(247,247,247)');
		$(this).css('border-right','none');											 
		$(this).find('.subpage').css('top','-289px');								   
		//出现右侧菜单				  	
		$(this).find('.subpage').show();
		//span小图标换色
		$('.center-left>ul>li:eq(8)>span').css({'background-image':'url(images/redarrow.png)','bottom':'0px','right':'9px'});
		
	})	
	//鼠标离开
	$('.center-left>ul>li:eq(8)').mouseleave(function(){
		$(this).css('background-color','white');
		$(this).css('border-right','1px solid #ccc');											  
													  											  
		$(this).find('.subpage').hide();
		$('.center-left>ul>li:eq(8)>span').css({'background-image':'url(images/%7EDFPYRN%60F4AL0X@@S_QX%5B9N.png)','bottom':'0px','right':'10px'});
	})
	
	//商用产品
	$('.center-left>ul>li:eq(9)').mouseover(function(){
		$(this).css('background-color','rgb(247,247,247)');
		$(this).css('border-right','none');											 
		$(this).find('.subpage').css('top','-325px');								   
		//出现右侧菜单				  	
		$(this).find('.subpage').show();
		//span小图标换色
		$('.center-left>ul>li:eq(9)>span').css({'background-image':'url(images/redarrow.png)','bottom':'0px','right':'9px'});
		
	})	
	//鼠标离开
	$('.center-left>ul>li:eq(9)').mouseleave(function(){
		$(this).css('background-color','white');
		$(this).css('border-right','1px solid #ccc');											  
													  											  
		$(this).find('.subpage').hide();
		$('.center-left>ul>li:eq(9)>span').css({'background-image':'url(images/%7EDFPYRN%60F4AL0X@@S_QX%5B9N.png)','bottom':'0px','right':'10px'});
	})
	
	//轮播图
	slide();
	
	//广播动画
	/*boardcast();
	display none
	
	*/ 
	
	//今日推荐
	adScroll();

	//明星单品
	starScroll();
	
	/*1F~5F*/
	$('.list ul li img:first-of-type').hover(function(){
		$(this).animate({'margin-left':'44px'},500);																									
	},function(){
		$(this).animate({'margin-left':'35px'},500);
	});
	
	$('.f5_top img').hover(function(){
		$(this).stop(true);							
	},function(){
		$(this).stop(true);		
	});
	
	/*copyright*/
	$('.select').mouseover(function(){
		$('.select option').show();							
	});

	/*sidebar_right*/
	$('.sideber_right>ul>li').hover(function(){
		$(this).children('span').css('display','inline-block');
		$(this).children('img').css('display','none');
		$(this).css('backgroundColor','rgb(126,206,244)');
		$(this).find('.phone,.tri2').css('display','inline-block');
	},function(){
		$(this).children('span').css('display','none');
		$(this).children('img').css('display','inline-block');
		$(this).css('backgroundColor','white');
		$(this).find('.phone,.tri2').css('display','none');

	});

	/*返回顶部*/
	$('.totop').click(function(){
		$('body,html').animate({'scrollTop':'0'},700);
	});

	

	$('.starpro').hover(function(){
		$('.starpro img').css('display','none');
		$('.starpro .tohide').css({'display':'inline-block','color':'black'});
		$('.starpro').click(function(){
			if ($('html,body').is(':animated')) {
        		return;
    		}
			$('body,html').animate({'scrollTop':'740'},700);
		});
	},function(){
		$('.starpro img').css('display','inline-block');
		$('.starpro .tohide').css({'display':'none','color':'rgb(126,206,244)'});
	});

	$('.guesslike').hover(function(){
		$('.guesslike img').css('display','none');
		$('.guesslike .tohide').css({'display':'inline-block','color':'black'});
		$('.guesslike').click(function(){
			if ($('html,body').is(':animated')) {
        		return;
    		}
			$('body,html').animate({'scrollTop':'1100'},700);
		});
	},function(){
		$('.guesslike img').css('display','inline-block');
		$('.guesslike .tohide').css({'display':'none','color':'rgb(126,206,244)'});
	});

	/*1F*/
	$('.to1F').hover(function(){
		$('.to1F a:first-child').css('display','none');
		$('.to1F .tohide').css({'display':'inline-block','color':'black'});
		$('.to1F').click(function(){
			if ($('html,body').is(':animated')) {
        		return;
    		}
			$('body,html').animate({'scrollTop':'1600'},700);
		});
	},function(){
		$('.to1F a:first-child').css('display','inline-block');
		$('.to1F .tohide').css({'display':'none','color':'rgb(126,206,244)'});
	});
	
	/*2F*/
	$('.to2F').hover(function(){
		$('.to2F a:first-child').css('display','none');
		$('.to2F .tohide').css({'display':'inline-block','color':'black'});
		$('.to2F').click(function(){
			if ($('html,body').is(':animated')) {
        		return;
    		}
			$('body,html').animate({'scrollTop':'2210'},700);
		});
	},function(){
		$('.to2F a:first-child').css('display','inline-block');
		$('.to2F .tohide').css({'display':'none','color':'rgb(126,206,244)'});
	});

	/*3F*/
	$('.to3F').hover(function(){
		$('.to3F a:first-child').css('display','none');
		$('.to3F .tohide').css({'display':'inline-block','color':'black'});
		$('.to3F').click(function(){
			if ($('html,body').is(':animated')) {
        		return;
    		}
			$('body,html').animate({'scrollTop':'2825'},700);
		});
	},function(){
		$('.to3F a:first-child').css('display','inline-block');
		$('.to3F .tohide').css({'display':'none','color':'rgb(126,206,244)'});
	});

	/*4F*/
	$('.to4F').hover(function(){
		$('.to4F a:first-child').css('display','none');
		$('.to4F .tohide').css({'display':'inline-block','color':'black'});
		$('.to4F').click(function(){
			if ($('html,body').is(':animated')) {
        		return;
    		}
			$('body,html').animate({'scrollTop':'3450'},700);
		});
	},function(){
		$('.to4F a:first-child').css('display','inline-block');
		$('.to4F .tohide').css({'display':'none','color':'rgb(126,206,244)'});
	});

	/*5F*/
	$('.to5F').hover(function(){
		$('.to5F a:first-child').css('display','none');
		$('.to5F .tohide').css({'display':'inline-block','color':'black'});
		$('.to5F').click(function(){
			if ($('html,body').is(':animated')) {
        		return;
    		}
			$('body,html').animate({'scrollTop':'4060'},700);
		});
	},function(){
		$('.to5F a:first-child').css('display','inline-block');
		$('.to5F .tohide').css({'display':'none','color':'rgb(126,206,244)'});
	});

	/*6F*/
	$('.to6F').hover(function(){
		$('.to6F a:first-child').css('display','none');
		$('.to6F .tohide').css({'display':'inline-block','color':'black'});
		$('.to6F').click(function(){
			if ($('html,body').is(':animated')) {
        		return;
    		}
			$('body,html').animate({'scrollTop':'4710'},700);
		});
	},function(){
		$('.to6F a:first-child').css('display','inline-block');
		$('.to6F .tohide').css({'display':'none','color':'rgb(126,206,244)'});
	});


	/*左侧侧边导航*/
	navi();

	boardcast();
})
