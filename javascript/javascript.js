// //배너사이즈
// var wrapWidth = document.querySelector("#slideWrap").offsetWidth;
// var slides = document.querySelectorAll(".slide");

// $(document).ready(function(){
//     for(i=0;i<3;i++){
//     slides[i].style.width = wrapWidth / 3+"px"
//     }
// })

// var i=0;

// function slide(){
//     i++;
//     if(i >$(".slide:last").index()){
//         i=0;
//     }
//     $(".slide").eq(i).stop().fadeIn("fast");
//     $(".slide").eq(i-1).stop().fadeOut();
// }

// setInterval(slide,3000)


$(document).ready(function(){
    $("#slide_1 .cross_1,#slide_1 .cross_2").css("width",$(window).height())
    $("#slide_2 .cross_1,#slide_2 .cross_2").css("width",$(window).height())



})