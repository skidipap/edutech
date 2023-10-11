/***************************************************
==================== JS INDEX ======================
****************************************************
01. Preloader
03. Offcanvas Menu Control
04. Mobile Menu Activation


****************************************************/

(function ($) {
  "use strict";



  /*
  -----------------------------------------------------
  03. Offcanvas Menu Control
  -----------------------------------------------------

  */

  $('.menu-icon').on('click', function () {
    $('.offcanvas__area').addClass('showed');
  });

  $('#offcanvas_close').on('click', function () {
    $('.offcanvas__area').removeClass('showed');
  });



  /*
  -----------------------------------------------------
  04. Mobile Menu Activation
  -----------------------------------------------------

  */

  $('.offcanvas-menu').meanmenu({
    meanScreenWidth: "1365",
    meanMenuContainer: '.offcanvas__menu',
    meanMenuCloseSize: '24px',
  });


  // AOS Animation
  AOS.init({
    once: true,
    offset: 200,
    duration: 1000,
  });



 // Magnifi popup activition
  $('.video-link').magnificPopup({
    type: 'iframe',
  });


  // 01. Preloader
  var preloader = document.querySelector("#preloader");
  var get_body = document.querySelector("body");

  get_body.onload = function () {
    preloader.style.display = "none";
  };

  // Team Slider
  var hero_slider = new Swiper(".hero__slider", {
    'loop': true,
    'speed': 1500,
    'freemode': true,
    'slidesPerView': 1,
    'spaceBetween': 0,
    navigation: {
      nextEl: ".hero-btn-next",
      prevEl: ".hero-btn-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + '0' + (index + 1) + "</span>";
      },
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });


  // Course Slider
  var course_slider = new Swiper(".course__slider", {
    'loop': true,
    'speed': 1500,
    'freemode': true,
    'slidesPerView': 3,
    'spaceBetween': 30,
    navigation: {
      nextEl: ".course-btn-next",
      prevEl: ".course-btn-prev",
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });


  // Team Share
  var share_btn = document.querySelectorAll('.share-btn');
  var social_share = document.querySelectorAll('.social-share');

  for (let i = 0; i < share_btn.length; i++) {
    share_btn[i].addEventListener('click', function () {
      share_btn[i].classList.toggle('active');
      social_share[i].classList.toggle('active');
    });

  }

  // 10. Course Slider
  var testimonial_slider = new Swiper(".testimonial__slider", {
    'loop': true,
    'speed': 1500,
    'freemode': true,
    'slidesPerView': 1,
    'spaceBetween': 30,
    navigation: {
      nextEl: ".testimonial__btn-next",
      prevEl: ".testimonial__btn-prev",
    },
  });

  var testimonial_slider_2 = new Swiper(".testimonial__slider-2", {
    'loop': true,
    'speed': 1500,
    'freemode': true,
    'slidesPerView': 1,
    'spaceBetween': 30,
  });

  // Category Slider
  var category_slider = new Swiper(".category__slider", {
    'loop': true,
    'speed': 1500,
    'freemode': true,
    'slidesPerView': 3,
    'spaceBetween': 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });

  // Category Slider
  var instructor_slider = new Swiper(".instructor__slider-2", {
    'loop': true,
    'speed': 1500,
    'freemode': true,
    'slidesPerView': 3,
    'spaceBetween': 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  // Brand Slider
  var brand_slider_2 = new Swiper(".brand__slider-2", {
    'loop': true,
    'speed': 5000,
    'freemode': true,
    'spaceBetween': 60,
    'slidesPerView': 'auto',
    'autoplay': {
      delay: 1,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // 04. Header Search
  $('.search-icon').on('click', function () {
    $(this).hide();
    $('.search-close').show();
    $('.search__form').addClass('showed');
  });

  $('.search-close').on('click', function () {
    $(this).hide();
    $('.search-icon').show();
    $('.search__form').removeClass('showed');
  });

    // 10. Course Slider
    var course_slider = new Swiper(".course__slider", {
      loop: true,
      speed: 1500,
      freemode: true,
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: ".course-btn-next",
        prevEl: ".course-btn-prev",
      },
      breakpoints: {
        300: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  
    // 10. Course Slider
    var course_related = new Swiper(".course-related-active", {
      loop: true,
      speed: 1500,
      freemode: true,
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: ".course-related-next",
        prevEl: ".course-related-prev",
      },
      breakpoints: {
        300: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      },
    });
  
      // 10. testimonial Slider
      var testimonial_slider = new Swiper(".testimonial__slider", {
        'loop': true,
        'speed': 1500,
        'freemode': true,
        'slidesPerView': 1,
        'spaceBetween': 30,
        navigation: {
          nextEl: ".testimonial__btn-next",
          prevEl: ".testimonial__btn-prev",
        },
      });

  // 07. Counter Activation
  const counter_1 = window.counterUp.default
  const counter_cb = entries => {

    entries.forEach(entry => {
      const el = entry.target
      if (entry.isIntersecting && !el.classList.contains('is-visible')) {
        counter_1(el, {
          duration: 1500,
          delay: 16,
        })
        el.classList.add('is-visible')
      }
    })
  }

  const counter_1_io = new IntersectionObserver(counter_cb, {
    threshold: 1
  })

  const counter_1_els = document.querySelectorAll('.counter_fast');
  counter_1_els.forEach((el) => {
    counter_1_io.observe(el)
  });




  //   Coundown
  var countdown = document.querySelector("#countdown");

  if (countdown) {
    (function () {
      const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

      let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "9/30/",
        birthday = dayMonth + yyyy;

      today = mm + "/" + dd + "/" + yyyy;
      if (today > birthday) {
        birthday = dayMonth + nextYear;
      }

      const countDown = new Date(birthday).getTime(),
        x = setInterval(function () {
          const now = new Date().getTime(),
            distance = countDown - now;

          (document.getElementById("days").innerText = Math.floor(distance / day)),
            (document.getElementById("hours").innerText = Math.floor(
              (distance % day) / hour
            )),
            (document.getElementById("minutes").innerText = Math.floor(
              (distance % hour) / minute
            )),
            (document.getElementById("seconds").innerText = Math.floor(
              (distance % minute) / second
            ));

          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("headline").innerText = "It's finished!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
        }, 0);
    })();
  }

  /////////////////////////////////////////////////////





})(jQuery);