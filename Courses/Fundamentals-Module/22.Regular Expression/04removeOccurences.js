function removeOccurences(word,text) {
    let pattern = /[i][c][e]/g
    let result = text.match(pattern);
    
    console.log(result.join(''));
}
removeOccurences('ice','kicegiciceeb');