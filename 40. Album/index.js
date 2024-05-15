//40. Album: Write a function called make_album() that builds a Object describing a music album. 
// Creating a function and Object
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Calling three function and creating 3 variables  with different value
var album1 = make_album("Saboor", "Album title 1");
var album2 = make_album("Ammar", "Album title 2", 5);
var album3 = make_album("Raza", "Album title 3");
//print values of our object creating my function
console.log(album1);
console.log(album2);
console.log(album3);
