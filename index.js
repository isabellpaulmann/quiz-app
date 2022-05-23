const activateButton = document.querySelector('[data-js="clickAnswer"]');
const activateButton2 = document.querySelector('[data-js="clickAnswer2"]');
const activateButton3 = document.querySelector('[data-js="clickAnswer3"]');
const activateButton4 = document.querySelector('[data-js="clickAnswer4"]');
const answer = document.querySelector('[data-js="answer"]');
const answer2 = document.querySelector('[data-js="answer2"]');
const allBookmarkButtons = document.querySelectorAll('[data-js="bookmark"]');
const submitButton = document.querySelector('[data-js="submit"]');

//bookmark
allBookmarkButtons.forEach(bookmark => {
  bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('questcard--colorchanges');
  });
});

//buttons
activateButton.addEventListener('click', () => {
  activateButton.classList.toggle('displayNone');
  activateButton2.classList.toggle('displayPages');
  answer.classList.toggle('displayPages');
});
activateButton2.addEventListener('click', () => {
  activateButton2.classList.toggle('displayPages');
  activateButton.classList.toggle('displayNone');
  answer.classList.toggle('displayNone');
});
activateButton3.addEventListener('click', () => {
  activateButton3.classList.toggle('displayNone');
  activateButton4.classList.toggle('displayPages');
  answer2.classList.toggle('displayPages');
});
activateButton4.addEventListener('click', () => {
  activateButton4.classList.toggle('displayPages');
  activateButton3.classList.toggle('displayNone');
  answer2.classList.toggle('displayNone');
});

///navigation

const page1 = document.querySelector('[data-js="home"]');
const page2 = document.querySelector('[data-js="book"]');
const page3 = document.querySelector('[data-js="create"]');
const page4 = document.querySelector('[data-js="profile"]');
const nav1 = document.querySelector('[data-js="buttonHome"]');
const nav2 = document.querySelector('[data-js="buttonBook"]');
const nav3 = document.querySelector('[data-js="buttonCreate"]');
const nav4 = document.querySelector('[data-js="buttonProfile"]');

nav1.addEventListener('click', () => {
  page1.classList.remove('displayNone');
  page2.classList.add('displayNone');
  page3.classList.add('displayNone');
  page4.classList.add('displayNone');
  nav1.classList.add('activeButton');
  nav2.classList.remove('activeButton');
  nav3.classList.remove('activeButton');
  nav4.classList.remove('activeButton');
});
nav2.addEventListener('click', () => {
  page1.classList.add('displayNone');
  page2.classList.remove('pageHome');
  page3.classList.add('displayNone');
  page4.classList.add('displayNone');
  nav1.classList.remove('activeButton');
  nav2.classList.add('activeButton');
  nav3.classList.remove('activeButton');
  nav4.classList.remove('activeButton');
});
nav3.addEventListener('click', () => {
  page1.classList.add('displayNone');
  page2.classList.add('pageHome');
  page3.classList.remove('displayNone');
  page4.classList.add('displayNone');
  nav1.classList.remove('activeButton');
  nav2.classList.remove('activeButton');
  nav3.classList.add('activeButton');
  nav4.classList.remove('activeButton');
});
nav4.addEventListener('click', () => {
  page1.classList.add('displayNone');
  page2.classList.add('pageHome');
  page3.classList.add('displayNone');
  page4.classList.remove('displayNone');
  nav1.classList.remove('activeButton');
  nav2.classList.remove('activeButton');
  nav3.classList.remove('activeButton');
  nav4.classList.add('activeButton');
});

//submitButton

submitButton.addEventListener('click', () => {
  submitButton.textContent = 'submitted';
  submitButton.classList.add('submitted');
});
