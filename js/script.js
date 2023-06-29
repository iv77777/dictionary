const words = {
  numbers: [
    {
      src: 'numbers/one',
      wordAi: 'one',
      transcription: '|wʌn|',
      wordUa: '1',
    },
    {
      src: 'numbers/two',
      wordAi: 'two',
      transcription: '|tuː|',
      wordUa: '2',
    },
    {
      src: 'numbers/three',
      wordAi: 'three',
      transcription: '|θriː|',
      wordUa: '3',
    },
    {
      src: 'numbers/four',
      wordAi: 'four',
      transcription: '|fɔː|',
      wordUa: '4',
    },
    {
      src: 'numbers/five',
      wordAi: 'five',
      transcription: '|faɪv|',
      wordUa: '5',
    },
    {
      src: 'numbers/six',
      wordAi: 'six',
      transcription: '|sɪks|',
      wordUa: '6',
    },
    {
      src: 'numbers/seven',
      wordAi: 'seven',
      transcription: '|ˈsev(ə)n|',
      wordUa: '7',
    },
    {
      src: 'numbers/eight',
      wordAi: 'eight',
      transcription: '|eɪt|',
      wordUa: '8',
    },
    {
      src: 'numbers/nine',
      wordAi: 'nine',
      transcription: '|naɪn|',
      wordUa: '9',
    },
    {
      src: 'numbers/ten',
      wordAi: 'ten',
      transcription: '|ten|',
      wordUa: '10',
    },

    {
      src: 'numbers/eleven',
      wordAi: 'eleven',
      transcription: '|ɪˈlev(ə)n|',
      wordUa: '11',
    },
    {
      src: 'numbers/twelve',
      wordAi: 'twelve',
      transcription: '|twelv|',
      wordUa: '12',
    },
    {
      src: 'numbers/thirteen',
      wordAi: 'thirteen',
      transcription: '|θɜːˈtiːn|',
      wordUa: '13',
    },
    {
      src: 'numbers/fourteen',
      wordAi: 'fourteen',
      transcription: '|fɔːˈtiːn|',
      wordUa: '14',
    },
    {
      src: 'numbers/fifteen',
      wordAi: 'fifteen',
      transcription: '|fɪfˈtiːn|',
      wordUa: '15',
    },
    {
      src: 'numbers/sixteen',
      wordAi: 'sixteen',
      transcription: '|sɪksˈtiːn|',
      wordUa: '16',
    },
    {
      src: 'numbers/seventeen',
      wordAi: 'seventeen',
      transcription: '|sev(ə)nˈtiːn|',
      wordUa: '17',
    },
    {
      src: 'numbers/eighteen',
      wordAi: 'eighteen',
      transcription: '|eɪˈtiːn|',
      wordUa: '18',
    },
    {
      src: 'numbers/nineteen',
      wordAi: 'nineteen',
      transcription: '|naɪnˈtiːn|',
      wordUa: '19',
    },
    {
      src: 'numbers/twenty',
      wordAi: 'twenty',
      transcription: '|ˈtwentɪ|',
      wordUa: '20',
    },
    {
      src: 'numbers/thirty',
      wordAi: 'thirty',
      transcription: '|ˈθɜːtɪ|',
      wordUa: '30',
    },
    {
      src: 'numbers/forty',
      wordAi: 'forty',
      transcription: '|ˈfɔːtɪ|',
      wordUa: '40',
    },
    {
      src: 'numbers/fifty',
      wordAi: 'fifty',
      transcription: '|ˈfɪftɪ|',
      wordUa: '50',
    },
    {
      src: 'numbers/sixty',
      wordAi: 'sixty',
      transcription: '|ˈsɪkstɪ|',
      wordUa: '60',
    },
    {
      src: 'numbers/seventy',
      wordAi: 'seventy',
      transcription: '|ˈsev(ə)ntɪ|',
      wordUa: '70',
    },
    {
      src: 'numbers/eighty',
      wordAi: 'eighty',
      transcription: '|ˈeɪtɪ|',
      wordUa: '80',
    },
    {
      src: 'numbers/ninety',
      wordAi: 'ninety',
      transcription: '|ˈnaɪntɪ|',
      wordUa: '90',
    },
    {
      src: 'numbers/onehundred',
      wordAi: 'one hundred',
      transcription: '|wʌn| |ˈhʌndrəd|',
      wordUa: '100',
    },
  ],
  countries_And_Nationality: [
    {
      src: 'countries_And_Nationality/china',
      wordAi: 'China',
      transcription: '| ˈtʃaɪnə |',
      wordUa: 'Китай',
    },
    {
      src: 'countries_And_Nationality/chinese',
      wordAi: 'Chinese',
      transcription: '| ˌtʃaɪˈniːz |',
      wordUa: 'китаєць, китаянка',
    },

    {
      src: 'countries_And_Nationality/turkey',
      wordAi: 'Turkey',
      transcription: '| ˈtɜːkɪ |',
      wordUa: 'Туреччина',
    },
    {
      src: 'countries_And_Nationality/turkish',
      wordAi: 'Turkish',
      transcription: '| ˈtɜːkɪʃ |',
      wordUa: 'турок, турчанка',
    },

    {
      src: 'countries_And_Nationality/theusa',
      wordAi: 'the USA',
      transcription: '--',
      wordUa: 'США',
    },
    {
      src: 'countries_And_Nationality/american',
      wordAi: 'American',
      transcription: '| əˈmerɪk(ə)n |',
      wordUa: 'американець, американка',
    },

    {
      src: 'countries_And_Nationality/spain',
      wordAi: 'Spain',
      transcription: '|speɪn|',
      wordUa: 'Іспанія',
    },
    {
      src: 'countries_And_Nationality/spanish',
      wordAi: 'Spanish',
      transcription: '|ˈspænɪʃ|',
      wordUa: 'іспанець, іспанка',
    },

    {
      src: 'countries_And_Nationality/italy',
      wordAi: 'Italy',
      transcription: '|ˈɪtəlɪ|',
      wordUa: 'Італія',
    },
    {
      src: 'countries_And_Nationality/italian',
      wordAi: 'Italian',
      transcription: '|ɪˈtæljən|',
      wordUa: 'італієць, італійка',
    },

    {
      src: 'countries_And_Nationality/germany',
      wordAi: 'Germany',
      transcription: '|ˈdʒɜːmənɪ|',
      wordUa: 'Німеччина',
    },
    {
      src: 'countries_And_Nationality/german',
      wordAi: 'German',
      transcription: '|ˈdʒɜːmən|',
      wordUa: 'німець, німкеня',
    },
    {
      src: 'countries_And_Nationality/france',
      wordAi: 'France',
      transcription: '|frɑːns|',
      wordUa: 'Франція',
    },
    {
      src: 'countries_And_Nationality/french',
      wordAi: 'French',
      transcription: '|fren(t)ʃ|',
      wordUa: 'Француженка, Француз',
    },
    {
      src: 'countries_And_Nationality/canada',
      wordAi: 'Canada',
      transcription: '|ˈkanədə|',
      wordUa: 'Канада',
    },
    {
      src: 'countries_And_Nationality/canadian',
      wordAi: 'Canadian',
      transcription: '|kəˈneɪdɪən|',
      wordUa: 'канадець, канадка',
    },
    {
      src: 'countries_And_Nationality/poland',
      wordAi: 'Poland',
      transcription: '|ˈpəʊlənd|',
      wordUa: 'Польща',
    },
    {
      src: 'countries_And_Nationality/polish',
      wordAi: 'Polish',
      transcription: '|ˈpɒlɪʃ|',
      wordUa: 'поляк, полячка',
    },
    {
      src: 'countries_And_Nationality/ukraine',
      wordAi: 'Ukraine',
      transcription: '|juːˈkreɪn|',
      wordUa: 'Україна',
    },
    {
      src: 'countries_And_Nationality/ukrainian',
      wordAi: 'Ukrainian',
      transcription: '|juːˈkreɪnɪən|',
      wordUa: 'українець, українка',
    },
    {
      src: 'countries_And_Nationality/theuk',
      wordAi: 'the UK',
      transcription: '--',
      wordUa: 'Велика Британія',
    },
    {
      src: 'countries_And_Nationality/british',
      wordAi: 'British',
      transcription: '|ˈbrɪtɪʃ|',
      wordUa: 'британець, британка',
    },
  ],
  family: [
    {
      src: 'family/parents',
      wordAi: 'parents',
      transcription: '| ˈpeərənts |',
      wordUa: 'батьки',
    },
    {
      src: 'family/wife',
      wordAi: 'wife',
      transcription: '| waɪf |',
      wordUa: 'дружина',
    },
    {
      src: 'family/sister',
      wordAi: 'sister',
      transcription: '| ˈsɪstə |',
      wordUa: 'сестра',
    },
    {
      src: 'family/brother',
      wordAi: 'brother',
      transcription: '| ˈbrʌðə |',
      wordUa: 'брат',
    },
    {
      src: 'family/daughter',
      wordAi: 'daughter',
      transcription: '| ˈdɔːtə |',
      wordUa: 'дочка',
    },
    {
      src: 'family/son',
      wordAi: 'son',
      transcription: '| sʌn |',
      wordUa: 'син',
    },
    {
      src: 'family/mother',
      wordAi: 'mother',
      transcription: '| ˈmʌðə |',
      wordUa: 'мама',
    },
    {
      src: 'family/father',
      wordAi: 'father',
      transcription: '| ˈfɑːðə |',
      wordUa: 'батько',
    },
    {
      src: 'family/husband',
      wordAi: 'husband',
      transcription: '| ˈhʌzbənd |',
      wordUa: 'чоловік',
    },
  ],
  job: [
    {
      src: 'job/waiter',
      wordAi: 'waiter',
      transcription: '| ˈweɪtə |',
      wordUa: 'офіціант',
    },
    {
      src: 'job/actor',
      wordAi: 'actor',
      transcription: '| ˈæktə |',
      wordUa: 'актор',
    },
    {
      src: 'job/taxidriver',
      wordAi: 'taxi driver',
      transcription: '| ˈtæksɪ | | ˈdraɪvər |',
      wordUa: 'водій таксі',
    },
    {
      src: 'job/singer',
      wordAi: 'singer',
      transcription: '| ˈsɪŋə |',
      wordUa: 'співачка, співак',
    },
    {
      src: 'job/engineer',
      wordAi: 'engineer',
      transcription: '| endʒɪˈnɪə |',
      wordUa: 'інженер',
    },
    {
      src: 'job/doctor',
      wordAi: 'doctor',
      transcription: '| ˈdɒktə |',
      wordUa: 'лікар',
    },
    {
      src: 'job/businesswoman',
      wordAi: 'businesswoman',
      transcription: '| ˈbɪznəswʊmən |',
      wordUa: 'жінка-підприємець',
    },
    {
      src: 'job/businessman',
      wordAi: 'businessman',
      transcription: '| ˈbɪznɪsmən |',
      wordUa: 'бізнесмен',
    },
    {
      src: 'job/teacher',
      wordAi: 'teacher',
      transcription: '| ˈtiːtʃə |',
      wordUa: 'вчитель',
    },
  ],
  words_1: [
    {
      src: 'words_1/child',
      wordAi: 'child',
      transcription: '| tʃaɪld |',
      wordUa: 'дитина',
    },
    {
      src: 'words_1/children',
      wordAi: 'children',
      transcription: '| ˈtʃɪldrən |',
      wordUa: 'діти',
    },
  ],
  words_2: [
    {
      src: 'words_2/pencil',
      wordAi: 'pencil',
      transcription: '|ˈpens(ə)l|',
      wordUa: 'олівець',
    },
    {
      src: 'words_2/watch',
      wordAi: 'watch',
      transcription: '|wɒtʃ|',
      wordUa: 'годинник (наручний)',
    },
    {
      src: 'words_2/clock',
      wordAi: 'clock',
      transcription: '|klɒk|',
      wordUa: 'годинник',
    },
    {
      src: 'words_2/newspaper',
      wordAi: 'newspaper',
      transcription: '|ˈnjuːzpeɪpə|',
      wordUa: 'газета',
    },
    {
      src: 'words_2/businesscard',
      wordAi: 'business card',
      transcription: '|ˈbɪznəs| |kɑːd|',
      wordUa: 'візитка',
    },
    {
      src: 'words_2/glass',
      wordAi: 'glass',
      transcription: '|ɡlɑːs|',
      wordUa: 'склянка, скляний посуд',
    },
    {
      src: 'words_2/dictionary',
      wordAi: 'dictionary',
      transcription: '|ˈdɪkʃ(ə)n(ə)rɪ|',
      wordUa: 'словник',
    },
    {
      src: 'words_2/picture',
      wordAi: 'picture',
      transcription: '|ˈpɪktʃə|',
      wordUa: 'картина',
    },
    {
      src: 'words_2/creditcard',
      wordAi: 'credit card',
      transcription: '|ˈkredɪt| |kɑːd|',
      wordUa: 'кредитна карта',
    },
    {
      src: 'words_2/bag',
      wordAi: 'bag',
      transcription: '|bæɡ|',
      wordUa: 'сумка',
    },
    {
      src: 'words_2/pen',
      wordAi: 'pen',
      transcription: '|pen|',
      wordUa: 'ручка',
    },
    {
      src: 'words_2/table',
      wordAi: 'table',
      transcription: '|ˈteɪb(ə)l|',
      wordUa: 'стіл',
    },
    {
      src: 'words_2/box',
      wordAi: 'box',
      transcription: '|bɒks|',
      wordUa: 'коробка',
    },
    {
      src: 'words_2/cup',
      wordAi: 'cup',
      transcription: '|kʌp|',
      wordUa: 'чашка',
    },
    {
      src: 'words_2/notebook',
      wordAi: 'notebook',
      transcription: '|ˈnəʊtbʊk|',
      wordUa: 'блокнот',
    },
    {
      src: 'words_2/key',
      wordAi: 'key',
      transcription: '|kiː|',
      wordUa: 'ключ',
    },
    {
      src: 'words_2/laptop',
      wordAi: 'laptop',
      transcription: '|ˈlæptɒp|',
      wordUa: 'ноутбук',
    },
    {
      src: 'words_2/book',
      wordAi: 'book',
      transcription: '|bʊk|',
      wordUa: 'книга',
    },
    {
      src: 'words_2/chair',
      wordAi: 'chair',
      transcription: '|tʃeə|',
      wordUa: 'стул, крісло',
    },
  ],
};

// Рендерить меню
function renderPopupMenu(words, wordsLength) {
  const popupMenuContent = document.querySelector('.popup-menu__content_js');
  const popupMenuWordsTitle = `
  
    <label class="popup-menu__title _active" >
      <input  type="checkbox" name="words" value="${words}"> ${words} <small>(${wordsLength})</small>
    </label>
  </form>
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
  // ключі
  // console.log(key);
  // значення ключів
  renderPopupMenu(key, words[key].length);
  // console.log(key);
  // renderWords(words.countries_And_Nationality);
  // renderWords(words[key]);
  // console.log(words[key]);
}

function getCheckedCheckBoxes() {
  const popupMenuContent = document.querySelector('.popup-menu__content_js');
  //Получає всі input которі checkbox і вони є checked
  const selectedCheckBoxes = popupMenuContent.querySelectorAll('input[type="checkbox"]:checked');

  // Получає значенія value
  const checkedValues = Array.from(selectedCheckBoxes).map((cb) => cb.value);

  return checkedValues; // для использования в нужном месте
}

function showWords() {
  const html = document.querySelector('html');

  if (html.classList.contains('open-popup-menu')) {
    const swiperContainer = document.querySelector('.swiper-container_js');
    swiperContainer.innerHTML = '';

    // Получаєм всі вибрани Чекбокси в меню
    const inputsChecked = getCheckedCheckBoxes();
    if (inputsChecked.length > 0) {
      inputsChecked.forEach((element) => {
        renderWords(words[element]);
      });
      //Показє слайдер з нулевого індекса
      swiper.activeIndex = 0;
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
      swiper.on('slideChange', function () {
        if (document.querySelector('html').classList.contains('popup-open')) {
          setTimeout(() => {
            // Встановлює фокус на інпут
            setsAocusOnInputs();
          }, 400);
        }
      });
    }
  }
}
// =============================================================

// Рендерить слова з переданого масиву на сторінку HTML
function renderWords(words) {
  const swiperContainer = document.querySelector('.swiper-container_js');
  words.forEach((element) => {
    let number = '';
    if (Number(element.wordUa)) {
      number = element.wordUa;
    }
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
           <div>
            <span>${element.wordUa}</span>
           </div>
           <div class="popup__text popup__text_js">
              ${element.wordAi}
              <span class=""></span>
           </div>
           <input class="popup__input popup__input_js" type="text" data-src="${
             element.src
           }" data-word="${element.wordAi}">
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
        <div class="word-writing-counter word-writing-counter_js" id="${element.wordAi
          .replace(/\s/g, '')
          .toLowerCase()}">0
             </div>
      </div>
    </swiper-slide>
    `;
    swiperContainer.insertAdjacentHTML('beforeend', card);
  });
}
// Рендерить слова з переданого масиву на сторінку HTML
// renderWords(words);

// Запускає звук переданого слова
function soundClick(word) {
  const audio = new Audio(); // Создаём новый элемент Audio
  audio.src = 'mp3/' + word.replace(/\s/g, '').toLowerCase() + '.mp3'; // Указываем путь к звуку "клика"
  // audio.autoplay = true; // Автоматически запускаем
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
  const popupTexts = document.querySelectorAll('.popup__text_js');
  popupTexts.forEach((element) => {
    element.addEventListener('click', () => {
      document.querySelector('html').classList.toggle('showText');
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

  // удалить всё.
  // localStorage.clear();
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
