function bonusPoints(points1, points2, points3, points4){
    score = Number(points1);
    bonus = 0.0;

      if (score < 100){
        bonus = 5;  
    } else if (score > 1000){
        bonus = score * 10/100;
    } else if (score > 100){
        bonus = score * 20/100;
    } if (score % 2 == 0) {
        bonus += 1;
    } else if (score % 10 == 5){
        bonus +=2;
    } console.log(bonus);
      console.log(bonus + score);

}
bonusPoints("20", "175", "2703", "15875");