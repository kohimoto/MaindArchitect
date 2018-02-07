////////// slick //////////

$(function() {
    $('.slider').slick({
			infinite: true,
			slidesToShow: 1,
			arrows: true,
			centerMode: true, //要素を中央寄せ
			centerPadding:'50px', //両サイドの見えている部分のサイズ
			autoplay:true //自動再生
		});
		
});


jQuery(document).ready(function($){
 // 地図表示用メソッド
 function map_initialize() {
	 // 地図の座標を設定
	 var latlng = new google.maps.LatLng(35.662655,139.731250);
	 // 地図の設定
	 var map = new google.maps.Map(
		 document.getElementById("office_map"),
		 {
			 zoom: 16,  // 地図の拡大率
			 center: latlng, // 地図の中心座標
			 scrollwheel: false  // マウスホイールでの拡縮を禁止
		 }
	 );
	// マーカーの設定
	var marker = new google.maps.Marker({
			 position: latlng,
			 map: map
	});

	// 地図のスタイルにグレースケール設定を追加
	var mapStyle = [{"stylers": [{ "saturation": -100 }]}];
	var mapType = new google.maps.StyledMapType(mapStyle);
	map.mapTypes.set('GrayScaleMap', mapType);
	map.setMapTypeId('GrayScaleMap');

 }

 // 地図表示用メソッドの呼び出し
 map_initialize();
});




//////////// nav //////////
;(function () {
	'use strict';
	// iPad and iPod detection
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) ||
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};


	var burgerMenu = function() {

		$('.js-fh5co-nav-toggle').on('click', function(event) {
			event.preventDefault();
			var $this = $(this);
			if( $('body').hasClass('menu-show') ) {
				$('body').removeClass('menu-show');
				$('#fh5co-main-nav > .js-fh5co-nav-toggle').removeClass('show');
			} else {
				$('body').addClass('menu-show');
				setTimeout(function(){
					$('#fh5co-main-nav > .js-fh5co-nav-toggle').addClass('show');
				}, 900);
			}
		})
	};


	// Animations


	var sliderMain = function() {

	  	$('#fh5co-hero .flexslider .slides > li').css('height', $(window).height());
	  	$(window).resize(function(){
	  		$('#fh5co-hero .flexslider .slides > li').css('height', $(window).height());
	  	});

	};



	// Document on load.
	$(function(){
		fullHeight();
		burgerMenu();
		sliderMain();
	});

}());

