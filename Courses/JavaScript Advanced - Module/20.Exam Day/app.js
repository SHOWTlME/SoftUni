function solve() {
   const authorInput = document.querySelector('#creator');
   const titleInput = document.querySelector('#title');
   const categoryInput = document.querySelector('#category');
   const contentInput = document.querySelector('#content');
   const resultMain = document.querySelector('main');
   const archivedSection = document.querySelector('.archive-section ol');

   document.querySelector('.site').addEventListener('click', onClick);

   function onClick(ev) {
      ev.preventDefault();
      if (ev.target.nodeName === "BUTTON" && ev.target.textContent == "Create") {
         const articleElement = createElement('article',);
         const h1Element = createElement('h1', titleInput.value);
         const categoryParagraph = createElement('p', 'Category:', 'strong', categoryInput.value);
         const creatorParagraph = createElement('p', 'Creator', 'strong', authorInput.value);
         const contentParagraph = createElement('p', contentInput.value);

         const buttonsDiv = createElement('div');
         buttonsDiv.className = "buttons";


         const createDelBtn = createElement('button', 'Delete');
         createDelBtn.className = "btn delete"

         const createArchiveBtn = createElement('button', 'Archive');
         createArchiveBtn.className = "btn archive";


         buttonsDiv.appendChild(createDelBtn);
         buttonsDiv.appendChild(createArchiveBtn);

         articleElement.appendChild(h1Element);
         articleElement.appendChild(categoryParagraph);
         articleElement.appendChild(creatorParagraph);
         articleElement.appendChild(contentParagraph);
         articleElement.appendChild(buttonsDiv);
         resultMain.appendChild(articleElement);

         authorInput.value = '';
         titleInput.value = '';
         categoryInput.value = '';
         contentInput.value = '';
      } else if (ev.target.nodeName === 'BUTTON' && ev.target.textContent == "Delete") {
         ev.target.parentNode.parentNode.remove();
      } else if (ev.target.nodeName === 'BUTTON' && ev.target.textContent == 'Archive') {
         const myArticle = ev.target.parentNode.parentNode;
         const myTitle = ev.target.parentNode.parentNode.firstChild;
         const liElement = createElement('li', myTitle.textContent);

         archivedSection.appendChild(liElement);
         const archiveList = Array.from(archivedSection.children);
         archiveList.sort((a,b) => a.textContent.localeCompare(b.textContent)).forEach(li => {
            archivedSection.appendChild(li);
         });

         myArticle.remove();
      }
   }
   function createElement(type, content, secondType, secondContent) {
      const createElement = document.createElement(type);
      if (content) {
         createElement.textContent = content;
      }

      if (secondType) {
         const secondElement = document.createElement(secondType);
         secondElement.textContent = secondContent;
         createElement.appendChild(secondElement);
      }

      return createElement;
   }

}
