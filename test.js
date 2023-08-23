const wordTextEnglish = document.querySelectorAll('.flashcard-item-inner');

let words = [];
console.log(wordTextEnglish.length);

wordTextEnglish.forEach((item) => {
  const side1 = item.querySelector('.side-1');
  const side2 = item.querySelector('.side-2');
  const side1Small = side1.innerText
    .trim()
    .toLowerCase()
    .replace(/ /g, '')
    .replace(/[^a-z]/g, '');

  const wordItem = {
    src: `words_16/${side1Small}`,
    wordAi: `${side1.innerText.trim()}`,
    transcription: '',
    wordUa: `${side2.innerText.trim()}`,
  };
  words.push(wordItem);
});
console.log(JSON.stringify(words));
