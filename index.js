/* $(document).ready(function(){
$("h1").css("color", "red");
}); */

/* event.preventDefault() - evita el comportamiento por defecto de un elemento */
/* Animaciones scroll */
/*
$(document).on("scroll", function(){
    $('.menu').css({'position':'fixed', 'background-color': 'red'});
});
/* Al cargar el documento, fijo el menu y lo posiciono respecto al ancho del dispositivo */

$(document).ready(function () {
    var totalWidth = $(".container-fluid").css("width");
    var margin = parseInt(totalWidth) - 50 ;
   if (margin < 900) {

   
    var marginValue = margin + "px";
    console.log(marginValue);
    console.log(totalWidth);
    $(".menu").css({ "marginLeft": marginValue, "right":"0px" ,"left":"0px","paddingRight": "10px", "width":"50px"});
    }
    /* Ambos casos pongo fijo el menu */
    $(".menu").css({ "position": "fixed"});
    console.log("pogno fixed el menu");
});

/* Deshabilitar scroll horizontal */
$(function(){
    var $body = $(document);
    $body.on("scroll" , function() {
        console.log("parte de scroll");
        console.log($body.scrollLeft());
        if($body.scrollLeft() !== 0) {
            $body.scrollLeft(0);
        }
    });
});

/* Animaciones sobre el menú */
if (isMobile()) {
    // código en el caso de que sea un dispositivo móvil
    console.log("estoy desde móvil");
    $("#botonmenu").on("click", function () {
        if ($("#botonmenu").hasClass("active-style")){
            console.log("ya tenia la clase, retorno el boton a situación inicial");
            $("#botonmenu").removeClass("active-style");
            $("#botonmenu").delay(600).blur(); /*retorna boton a situacion inicial, no focus() */
        }else{
        $("#botonmenu").addClass("active-style");
        console.log("meto una nueva clase en evento click de boton");
        };
        
        
        $("#lista").slideToggle();
        /* $('#lista').show("slide", { direction: "left" }, 6000); */
        
    });

    $(".nav-link").click(function (event) {
        /* event.preventDefault(); */
        console.log("clck en link de laa lista");
        $("#lista").animate({ opacity: "0.2" }).slideToggle();
        $("#lista").animate({ opacity: "1" }); /* devuelvo valor de opacidad */
        $("#botonmenu").delay(600).blur(); /*retorna boton a situacion inicial, no focus() */
    });

} else {            /*dispositivos no móviles */
    console.log("no estoy desde móvil");

    // código en el caso de que no sea un dispositivo móvil

    $("#botonmenu").on("click", function () {
        console.log("meto una nueva clase en click boton");
        if ($("#botonmenu").hasClass("active-style")){
            console.log("ya tenia la clase, retorno el boton a situación inicial");
            $("#botonmenu").delay(600).blur(); /*retorna boton a situacion inicial, no focus() */
        }else{
        $("#botonmenu").addClass("active-style");
        };
        $("#lista").slideToggle();
        /* $('#lista').show("slide", { direction: "left" }, 6000); */
    });

    $(".nav-link").click(function () {
        $("#lista").animate({ opacity: "0.2" }).slideToggle();
        $("#lista").animate({ opacity: "1" }); /* devuelvo valor de opacidad */
        $("#botonmenu").delay(600).blur(); /*retorna boton a situacion inicial, no focus() */
        $('#botonmenu').removeClass("active-style");
        console.log("quito clase en visita link");
    });


    /* Animaciones imagenes de seccion particulares */

    $(".imgmovrocks").on("mouseover", function () {
     $(".imgmovrocks").animate({
        width: "102%",
        height: "102%"
      }, "slow");
        });

    $(".imgmovrocks").on("mouseleave", function () {
     $(".imgmovrocks").animate({
        width: "100%",
        height: "100%"
     }, "slow");
    });

}



/* Determinar si la web es visitadad desde dispositivo móvil */

function isMobile() {
    return (
        (navigator.userAgent.match(/Android/i)) ||
        (navigator.userAgent.match(/webOS/i)) ||
        (navigator.userAgent.match(/iPhone/i)) ||
        (navigator.userAgent.match(/iPod/i)) ||
        (navigator.userAgent.match(/iPad/i)) ||
        (navigator.userAgent.match(/iBlackBerry/i))
    );
}
