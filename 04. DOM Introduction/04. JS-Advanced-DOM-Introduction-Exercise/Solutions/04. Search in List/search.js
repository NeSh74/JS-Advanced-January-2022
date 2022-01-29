function search() {
   // // TODO
   // const elements = Array.from(document.querySelectorAll("ul li"));
   // const text = document.getElementById("searchText").value;
   // let matches = 0;

   // elements.forEach((el) => {
   // if (el.innerHTML.includes(text)) {
   // el.style.fontWeight = "bold";
   // el.style.textDecoration = "underline";
   // matches++;
   // } else {
   // el.style.fontWeight = "normal";
   // el.style.textDecoration = "";
   // }
   // })
   // document.getElementById("result").textContent = `${matches} matches found`;

   let userWord = document.getElementById("searchText").value;
   let townsElement = Array.from(document.querySelectorAll("#towns li"));
   let match = document.getElementById('result');
   let count = 0;

   for (let town of townsElement) {
      if (town.textContent.includes(userWord) && userWord !== '') {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         count++;
      } else {
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      }
   }
   match.textContent = `${count} matches found`
}
