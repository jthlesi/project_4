//네비게이션
if (window.matchMedia("(max-width:799px").matches) {
	$(function () {
		$("header").hover(function () {
			$("#nav_wrap").css({ "backgroundColor": "black", "opacity": "0.9" });
			$("nav a").css({ "color": "white" });
			$("#ham span").css({ "backgroundColor": "white" });
		}, function () {
			$("#nav_wrap").css({ "backgroundColor": "", "opacity": "" });
			$("nav a").css({ "color": "" });
			$("#ham span").css({ "backgroundColor": "" });

		})
	});
} else if (window.matchMedia("(min-width:800px)").matches) {
	$(function () {
		$("header").hover(function () {
			$(".nav_sub").stop().slideDown();
			$("#nav_wrap, .nav_sub").css({ "backgroundColor": "black", "opacity": "0.9" });
			$("nav a").css({ "color": "white" });
		}, function () {
			$(".nav_sub").stop().slideUp("fast");
			$("#nav_wrap, .nav_sub").css({ "backgroundColor": "", "opacity": "" });
			$("nav a").css({ "color": "" });
		})
	});

	$(".sub>li").css({ "width": $("nav>ul>li").width() });
}

$("#hamWrap").on("click", function () {
	$("#ham span").toggleClass("open");
	$(".navHam").toggleClass("open");
});

$(".navHam li").on("click", function () {
	$(".hamSub").stop().slideUp();
	$(".hamSub", this).stop().slideToggle();
});

$(".navHam").css({ "height": ($(window).height() - 100) });

//베너크기
$(document).ready(function(){
    $("#banner").css({"height":$(window).height()})
});

window.onresize = function () {
	document.location.reload();
};

//서브메뉴

$(document).ready(function(){
    $(".menuList").eq(0).addClass("active");
    $(".menuList").hover(function(){
        $(this).addClass("active").siblings().removeClass("active");
    }, function(){
        $(".menuList").eq(0).addClass("active").siblings().removeClass("active");
    })
});

$(document).ready(function(){
    $(".slideList").eq(0).addClass("active");
    $(".slideList").hover(function(){
        $(this).addClass("active").siblings().removeClass("active");
    }, function(){
        $(".slideList").eq(0).addClass("active").siblings().removeClass("active");
    })
});


//이미지 펼쳐짐

$(document).on("scroll", function(){
	if(window.matchMedia("(min-width:1420px)").matches){
		if($(window).scrollTop() > ($("#subMenu").position().top)-100){
			$("#imgBox").stop().animate({"width":"100%", "height":"1600px","border-radius":"0"},"slow",function(){
				$("#textWrap").delay(100).stop().animate({opacity:1},"fast")
			});
			$("#imgWrap").stop().animate({"border-radius":"0"},"slow");
		};
	} else if(window.matchMedia("(min-width:800px) and (max-width:1419px)").matches){
		if($(window).scrollTop() > ($("#subMenu").position().top)-100){
			$("#imgBox").stop().animate({"width":"100%", "height":"1900px","border-radius":"0"},"slow",function(){
				$("#textWrap").delay(100).stop().animate({opacity:1},"fast")
			});
			$("#imgWrap").stop().animate({"border-radius":"0"},"slow");
		};
	} else if(window.matchMedia("(min-width:600px) and (max-width:799px)").matches){
		if($(window).scrollTop() > ($("#subMenu").position().top)-100){
			$("#imgBox").stop().animate({"width":"100%", "height":"1700px","border-radius":"0"},"slow",function(){
				$("#textWrap").delay(100).stop().animate({opacity:1},"fast")
			});
			$("#imgWrap").stop().animate({"border-radius":"0"},"slow");
		};
	}
	if($(window).scrollTop() > ($("#textWrap>p").position().top)){
		$("#txt_0").stop().animate({opacity:1},"fast",function(){
			$("#txt_1").delay(100).stop().animate({opacity:1},"fast",function(){
				$("#txt_2").delay(100).stop().animate({opacity:1},"fast",function(){
					$("#txt_3").delay(100).stop().animate({opacity:1},"fast",function(){
						$("#txt_4").delay(100).stop().animate({opacity:1},"fast",function(){
							$("#txt_5").delay(100).stop().animate({opacity:1},"fast",function(){
								$("#txt_6").delay(100).stop().animate({opacity:1},"fast")
							})
						})
					})
				})
			})
		})
    };
});

$("#slideMenu").click(function(){
	$("#listWrap").slideToggle();
	$("p>i").toggleClass("rotate")
});

