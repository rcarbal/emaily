// wRITE A FUNCTION to ge JSON
// Make an ajax requets 
http://rallycoding.herokuapp.com/api/music_albums

// function fretchAlbums(){
//     // Fetch returna promise
//     fetch('http://rallycoding.herokuapp.com/api/music_albums')
//         .then(res => res.json())
//         .then(json => console.log(json));
// }

// fretchAlbums();

// async function fretchAlbums() {
//     // Fetch returna promise
//     const res = await fetch('http://rallycoding.herokuapp.com/api/music_albums')
//     const json = await res.json();
//     console.log(json);
// }

const fretchAlbums = async () => {
    // Fetch returna promise
    const res = await fetch('http://rallycoding.herokuapp.com/api/music_albums')
    const json = await res.json();
    console.log(json);
}

fretchAlbums();