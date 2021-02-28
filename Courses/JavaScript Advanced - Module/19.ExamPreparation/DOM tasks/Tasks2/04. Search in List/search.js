function search() {
   let index = 0;
   const inputField = document.querySelector('#searchText');
   let result = document.querySelector('#result');
   Array.from(document.querySelectorAll('#towns li')).forEach(el => {

      if (el.textContent.includes(inputField.value)) {
         el.style.fontWeight = 'bold';
         el.style.textDecoration = 'underline';
         index++;
      } else {
         el.style.fontWeight = '';
         el.style.textDecoration = '';
      }
   })
   result.textContent = `${index} matches found`;
}
