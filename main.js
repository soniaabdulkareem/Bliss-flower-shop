const navbarBtn = document.querySelector('.navbar__btn');
const navbarLinks = document.querySelector ('.navbar__links');

navbarBtn.addEventListener('click', function(){
  let value = navbarLinks.classList.contains('navbar__collapse')

  if (value) {
    navbarLinks.classList.remove('navbar__collapse')
    navbarBtn.classList.remove('change')
  }
  else {
    navbarLinks.classList.add('navbar__collapse')
    navbarBtn.classList.add('change')
  }
})

document.addEventListener('DOMContentLoaded', () => {

  const swiper = new Swiper ('.swiper', {

    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 400,
    autoHeight: true,
    // autoplay: true,
    parallax: true,


    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    pagination:{
      el: '.swiper-pagination',
    }
  });
})
