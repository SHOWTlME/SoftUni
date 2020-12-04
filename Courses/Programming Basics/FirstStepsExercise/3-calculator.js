function calculator(deposit, timeDeposit, yearDepositPercent) {
    deposit = Number(deposit);
    timeDeposit = Number(timeDeposit);
    yearDepositPercent = Number(yearDepositPercent);

    //1. изчисляваме натрупаната лихва: 200 * 5.7% = 11.4лв.
    let percent = deposit * yearDepositPercent / 100;

    //2. изчисляваме лихвата за 1 месец: 11.4лв./12 месеца = 0.95лв
    let percentPerMonth = percent / 12;

    //3. общата сума е 200лв депозит + (3 (срок на депозита) * 0.95 лв)
    let res = deposit + (timeDeposit * percentPerMonth);

    console.log(res);
}

calculator("2350",
    "6",
    "7")
