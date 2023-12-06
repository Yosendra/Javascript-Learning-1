
// Show only properties that contain string
function showProperties(movie) {
    for (const key in movie)
        if (typeof movie[key] === 'string') 
            console.log(key, movie[key]);
}

const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
};

showProperties(movie);