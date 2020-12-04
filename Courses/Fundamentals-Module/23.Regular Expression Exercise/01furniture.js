function furniture(arr) {
    let result = 'Bought furniture:' + '\n';
    let sum = 0;

    for (const line of arr) {
        let pattern = />>(?<name>[A-Za-z]+)<<(?<prices>[\d]+(\.[\d]+)?)!(?<quantity>[\d]+)/g;
        let match = pattern.exec(line);

        if (match) {
            result += match.groups.name + '\n';
            sum += Number(match.groups.prices) * Number(match.groups.quantity);
        }
    }

    result += `Total money spend: ${sum.toFixed(2)}`
    console.log(result);
}
furniture(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase']);