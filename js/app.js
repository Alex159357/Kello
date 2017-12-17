function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function feedBack() {
    $(".chuse").toggleClass("activePanel");
}
$("#closeLightBoxBody").on("click", function () {
    $(".lightBoxView").removeClass("active");
});

$(".lightBoxControl").on("click", function () {
    var imgUrl = $(this).attr("data-light-box-img");
    var captionText = $(this).attr("data-caption-light-box");
    $(".lightBoxView").addClass("active");
    $("#ivScreen").attr("src", imgUrl);
    $(".boxCaption").text(captionText);
    var centerScreenHorisontal =  ($(window).width() / 2) - ( $(".lightBoxBody").width() / 2);
    var centerScreenVertical =  ($(window).height() / 2) - ( $(".lightBoxBody").height() / 2);
    $(".lightBoxBody").attr("style", "left : " + centerScreenHorisontal  +"px; top:" + centerScreenVertical+"px");
});




$('.parallax-window').parallax({imageSrc: '../res/img/pexels-photo-271743.jpeg'});


