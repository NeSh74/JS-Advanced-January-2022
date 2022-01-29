// function solve() {
//    document.getElementsByClassName('shopping-cart')[0].addEventListener('click', onClick);
//    document.getElementsByClassName('checkout')[0].addEventListener('click', checkout);

//    const cart = [];
//    const output = document.getElementsByTagName('textarea')[0];

//    function onClick(ev) {
//       if (ev.target.tagName == 'BUTTON' && ev.target.classList.contains('add-product')) {
//          const product = ev.target.parentNode.parentNode;
//          const name = product.querySelector('.product-title').textContent;
//          const price = Number(product.querySelector('.product-line-price').textContent);

//          cart.push({
//             name,
//             price
//          });
//          output.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
//       }
//    }
//    function checkout() {
//       const products = new Set();
//       cart.forEach(p => products.add(p.name));

//       const total = cart.reduce((t, c) => t + c.price, 0)

//       output.value += `You bought ${[...products.keys()].join(', ')} for ${total.toFixed(2)}.`;
//    }
// }
function solve() {
   let bag = {};
   let totalSum = 0;
   let textarea = document.getElementsByTagName('textarea')[0];

   Array.from(document.querySelectorAll('button')).forEach(btn => {
      btn.addEventListener('click', (ev) => {
         if (ev.target.className == 'add-product') {
            addProductToBag(btn.parentNode.parentNode);
         }
         else if (ev.target.className == 'checkout') {
            checkoutResult(btn.parentNode.parentNode)
         }
      })
   });

   function addProductToBag(parent) {
      let nameOfProduct = parent.getElementsByClassName('product-title')[0].textContent;
      let price = Number(parent.getElementsByClassName('product-line-price')[0].textContent);
      bag[nameOfProduct] = Number(price);

      textarea.value += `Added ${nameOfProduct} for ${price.toFixed(2)} to the cart.\n`;
      totalSum += price;
   }

   function checkoutResult(parent) {
      Array.from(document.querySelectorAll('button')).forEach(btn => {
         btn.disabled = 'true';
      });
      textarea.value += `You bought ${Object.keys(bag).join(', ')} for ${totalSum.toFixed(2)}.`;
   }
}