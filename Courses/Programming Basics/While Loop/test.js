function oldbooks(arr){
    let index = 0;
    let favbook = arr[index];
    index++;
    let books = arr[index];
    index++;
    let sum = 0;

    while (books !== "No More Books"){
        if (books === favbook){
            console.log(`You checked ${sum} books and found it.`);
        }
        books = arr[index];
        index++;
        sum++;
    }
    if (books !== favbook){
        console.log(`The book you search is not here!`)
        console.log(`You checked ${sum} books.`)
    }
}
oldbooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"]);
