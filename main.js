'use strict'

  let nowPage = 0; 
  let nextPage = 1; 
  const slides = $('#slideshow img');

  const slideLength = slides.length; 

  const fadeTime = 1500; 
  const showTime = 4000; 

  slides.hide();
  slides.eq(0).show();

  const slideshow = () => {
    nextPage = (nowPage + 1) % slideLength;

    slides.eq(nowPage).fadeOut(fadeTime);
    slides.eq(nextPage).fadeIn(fadeTime);
    nowPage = nextPage;
  };
  setInterval(slideshow, showTime);








$('#back-to-top').click(function () {

  $('html, body').animate ( {
    
    scrollTop: 0
  }, 600);
});

$(window).scroll(function () {

  let scroll = $(window).scrollTop();
  let wh = $(window).height();
  if (scroll > wh) {
    
    $('#back-to-top').addClass('in');

  }else {
    $('#back-to-top').removeClass('in');
  }

  
});
