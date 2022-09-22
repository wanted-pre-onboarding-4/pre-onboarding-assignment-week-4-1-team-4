import { FilterKey } from './FilterKey';

export function joinarray(temp) {
  return temp.join('&') === '' ? temp.join('&') : '&' + temp.join('&');
}
export function isValueZero(value, index) {
  console.log(value, index);
  return value === '0' ? '' : '&' + FilterKey[index] + '=' + value;
}

export function splitUrl(url, index) {
  const returnUrl = url
    .split(FilterKey[index])[1]
    .split('&')
    .filter(data => data !== '');
  returnUrl.shift();
  console.log(returnUrl);
  return returnUrl;
}

export function CreateLink(value, index, location, navigate) {
  console.log(location);
  if (location.search.includes(FilterKey[index])) {
    const temp = splitUrl(location.search, index);
    navigate(
      `${location.search.slice(0, location.search.indexOf(FilterKey[index]) - 1)}${isValueZero(
        value,
        index
      )}${joinarray(temp)}`
    );
  } else {
    navigate(`${location.search}${isValueZero(value, index)}`);
  }
}
