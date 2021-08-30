/* eslint-disable linebreak-style */
export default function checkCardHolder(num) {
  const data = `${num}`;

  const firstSix = +data.substring(0, 6);
  const firstFour = +data.substring(0, 4);
  if (((firstSix >= 222100 && firstSix <= 272099)
  || [51, 52, 53, 54, 55].some((e) => data.startsWith(e))) && (data.length === 16)) {
    return 'MasterCard';
  }

  if ([4026, 417500, 4508, 4844, 4913, 4917].some((e) => data.startsWith(e))
  && (data.length === 16)) {
    return 'Visa Electron';
  }
  if (data.startsWith('4') && data.length >= 13 && data.length <= 19) {
    return 'Visa';
  }
  if (data.startsWith('2') && data.length === 16) {
    return 'Mir';
  }
  if ([5018, 5020, 5038, 5893, 6304, 6759, 6761, 6762, 6763].some((e) => data.startsWith(e))
  && (data.length >= 16 && data.length <= 19)) {
    return 'Maestro';
  }
  if ((firstFour >= 3528 && firstFour <= 3589)
  && (data.length >= 16 && data.length <= 19)) {
    return 'JCB';
  }
  if ([637, 638, 639].some((e) => data.startsWith(e)) && (data.length === 16)) {
    return 'InstaPayment';
  }
  if (((firstSix >= 622126 && firstSix <= 622925)
  || [6011, 644, 645, 646, 647, 648, 649, 65].some((e) => data.startsWith(e)))
  && (data.length >= 16 && data.length <= 19)) {
    return 'Discover';
  }
  if ([300, 301, 302, 303, 304, 305, 36].some((e) => data.startsWith(e)) && (data.length === 14)) {
    return 'Diners';
  }
  if ([34, 37].some((e) => data.startsWith(e)) && (data.length === 15)) {
    return 'American Express';
  }

  return false;
}
