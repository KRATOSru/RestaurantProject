$(document).ready(function () {

// реализован эффект появляющейся и исчезающей панели при прокручивании сайта
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
    })
})

// var waypoint = new Waypoint({
//     element: document.getElementById('px-offset-waypoint'),
//     handler: function(direction) {
//         notify('I am 20px from the top of the window')
//     },
//     offset: 20
// })