/* $(document).ready(function(){
$("h1").css("color", "red");
}); */

/* event.preventDefault() - evita el comportamiento por defecto de un elemento */

/* Animaciones sobre el menú */

$('#botonmenu').on('click',function(){  
    console.log('meto una nueva clase');
    $('#botonmenu').addClass('active-style');
    $('#lista').slideToggle(); 
    /* $('#lista').show("slide", { direction: "left" }, 6000); */
});


$('#lista').on('mouseleave',function(){ 
 /*$('#lista').hide(); */
 $("#lista").animate({opacity:'0.2'}).slideToggle();
    $("#lista").animate({opacity:'1'}); /* devuelvo valor de opacidad */
 $('#botonmenu').removeClass('active-style');
 $('#botonmenu').delay(600).blur(); /*retorna boton a situacion inicial, no focus() */
 console.log('quito una nueva clase');
});


$(".nav-link").click(function(){
    $("#lista").animate({opacity:'0.2'}).slideToggle();
    $("#lista").animate({opacity:'1'}); /* devuelvo valor de opacidad */
    $('#botonmenu').delay(600).blur(); /*retorna boton a situacion inicial, no focus() */
})

/* Animaciones imagenes de seccion particulares */

$(".imgmovrocks").on("mouseover",function(){
        $(".imgmovrocks").animate ({
        width: '102%',
        height:'102%'
    },"slow");
});

$('.imgmovrocks').on('mouseleave',function(){
    $('.imgmovrocks').animate ({
        width: '100%',
        height:'100%'
    },'slow');
});
