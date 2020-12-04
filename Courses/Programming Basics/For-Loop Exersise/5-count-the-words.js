function solve(message){
    let words = 0;

    for (let i = 0; i < message.length; i++){
        let symbol = message[i];
        if (symbol === " "){
            words++
        }
    }
    words++

    if (words <= 10){
        console.log(`The message was send successfully!`)
    }else{
        console.log(`The message is too long to be send! Has 11 words.`)
    }
    
}
solve("This message has ten words and you can send it!");