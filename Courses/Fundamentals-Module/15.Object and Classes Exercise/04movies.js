function movies(arr) {
    let newArr = [];

    for (const element of arr) {
        if (element.includes('addMovie')) {
            let currentMovie = {};
            let name = element.substring(9)

            currentMovie.name = name
            newArr.push(currentMovie);
        } else if (element.includes('directedBy')) {
            let [movie, director] = element.split(' directedBy ');
            let myMovie = newArr.find(x => x.name == movie);

            if (myMovie) {
                myMovie.director = director;
            }
        } else {
            let [movie, date] = element.split(' onDate ');
            let myMovie = newArr.find(x => x.name == movie);

            if (myMovie) {
                myMovie.date = date;
            }
        }
    }
    
    newArr.forEach(movie => {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    });
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);