/* $(document).ready(function(){
$("h1").css("color", "red");
}); */

/* event.preventDefault() - evita el comportamiento por defecto de un elemento */
/* Animaciones scroll */
/*
$(document).on("scroll", function(){
    $('.menu').css({'position':'fixed', 'background-color': 'red'});
});
*/
 $(document).ready(function(){
    $('.menu').css({'position':'fixed'});
    console.log('pogno fixed el menu');
});

/* Animaciones sobre el menú */
if ( isMobile() ) {
    // código en el caso de que sea un dispositivo móvil
    $('#botonmenu').on('click',function(){  
        console.log('meto una nueva clase');
        $('#botonmenu').addClass('active-style');
        $('#lista').slideToggle(); 
        /* $('#lista').show("slide", { direction: "left" }, 6000); */
        console.log("estoy desde móvil");
    });
   } else {
       console.log("no estoy desde móvil");

    // código en el caso de que no sea un dispositivo móvil

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
    });
   }


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
/* Determinar si la web es visitadad desde dispositivo móvil */

function isMobile(){
    return (
        (navigator.userAgent.match(/Android/i)) ||
        (navigator.userAgent.match(/webOS/i)) ||
        (navigator.userAgent.match(/iPhone/i)) ||
        (navigator.userAgent.match(/iPod/i)) ||
        (navigator.userAgent.match(/iPad/i)) ||
        (navigator.userAgent.match(/iBlackBerry/i))
    );
}
