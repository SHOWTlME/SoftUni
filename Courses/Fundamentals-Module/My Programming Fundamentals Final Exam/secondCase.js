function secondCase(arr) {
    let messagesCount = Number(arr.shift());

    for (let i = 0; i < messagesCount; i++) {
        let pattern = /\![A-Z][a-z]{2,}\!\:\[[A-Za-z]{8,}\]/g;
        let currentElement = arr[i];
        let match = currentElement.match(pattern);
        if (match) {
            let secondPattern = /\[[A-Za-z]+\]/g;
            let holder = '';
            let message = currentElement.match(secondPattern);
            let newCurrent = message[0];
            let thidPattern = /![A-Z][a-z]{3,}!/g;
            let status = currentElement.match(thidPattern);
            let fourthPattern = /\!/g;

            status = status[0].replace(fourthPattern, '');
            for (let i = 1; i < newCurrent.length - 1; i++) {
                let chars = newCurrent.charCodeAt(i);
                holder += chars + ' ';

            }
            console.log(`${status}: ${holder}`);
        } else {
            console.log('The message is invalid');
        }
    }
}
secondCase([
    '3',
    '!play!:[TheNewSong]',
    '!Ride!:[Bike]',
    '!Watch!:[LordofTheRings]'
  ]
  );