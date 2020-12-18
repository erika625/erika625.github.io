// swiper

var swiper = new Swiper('.swiper-container', {
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
	spaceBetween: 0,
	// initialSlide: 2,
	loop: true,
	slidesPerView: 4,
	breakpoints: {
		// 768px以上の場合
		768: {
		slidesPerView: 1,
		},
		// 980px以上の場合
		980: {
		slidesPerView: 2,
		},
		// 1200px以上の場合
		1200: {
		slidesPerView: 3,
		}
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
	autoplay: {
		delay: 3000,
		disableOnInteraction: true
	},
  });


$('.dropdown-toggle').dropdown();

$(function(){
    var tscroll = $('#t-scroll');
    tscroll.hide();
    $(window).scroll(function () {
       if ($(this).scrollTop() > 100) {
            tscroll.fadeIn();
       } else {
            tscroll.fadeOut();
       }
    });
    tscroll.click(function () {
       $('body, html').animate({ scrollTop: 0 }, 500);
       return false;
    });
  });
  

  