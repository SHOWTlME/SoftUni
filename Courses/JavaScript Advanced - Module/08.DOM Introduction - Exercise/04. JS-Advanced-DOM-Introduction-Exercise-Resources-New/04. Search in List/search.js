function search() {
   const inputField = document.querySelector('#searchText').value;
   const listElements = document.querySelectorAll('#towns li');
   const result = document.querySelector('#result');
   let count = 0;

   for (const li of listElements) {
      if (li.textContent.includes(inputField)) {
         li.style.fontWeight = 'bold';
         li.style.textDecoration = 'underline';
         count++;
      } else {
         li.style.fontWeight = '';
         li.style.textDecoration = '';
      }
   }
   result.textContent = `${count} matches found`;
}
