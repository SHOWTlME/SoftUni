function extract(content) {
    const myParagraph = document.getElementById(content);
    const myPattern = /\(([A-Za-z ]+)\)/g;
    let myResult = '';
    let myMatch = myPattern.exec(myParagraph.textContent);

    while (myMatch !== null) {
        myResult += myMatch[1] + ';' + ' ';
        myMatch = myPattern.exec(myParagraph.textContent);
    }

   return myResult;
}