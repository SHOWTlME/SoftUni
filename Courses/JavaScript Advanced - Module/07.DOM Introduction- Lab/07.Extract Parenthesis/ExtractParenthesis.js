function extract(content) {
    let text = document.getElementById(content).textContent;
    const regExp = /\((.+?)\)/g;
    const result = [];
    
    let match = regExp.exec(text);
    while (match !== null) {
        result.push(match[1]);
        match = regExp.exec(text);
    }
    
    return result.join('; ');
}