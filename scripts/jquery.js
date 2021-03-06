$(document).ready(function () {

// реализован эффект появляющейся и исчезающей панели при прокручивании сайта
    //sticky-nav
    var waypoint = new Waypoint({
        element: document.getElementById('restaurant-description'),
        handler: function(direction) {
            if (direction == "down") {
                $("nav").attr("id", "sticky-nav");
            }else {
                $("nav").removeAttr("id");
            }
        },
        offset: 80
    });

    //перемещаемся при нажатии на кнопки
    //buttons and nav links click
    $(".button-order").click(function () {
        $("html,body").animate({scrollTop: $("#how-to-order-section").offset().top},1000);
        
    });
    $(".button-more").click(function () {
        $("html,body").animate({scrollTop: $("#restaurant-description").offset().top},1000);

    });

    //код скопированный с сайта https://css-tricks.com/smooth-scrolling-accessibility/ для перехода по ссылкам
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    //animation
    var waypoint = new Waypoint({
        element: document.getElementById('restaurant-description'),
        handler: function(direction) {
            $(".anim1").addClass("animated fadeIn");
        },
        offset: 80
    });

    var waypoint = new Waypoint({
        element: document.getElementById('cities-section'),
        handler: function(direction) {
            $(".anim2").addClass("animated fadeInRight");
        },
        offset: 80
    });

    var waypoint = new Waypoint({
        element: document.getElementById('how-to-order-section'),
        handler: function(direction) {
            $(".anim3").addClass("animated fadeInUp");
        },
        offset: 80
    });

    // эффект shake не работает на кнопке , надо доработать
    var waypoint = new Waypoint({
        element: document.getElementById('header-text'),
        handler: function(direction) {
            if (direction == "up") {
                $(".anim4").addClass("animated shake")
            }else {
                $(".anim4").removeClass("animated shake")
            }
        },
        offset: 80
    });
})
