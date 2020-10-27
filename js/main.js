$('.menu__btn').on('click', function (){
            $('.menu__list').toggleClass('menu__list--active')
})


$(function(){

    $('[data-fancybox]').fancybox({
        youtube : {
            controls : 0,
            showinfo : 0
        }
        
    });

    $('.heroes-slider-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
       
        asNavFor: '.heroes-slider-text',
        prevArrow:'<button  class="slick-prev slick-btn"><img src="images/L.png"></button>',
        nextArrow:'<button  class="slick-next slick-btn"><img src="images/R.png"></button>',
        responsive:[
            {
                breakpoint:769,
                settings: {
                    arrows:false,
                }
            }
        ]
      });
      $('.heroes-slider-text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.heroes-slider-img',
        fade: true,
        arrows:false
        });
});