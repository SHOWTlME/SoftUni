function objectFactory() {
  const library = {
    print: function () {
      console.log(`${this.name} is printing a page`);
    },
    scan: function () {
      console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
      console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
  };
  const orders = [
    {
      template: { name: 'ACME Printer' },
      parts: ['print']
    },
    {
      template: { name: 'Initech Scanner' },
      parts: ['scan']
    },
    {
      template: { name: 'ComTron Copier' },
      parts: ['scan', 'print']
    },
    {
      template: { name: 'BoomBox Stereo' },
      parts: ['play']
    },
  ];
  let newOrders = [];
  // creating a copy of the template
  for (let i = 0; i < orders.length; i++) {
    const currentTemplate = orders[i].template;
    let templateCopy = Object.assign({}, currentTemplate);
    newOrders.push(templateCopy);
  }
  for (let j = 0; j < orders.length; j++) {
    const currentParts = orders[j].parts;
    for (let z = j; z < newOrders.length; z++) {
      let currentOrder = newOrders[z];
      if(currentParts.length > 1) {
        currentOrder[currentParts[0]] = library[currentParts[0]];
        currentOrder[currentParts[1]] = library[currentParts[1]];
      }else {
        currentOrder[currentParts[0]] = library[currentParts[0]];
      }
      break;
    }
  }
  return newOrders;

}

console.log(objectFactory());