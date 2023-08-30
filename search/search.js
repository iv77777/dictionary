if (popupWordsLanguageBtn) {
  popupWordsLanguageBtn.addEventListener('click', () => {
    togglePopupLanguage(tagHtml);
    tagHtml.classList.add('add-loading');
    setTimeout(() => {
      if (tagHtml.classList.contains('wordAi')) {
        popupWordsLanguageBtn.innerHTML = 'En';
        searchInput.placeholder = 'Enter the word';
      } else {
        console.log('Ua');
        searchInput.placeholder = 'Введіть слово';
        popupWordsLanguageBtn.innerHTML = 'Ua';
      }
      showAllWordsInPopupWordsContent(words);
      searchWords();
    }, 10);
    setTimeout(() => {
      tagHtml.classList.remove('add-loading');
    }, 20);
  });
}

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
  const popupWordsContent = document.querySelector('.popup-words__content_js');
  popupWordsContent.addEventListener('click', showІelectedWordInPopupWords);
}
function showІelectedWordInPopupWords(e) {
  if (e.target.closest('.popup-words__content-li')) {
    const key = e.target.closest('.popup-words__content-li').dataset.key;
    const index = e.target.closest('.popup-words__content-li').dataset.index;
    hidePopupWords(search, tagHtml);
    const swiperContainer = document.querySelector('.swiper-container_js');
    swiperContainer.innerHTML = '';
    showWords(words[key], index);
  }
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
  if (tagHtml.classList.contains('wordAi')) {
    render('wordAi');
  } else {
    render('wordUa');
  }
  function render(language) {
    arrayWirds.forEach((item, index) => {
      const itemHtml = `<li class="popup-words__content-li" data-key='${key}' data-index='${index}'><span class="popup-words__content-text">${
        item[language]
      }</span><small>(${key} /${index + 1})</small></li>`;
      renderHtmlElement.insertAdjacentHTML('beforeend', itemHtml);
    });
  }
}

function counter(itemLength, itemHtml) {
  let itemHtmlValue = Number(itemHtml.innerText) + itemLength;
  itemHtml.innerHTML = itemHtmlValue;
}

function searchWords() {
  const searchInput = document.querySelector('#search__input');
  searchInput.value = '';
  searchInput.focus();
  searchInput.oninput = function () {
    const html = document.querySelector('html');
    const value = this.value.trim();
    let val = value.toUpperCase();
    let elasticItems = document.querySelectorAll('.popup-words__content_js span');
    html.classList.add('add-loading');

    setTimeout(() => {
      if (val != '') {
        // если val (значения из поля инрут) НЕ равно пустой строке то
        elasticItems.forEach((elem) => {
          const textElement = elem.innerText.toUpperCase();

          if (val.search('’') !== -1) {
            val = val.replace('’', "'");
          }

          if (textElement.search(val) === -1) {
            elem.closest('.popup-words__content-li').classList.add('hide');
            elem.innerHTML = elem.innerText;
          } else {
            elem.closest('.popup-words__content-li').classList.remove('hide');

            elem.innerHTML = insertMark(elem.innerText, textElement.search(val), val.length);
          }
        });
      } else {
        // если val (значения из поля инрут) равно пустой строке то
        elasticItems.forEach((elem) => {
          elem.closest('.popup-words__content-li').classList.remove('hide');
          elem.classList.remove('hide');
          elem.innerHTML = elem.innerText; //убераем теги з "elem" (которые подсвечували значения из поля інрут в масиве)
        });
      }
    }, 10);
    setTimeout(() => {
      html.classList.remove('add-loading');
    }, 20);
  };
}

function insertMark(el, pos, len) {
  return el.slice(0, pos) + '<mark>' + el.slice(pos, pos + len) + '</mark>' + el.slice(pos + len);
}

function togglePopupLanguage(tagHtml) {
  tagHtml.classList.toggle('wordAi');
}
