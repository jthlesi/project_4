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
    $(window).on('scroll touchmove mousewheel', function(event){
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
});

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
$(function(){
	$("header").hover(function(){
		$(".nav_sub").stop().slideDown();
		$("#nav_wrap, .nav_sub").css({"backgroundColor":"black","opacity":"0.9"})
	}, function(){
		$(".nav_sub").stop().slideUp("fast");
		$("#nav_wrap, .nav_sub").css({"backgroundColor":"","opacity":""})
	})
});

$(".sub>li").css({"width":$("nav>ul>li").width()});

//서비스섹션 슬라이드
$(".slides").css({"width":$(window).width()});

var slideLeft = $(".slides").width();

function prev(){
	$(".slides:last").prependTo("#slideWrap_2");
	$("#slideWrap_2").css("margin-left",-slideLeft);
	$("#slideWrap_2").stop().animate({marginLeft:0},700);
	$("span").eq(0).text("0"+$(".slides").eq(0).attr('id').substr(7,1));
	$("#progressBar").css({"width":$("span:first").text()*"25"+"%"});
};

function next(){
	$("#slideWrap_2").stop().animate({marginLeft:-slideLeft},700,function(){;
		$(".slides:first").appendTo("#slideWrap_2");
		$("#slideWrap_2").css("margin-left",0);
	});
	$("span").eq(0).text("0"+$(".slides").eq(1).attr('id').substr(7,1));
	$("#progressBar").css({"width":$("span:first").text()*"25"+"%"});
};

$("#prev").click(function(){
	prev();
});

$("#next").click(function(){
	next();
});

// setInterval(next,3000)

//페이지번호
$("span").eq(0).text("0"+$(".slides").eq(0).attr('id').substr(7,1));
$("span").eq(1).text("0"+$(".slides").length);


//5번섹션
var arrImg=["back_1.jpg","back_2.jpg","back_3.webp","back_4.jpg",]

$(".countBox").mouseenter(function(){
	var currentIdx =$(".countBox").index(this);
	$(this).css({"backgroundColor":"red"});
	$("#count").css({"backgroundImage":'url(../img/'+arrImg[(currentIdx)]+')'});
	$("p:first", this).css({"color":"white"});
	$(".bar", this).css({"backgroundColor":"white"});
}).mouseleave(function(){
	$(this).css({"backgroundColor":"transparent",});
	$("#count").css({"backgroundImage":'url(../img/back.jpg)'});
	$("p:first", this).css({"color":"red"});
	$(".bar", this).css({"backgroundColor":"red"});
})

window.onresize = function () {
	document.location.reload();
  };



