function scholarship(income, averageGrade, minimalSalary) {
    income = Number(income);
    averageGrade = Number(averageGrade);
    minimalSalary = Number(minimalSalary);
    let diff = 35/100 * minimalSalary;
    if(income < minimalSalary){
        if (4.5 < averageGrade){         
        } console.log(`You cannot get a scholarship!`);
        console.log(`You get a Social scholarship ${diff} BGN`); 
    } 
}

scholarship("480.00",
    "4.60",
    "450.00");