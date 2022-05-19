let activateButton = document.querySelector('[data-js="clickAnswer"]');
let answer = document.querySelector('[data-js="answer"]');

activateButton.addEventListener('click', showAnswer);

function showAnswer() {
  answer.classList.toggle('');
}

const bookmark = document.querySelector('[data-js="bookmark"]');
bookmark.addEventListener('click', onBookmarkClick);

function onBookmarkClick() {
  bookmark.classList.toggle('questcard--colorchanges');
}

//alert("Willkommen in der Quizapp!");
