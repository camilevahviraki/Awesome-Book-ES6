import { DateTime } from '../node_modules/luxon/src/luxon.js';

const getDate = () => {
  const time = DateTime.fromObject({ day: 22, hour: 12 }, { zone: 'America/Los_Angeles', numberingSystem: 'beng' });
  const dateContainer = document.getElementById('last-modified');
  dateContainer.innerHTML = time;
};

export default getDate;