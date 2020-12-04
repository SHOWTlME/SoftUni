function summerOutfit(arg1, arg2) {
    let degrees = Number(arg1);
    let time = arg2;

    if (10 <= degrees && degrees <= 18) {
        if (time === "Morning") {
            Outfit = "Sweatshirt";
            Shoes = "Sneakers";
        } else if (time === "Afternoon" || time === "Evening") {
            Outfit = "Shirt";
            Shoes = "Moccasins";
        }
    } else if (18 < degrees && degrees <= 24) {

        if (time === "Morning") {
            Outfit = "Shirt";
            Shoes = "Moccasins";
        }
        else if (time === "Afternoon") {
            Outfit = "T-Shirt";
            Shoes = "Sandals";
        } else if (time === "Evening") {
            Outfit = "Shirt";
            Shoes = "Moccasins";
        }
    } else if (degrees >= 25) {
        if (time === "Morning") {
            Outfit = "T-Shirt";
            Shoes = "Sandals";
        }
        else if (time === "Afternoon") {
            Outfit = "Swim Suit";
            Shoes = "Barefoot";
        }
        else if (time === "Evening") {
            Outfit = "Shirt";
            Shoes = "Moccasins";
        }
    } console.log(`It's ${degrees} degrees, get your ${Outfit} and ${Shoes}.`);
} 
summerOutfit("22", "Afternoon");