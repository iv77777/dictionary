// isMobile определяет с какого устройства зашел пользователь
// вызываем в нужном месте isMobile.any() и если вернуло true, то человек пришел с мобильного устройства
var isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};
// Пример кода в использувани
if (isMobile.any()) {
  // console.log("пользуватиль зашел с мобильного устройства");
  // тегу body добавляем касс '_touch'
  document.body.classList.add('_touch');
} else {
  // console.log("пользуватиль зашел с ПК устройства");
  // тегу body добавляем касс '_pc'
  document.body.classList.add('_pc');
}

// показує QR-code
buttonQrCodeShow.addEventListener('click', () => {
  tagHtml.classList.add('qr-code_show');
});
// ховає QR-code
qrCodeButtonClosed.addEventListener('click', () => {
  tagHtml.classList.remove('qr-code_show');
});
// Рендерить меню
function renderPopupMenu(words, wordsLength) {
  const popupMenuContent = document.querySelector('.popup-menu__content_js');
  const popupMenuWordsTitle = `
  
    <label class="popup-menu__title" >
      <input  type="checkbox" name="words" value="${words}"><span> ${words} <small>(${wordsLength})</small></span>
    </label>
  `;
  popupMenuContent.insertAdjacentHTML('beforeend', popupMenuWordsTitle);
}

// Показує скриває меню
openPopupMenu();
// Показує скриває меню
function openPopupMenu() {
  const iconMenu = document.querySelector('.icon-menu_js');
  const html = document.querySelector('html');
  iconMenu.addEventListener('click', function () {
    html.classList.toggle('open-popup-menu');
  });
}

// =============================================================

for (let key in words) {
  renderPopupMenu(key, words[key].length);
}

function getCheckedCheckBoxes() {
  const popupMenuContent = document.querySelector('.popup-menu__content_js');
  //Получає всі input которі checkbox і вони є checked
  const selectedCheckBoxes = popupMenuContent.querySelectorAll('input[type="checkbox"]:checked');

  // Получає значенія value
  const checkedValues = Array.from(selectedCheckBoxes).map((cb) => cb.value);

  return checkedValues; // для использования в нужном месте
}

function showListOrCards() {
  const html = document.querySelector('html');
  const iconlistCards = document.querySelector('.icon_list-cards_js');

  if (html.classList.contains('showList')) {
    iconlistCards.innerText = 'list';
    html.classList.remove('showList');
  } else {
    iconlistCards.innerText = 'cards';
    html.classList.add('showList');
  }
  showWordsPopupSelect();
}

function showWordsPopupSelect() {
  const html = document.querySelector('html');

  const swiperContainer = document.querySelector('.swiper-container_js');
  const contentList = document.querySelector('.content-list_js');
  swiperContainer.innerHTML = '';
  contentList.innerHTML = '';

  // Получаєм всі вибрани Чекбокси в меню
  const inputsChecked = getCheckedCheckBoxes();
  if (inputsChecked.length > 0) {
    inputsChecked.forEach((element) => {
      if (html.classList.contains('showList')) {
        contentList.classList.remove('hidden');
        swiperContainer.classList.add('hidden');
        showList(words[element], contentList);
      } else {
        swiperContainer.classList.remove('hidden');
        contentList.classList.add('hidden');
        showWords(words[element]);
      }
    });
  }
}

function showWords(wordsElement, index = 0) {
  renderWords(wordsElement, index);
  //Показє слайдер з нулевого індекса
  swiper.activeIndex = index;
  // обновляє слайдер
  swiper.update();

  // При зміні значення інпута
  onInput();
  // Встановлює фокус на інпут
  setsAocusOnInputs();

  // Показує скриває текст підсказку
  showsHiddenText();

  setTimeout(() => {
    renderValueCounter();
  }, 100);

  // при кожній зміні слайдера Якщо відкритий інпут для ввода то ставем в ньго курссор
  swiper.on('transitionEnd', function () {
    if (document.querySelector('html').classList.contains('popup-open')) {
      setsAocusOnInputs();
    }
  });
}
// =============================================================
// Рендерить слова з переданого масиву на сторінку HTML в list
function showList(words, contentList) {
  words.forEach((element) => {
    const item = `
        <li class="content-list_item">
          <img class="content-list_img" src="./img/card/${element.src}.jpg" alt="${element.wordAi}">
          <div class="content-list_content">
            <div class="content-list_wordAi">${element.wordAi}</div>
            <div class="content-list_transcription">${element.transcription}</div>
            <div class="content-list_wordUa">${element.wordUa}</div>
          </div>
          <div class="content-list_icon" onclick="soundClick('${element.src}')">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="50"
              height="50" viewBox="0 0 20 20">
              <circle r="10" cx="10" cy="10" fill="#3b6280"></circle>
              <symbol id="din">
                <path fill="#fff"
                  d="M1,4C0.447,4,0,4.447,0,5v4c0,0.553,0.447,1,1,1h1l4,4V0L2,4H1z M10.346,7c0-1.699-1.042-3.154-2.546-3.867L6.982,4.68   C7.885,5.107,8.51,5.98,8.51,7S7.885,8.893,6.982,9.32L7.8,10.867C9.304,10.154,10.346,8.699,10.346,7z M9.447,0.017L8.618,1.586   C10.723,2.584,12.182,4.621,12.182,7s-1.459,4.416-3.563,5.414l0.829,1.569c2.707-1.283,4.57-3.925,4.57-6.983   S12.154,1.3,9.447,0.017z">
                </path>
              </symbol>
              <use xlink:href="#din" x="3" y="3"></use>
            </svg>
          </div>
        </li>
    `;
    contentList.insertAdjacentHTML('beforeend', item);
  });
}

// Рендерить слова з переданого масиву на сторінку HTML в слайдері
function renderWords(words) {
  const swiperContainer = document.querySelector('.swiper-container_js');
  words.forEach((element) => {
    const wordAi = element.wordAi.replace(/\s/g, '').toLowerCase();
    const card = `
    <swiper-slide>
      <div class="card">
        <div class="card-img">
          <img  src="./img/card/${element.src}.jpg" alt="${element.wordAi}" >
        </div>
        <div class="word">
         ${element.wordAi}
          <div class="transcription">
            ${element.transcription}
           </div>
           <div class="popup popup_js">
           <div class="popup__text popup__text-ua popup__text-ua_js">
              ${element.wordUa}
            <span></span>
           </div>
           <div class="popup__text popup__text-gb popup__text-gb_js">
              ${element.wordAi}
              <span class=""></span>
           </div>
           <input class="popup__input popup__input_js" type="text" data-src="${element.src}" data-word="${element.wordAi}">
         </div>
         ${element.wordUa}
         </div>
         <div class="svg-blok">
          <svg onclick="soundClick('${element.src}')" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="70" height="70" viewBox="0 0 20 20">
            <circle r="10" cx="10" cy="10" fill="#3b6280" />
            <symbol id="din">
              <path fill="#fff"
                d="M1,4C0.447,4,0,4.447,0,5v4c0,0.553,0.447,1,1,1h1l4,4V0L2,4H1z M10.346,7c0-1.699-1.042-3.154-2.546-3.867L6.982,4.68   C7.885,5.107,8.51,5.98,8.51,7S7.885,8.893,6.982,9.32L7.8,10.867C9.304,10.154,10.346,8.699,10.346,7z M9.447,0.017L8.618,1.586   C10.723,2.584,12.182,4.621,12.182,7s-1.459,4.416-3.563,5.414l0.829,1.569c2.707-1.283,4.57-3.925,4.57-6.983   S12.154,1.3,9.447,0.017z" />
            </symbol>
            <use xlink:href="#din" x="3" y="3" />
          </svg>
         </div>
         <img onclick="openPopup()" class="card__img" src="img/write.png" alt="">
         <div onclick="popupClose()" class="popup__icon-close">
            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="40" height="40" rx="4" fill="#AFD19A" fill-opacity="0.49" stroke="#AFD19A" stroke-width="2"/>
            <circle cx="21" cy="21" r="9.5" fill="white" stroke="#AFD19A"/>
            <line x1="16" y1="25.8995" x2="25.8995" y2="16" stroke="#AFD19A" stroke-linecap="round"/>
            <line x1="15.7071" y1="16" x2="25.6066" y2="25.8995" stroke="#AFD19A" stroke-linecap="round"/>
            </svg>
        </div>
        <div class="word-writing-counter word-writing-counter_js" onclick="deleteValueLocalStorage('${wordAi}')" id="${wordAi}">0</div>
      </div>
    </swiper-slide>
    `;
    swiperContainer.insertAdjacentHTML('beforeend', card);
  });
}

// Запускає звук переданого слова
function soundClick(word) {
  const audio = new Audio(); // Создаём новый элемент Audio
  audio.src = 'mp3/' + word.replace(/\s/g, '').toLowerCase() + '.mp3'; // Указываем путь к звуку "клика"

  audio.play();
}

function openPopup() {
  document.querySelector('html').classList.add('popup-open');
  // Встановлює фокус на інпут
  setsAocusOnInputs();
}

// Встановлює фокус на інпут
function setsAocusOnInputs() {
  const slide = document.querySelector('.swiper-slide-active');
  const input = slide.querySelector('.popup__input_js');
  input.focus();
}

// При зміні значення інпута
function onInput() {
  const inputs = document.querySelectorAll('.popup__input_js');
  inputs.forEach((input) => {
    const word = input.dataset.word;
    const wordMp3Src = input.dataset.src;
    input.oninput = function () {
      if (word.replace(/\s/g, '').length === input.value.replace(/\s/g, '').length) {
        if (
          word.replace(/\s/g, '').toLowerCase() === input.value.replace(/\s/g, '').toLowerCase()
        ) {
          input.classList.add('wordTrue');
          counterWordWriting(input, word);
          soundClick(wordMp3Src);
          setTimeout(() => {
            input.classList.remove('wordTrue');
            input.classList.remove('wordFalse');
            popupInputValueRemove(input);
          }, 2000);
        } else {
          input.classList.add('wordFalse');
        }
      }
    };
  });
}

// Очищає інпути
function popupInputValueRemove() {
  const inputs = document.querySelectorAll('.popup__input_js');
  inputs.forEach((input) => {
    input.value = '';
  });
}
// Закриває попап // Очищає інпути
function popupClose() {
  document.querySelector('html').classList.remove('popup-open');
  // Очищає інпути
  // popupInputValueRemove();
}

// Показує скриває текст підсказку
function showsHiddenText() {
  const popupTextsGb = document.querySelectorAll('.popup__text-gb_js');
  popupTextsGb.forEach((element) => {
    element.addEventListener('click', () => {
      document.querySelector('html').classList.toggle('showText-gb');
    });
  });
  const popupTextsUa = document.querySelectorAll('.popup__text-ua_js');
  popupTextsUa.forEach((element) => {
    element.addEventListener('click', () => {
      document.querySelector('html').classList.toggle('showText-ua');
    });
  });
}

function counterWordWriting(input, word) {
  const card = input.closest('.card');
  const counterWordWritingHtml = card.querySelector('.word-writing-counter_js');
  if (counterWordWritingHtml) {
    const counter = Number(counterWordWritingHtml.innerHTML);
    const newCounter = (counterWordWritingHtml.innerHTML = counter + 1);
    // записуєм, міняєм значення в LocalStorage
    let keyWord = word.replace(/\s/g, '').toLowerCase();
    localStorage.setItem(`${keyWord}`, newCounter);
  }
}

function renderValueCounter() {
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    const wordCounter = document.getElementById(`${key}`);
    if (wordCounter) {
      wordCounter.innerHTML = localStorage.getItem(key);
    }
  }
}

function deleteValueLocalStorage(wordAi) {
  tagHtml.classList.add('popup-delete-localStorage_active');

  popupDeleteIocalStorageBtnClose.addEventListener('click', popupDeleteLocalStorageClose);

  popupDeleteLocalStorageBtnRemoveAll.addEventListener('click', removeAllItemsLocalStorage);
}

function removeAllItemsLocalStorage() {
  localStorage.clear();
  popupDeleteLocalStorageBtnRemoveAll.removeEventListener('click', removeAllItemsLocalStorage);
  popupDeleteLocalStorageClose();
  removeCounterWordWritingHtmlAll();
}

function popupDeleteLocalStorageClose() {
  tagHtml.classList.remove('popup-delete-localStorage_active');
  popupDeleteIocalStorageBtnClose.removeEventListener('click', popupDeleteLocalStorageClose);
}

function removeCounterWordWritingHtmlAll() {
  const counterWordWritingHtmlAll = document.querySelectorAll('.word-writing-counter_js');
  counterWordWritingHtmlAll.forEach((item) => {
    item.innerHTML = '0';
  });
}
