function matrix(n) {

    for (let i = 0; i < n; i++) {
        let matrixNewLine = '';
        for (let j = 0; j < n; j++) {
            matrixNewLine += n + " "
        }
        console.log(matrixNewLine);
    }

}
matrix(3)
