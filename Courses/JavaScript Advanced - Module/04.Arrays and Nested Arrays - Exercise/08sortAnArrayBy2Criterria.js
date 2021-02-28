function sortAnArray(arr) {

    const twoCriteriaSort = (cur, next) =>
        cur.length - next.length || cur.localeCompare(next);
    arr.sort(twoCriteriaSort);

    return arr.join('\n')
}

console.log(sortAnArray(['alpha',
    'beta',
    'gamma']));