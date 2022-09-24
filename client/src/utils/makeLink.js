import { FilterKey } from './FilterKey';

export function joinarray(temp) {
  return temp.join('&') === '' ? temp.join('&') : '&' + temp.join('&');
}
export function isValueZero(value, index) {
  if (index === 4) {
    return '?' + FilterKey[index] + '=' + value;
  }
  return value === '0' ? '' : '&' + FilterKey[index] + '=' + value;
}

export function splitUrl(url, index) {
  const returnUrl = url
    .split(FilterKey[index])[1]
    .split('&')
    .filter(data => data !== '');
  returnUrl.shift();

  return returnUrl;
}

export function createLink(value, index, location, navigate) {
  if (location.search.includes(FilterKey[index])) {
    const temp = splitUrl(location.search, index);
    navigate(
      `${location.search.slice(0, location.search.indexOf(FilterKey[index]) - 1)}${isValueZero(
        value,
        index
      )}${joinarray(temp)}`
    );
    return (
      location.search.slice(0, location.search.indexOf(FilterKey[index]) - 1) +
      isValueZero(value, index) +
      joinarray(temp)
    );
  } else {
    navigate(`${location.search}${isValueZero(value, index)}`);
    return location.search + isValueZero(value, index);
  }
}
