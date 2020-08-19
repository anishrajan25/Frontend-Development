$(document).ready(function(){
    $('#myCarousel').carousel({interval : 2000});
    $('#carouselButton').click(function(){
        if($('#carouselButton').children('span').hasClass('fa-pause')){
            $('#myCarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play'); 
        }
        else{
            $('#myCarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause'); 
        }
    });

    $("#reserveButton").click(function(){
        $("#reserveTable").modal('show');
    });
    $("#loginButton").click(function(){
        $("#loginModal").modal('show');
    });

});