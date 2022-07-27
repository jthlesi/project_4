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
		var menuIdx = $(".tab.on").index()
        $(".menuList").eq(menuIdx).addClass("active").siblings().removeClass("active");
    })
	$(".menuList").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	})
});

$(document).ready(function(){
    $(".slideList").eq(0).addClass("active");
    $(".slideList").hover(function(){
        $(this).addClass("active").siblings().removeClass("active");
    }, function(){
		var menuIdx = $(".tab.on").index()
        $(".slideList").eq(menuIdx).addClass("active").siblings().removeClass("active");
    });
	$(".slideList").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
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
	$("#slideMenu i").toggleClass("rotate")
});

$(".question").click(function(){
	$(this).siblings().children(".answer").stop().slideUp("fast");
	$(".answer", this).stop().slideToggle();
});

$(".menuList").click(function(){
	var tabIdx = $(".menuList").index(this);
	$(".tab").eq(tabIdx).show().addClass("on").siblings().hide().removeClass("on");
});

$(".slideList").click(function(){
	var tabIdx = $(".slideList").index(this);
	$(".tab").eq(tabIdx).show().addClass("on").siblings().hide().removeClass("on");
	$("#listWrap").stop().slideUp();
	$("#slideMenu i").toggleClass("rotate");
	$("#slideMenu span").text($(this).text());
});

$(".tab").eq(0).addClass("on");

if (window.matchMedia("(max-width:599px").matches) {
	$(".menuList, .slideList").click(function(){
		$(document).on("scroll", function(){
			if($(window).scrollTop() > ($("#list_1").position().top)){
				$("#pro_1").show().stop().animate({"width":"50%","height":"80%","left":"50%","top":"50%"},"fast");
			} 
			if($(window).scrollTop() > ($("#list_2").position().top)){
				$("#pro_2").show().stop().animate({"width":"50%","height":"80%","left":"20%","top":"50%"},"fast");
			} 
			if($(window).scrollTop() > ($("#list_3").position().top)){
				$("#pro_3").show().stop().animate({"width":"50%","height":"80%","left":"50%","top":"50%"},"fast");
			}
			if($(window).scrollTop() > ($("#list_4").position().top)){
				$("#pro_4").show().stop().animate({"width":"50%","height":"80%","left":"20%","top":"50%"},"fast");
			} 
			if($(window).scrollTop() > ($("#list_5").position().top)){
				$("#pro_5").show().stop().animate({"width":"50%","height":"80%","left":"50%","top":"50%"},"fast");
			}
			if($(window).scrollTop() > ($("#list_6").position().top)){
				$("#pro_6").show().stop().animate({"width":"50%","height":"80%","left":"20%","top":"50%"},"fast");
			} 
		})
	}) 
} else if (window.matchMedia("(min-width:600px) and (max-width:799px").matches) {
	$(".menuList, .slideList").click(function(){
		$(document).on("scroll", function(){
			if($(window).scrollTop() > ($("#list_1").position().top)){
				$("#pro_1").show().stop().animate({"width":"50%","height":"120%","left":"50%","top":"40%"},"fast");
			} 
			if($(window).scrollTop() > ($("#list_2").position().top)){
				$("#pro_2").show().stop().animate({"width":"50%","height":"120%","left":"20%","top":"40%"},"fast");
			} 
			if($(window).scrollTop() > ($("#list_3").position().top)){
				$("#pro_3").show().stop().animate({"width":"50%","height":"120%","left":"50%","top":"40%"},"fast");
			}
			if($(window).scrollTop() > ($("#list_4").position().top)){
				$("#pro_4").show().stop().animate({"width":"50%","height":"120%","left":"20%","top":"40%"},"fast");
			} 
			if($(window).scrollTop() > ($("#list_5").position().top)){
				$("#pro_5").show().stop().animate({"width":"50%","height":"120%","left":"50%","top":"40%"},"fast");
			}
			if($(window).scrollTop() > ($("#list_6").position().top)){
				$("#pro_6").show().stop().animate({"width":"50%","height":"120%","left":"20%","top":"40%"},"fast");
			} 
		})
	})
} else if (window.matchMedia("(min-width:800px) and (max-width:1419px").matches) {
	$(".menuList, .slideList").click(function(){
		$(document).on("scroll", function(){
			if($(window).scrollTop() > ($("#list_1").position().top)){
				$("#pro_1").show().stop().animate({"width":"40%","height":"110%","left":"50%","top":"30%"},"fast");
			} 
			if($(window).scrollTop() > ($("#list_2").position().top)){
				$("#pro_2").show().stop().animate({"width":"40%","height":"110%","left":"20%","top":"30%"},"fast");
			} 
			if($(window).scrollTop() > ($("#list_3").position().top)){
				$("#pro_3").show().stop().animate({"width":"40%","height":"110%","left":"50%","top":"30%"},"fast");
			}
			if($(window).scrollTop() > ($("#list_4").position().top)){
				$("#pro_4").show().stop().animate({"width":"40%","height":"110%","left":"20%","top":"30%"},"fast");
			} 
			if($(window).scrollTop() > ($("#list_5").position().top)){
				$("#pro_5").show().stop().animate({"width":"40%","height":"110%","left":"50%","top":"30%"},"fast");
			}
			if($(window).scrollTop() > ($("#list_6").position().top)){
				$("#pro_6").show().stop().animate({"width":"40%","height":"110%","left":"20%","top":"30%"},"fast");
			} 
		})
	})
} else if (window.matchMedia("(min-width:1420px").matches){
	$(".menuList, .slideList").click(function(){
		$(document).on("scroll", function(){
			if($(window).scrollTop() > ($("#list_1").position().top)){
				$("#pro_1").show().stop().animate({"width":"1300px","height":"1300px","left":"30%"},"fast");
			} 
			if($(window).scrollTop() > ($("#list_2").position().top)){
				$("#pro_2").show().stop().animate({"width":"1300px","height":"1300px","left":"-30%"},"fast");
			} 
			if($(window).scrollTop() > ($("#list_3").position().top)){
				$("#pro_3").show().stop().animate({"width":"1300px","height":"1300px","left":"30%"},"fast");
			}
			if($(window).scrollTop() > ($("#list_4").position().top)){
				$("#pro_4").show().stop().animate({"width":"1300px","height":"1300px","left":"-30%"},"fast");
			} 
			if($(window).scrollTop() > ($("#list_5").position().top)){
				$("#pro_5").show().stop().animate({"width":"1300px","height":"1300px","left":"30%"},"fast");
			}
			if($(window).scrollTop() > ($("#list_6").position().top)){
				$("#pro_6").show().stop().animate({"width":"1300px","height":"1300px","left":"-30%"},"fast");
			} 
		})
	})

}
$(document).ready(function(){
	for (i=1;i<=5;i++) {
		$(".chart").eq(i-1).css({"background":"url(img/sub/chart_"+i+".jpg)"});
	}
})

if (window.matchMedia("(min-width:800px").matches){
	$(document).on("scroll", function(){
		if($(window).scrollTop() > ($("#supply_2").position().top)){
			$("#left_wrap").addClass("fixed").removeClass("absolute_top").removeClass("absolute_bottom");
		} 
		if($(window).scrollTop() > ($(".process_title").eq(6).position().top+640-$(window).height())){
			$("#left_wrap").addClass("absolute_bottom").removeClass("absolute_top").removeClass("fixed");
		} 
		if($(window).scrollTop() < ($("#supply_2").position().top)){
			$("#left_wrap").addClass("absolute_top").removeClass("fixed").removeClass("absolute_bottom");
		} 
	})
}
