function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const rows = document.querySelectorAll('tbody tr');

   function onClick() {
      const inputField = document.getElementById('searchField').value;
      for (const element of rows) {
         if (element.textContent.includes(inputField)) {
            element.setAttribute('class', 'select');
         } else {
            element.removeAttribute('class');
         }
      }
   }
}