function softUniReception(arr) {
    let [eff1,eff2,eff3,students] = arr.map(Number);
    let efficiency = eff1 + eff2 + eff3;
    let hour = 0;

    while(students>0) {
        hour++;
        if (hour % 4 !== 0) {
            students -= efficiency;
        }
    }
    console.log(`Time needed: ${hour}h.`);
}
softUniReception(['5','6','4','20']);
softUniReception(['1','2','3','45']);
softUniReception(['3','2','5','40']);
