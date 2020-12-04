function songs(inputarr) {

    class Song {
        constructor(typeList,name,time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
        favouriteSongs() {
            console.log(this.name);
        }
    }
    let allPlaylist = 'all'
    let numberOfSongs = inputarr.shift();
    let listType = inputarr.pop();
    for(let i = 0; i < numberOfSongs; i++) {
        let tokens = inputarr[i].split('_');
        let song = new Song(tokens[0],tokens[1],tokens[2])
        if (tokens[0] === listType || allPlaylist === listType) {
            song.favouriteSongs()
        }
    }

}
songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']);