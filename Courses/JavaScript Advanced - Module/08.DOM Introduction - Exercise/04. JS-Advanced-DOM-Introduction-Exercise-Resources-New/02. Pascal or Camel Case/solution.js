function solve() {
  const text = document.getElementById('text').value.toLowerCase();
  const namingConvention = document.getElementById('naming-convention').value;
  const regExp = /[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])|\d+/g;
  let isMatch = text.match(regExp);
  let result;

  function camelCase(inputArray) {
    let result = '';

    for (let i = 0; i < inputArray.length; i++) {
      let currentElement = inputArray[i];
      let firstLetter = currentElement[0];
      if (i !== 0) {
        firstLetter = firstLetter.toUpperCase();
        currentElement = currentElement.replace(currentElement[0],firstLetter);
      }
        result += currentElement;
    }
    return result;
  }
  function pascalCase(inputArray) {
    let result = '';

    for (let z = 0; z < inputArray.length; z++) {
      let currentElement = inputArray[z];
      let currentLetter = currentElement[0];
      currentLetter = currentLetter.toUpperCase();
      currentElement = currentElement.replace(currentElement[0],currentLetter);
      result += currentElement;
    }

    return result;
  }
  
  if (namingConvention === 'Camel Case') {
    result = camelCase(isMatch);
  } else if (namingConvention === 'Pascal Case') {
    result = pascalCase(isMatch);
  } else {
    result = 'Error!';
  }
  document.getElementById('result').textContent = result;
}