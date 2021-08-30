/* eslint-disable linebreak-style */
/* eslint-disable no-use-before-define */
import checkCardHolder from './checkcardholder';
import cardValidate from './cardvalidate';

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  showPic();
});

document.querySelector('.button').addEventListener('click', showPic);

export default function showPic() {
  Array.from(document.querySelectorAll('.absolute-hide')).forEach((e) => { e.style.display = 'block'; });
  const input = document.querySelector('.input').value;
  if (!cardValidate(input)) {
    document.querySelector('.input').value = '';
    showErrorMessage();
    return;
  }
  const check = checkCardHolder(input);
  if (check === 'Visa') {
    document.querySelector('.card-item-visa').querySelector('.absolute-hide').style.display = 'none';
  }
  if (check === 'Visa Electron') {
    document.querySelector('.card-item-visa-electron').querySelector('.absolute-hide').style.display = 'none';
  }
  if (check === 'MasterCard') {
    document.querySelector('.card-item-mastercard').querySelector('.absolute-hide').style.display = 'none';
  }
  if (check === 'Mir') {
    document.querySelector('.card-item-mir').querySelector('.absolute-hide').style.display = 'none';
  }
  if (check === 'Maestro') {
    document.querySelector('.card-item-maestro').querySelector('.absolute-hide').style.display = 'none';
  }
  if (check === 'JCB') {
    document.querySelector('.card-item-jcb').querySelector('.absolute-hide').style.display = 'none';
  }
  if (check === 'InstaPayment') {
    document.querySelector('.card-item-instapayment').querySelector('.absolute-hide').style.display = 'none';
  }
  if (check === 'Discover') {
    document.querySelector('.card-item-discover').querySelector('.absolute-hide').style.display = 'none';
  }
  if (check === 'Diners') {
    document.querySelector('.card-item-diners').querySelector('.absolute-hide').style.display = 'none';
  }
  if (check === 'American Express') {
    document.querySelector('.card-item-americanexpress').querySelector('.absolute-hide').style.display = 'none';
  }
}

function showErrorMessage() {
  document.querySelector('.container').insertAdjacentHTML('beforeend', '<div class=\'error-message\'>Введен несуществующий номер карты</div>');
  setTimeout(() => {
    document.querySelector('.error-message').remove();
  }, 3000);
}
