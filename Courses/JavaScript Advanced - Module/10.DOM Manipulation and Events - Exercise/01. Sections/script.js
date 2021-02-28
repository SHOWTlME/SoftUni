function create(words) {
   const result = document.getElementById('content');

   words.forEach(word => {
      const newDiv = document.createElement('div');
      const newP = document.createElement('p');
      newP.textContent = word;
      newP.style.display = 'none';
      newDiv.appendChild(newP);
      result.appendChild(newDiv);
   });

   result.addEventListener('click', onClick);

   function onClick(ev) {
      if (ev.target.tagName == 'DIV' || ev.target.tagName == 'P') {
         const displayP = ev.target.children[0] || ev.target;
         const isVisible = displayP.style.display === 'block';
         displayP.style.display = isVisible ? 'none' : 'block';
      }
   }
}