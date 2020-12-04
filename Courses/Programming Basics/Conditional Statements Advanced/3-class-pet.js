function animal(arg){
    type = arg;
    switch(type){
        case "dog": console.log("mammal");break;
        case "crocodile":
        case "tortoise":
        case "snake": console.log("reptile");break;
        default : console.log("unknown");
    }
}
        animal("");