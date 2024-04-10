$(document).ready(function(){
    // Initialize Slick Carousel for featured movies
    $('#featured-movies .slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    // Initialize Slick Carousel for romantic Bollywood hits
    $('#romantic-bollywood-hits .slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});


$(document).ready(function() {
    var scrollTopButton = document.getElementById("scrollToTopButton");
    window.onscroll = function() {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollTopButton.style.display = "block";
        } else {
            scrollTopButton.style.display = "none";
        }
    }

    $("#scrollToTopButton").click(function() {
        $('html ,body').animate({
            scrollTop: 0
        }, 800)
    });
});

(function (jQuery){
$('#home-slider').slick({
    autoplay : false,
    speed : 800,
    lazyload : 'progressive',
    arrows : true,
    dots : false,
    prevArrow : '<div class="slick-nav prev-arrow"><i class="fa fa-chevron-right"></i></div>',
    nextArrow : '<div class="slick-nav next-arrow"><i class="fa fa-chevron-left"></i></div>',
    responsive : [
        {
            breakpoint : 992,
            settings : {
                dots : true,
                arrows : false,
            }
        }
    ]
}).slickAnimation();
$(".slick-nav").on("click touch", function (e){
    e.preventDefault();

    var arrow = $(this);

    if(!arrow.hasClass('animate')){
        arrow.addClass('animate');
        setTimeout(() => {
            arrow.removeClass('animate');
        }, 1600);
    }
});
})(jQuery);
