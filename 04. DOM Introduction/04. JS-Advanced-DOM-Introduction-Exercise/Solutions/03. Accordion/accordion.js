function toggle() {
    // const button = document.querySelector(".button");
    // const textDIV = document.getElementById("extra");

    // button.textContent = button.textContent == "More" ? "Less" : "More";
    // textDIV.style.display = textDIV.style.display == "none" ||
    // textDIV.style.display == "" ?
    // textDIV.style.display = "block" : textDIV.style.display = "none";
    // console.log(button);
    let button = document.querySelector('.button');
    let text = document.querySelector('#extra');
    if (button.textContent === 'More') {
        button.textContent = 'Less';
        text.style.display = 'block';
    } else {
        button.textContent = 'More';
        text.style.display = 'none';
    }
}