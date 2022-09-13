const movies = require("./data.js");
console.log(movies);

// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(moviesArray) {
  // array.map() method to iterate [] & create a new [] w/just the directors
  return moviesArray.map((movies) => movies.director);
}
console.log(` `);
console.log(`<---------------- Iteration 1 -------------------------->`);
console.log(`The array of all directors is ${getAllDirectors(movies)}`);

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function removeDuplicateDirectors(moviesArray) {
  // array.map() method to iterate [] & create a new [] w/just the directors
  const allDirectors = moviesArray.map((movies) => movies.director);
  const cleanListDirectors = allDirectors.filter((director, index) => {
    return allDirectors.indexOf(director) === index;
  });
  return cleanListDirectors;
}

console.log(` `);
console.log(`<--------------- Iteration 1.1 Bonus ------------------>`);
console.log(
  `The array of all directors w/out duplicates is ${removeDuplicateDirectors(
    movies
  )}`
);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray, director) {
  // array.filter() method to create new array w/just films of a certain director
  return moviesArray.filter(
    (movies) => movies.director === director && movies.genre.includes("Drama")
  );
}

console.log(` `);
console.log(`<----------------- Iteration 2  ------------------>`);
console.log(
  `This is Steven Spielberg's drama movies array --->`,
  howManyMovies(movies, "Steven Spielberg")
);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  //1st array w/just scores
  const scoresArray = moviesArray.map((movies) => movies.score);
  //2nd total scores
  const totalScoresValue = scoresArray.reduce((a, b) => a + b);
  // find avg w/2 dec points
  return (totalScoresValue / scoresArray.length).toFixed(2);
}

console.log(` `);
console.log(`<----------------- Iteration 3  ------------------>`);
console.log(`The average of the movies array is ${scoresAverage(movies)}`);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray, Drama) {
  const initialValue = 0;

  const dramaMovies = moviesArray.filter((movies) =>
    movies.genre.includes("Drama")
  );
  // 2nd -> array.reduce() method to reduce down [] to just one total score & math.round() to return total of a director´s movies score w/only 2 decimals,
  return (
    dramaMovies.reduce((total, next) => total + next.score, initialValue) /
    dramaMovies.length
  ).toFixed(2);
}

console.log(` `);
console.log(`<----------------- Iteration 4  ------------------>`);
console.log(
  `The average of the drama movies array is ${dramaMoviesScore(
    movies,
    "Drama"
  )}`
);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
