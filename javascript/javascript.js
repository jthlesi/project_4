//풀페이지
$(document).ready(function(){
    fullCheck();
    pageClick();
})

function fullCheck(){
    var fullIdx = document.querySelectorAll("#fullpage .fullsection")
    for (i=1;i<=fullIdx.length;i++){
        $("#fullpage > .page > ul").append("<li></li>");
    }
    $(".page ul li:first-child").addClass("active");

    $(window).on('scroll touchmove mousewheel', function(event){
		var page = $(".page ul li.active");
		if($("body").find("#fullpage:animated").length >= 1) return false;
		if(event.originalEvent.wheelDelta >= 0) {
			var before=page.index();
			if(page.index() >= 0) page.prev().addClass("active").siblings(".active").removeClass("active");
			var pagelength=0;
			for(var i=1; i<(before); i++)
			{
				pagelength += $(".full"+i).height();
			}
			if(page.index() > 0){ 
				page=page.index()-1;
				$("#fullpage").animate({"top": -pagelength + "px"},1000, "swing");
			}
		}else{
			var nextPage=parseInt(page.index()+1);
			var lastPageNum=parseInt($(".page ul li").length);
			if(page.index() <= $(".page ul li").length-1){ 
				page.next().addClass("active").siblings(".active").removeClass("active");
			}
			
			if(nextPage < lastPageNum){
				var pagelength=0;
				for(var i = 1; i<(nextPage+1); i++){ 
					pagelength += $(".full"+i).height();
				}
				$("#fullpage").animate({"top": -pagelength + "px"},1000, "swing");
			}
            
			
		}
	});
}


function pageClick(){
	$(".page li").click(function(){
		var gnbindex = $(this).index()+1;
		var length=0;
		for(var i=1; i<(gnbindex); i++)
		{
			length+=$(".full"+i).height();
		}
		if($("body").find("#fullpage:animated").length >= 1) return false;
		$(this).addClass("active").siblings("li").removeClass("active");
		
		$("#fullpage").animate({"top": -length + "px"},800, "swing");
		return false;
	});
}



//슬라이드
var i=0;

function slide(){
    i++;
    if(i >$(".slide:last").index()){
        i=0;
    }
    $(".slide").eq(i).stop().fadeIn("fast").addClass("on").siblings().removeClass("on");
    $(".slide").eq(i-1).stop().fadeOut("fast");
}

setInterval(slide,3000)

//십자가
$(document).ready(function(){
    $(".cross").css("width",$(window).height())
})