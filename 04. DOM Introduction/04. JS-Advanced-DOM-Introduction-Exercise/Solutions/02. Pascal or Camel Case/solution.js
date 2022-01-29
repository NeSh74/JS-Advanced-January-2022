function solve() {
  //TODO...
  // const text = document.getElementById("text").value;
  // const naming = document.getElementById("naming-convention").value;
  // const resultContainer = document.getElementById("result");

  // const splitted = text.split(" ");

  // let resultString = "";

  // if (naming == "Pascal Case") {
  // for (let i = 0; i < splitted.length; i++) {
  // resultString += splitted[i][0].toUpperCase() +
  // splitted[i].slice(1, splitted[i].length).toLowerCase();
  // }
  // resultContainer.textContent = resultString;
  // } else if (naming == "Camel Case") {
  // resultString += splitted[0][0].toLowerCase() +
  // splitted[0].slice(1, splitted[0].length).toLowerCase();

  // for (let i = 1; i < splitted.length; i++) {
  // resultString += splitted[i][0].toUpperCase() +
  // splitted[i].slice(1, splitted[i].length).toLowerCase();
  // }
  // resultContainer.textContent = resultString;
  // } else {
  // resultContainer.textContent = "Error!";
  // }

  let text = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;
  let result = '';

  if (convention === 'Camel Case') {
    for (let i = 0; i < text.length; i++) {
      if (text[i] === ' ') {
        result += (text[i + 1].toUpperCase());
        i++;
      } else {
        result += text[i].toLowerCase();
      }
    }
  } else if (convention === 'Pascal Case') {
    result += text[0].toUpperCase();
    for (let i = 1; i < text.length; i++) {
      if (text[i] === ' ') {
        result += text[i + 1].toUpperCase();
        i++;
      } else {
        result += text[i].toLowerCase();
      }
    }
  } else {
    result = 'Error!';
  }
  let resultElement = document.getElementById('result');
  resultElement.textContent = result;
}