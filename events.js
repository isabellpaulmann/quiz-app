let activateButton = document.querySelector('[data-js="clickAnswer"]');
let answer = document.querySelector('[data-js="answer"]');

answer.addEventListener("click", showAnswer);

function showAnswer() {
  answer.classList.add("test");
}

const bookmark = document.querySelector('[data-js="bookmark"]');
bookmark.addEventListener("click", onBookmarkClick);

function onBookmarkClick() {
  bookmark.classList.toggle("questcard--colorchanges");
}

//alert("Willkommen in der Quizapp!");
