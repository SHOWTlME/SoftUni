function softUniBar(arr) {
  let sum = 0;

  for (const line of arr) {
    let pattern = /%(?<name>[A-Z][a-z]+)%([^\|\$%\.]+)?<(?<product>[\w]+)>([^\|\$%\.]+)?\|(?<count>[0-9]+)\|([^\|\$%\.\d]+)?(?<price>[0-9]+(\.[0-9]+)?)\$/g;
    let match = pattern.exec(line);

    if (match) {
      let name = match.groups.name;
      let product = match.groups.product;
      let price = Number(match.groups.price) * Number(match.groups.count);

      sum += Number(match.groups.price) * Number(match.groups.count);
      console.log(`${name}: ${product} - ${price.toFixed(2)}`);
    }
  }
  console.log(`Total income: ${sum.toFixed(2)}`);
}
softUniBar([
'  %InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift'
]);