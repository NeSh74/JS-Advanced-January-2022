function solve() {
  //TODO
  const text = document.getElementById("input").value;
  const splittedText = text.split(".").filter((el) => el != "");
  const output = document.getElementById("output");
  // let finalString = "";
  // let result = "<p>";
  // let count = 0;

  // for (let i = 0; i < splittedText.length; i++) {
  // if (i % 3 == 0) {
  // result = result + "</p>";
  // count = 0;
  // finalString += result;
  // result = "<p>";
  // }
  // result += splittedText[i] + ".";
  // count++;
  // }
  // finalString+=

  // output.innerHTML = finalString;

  for (let i = 0; i < splittedText.length; i += 3) {
    let arr = [];
    for (let j = 0; j < 3; j++) {
      if (splittedText[i + j]) {
        arr.push(splittedText[i + j]);
      }
    }
    let paragraph = arr.join('. ') + '.';
    output.innerHTML += `<p>${paragraph}</>`;
  }
}

// function solve() {
  // let inputElement = document.getElementById('input');
  // let textArr = inputElement.value.split('.').filter(s => s !== '');
  // let resultDiv = document.getElementById('output');

  // while (textArr.length > 0) {
    // let text = textArr.splice(0, 3).join('. ') + '.';
    // let p = document.createElement('p');
    // p.textContent = text;
    // resultDiv.appendChild(p);
  // }
// }

