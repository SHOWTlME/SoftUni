function town(arr) {
    let obj = {};

    for (const element of arr) {
        let city = element.split(' | ');
        obj.town = city[0];
        obj.latitude = Number(city[1]).toFixed(2);
        obj.longitude = Number(city[2]).toFixed(2);
        console.log(obj);
    }
}

town(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);