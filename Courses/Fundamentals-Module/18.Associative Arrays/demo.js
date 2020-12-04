function solve(input) {

    let addressbook = {};
    
    for (let line of input) {
    
    let [name, address] = line.split(':');
    addressbook[name] = address;
    
    }
    let sorted = Object.entries(addressbook);
    
    sorted.sort((a, b) => a[0].localeCompare(b[0]));
    console.log(sorted);
    
}
solve(['Tim:Doe Crossing',
 'Bill:Nelson Place',
 'Peter:Carlyle Ave',
 'Bill:Ornery Rd']);