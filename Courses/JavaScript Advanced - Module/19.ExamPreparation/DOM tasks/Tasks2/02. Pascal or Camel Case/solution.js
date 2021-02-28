function solve() {
  const firstInputFIeld = document.querySelector('#text');
  const secondInputField = document.querySelector('#naming-convention');
  const myResult = document.querySelector('#result');

  if (secondInputField.value == 'Pascal Case') {
    let result = '';
    firstInputFIeld.value
      .split(' ')
      .forEach(el => {
        el = el.toLowerCase();
        let firstLetter = el[0];
        firstLetter = firstLetter.toUpperCase();
        result += el.replace(el[0], firstLetter);
      })
    myResult.textContent = result;
  } else if (secondInputField.value == 'Camel Case') {
    let answer = '';
    let wordsArr = firstInputFIeld.value.split(' ');

    for (let i = 0; i < wordsArr.length; i++) {
      let word = wordsArr[i].toLowerCase();
      if (i !== 0) {
        answer += word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
      } else if (i == 0) {
        answer += word;
      }
    }
    myResult.textContent = answer;
  } else {
    myResult.textContent = 'Error!'
  }
}