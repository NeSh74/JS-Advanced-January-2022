function addItem() {
    // //select input field and read value
    // const input = document.getElementById('newItemText');

    // //create new <li> element and set its content to input value
    // const liElement = document.createElement('li');
    // liElement.textContent = input.value;

    // //select <ul> and append new <li> element
    // document.getElementById('items').appendChild(liElement);

    // //nice to have clear input filed
    // input.value = '';

    let inputElement = document.getElementById('newItemText');
    let itemsElement = document.getElementById('items');

    let liElement = document.createElement('li');
    liElement.textContent = inputElement.value;
    itemsElement.appendChild(liElement);
}