function aquarium(length, width, height, percent) {

    length = Number(length);
    width = Number(width);
    height = Number(height);
    percent = Number(percent);

    // Обем на аквариума
    let volume = length * width * height;

    // литри вода 
    let waterLiters = volume * 0.001;

    // Процент
    let perceent = percent * 0.01;

    // Литрите които реално ще трябват
    let litersNeeded = waterLiters * (1 - perceent);

    console.log(litersNeeded);
}
aquarium("105",
    "77",
    "89",
    "18.5")