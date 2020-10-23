/* $(document).ready(function(){
$("h1").css("color", "red");
}); */

$("button").on("mouseover",function(){
$(".dropdown-menu").slideToggle();
});

$(".dropdown-menu").on("mouseleave",function(){
    $(".dropdown-menu").hide();
});

/* if($(window.location.hash).length > 0){
    $('html, body').animate({ scrollTop: $(window.location.hash).offset().top}, 1000);
} */
/*
jQuery(document).ready(function(){
    $('h2').append('<a href="#top" class="gototop">Subir</a>');
    linkInterno = $('a[href^="#"]');
    linkInterno.on('click',function(e) {
    e.preventDefault();
    var href = $(this).attr('href');
    $('html, body').animate({ scrollTop : $( href ).offset().top }, 'slow');
    });
});
*/