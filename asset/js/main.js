'use strict';

// console.log('こんにちは');

// const sec02_title = document.querySelector('.top-sec02__title h2');

// console.log(sec02_title.textContent);
// sec02_title.textContent = 'こんにちは';
// sec02_title.style.color = '#fff';
// sec02_title.style.backgroundColor = '#6f6';

// const hb_btn = document.getElementById('hb-btn');
// const header_hb_btn = document.querySelector('.header__hb-btn');
// const header_nav = document.querySelector('.header__nav');

// header_hb_btn.addEventListener('click', function(){
//   header_hb_btn.classList.toggle('active');
//   header_nav.classList.toggle('active');
// });


jQuery(function($) {

  // ハンバーガー
  $('.header__hb-btn').click(function() {
    $(this).toggleClass('active');
    $('.header__nav').toggleClass('active');
  });

  $('.header__nav li a').click(function(){
    $('.header__hb-btn').removeClass('active');
    $('.header__nav').removeClass('active');
  });

  // worksのスライダー
  $('.top-sec03__items').slick({
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    cssEase: 'linear',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  // newsのタブ
  $('.top-sec05-tab').click(function(){
    // タブ
    $('.top-sec05__tabs .current').removeClass('current');
    $(this).addClass('current');
    // タブコンテント
    $('.top-sec05-tab-content').hide();
    $($(this).data('link')).show();
    // console.log($(this).data('link'));
  });

  const winWidth = $(window).width();
  console.log('画面の幅：' + winWidth);
  const winHeight = $(window).height();
  console.log('画面の高さ：' + winHeight);

  // $('.fade-in, .fade-in-left').each(function(index, val){
  //   const target_pos = $(val).offset().top;
  //   console.log(index + '番目のtargetまでの距離：' + target_pos);
    
  //   $(window).scroll(function(){
  //     let scrollTop = $(window).scrollTop();
  //     // console.log(scrollTop);
  //     if(scrollTop > target_pos - winHeight + (200 / 1060 * winWidth)) {
  //       $(val).addClass('active');
  //       // $(val).children('h2').css('color', '#fff');
  //     }
  //   });

  // });

});

