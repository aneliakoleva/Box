
$(document).ready(function() {
  if ( $( ".background" ).is( ":hidden" ) ) {
    $( ".background" ).slideDown(1000);
  } else {
    $( ".background" ).hide();
    }
    if ($(".background h1").is(":hidden")) {
        $(".background h1").slideDown(1000);

    }else {
        $(".background h1").hide();
    }
    if ($(".background h3").is(":hidden")) {
        $(".background h3").slideDown(1500);

    }else {
        $(".background h3").hide();
    }
    if ($(".background p").is(":hidden")) {
        $("p").slideDown(2000);

    }else {
        $(".background p").hide();
    }

});

var $boxes = $(".info-box");
console.log($boxes);
var previousVisible = true;
var showContent = function(){

    $boxes.each(function(index, box){
        box = $(box);
        var scrolledTo = $(window).height() + $(window).scrollTop();
        var boxOffset = box.offset().top;
        var boxHeigt = box.height();
        var boxHO = boxOffset + boxHeigt;

        if (scrolledTo >  + boxHO && box.is(':hidden') && previousVisible){
            box.slideDown();
            previousVisible = false;
            setTimeout(function(){
                previousVisible = true;
                showContent();
            }, 1500);
            return false;
        } else {
        }

        console.log(previousVisible);
    })
}

setTimeout(function(){
    showContent();
    $(window).scroll(function() {
        showContent();
    });
}, 1500);

// var showAdditionalContent = function(){
//     var scrollHeight = $(window).height();
//     var scrollPosition = $(window).height() + $(window).scrollTop();
//
//     if (scrollPosition > $(".background").offset().top + $(".background").height()){
//         $(".info-box").slideDown();
//     }
// }
