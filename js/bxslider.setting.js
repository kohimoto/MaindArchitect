$(document).ready(function(){
  var settings = function() {
      var settings1 = {
        auto: false,//自動切り替えの有無
        pause:6000,//停止時間※デフォルトは4000
        speed:1000,//動くスピード※デフォルトは500
        minSlides: 2,//一度に表示させる画像の最小値
        maxSlides: 2,//一度に表示させる画像の数
        slideWidth: 371,
        slideMargin: 10,
        pager: false,
        prevText: '＜',
        nextText: '＞',
      };
      var settings2 = {
        auto: false,//自動切り替えの有無
        pause:6000,//停止時間※デフォルトは4000
        speed:1000,//動くスピード※デフォルトは500
        minSlides: 3,//一度に表示させる画像の最小値
        maxSlides: 3,//一度に表示させる画像の数
        slideWidth: 371,
        slideMargin: 10,
        pager: false,
        prevText: '＜',
        nextText: '＞',
      };
      return ($(window).width()<780) ? settings1 : settings2;
    }
    var mySlider;
    function slideSetting() {
      mySlider.reloadSlider(settings());
    }
    mySlider = $('.news-list').bxSlider(settings());
    $(window).resize(slideSetting);
    
   
   
   $('.works-list').slick({ 
     dots: false,
     autoplay: false,
     prevArrow: '<button type="button" name="button" class="back-btn"><a class="arrow back">＜</a></button>',
     nextArrow: '<button type="button" name="button" class="next-btn"><a class="arrow next">＞</a></button>',
     slidesToShow: 3,
     slidesToScroll: 3,
     speed: 1000,
     rows: 2,
     responsive: [{
               breakpoint: 768,
                 settings: {
                   slidesToShow: 2,
                   slidesToScroll: 2,
               }
     }
     ]
   });
    
});