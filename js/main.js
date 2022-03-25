// Learn Arrays Part_22
// *? Project-07: Movies Array

// All movies in 2019 with rating > 4   => filter()
// Sort them by their Rating    => sort()
// Descending order     => reverse()
// Pick their title     => map()

let movies = [
    { title: "a", year: 2019, rating: 4.7 },
    { title: "b", year: 2019, rating: 3.7 },
    { title: "c", year: 2018, rating: 4.8 },
    { title: "d", year: 2019, rating: 4.9 }
];


let bestMovies19 = movies
    .filter(m => m.year > 2018 && m.rating > 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title)


console.log(bestMovies19);

