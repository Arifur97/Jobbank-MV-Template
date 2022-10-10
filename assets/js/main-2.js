/*
    Carousel
*/
$('.owl-carousel').owlCarousel({
    ltl:true,
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
});



//$('#carousel-example').on('slide.bs.carousel', function (e) {
//    /*
//        CC 2.0 License Iatek LLC 2018 - Attribution required
//    */
//    var $e = $(e.relatedTarget);
//    var idx = $e.index();
//    var itemsPerSlide = 7;
//    var totalItems = $('.carousel-item').length;
//
//    if (idx >= totalItems-(itemsPerSlide-1)) {
//        var it = itemsPerSlide - (totalItems - idx);
//        for (var i=0; i<it; i++) {
//            // append slides to end
//            if (e.direction=="left") {
//                $('.carousel-item').eq(i).appendTo('.carousel-inner');
//            }
//            else {
//                $('.carousel-item').eq(0).appendTo('.carousel-inner');
//            }
//        }
//    }
//});

/*
    grid list view
*/
filterGridview = document.getElementById('filter-gridview');
filterListview = document.getElementById('filter-listview');
filterListview.style.display = "none";
$(".listview").on("click", function() {
    filterListview.style.display    = "block";
    filterGridview.style.display    = "none";
});
$(".gridview").on("click", function() {
    filterListview.style.display = "none";
    filterGridview.style.display = "block";
});



function addstyle(){
    var liststyleview = document.getElementById("jobSection");
    liststyleview.style.marginLeft = "-15px";

}


/*
    filter section
*/

/* filter toogle */


filter = document.getElementById('filter');
column = document.getElementsByClassName('column');



filterGridview.classList.remove('col-md-8');
filterGridview.classList.add('col-md-12');

$('.filterToogle').on('click', function() {
   if(filter.style.display === "none") {
        filter.style.display = "block";
        filterGridview.classList.remove('col-md-12');
        filterGridview.classList.add('col-md-8');
        filterListview.classList.remove('col-md-12');
        filterListview.classList.add('col-md-8');
        for(var i = 0; i < column.length; i++) {
            column[i].classList.remove('col-lg-4');
        }
    }
    else{
        filter.style.display = "none";
        filterGridview.classList.remove('col-md-8');
        filterGridview.classList.add('col-md-12');
        filterListview.classList.remove('col-md-8');
        filterListview.classList.add('col-md-12');
        for(var i = 0; i < column.length; i++) {
            column[i].classList.add('col-lg-4');
        }
    }
});


/* range value */



$('.nstSlider').nstSlider({
    "left_grip_selector": ".leftGrip",
    "right_grip_selector": ".rightGrip",
    "value_bar_selector": ".bar",
    "value_changed_callback": function(cause, leftValue, rightValue) {
        $(this).parent().find('.leftLabel').text(leftValue);
        $(this).parent().find('.rightLabel').text(rightValue);
    }
});


/* range slider toogle */
$('.posted_widget').slideUp();
$('.switches-list').slideUp();
$('.sb-title.open').next().slideDown();
$('.sb-title.closed').next().slideUp();
$('.sb-title').on('click', function(){
    $(this).next().slideToggle();
    $(this).toggleClass('active');
    $(this).toggleClass('closed');
});


function openRegister() {
document.getElementById("registerForm").style.display = "block";
}

function closeRegister() {
document.getElementById("registerForm").style.display = "none";
}

function openLogin() {
document.getElementById("loginForm").style.display = "block";
}

function closeLogin() {
document.getElementById("loginForm").style.display = "none";
}
