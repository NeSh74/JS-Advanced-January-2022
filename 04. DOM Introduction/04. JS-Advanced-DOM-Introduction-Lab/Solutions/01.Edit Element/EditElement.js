function editElement(element, match, replacer) {
    // TODO
    // while (element.textContent.includes(match)) {
    // element.textContent = element.textContent.replace(match, replacer);
    // }
    let pattern = new RegExp(match, 'g');
    element.textContent = element.textContent.replace(pattern, replacer);
}