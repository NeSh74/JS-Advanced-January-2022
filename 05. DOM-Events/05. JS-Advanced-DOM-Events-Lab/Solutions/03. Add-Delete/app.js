function addItem() {
    //select input field and read value
    const input = document.getElementById('newItemText');

    //create new <li> element and set its content to input value
    const liElement = document.createElement('li');
    liElement.textContent = input.value;

    //create delete button
    const button = document.createElement('a');
    button.href = '#';
    button.textContent = '[Delete]';
    button.addEventListener('click', removeElement);

    liElement.appendChild(button);

    //select <ul> and append new <li> element
    document.getElementById('items').appendChild(liElement);

    //nice to have clear input filed
    input.value = '';

    function removeElement(ev) {
        const parent = ev.target.parentNode;
        parent.remove();
    }
}

// function addItem() {
    // let itemsElement = document.getElementById('items');
    // let inputElement = document.getElementById('newItemText');

    // let liElement = document.createElement('li');
    // liElement.textContent = inputElement.value;
    // inputElement.value = '';

    // let deleteElemnt = document.createElement('a');
    // deleteElemnt.href = '#';
    // deleteElemnt.textContent = '[Delete]';
    // deleteElemnt.addEventListener('click', e => {
        // e.currentTarget.parentElement.remove();
    // })

    // liElement.appendChild(deleteElemnt);
    // itemsElement.appendChild(liElement);
// }