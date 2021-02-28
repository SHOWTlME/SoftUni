function solve() {
   const output = document.querySelector('textarea');
   const cart = [];

   document.querySelector('.shopping-cart').addEventListener('click', (ev) => {
      if (ev.target.tagName === 'BUTTON' && ev.target.className === 'add-product') {
         const product = ev.target.parentNode.parentNode;
         const title = product.querySelector('.product-title').textContent;
         const price = Number(product.querySelector('.product-line-price').textContent);
         cart.push({ title, price });
         output.textContent += `Added ${title} for ${price.toFixed(2)} to the cart.\n`
      }
   });
  
   document.querySelector('.checkout').addEventListener('click', onClick);
   function onClick() {
      const result = cart.reduce((obj, element) => {
         obj.items.push(element.title);
         obj.total += element.price;
         return obj;
      }, { items: [], total: 0 });
      output.value += `You bought ${result.items.join(' ')} for ${result.total.toFixed(2)}.`
   }
}
