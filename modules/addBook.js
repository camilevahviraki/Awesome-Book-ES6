import UserBook from './AddAndRemove.js';

const addBook = () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const titleVal = document.getElementById('book_title').value;
    const authorVal = document.getElementById('author').value;

    const SaveBook = new UserBook(titleVal, authorVal);
    SaveBook.addBook();
  });
};

export default addBook;