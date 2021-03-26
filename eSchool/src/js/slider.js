
let swiper = new Swiper('.partners__slider',{
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  autoplay: true,
  delay: 2000,
   breakpoints: {
    500: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    900: {
      slidesPerView: 5,
      spaceBetween: 100
    }
  }
})