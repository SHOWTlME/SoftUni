function neighbours(input) {
    //създаваме нов Мап
    let neighbourhood = new Map();
    // взимаме първият елемент който е стринг от адреси и го сплитваме
    let addresses = input.shift().split(', ');
    // итерираме през адресите и всеки един го вкарваме в мапа с стойност празен масив
    for (const address of addresses) {
        neighbourhood.set(address, [0]);
    }
   // итерираме през останалите елементи на масива
   for (const line of input) {
       let address = line.split(' - ');
       if (neighbourhood.has(address[0])) {
          let token = neighbourhood.get(address[0])
           token.push(address[1]);
           token[0]++;
       }
   }
   // създаваме нов масив който го сортираме по живущите
//    let save = '';
//    let newArr = Array.from(neighbourhood);
//    for (const element of newArr) {
//        let street = element.shift();
//        save = save + " " + street;
//    }
  for (const element of addresses) {
      let something = neighbourhood.get(element).join(' ');
      neighbourhood.set(element, something)
  }
  let newArr = Array.from(neighbourhood);
  console.log(newArr);
}
neighbours(['Abbey Street, Herald Street, Bright Mews',
'Bright Mews - Garry',
'Bright Mews - Andrea',
'Invalid Street - Tommy',
'Abbey Street - Billy']);