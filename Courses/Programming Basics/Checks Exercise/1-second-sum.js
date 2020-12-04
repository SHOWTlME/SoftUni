function seconds(time1, time2, time3){
    time1 = Number(time1);
    time2 = Number(time2);
    time3 = Number(time3);

    let totalTime = time1 + time2 + time3;
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;
    
    console.log(seconds);
    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    }else {
        console.log(`${minutes}:${seconds}`);
    }
    

 }

seconds("22", "7", "34");
