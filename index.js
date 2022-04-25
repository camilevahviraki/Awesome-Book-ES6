import addBook from './modules/addBook.js';
import getDate from './modules/getDate.js';
import UserBook from './modules/AddAndRemove.js';
import pages from './modules/showPage.js';

addBook();
getDate();
pages();

const bookList = document.getElementById('book-list');
const BookStored = JSON.parse(localStorage.getItem('bookArrObj'));
const buttonRemove = document.createElement('button');
const bookLi = document.createElement('div');
buttonRemove.innerText = 'Remove';

function updateUi() {
  for (let i = 0; i < BookStored.length; i += 1) {
    function assignClass() {
      if (i % 2 === 0) { return 'greyDiv'; } return 'darkDiv';
    }
    bookLi.innerHTML += `<div class='${assignClass()}'>
      <p class="p_title">"${BookStored[i].title}" </p>
      <p class="p_by">by</p>
      <p class="p_author"> ${BookStored[i].author}</p>
      <button>Remove</button> 
    </div>`;

    bookList.append(bookLi);
  }

  const RemoveBook = new UserBook();
  RemoveBook.removeBook();
}

window.addEventListener('load', updateUi);
