new Swiper('.main-slider', {
    slidesPerView:1,
    
})
new Swiper('.content-slide', {
    spaceBeetwen: 30,
    slidesPerView:4,
    breakpoints:{
      0:{
        slidesPerView:1,
      },
      400:{
        slidesPerView:1,
      },
      600:{
        slidesPerView:2,
      },
      720:{
        slidesPerView:3,
      },
      1000:{
        slidesPerView:3,
      },
      1500:{
        slidesPerView:4,
      },
      
    }
})



new Swiper('.footer-swiper',{
    slidesPerView:6,
    breakpoints:{
      100:{
        slidesPerView:1,
      },
      300:{
        slidesPerView:2,
      },
      700:{
        slidesPerView:3,
      },
      1000:{
        slidesPerView:6,
      },
      1400:{
        slidesPerView:7,
      },
    }
})

var swiper = new Swiper(".main-slider", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + "0" + (index + 1) + "</span>";
      },
    },
  });
new Swiper(".section-middle-1",{
  breakpoints:{
    0:{
      slidesPerView:1,
    },
    400:{
      slidesPerView:1,
    },
    500:{
      slidesPerView:2,
    },
    600:{
      slidesPerView:2,
    },
    700:{
      slidesPerView:2,
    },
    800:{
      slidesPerView:3,
    },
    1200:{
      slidesPerView:4,
    },
    1800:{
      slidesPerView:5,
    },

  },
});
 
new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBeetwen: 0,
  grid: {
    rows: 2,
    fill: 'row'
  },
  breakpoints: {
    1000: {
      slidesPerView: 1,
      grid: {
        rows: 2,
        fill: 'row'
      }
    },
    700: {
      slidesPerView: 2,
      grid: {
        rows: 2,
        fill: 'row'
      }
    },
    500: {
      slidesPerView: 1,
      grid: {
        rows: 1,
        fill: 'row'
      }
    }
  }
});

  
