function editElement(element, match, replacer) {
    const text = element.textContent;
    const regExp = new RegExp(match,'g');
    let replace = text.replace(regExp, replacer);
    
    element.textContent = replace;
}