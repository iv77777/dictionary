const search = document.querySelector('.search');
const searchBtn = document.querySelector('.search__btn');
const searchBtnSearch = document.querySelector('.search__btn-search');
const tagHtml = document.querySelector('html');

if (searchBtn) {
  searchBtn.addEventListener('click', () => {
    search.classList.add('search--active');
    tagHtml.classList.add('open-popup-words');
    showAllWordsInPopupWordsContent(words);
    searchWords();
    onClickWordInPopupWords(words);
  });
}
if (searchBtnSearch) {
  searchBtnSearch.addEventListener('click', () => {
    hidePopupWords(search, tagHtml);
  });
}

function hidePopupWords(search, tagHtml) {
  search.classList.remove('search--active');
  tagHtml.classList.remove('open-popup-words');
}
// ---------------------------------------------
function onClickWordInPopupWords(words) {
  const swiperContainer = document.querySelector('.swiper-container_js');
  swiperContainer.innerHTML = '';
  const popupWordsContent = document.querySelector('.popup-words__content_js');
  popupWordsContent.addEventListener('click', showІelectedWordInPopupWords);
}
function showІelectedWordInPopupWords(e) {
  const key = e.target.closest('.popup-words__content-li').dataset.key;
  const index = e.target.closest('.popup-words__content-li').dataset.index;
  hidePopupWords(search, tagHtml);
  showWords(words[key], index);
}
function showAllWordsInPopupWordsContent(words) {
  let renderHtmlElement = document.querySelector('.popup-words__content_js');
  renderHtmlElement.innerHTML = '';

  let itemHtml = document.querySelector('.counter-worbs_js');
  itemHtml.innerHTML = '';

  for (let key in words) {
    renderAllWordsPopup(words[key], renderHtmlElement, key);
    counter(words[key].length, itemHtml);
  }
}
function renderAllWordsPopup(arrayWirds, renderHtmlElement, key) {
  arrayWirds.forEach((item, index) => {
    const itemHtml = `<li class="popup-words__content-li" data-key='${key}' data-index='${index}'>${item.wordAi}</li>`;
    renderHtmlElement.insertAdjacentHTML('beforeend', itemHtml);
  });
}

function counter(itemLength, itemHtml) {
  let itemHtmlValue = Number(itemHtml.innerText) + itemLength;
  itemHtml.innerHTML = itemHtmlValue;
}

function searchWords() {
  const searchInput = document.querySelector('#search__input');
  searchInput.value = '';
  searchInput.oninput = function () {
    const value = this.value.trim();
    let val = value.toUpperCase();
    let elasticItems = document.querySelectorAll('.popup-words__content_js li'); //На страеице html находим все елементы "li" в елементи class="popup-words__content_js"

    if (val != '') {
      // если val (значения из поля инрут) НЕ равно пустой строке то
      elasticItems.forEach((elem) => {
        const textElement = elem.innerText.toUpperCase();

        if (textElement.search(val) === -1) {
          elem.classList.add('hide');
          elem.innerHTML = elem.innerText;
        } else {
          elem.classList.remove('hide');

          elem.innerHTML = insertMark(elem.innerText, textElement.search(val), val.length);
        }
      });
    } else {
      // если val (значения из поля инрут) равно пустой строке то
      elasticItems.forEach((elem) => {
        elem.classList.remove('hide');
        elem.innerHTML = elem.innerText; //убераем теги з "elem" (которые подсвечували значения из поля инрут в масиве)
      });
    }
  };
}

function insertMark(el, pos, len) {
  return el.slice(0, pos) + '<mark>' + el.slice(pos, pos + len) + '</mark>' + el.slice(pos + len);
}
