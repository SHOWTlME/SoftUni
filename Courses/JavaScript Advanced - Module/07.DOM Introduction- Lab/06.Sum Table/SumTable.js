function sumTable() {
    const table = document.querySelectorAll('table tr');
    let sum = 0;
    for(let i = 1; i < table.length - 1; i++) {
        const currentRow = table[i].children;
        sum += Number(currentRow[currentRow.length - 1].textContent);
        
    }
    document.getElementById('sum').textContent = sum;
}