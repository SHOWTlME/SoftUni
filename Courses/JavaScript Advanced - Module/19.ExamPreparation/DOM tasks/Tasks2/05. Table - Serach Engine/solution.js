function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   function onClick() {
      const inputField = document.querySelector('#searchField');
      const rowElements = Array.from(document.querySelectorAll('.container tbody tr'));

      for (let i = 0; i < rowElements.length; i++) {
         let currentRow = rowElements[i];
         if (currentRow.textContent.includes(inputField.value)) {
            currentRow.classList.add('select');
         } else if (!currentRow.textContent.includes(inputField.value)) {
            currentRow.removeAttribute('class');
         }
      }
      inputField.value = '';

   }
}