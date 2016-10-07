//轮播图动画
function slide(){
	
	var len=$('.num>li').length;
	var index=0;
	var timer;
	var zindex=0;

	$('.slider li').eq(0).show();
	
	
	
	
	//划入与划出图片
	$('.center-middle').hover(function(){
		clearInterval(timer);	
		$('.left,.right').animate({'opacity':'0.7'},300);
	},function(){
		$('.left,.right').animate({'opacity':'0'},200);	
		timer=setInterval(function(){
			if(index==len){
				index=0;	
				
			}				   
			show(++index);
			
			
			
			
			
		},2000);
		
	}).trigger('mouseleave');
	
	$('.left').click(function(){
		
		if(index==-1){
				index=5;	
			}
		show(--index);
		
							  
	});
	$('.right').click(function(){
		
		if(index==len){
				index=0;	
			}
		show(++index);
		
							  
	});
	
	//图片显示动画
	function show(index){
		if(index==len){
				index=0;	
				
			}
		$('.slider li').hide();
		$('.slider li').eq(index).fadeIn();
		
		
		
		$('.num li span').removeClass('on').eq(index).addClass('on');
		
		
		
	}

}



//推荐产品
function adScroll(){
	var index=1;
	var len=8;
	var left;
	
	$('.adver').hover(function(){
		$('.left2,.right2').animate({'opacity':'0.7'},300);
		
	},function(){
		$('.left2,.right2').animate({'opacity':'0'},200);	
	}).trigger('mouseleave');	
	
	
	$('.right2').click(function(){
		if ($('.adver ul').is(':animated')) {
        	return;
    	}
			animate(-250);	
			
		});					   						   
	
	$('.left2').click(function(){
		if ($('.adver ul').is(':animated')) {
        	return;
    	}
			animate(250);
			
	});
	
	function animate(offset){
		 left = parseInt($('.adver ul').css('left')) + offset;
                if (offset>0) {
                    offset = '+=' + offset;
                }
                else {
                    offset = '-=' + Math.abs(offset);
                }
                $('.adver ul').animate({'left': offset}, 1000, function () {
                    if(left > -250){
                        $('.adver ul').css('left', -250 * len);
                    }
                    if(left < (-250 * len)) {
                        $('.adver ul').css('left', -250);
                    }
                });
		
	}
}


//明星产品
function starScroll(){
	var index=1;
	var len=12;
	var left;

	
	$('.right3').click(function(){
		if ($('.star ul').is(':animated')) {
        	return;
    	}
			animate(-200);	
			
		});					   						   
	
	$('.left3').click(function(){
		if ($('.star ul').is(':animated')) {
        	return;
    	}
			animate(200);
			
	});
	
	function animate(offset){
		 left = parseInt($('.star ul').css('left')) + offset;
                if (offset>0) {
                    offset = '+=' + offset;
                }
                else {
                    offset = '-=' + Math.abs(offset);
                }
                $('.star ul').animate({'left': offset}, 1000, function () {
                    if(left > -200){
                        $('.star ul').css('left', -200 * len);
                    }
                    if(left < (-200 * len)) {
                        $('.star ul').css('left', -200);
                    }
                });
		
	}

}
//sidebar_left
function navi(){
	var top;
	$(window).scroll(function(){ 
		top=$(this).scrollTop();
		if(top>600){
				$('.sideber_left').css('display','block');
				if(top>=740&&top<1100){
					$('.starpro img').css('display','none');
					$('.starpro .tohide').css('display','inline-block');
				}else{
					$('.starpro img').css('display','inline-block');
					$('.starpro .tohide').css('display','none');
				}
				if(top>=1100&&top<1600){
					$('.guesslike img').css('display','none');
					$('.guesslike .tohide').css('display','inline-block');
				}else{
					$('.guesslike img').css('display','inline-block');
					$('.guesslike .tohide').css('display','none');
				}

				/*1F*/
				if(top>=1600&&top<1700){
					$('.to1F a:first-child').css('display','none');
					$('.to1F .tohide').css('display','inline-block');
				}else{
					$('.to1F a:first-child').css('display','inline-block');
					$('.to1F .tohide').css('display','none');
				}

				/*2F*/
				if(top>=1700&&top<2300){
					$('.to2F a:first-child').css('display','none');
					$('.to2F .tohide').css('display','inline-block');
				}else{
					$('.to2F a:first-child').css('display','inline-block');
					$('.to2F .tohide').css('display','none');
				}

				/*3F*/
				if(top>=2300&&top<2900){
					$('.to3F a:first-child').css('display','none');
					$('.to3F .tohide').css('display','inline-block');
				}else{
					$('.to3F a:first-child').css('display','inline-block');
					$('.to3F .tohide').css('display','none');
				}

				/*4F*/
				if(top>=2900&&top<3500){
					$('.to4F a:first-child').css('display','none');
					$('.to4F .tohide').css('display','inline-block');
				}else{
					$('.to4F a:first-child').css('display','inline-block');
					$('.to4F .tohide').css('display','none');
				}

				/*5F*/
				if(top>=3500&&top<4710){
					$('.to5F a:first-child').css('display','none');
					$('.to5F .tohide').css('display','inline-block');
				}else{
					$('.to5F a:first-child').css('display','inline-block');
					$('.to5F .tohide').css('display','none');
				}

				/*6F*/
				if(top>=4710){
					$('.to6F a:first-child').css('display','none');
					$('.to6F .tohide').css('display','inline-block');
				}else{
					$('.to6F a:first-child').css('display','inline-block');
					$('.to6F .tohide').css('display','none');
				}

			}
		if(top<=600){
				$('.sideber_left').css('display','none');
			}
			

	});
	

}

//小广播
function boardcast(){
	var len=3;
	var top;
	var timer;
	
	function animate(){
		
		var offset=-65;
		 top = parseInt($('.boardcast ul').css('top') + offset);
                
                    offset = '+=' + offset;
                
                $('.boardcast ul').animate({'top': offset}, 1500, function () {
                    
                    if(top < (-65 * 2)) {
                        $('.boardcast ul').css('top', -65);
                    }
                });
           
		
	}
	$('.boardcast ul').hover(function(){
		clearInterval(timer);
		$(this).find('li').css('color','red');
		$(this).find('li').css('cursor','pointer');

	},function(){
		timer=setInterval(animate, 2500);
		$(this).find('li').css('color','black');
	}).trigger('mouseleave');;
	
}