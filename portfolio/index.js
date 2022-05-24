const i18Obj = {
    'en': {
      'title': 'Portfolio',
      'skills': 'Skills',
      'portfolio': 'Portfolio',
      'video': 'Video',
      'price': 'Price',
      'contacts': 'Contacts',
      'hero-title': 'Alexa Rise',
      'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
      'hire': 'Hire me',
      'skill-title-1': 'Digital photography',
      'skill-text-1': 'High-quality photos in the studio and on the nature',
      'skill-title-2': 'Video shooting',
      'skill-text-2': 'Capture your moments so that they always stay with you',
      'skill-title-3': 'Rotouch',
      'skill-text-3': 'I strive to make photography surpass reality',
      'skill-title-4': 'Audio',
      'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
      'winter': 'Winter',
      'spring': 'Spring',
      'summer': 'Summer',
      'autumn': 'Autumn',
      'price-description-1-span-1': 'One location',
      'price-description-1-span-2': '120 photos in color',
      'price-description-1-span-3': '12 photos in retouch',
      'price-description-1-span-4': 'Readiness 2-3 weeks',
      'price-description-1-span-5': 'Make up, visage',
      'price-description-2-span-1': 'One or two locations',
      'price-description-2-span-2': '200 photos in color',
      'price-description-2-span-3': '20 photos in retouch',
      'price-description-2-span-4': 'Readiness 1-2 weeks',
      'price-description-2-span-5': 'Make up, visage',
      'price-description-3-span-1': 'Three locations or more',
      'price-description-3-span-2': '300 photos in color',
      'price-description-3-span-3': '50 photos in retouch',
      'price-description-3-span-4': 'Readiness 1 week',
      'price-description-3-span-5': 'Make up, visage, hairstyle',
      'order': 'Order shooting',
      'contact-me': 'Contact me',
      'send-message': 'Send message'
    },
    'ru': {
      'title': 'Портфолио',
      'skills': 'Навыки',
      'portfolio': 'Портфолио',
      'video': 'Видео',
      'price': 'Цены',
      'contacts': 'Контакты',
      'hero-title': 'Алекса Райс',
      'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
      'hire': 'Пригласить',
      'skill-title-1': 'Фотография',
      'skill-text-1': 'Высококачественные фото в студии и на природе',
      'skill-title-2': 'Видеосъемка',
      'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
      'skill-title-3': 'Ретушь',
      'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
      'skill-title-4': 'Звук',
      'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
      'winter': 'Зима',
      'spring': 'Весна',
      'summer': 'Лето',
      'autumn': 'Осень',
      'price-description-1-span-1': 'Одна локация',
      'price-description-1-span-2': '120 цветных фото',
      'price-description-1-span-3': '12 отретушированных фото',
      'price-description-1-span-4': 'Готовность через 2-3 недели',
      'price-description-1-span-5': 'Макияж, визаж',
      'price-description-2-span-1': 'Одна-две локации',
      'price-description-2-span-2': '200 цветных фото',
      'price-description-2-span-3': '20 отретушированных фото',
      'price-description-2-span-4': 'Готовность через 1-2 недели',
      'price-description-2-span-5': 'Макияж, визаж',
      'price-description-3-span-1': 'Три локации и больше',
      'price-description-3-span-2': '300 цветных фото',
      'price-description-3-span-3': '50 отретушированных фото',
      'price-description-3-span-4': 'Готовность через 1 неделю',
      'price-description-3-span-5': 'Макияж, визаж, прическа',
      'order': 'Заказать съемку',
      'contact-me': 'Свяжитесь со мной',
      'send-message': 'Отправить'
    }
  }
  

const LangRu = document.querySelector('.ru');
const LangEn = document.querySelector('.en');

function getTranslate(lang) {
  const list = document.querySelectorAll('[data-i18]')
  list.forEach((elem) => {
  elem.textContent = i18Obj[lang][elem.dataset.i18]})
};

LangRu.addEventListener('click', () => {
  getTranslate('ru');
})

LangEn.addEventListener('click', () => {
  getTranslate('en');
})



  LangRu.onclick = function() {
    LangEn.classList.remove('active');
    LangRu.classList.add('active');
  }

  LangEn.onclick = function() {
  LangRu.classList.remove('active');
  LangEn.classList.add('active');
  }

  const portfolio1 = document.querySelector('.portfolio-1');
  portfolio1.addEventListener('click', () => {
    portfolioImages.forEach((img, index) => img.src = `./assets/img/winter/${index + 1}.jpg`);
    portfolio1.classList.add('active');
    portfolio2.classList.remove('active');
    portfolio3.classList.remove('active');
    portfolio4.classList.remove('active');
  })

  const portfolio2 = document.querySelector('.portfolio-2');
  const portfolioImages = document.querySelectorAll('.portfolio-image');
  portfolio2.addEventListener('click', () => {
    portfolioImages.forEach((img, index) => img.src = `./assets/img/spring/${index + 1}.jpg`);
    portfolio2.classList.add('active');
    portfolio1.classList.remove('active');
    portfolio3.classList.remove('active');
    portfolio4.classList.remove('active');
  })

  const portfolio3 = document.querySelector('.portfolio-3');
  portfolio3.addEventListener('click', () => {
    portfolioImages.forEach((img, index) => img.src = `./assets/img/summer/${index + 1}.jpg`);
    portfolio3.classList.add('active');
    portfolio1.classList.remove('active');
    portfolio2.classList.remove('active');
    portfolio4.classList.remove('active');
  })

  const portfolio4 = document.querySelector('.portfolio-4');
  portfolio4.addEventListener('click', () => {
    portfolioImages.forEach((img, index) => img.src = `./assets/img/autumn/${index + 1}.jpg`);
    portfolio4.classList.add('active');
    portfolio1.classList.remove('active');
    portfolio2.classList.remove('active');
    portfolio3.classList.remove('active');
  })

 

let Btn = document.querySelector('.theme-button');
let sec = document.querySelectorAll('.sec');

function changeTheme () {
  sec.forEach((elem) => {
  elem.classList.toggle('light-theme');
  document.getElementById("theme").src="./assets/svg/carbon_sun.svg";
    })
}

Btn.addEventListener('click', () => {
  changeTheme ();
});
