function vacation(arr) {
    let moneyNeeded = Number(arr [0]);
    let availableMoney = Number(arr [1]);
    let command = arr[2];
    let currentMoney = Number(arr[3]);
    let index = 2;
    let days = 0;
    while (availableMoney <= moneyNeeded){
        if (days = 5){
            console.log(`You can't save the money.`)
            console.log(`${days}`);
            break;
        };
        if (command === "spend"){
            availableMoney -= currentMoney;
            days++;
        }if(command === "save"){ 
            availableMoney += currentMoney;
            days++;
        };
        if (availableMoney < 0){
            availableMoney = 0;
        };
        if (availableMoney >= moneyNeeded){
            console.log(`You saved the money for ${days } days.`);
        };
        command = arr[index];
        availableMoney = Number(arr[index + 1]);
        index += 2;
    }
}
vacation([2000,
    1000,
    spend
    1200
    save
    2000])
