//풀페이지
//페이저생성
$(document).ready(function(){
    var fullIdx = document.querySelectorAll("#fullpage .fullsection");

    for (i=1;i<=fullIdx.length;i++){
        $("#fullpage > .page > ul").append("<li></li>");
    }

    $(".page ul li:first-child").addClass("active");
});
//페이저 클릭이동
var	height = $(".fullsection").height();

$(document).ready(function(){
	$(".page li").click(function(){
		var pageIdx = $(this).index();

		$(this).addClass("active").siblings().removeClass("active");
		
		$("#fullpage").stop().animate({"top": -height * pageIdx + "px"},700, "swing");
	});
});
//스크롤
	$(document).ready(function(){
		$(window).on('scroll mousewheel', function(event){
			var pageActive = $(".page ul li.active");
			var pageIndex = pageActive.index();
			if(event.originalEvent.wheelDelta >= 0) {
				if(pageIndex > 0) {
					pageActive.prev().addClass("active").siblings().removeClass("active");
					$("#fullpage").stop().animate({"top": -height*(pageIndex-1)+ "px"},700,"swing");
				}
			}else{
				if(pageIndex <$(".page ul li").length-1){ 
					pageActive.next().addClass("active").siblings().removeClass("active");
					$("#fullpage").stop().animate({"top": -height*(pageIndex+1) + "px"},700,"swing");
				}
			}
		});
		//모바일터치스크롤
		var startY;
		var endY;
		$(window).on("touchstart",function(event){
			startY = event.originalEvent.changedTouches[0].screenY;
		});
		$(window).on("touchend",function(event){
			var pageActive = $(".page ul li.active");
			var pageIndex = pageActive.index();
			endY = event.originalEvent.changedTouches[0].screenY;
			if(startY-endY>20){
				if(pageIndex > 0) {
					pageActive.prev().addClass("active").siblings().removeClass("active");
					$("#fullpage").stop().animate({"top": -height*(pageIndex-1)+ "px"},700,"swing");
				}   
			   }else if(endY-startY>20){
				if(pageIndex <$(".page ul li").length-1){ 
					pageActive.next().addClass("active").siblings().removeClass("active");
					$("#fullpage").stop().animate({"top": -height*(pageIndex+1) + "px"},700,"swing");
				}
			}
		});
	});

//네비게이션 색상변경
$(document).ready(function(){
    $(window).on('scroll touchmove touchstart touchend mousewheel click', function(){
		if($(".page li").eq(1).hasClass("active")){
			$("header nav a").addClass("black");
			$("#ham span").addClass("black");
		}else if($(".page li").eq(4).hasClass("active")){
			$("header nav a").addClass("black");
			$("#ham span").addClass("black");
		}else if($(".page li").eq(5).hasClass("active")){
			$("header nav a").addClass("black");
			$("#ham span").addClass("black");
		}else{
			$("header nav a").removeClass("black");
			$("#ham span").removeClass("black");
		}
	});
});
//페이저 색생변경
$(document).ready(function(){
    $(window).on('scroll touchmove touchstart touchend mousewheel click', function(){
		if($(".page li").eq(2).hasClass("active")){
			$(".page li").addClass("white")
		}else if($(".page li").eq(3).hasClass("active")){
			$(".page li").addClass("white")
		}else if($(".page li").eq(5).hasClass("active")){
			$(".page li").addClass("white")
		}else{
			$(".page li").removeClass("white")
		}
	});
});

window.onresize = function () {
	document.location.reload();
  };

//슬라이드
var i=0;

function slide(){
    i++;
    if(i >$(".slide:last").index()){
        i=0;
    }
    $(".slide").eq(i).stop().fadeIn("fast").addClass("on").siblings().removeClass("on");
    $(".slide").eq(i-1).stop().fadeOut("fast");
};

setInterval(slide,3000)

//십자가
$(document).ready(function(){
    $(".cross").css("width",$(window).height());
});

//네비게이션
if (window.matchMedia("(max-width:799px").matches){
	$(function(){
		$("header").hover(function(){
			$("#nav_wrap").css({"backgroundColor":"black","opacity":"0.9"});
			$("nav a").css({"color":"white"});
			$("#ham span").css({"backgroundColor":"white"});
		}, function(){
			$("#nav_wrap").css({"backgroundColor":"","opacity":""});
			$("nav a").css({"color":""});
			$("#ham span").css({"backgroundColor":""});

		})
	});
}else if(window.matchMedia("(min-width:800px)").matches){
	$(function(){
		$("header").hover(function(){
			$(".nav_sub").stop().slideDown();
			$("#nav_wrap, .nav_sub").css({"backgroundColor":"black","opacity":"0.9"});
			$("nav a").css({"color":"white"});
		}, function(){
			$(".nav_sub").stop().slideUp("fast");
			$("#nav_wrap, .nav_sub").css({"backgroundColor":"","opacity":""});
			$("nav a").css({"color":""});
		})
	});
	
	$(".sub>li").css({"width":$("nav>ul>li").width()});
}

$("#hamWrap").on("click",function(){
	$("#ham span").toggleClass("open");
	$(".navHam").toggleClass("open")
})

$(".navHam li").on("click", function(){
	$(".hamSub").stop().slideUp();
	$(".hamSub",this).stop().slideToggle();
})

$(".navHam").css({"height":($(window).height() - 100)})

//서비스섹션 슬라이드
$(".slides").css({"width":$(window).width()});

var slideLeft = $(".slides").width();

function prev(){
	$(".slides:last").prependTo("#slideWrap_2");
	$("#slideWrap_2").css("margin-left",-slideLeft);
	$("#slideWrap_2").stop().animate({marginLeft:0},700);
	$("#idxCount>span").eq(0).text("0"+$(".slides").eq(0).attr('id').substr(7,1));
	$("#progressBar").css({"width":$("#idxCount>span:first").text()*"25"+"%"});
};

function next(){
	$("#slideWrap_2").stop().animate({marginLeft:-slideLeft},700,function(){;
		$(".slides:first").appendTo("#slideWrap_2");
		$("#slideWrap_2").css("margin-left",0);
	});
	$("#idxCount>span").eq(0).text("0"+$(".slides").eq(1).attr('id').substr(7,1));
	$("#progressBar").css({"width":$("#idxCount>span:first").text()*"25"+"%"});
};

$("#prev").click(function(){
	prev();
});

$("#next").click(function(){
	next();
});

setInterval(next,3000)

//페이지번호
$("#idxCount>span").eq(0).text("0"+$(".slides").eq(0).attr('id').substr(7,1));
$("#idxCount>span").eq(1).text("0"+$(".slides").length);


//4번섹션
var arrImg=["back_1.jpg","back_2.jpg","back_3.webp","back_4.jpg",]

function enterDelay(){
	$(".countWrap").addClass("delay");
}
//색션 페이저 진입시 호버효과 딜레이
$(window).on("click", function () {
	if ($(".page>ul>li").eq(3).hasClass("active") == true) {
		setTimeout(enterDelay,1000)
	} else {
		$(".countWrap").removeClass("delay");
	}
});

//섹션 스크롤 진입시 호버효과 딜레이
$(window).on("mousewheel touchmove", function (e) {
	if (e.originalEvent.wheelDelta >= 0) {
		if ($(".page>ul>li").eq(4).hasClass("active") == true) {
			setTimeout(enterDelay, 1000)
		} else {
			$(".countWrap").removeClass("delay");
		}
	} else {
		if ($(".page>ul>li").eq(2).hasClass("active") == true) {
			setTimeout(enterDelay, 1000)
		} else {
			$(".countWrap").removeClass("delay");
		}
	}
});

$(document).on("mouseenter",".countWrap.delay .countBox",function(){
	var currentIdx =$(".countBox").index(this);
	$(this).css({"backgroundColor":"#f82c2d"});
	$("#count").css({"backgroundImage":'url(img/'+arrImg[currentIdx]+')'});
	$("p:first", this).css({"color":"white"});
	$(".bar", this).css({"backgroundColor":"white"});
})
$(document).on("mouseleave", ".countBox",function(){
	$(this).css({"backgroundColor":"transparent",});
	$("#count").css({"backgroundImage":'url(img/back.jpg)'});
	$("p:first", this).css({"color":"#f82c2d"});
	$(".bar", this).css({"backgroundColor":"#f82c2d"});
})


//5번섹션

//뉴스 슬라이드
if (window.matchMedia("(max-width:799px)").matches){
	$(".newsContents").css({"width":$("#newsSlideWrap").width()});
}else if (window.matchMedia("(min-width:800px) and (max-width:1420px").matches){
	$(".newsContents").css({"width":$("#newsSlideWrap").width()/2});
}else{
	$(".newsContents").css({"width":$("#newsSlideWrap").width()/3});
}

var slideLeft_2 = $(".newsContents").width();

function prev_2(){
	$(".newsContents:last").prependTo("#newsSlideBox");
	$("#newsSlideBox").css("margin-left",-slideLeft_2);
	$("#newsSlideBox").stop().animate({marginLeft:0},700);
	$("#idxCount_2>span").eq(0).text($(".newsContents").eq(0).attr('id').substr(5,2));
	$("#progressBar_2").css({"width":$("#idxCount_2>span:first").text()*"10"+"%"});
};

function next_2(){
	$("#newsSlideBox").stop().animate({marginLeft:-slideLeft_2},700,function(){;
		$(".newsContents:first").appendTo("#newsSlideBox");
		$("#newsSlideBox").css("margin-left",0);
	});
	$("#idxCount_2>span").eq(0).text($(".newsContents").eq(1).attr('id').substr(5,2));
	$("#progressBar_2").css({"width":$("#idxCount_2>span:first").text()*"10"+"%"});
};


$("#prev_2").click(function(){
	prev_2();
});

$("#next_2").click(function(){
	next_2();
});

$("#idxCount_2>span").eq(0).text($(".newsContents").eq(0).attr('id').substr(5,2));
$("#idxCount_2>span").eq(1).text($(".newsContents").length);

setInterval(next_2,3000)

//반응형 구조변경
if (window.matchMedia("(max-width:599px)").matches){
	const list = document.getElementById("remove");
	const del = document.getElementById("del")
	list.removeChild(del);

	
	$(".countWrap").wrap('<div id="wrapParent"></div>');
}



//footer

//이미지 크기 변경


if(window.matchMedia("(min-width:600px)").matches){
$(".footerWrap").hover(function(){
	$(this).children().css({"width":"105%"}).parent().css({"width":"55%"}).siblings().css({"width":"45%"});
}, function(){
	$(this).children().css({"width":"100%"}).parent().css({"width":"50%"}).siblings().css({"width":"50%"});
})
}