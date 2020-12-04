function minerTask(arr) {
    let resources = {};

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            let resource = arr[i];
            let quantity = Number(arr[i + 1]);
            if (resources.hasOwnProperty(resource)) {
                resources[resource]+= quantity;
            }else if(!resources.hasOwnProperty(resource)) {
                resources[resource] = quantity;
            }
        }
    }

    for(let element in resources) {
        console.log(`${element} -> ${resources[element]}`);
    }
}
minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]);