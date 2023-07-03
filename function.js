function renderLocalStorageInPopupMenu() {
  const popupMenuContent = document.querySelector('.popup-menu__content_js');
  const localStorageLength = `<span class="popup-menu__localStorage-length">${localStorage.length}</span>`;
  popupMenuContent.innerHTML = '';
  popupMenuContent.insertAdjacentHTML('beforeend', localStorageLength);

  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    const value = `
     <div class="localStorage-value">${key}: ${localStorage.getItem(key)}</div>
   `;
    popupMenuContent.insertAdjacentHTML('beforeend', value);
  }
}

setTimeout(() => {
  renderValueCounter();
}, 100);

function renderValueCounter() {
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    const wordCounter = document.getElementById(`${key}`);
    if (wordCounter) {
      wordCounter.innerHTML = localStorage.getItem(key);
    }
  }
}
// =================================================================
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

// Запускає звук переданого слова
function soundClick(word) {
  const audio = new Audio(); // Создаём новый элемент Audio
  audio.src = 'mp3/' + word.replace(/\s/g, '').toLowerCase() + '.mp3'; // Указываем путь к звуку "клика"
  // audio.autoplay = true; // Автоматически запускаем
  audio.play();
}
// При зміні значення інпута
function onInput() {
  const inputs = document.querySelectorAll('.popup__input_js');
  inputs.forEach((input) => {
    const word = input.dataset.word;
    input.oninput = function () {
      if (word.replace(/\s/g, '').length === input.value.replace(/\s/g, '').length) {
        if (
          word.replace(/\s/g, '').toLowerCase() === input.value.replace(/\s/g, '').toLowerCase()
        ) {
          input.classList.add('wordTrue');
          counterWordWriting(input, word);
          soundClick(word);
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
// Відкриває попап
function openPopup(word) {
  document.querySelector('html').classList.add('popup-open');

  onInput(word);
  // Встановлює фокус на інпут
  setsAocusOnInputs();
}

// Встановлює фокус на інпут
function setsAocusOnInputs() {
  const slide = document.querySelector('.swiper-slide-active');
  const input = slide.querySelector('.popup__input_js');
  input.focus();
}
// Закриває попап // Очищає інпути
function popupClose() {
  document.querySelector('html').classList.remove('popup-open');
  // Очищає інпути
  popupInputValueRemove();
}

// Очищає інпути
function popupInputValueRemove() {
  const inputs = document.querySelectorAll('.popup__input_js');
  inputs.forEach((input) => {
    input.value = '';
  });
}

function showsHiddenText() {
  const popupTexts = document.querySelectorAll('.popup__text_js');
  popupTexts.forEach((element) => {
    element.addEventListener('click', () => {
      document.querySelector('html').classList.toggle('showText');
    });
  });
}
