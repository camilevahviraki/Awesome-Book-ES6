const AllBookSection = document.getElementById('All-Books');
const formSection = document.getElementById('formSection');
const ContactSection = document.getElementById('contact-us');
const ListBtn = document.getElementById('btn1');
const AddNew = document.getElementById('btn2');
const ContactBtn = document.getElementById('btn3');

class ShowPages {
  constructor() {
    this.page = 'default';
  }

  ShowPage1() {
    AllBookSection.style.display = 'flex';
    formSection.style.display = 'none';
    ContactSection.style.display = 'none';
    this.page = 'async';
  }

  ShowPage2() {
    AllBookSection.style.display = 'none';
    formSection.style.display = 'flex';
    ContactSection.style.display = 'none';
    this.page = 'async';
  }

  ShowPage3() {
    AllBookSection.style.display = 'none';
    formSection.style.display = 'none';
    ContactSection.style.display = 'flex';
    this.page = 'async';
  }
}

const pages = () => {
  const pageShow = new ShowPages();
  ListBtn.addEventListener('click', pageShow.ShowPage1);
  AddNew.addEventListener('click', pageShow.ShowPage2);
  ContactBtn.addEventListener('click', pageShow.ShowPage3);
};

export default pages;
