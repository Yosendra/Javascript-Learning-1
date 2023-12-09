
const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'd', year: 2017, rating: 4.5 },
]

// All the movies in 2018 with rating > 4
// Sort them by their rating
// Descending order
// Pick their title

// Result must be 
// 'a'
// 'b'

let result = movies.filter( m => m.year === 2018 && m.rating > 4)
                    .sort((m1, m2) => m2.rating - m1.rating)
                    .reverse()
                    .map( m => m.title )

console.log(result);
