const bookArr = [];
const checkItem = localStorage.getItem('bookArrObj');
const message = document.getElementById('errorMsg');
export default class UserBook {
  constructor(title1, author1, id1) {
    this.title = title1;
    this.author = author1;
    this.id = id1;
  }

  addBook() {
    if (this.title === '' || this.author === '') {
      message.innerText = 'Please! Fill all fields';
    } else if (!checkItem) {
      bookArr.push(this);
      localStorage.setItem('bookArrObj', JSON.stringify(bookArr));
      location.reload();
    } else {
      const ArrayStored = localStorage.getItem('bookArrObj');
      const ArrayStoredParse = JSON.parse(ArrayStored);
      ArrayStoredParse.push(this);
      localStorage.setItem('bookArrObj', JSON.stringify(ArrayStoredParse));
      location.reload();
    }
  }

  removeBook() {
    const removeBtns = document.querySelectorAll('#book-list button');
    const BookStored = JSON.parse(localStorage.getItem('bookArrObj'));
    removeBtns.forEach((a, i) => {
      a.addEventListener('click', () => {
        const BookFiltered = BookStored.filter((book, index) => index !== i);
        this.id = i;
        localStorage.setItem('bookArrObj', JSON.stringify(BookFiltered));
        location.reload();
      });
    });
  }
}