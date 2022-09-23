export const getDateAndTime = date => {
  if (date) {
    const dateArr = date.split('T');
    return `${dateArr[0]} ${dateArr[1].slice(0, 5)}`;
  }
};

export const getDate = date => {
  if (date) {
    const dateArr = date.split('T');
    return `${dateArr[0]}`;
  }
};

export const getKeyByValue = (object, value) => {
  if (object && value) return Object.keys(object).find(key => object[key] === value);
};

export const maskingPhoneNumber = str => {
  if (str) {
    let originStr = str;
    let phoneStr;
    let maskingStr;

    phoneStr = originStr.match(/\d{2,3}-\d{3,4}-\d{4}/gi);

    if (/-[0-9]{3}-/.test(phoneStr)) {
      // 00-000-0000
      maskingStr = originStr
        .toString()
        .replace(phoneStr, phoneStr.toString().replace(/-[0-9]{3}-/g, '-***-'));
    } else if (/-[0-9]{4}-/.test(phoneStr)) {
      // 00-0000-0000
      maskingStr = originStr
        .toString()
        .replace(phoneStr, phoneStr.toString().replace(/-[0-9]{4}-/g, '-****-'));
    }

    return maskingStr;
  }
};

export const maskingAccount = str => {
  if (str) {
    let maskingStr;
    str = str.toString();
    maskingStr = str
      .split('')
      .map((el, idx) => (idx < 2 || idx > str.length - 3 ? el : '*'))
      .join('');
    return maskingStr;
  }
};

export const getAccountFormat = (account, format) => {
  if (account && format) {
    let accArr = account.split('');
    format.split('').filter((el, index) => el === '-' && accArr.splice(index, 0, '-'));
    return accArr.join('');
  }
};

export const getFullAddress = (address, detailAddress) => {
  if (address && detailAddress) {
    const detailArr = detailAddress.split(' ');
    const addressNumber = detailArr.shift();
    return `(${addressNumber}) ${address} ${detailArr.join(' ')}`;
  }
};
