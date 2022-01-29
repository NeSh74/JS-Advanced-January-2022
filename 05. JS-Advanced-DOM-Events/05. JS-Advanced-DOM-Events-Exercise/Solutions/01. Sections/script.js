function create(words) {
   //create div
   //create <p>
   //set <p> content
   //confugure <p> to be hidden (display:none)
   //add <p> to <div>
   //add <div> to page
   //configure <div> eventListener
   const content = document.getElementById('content');
   content.addEventListener('click', reveal)

   for (let word of words) {

      const div = document.createElement('div');
      const para = document.createElement('p');
      para.textContent = word;
      para.style.display = 'none';
      div.appendChild(para);

      content.appendChild(div);
   }
   function reveal(e) {
      if (e.target.tagName == 'DIV' && e.target != content) {
         e.target.children[0].style.display = '';
      }
   }
}

// function create(input) {
   // let parentElement = document.getElementById('content');
   // let elements = input;

   // for (let i = 0; i < elements.length; i++) {
      // let div = document.createElement('div');
      // let p = document.createElement('p');
      // let text = document.createTextNode(elements[i]);

      // p.appendChild(text);
      // p.style.display = 'none';
      // div.appendChild(p);
      // div.addEventListener('click', showParagrphs);
      // parentElement.appendChild(div);
   // }
   // function showParagrphs(event) {
      // event.target.children[0].style.display = 'inline';
   // }
// }
