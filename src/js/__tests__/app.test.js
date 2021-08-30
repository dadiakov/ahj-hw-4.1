/* eslint-disable linebreak-style */
import cardValidate from '../cardvalidate';
import checkCardHolder from '../checkcardholder';

test('cardValidate test', () => {
  expect(cardValidate('4024007122370561')).toBeTruthy();
  expect(cardValidate('6011396284635170')).toBeTruthy();
  expect(cardValidate('30338242921243')).toBeTruthy();
  expect(cardValidate('4844990851812085')).toBeTruthy();
  expect(cardValidate('5462117504448996')).toBeTruthy();
  expect(cardValidate('2000000000000000')).toBeFalsy();
});

test('checkCardHolder test', () => {
  expect(checkCardHolder('4024007122370561')).toBe('Visa');
  expect(checkCardHolder('6011396284635170')).toBe('Discover');
  expect(checkCardHolder('6225000000000000')).toBe('Discover');
  expect(checkCardHolder('30338242921243')).toBe('Diners');
  expect(checkCardHolder('4844990851812085')).toBe('Visa Electron');
  expect(checkCardHolder('5462117504448996')).toBe('MasterCard');
  expect(checkCardHolder('2201381234567891')).toBe('Mir');
  expect(checkCardHolder('6392643982622706')).toBe('InstaPayment');
  expect(checkCardHolder('341074047864445')).toBe('American Express');
  expect(checkCardHolder('6759692449480262')).toBe('Maestro');
  expect(checkCardHolder('3545717856572016')).toBe('JCB');
  expect(checkCardHolder('3857423949239432')).toBeFalsy();
});
