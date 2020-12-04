function solve(arg1,arg2){
    let breed = arg1;
    let gender = arg2;
    let result = 0;

    switch(breed){
        case "British Shorthair": if (gender === "m"){
            result = 13 * 12 / 6;
        }else{
            result = 14 * 12 / 6;
        };break;
        case "Siamese": if(gender === "m"){
            result = 15 * 12 / 6;
        }else {
            result = 16 * 12 / 6;
        };break;
        case "Persian": if(gender === "m"){
            result = 14 * 12 / 6;
        }else {
            result = 15 * 12 / 6;
        };break;
        case "Ragdoll": if(gender === "m"){
            result = 16 * 12 / 6;
        }else {
            result = 17 * 12 / 6;
        };break;
        case "American Shorthair": if(gender === "m"){
            result = 12 * 12 / 6;
        }else {
            result = 13 * 12 / 6;
        };break;
        case "Siberian": if(gender === "m"){
            result = 11 * 12 / 6;
        }else {
            result = 12 * 12 / 6;
        }break;
        default:console.log(`${breed} is invalid cat!`);break;
    }
    if (breed === "British Shorthair" || breed === "Siamese" || breed === "Persian" || breed === "Ragdoll" || breed === "American Shorthair" || breed === "Siberian"){
    console.log(`${Math.floor(result)} cat months`);
    }
}

solve("Tom","m");