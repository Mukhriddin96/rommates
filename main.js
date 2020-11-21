$(document).ready(function(){
    $('.M').click(function(){
        $('.card-1').css({"transform": "rotateY(-100deg)"});
        $('.card-2').css({"transform": "rotateY(0deg)"});
        $('.card-2').css({"display": "flex"});

    })
    $('.B').click(function(){
        $('.card-1').css({"transform": "rotateY(-100deg)"});
        $('.card-3').css({"transform": "rotateY(0deg)"});
        $('.card-3').css({"display": "flex"});
    })
    $('.X').click(function(){
        $('.card-1').css({"transform": "rotateY(-100deg)"});
        $('.card-4').css({"transform": "rotateY(0deg)"});
        $('.card-4').css({"display": "flex"});
    })
    $('.D').click(function(){
        $('.card-1').css({"transform": "rotateY(-100deg)"});
        $('.card-5').css({"transform": "rotateY(0deg)"});
        $('.card-5').css({"display": "flex"});
    })
    $('.xona').click(function(){
        $('.card-1').css({"transform": "rotateY(-100deg)"});
        $('.card').css({"transform": "rotateY(0deg)"});
        $('.card').css({"display": "flex"});
    })

    $('.angle').click(function(){
        $('.card-1').css({"transform": "rotateY(0deg)"})
        $('.card').css({"display": "none"});
        $('.card-2').css({"display": "none"});
        $('.card-3').css({"display": "none"});
        $('.card-4').css({"display": "none"});
        $('.card-5').css({"display": "none"});
    })
});
