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
  const initialValue = 0;
  //1st array w/just scores
  const scoresArray = moviesArray.map((movies) => movies.score);
  //2nd total scores
  const totalScoresValue = scoresArray.reduce((a, b) => a + b, initialValue);
  // find avg w/2 dec points
  return (totalScoresValue / scoresArray.length).toFixed(2);
}

console.log(` `);
console.log(`<----------------- Iteration 3  ------------------>`);
console.log(`The average of the movies array is ${scoresAverage(movies)}`);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const initialValue = 0;

  const dramaMovies = moviesArray.filter((movies) =>
    movies.genre.includes("Drama")
  );
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
function orderByYear(moviesArray) {
  // 1st -> spread operator to clone original array so original array doesn´t mutate it if we change the new array
  const cloneMovieArray = [...moviesArray];
  // 2nd -> concatenate 2 array.sort() methods -> 1st to classify movies by their titles from A to Z (aaa, aab, abb, abc, acb...) and the second sort to arrange them in ascending order by year
  return cloneMovieArray
    .sort((a, b) => {
      if (a.title < b.title) return -1;
    })
    .sort((a, b) => a.year - b.year);
}

console.log(` `);
console.log(`<----------------- Iteration 5  ------------------>`);
console.log(`Order movies array by ascending year --> `, orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  // 1st -> spread operator to clone original array so it doesn´t mutate it if we change the new array
  const cloneMovieArray = [...moviesArray];
  // 2nd -> array.sort() method to classify movies titles from A to Z (aaa, aab, abb, abc, acb...)
  const moviesByAlphaOrder = cloneMovieArray.sort((movieA, movieB) =>
    // string.localeCompare() method returns a number indicating whether a reference string comes before, or after, or is the same as the given string in sort order.
    movieA.title.localeCompare(movieB.title)
  );
  // 3rd -> Create an array w/just the titles
  const moviesTitles = moviesByAlphaOrder.map((movies) => movies.title);
  // 4th -> array.slice() method to create a new array w/just the first 20 elements
  return moviesTitles.slice(0, 20);
}

// console.log(` `);
// console.log(`<----------------- Iteration 6  ------------------>`);
// console.log(
//   `Order movies alphabetically by title --> `,
//   orderAlphabetically(movies)
// );

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  /* 1st -> Deep cloning original array so that "duration" sub values are disconnected from original array. First, I
  stringify [] and parse it right after.This method allows deep cloning w/out knowing its structure */
  const cloneMoviesArray = JSON.parse(JSON.stringify(moviesArray));
  // 2nd -> Replace cloneMovieArray.duration from "#h #min" to "#" (minutes)
  return cloneMoviesArray.map((movie) => {
    // Regex exp to remove letters from value
    movie.duration = movie.duration.replace(/\D+/gi, "");
    movie.duration =
      // string.charAt to target the hours value & slice(1) to select the minutes value
      movie.duration.charAt(0) * 60 + Number(movie.duration.slice(1));

    return movie;
  });
}

// console.log(` `);
// console.log(`<----------------- Iteration 7  ------------------>`);
// console.log(
//   `Convert duration from hours to minutes --> `,
//   turnHoursToMinutes(movies)
// );

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
    return null;
  } else {
    const moviesByYear = orderByYear(moviesArray);

    // control variables
    let lastCheckedYear = 0;
    let highestAvg = 0;
    let bestYear = 0;

    for (i = 0; i < moviesByYear.length; i++) {
      if (moviesByYear[i].year > lastCheckedYear) {
        // Filter by the year we are at
        const justThisYearMovies = moviesByYear.filter((value) => {
          if (value.year === moviesByYear[i].year) {
            return true;
          } else {
            return false;
          }
        });
        // calculate average of the year and save rate and year
        if (scoresAverage(justThisYearMovies) > highestAvg) {
          highestAvg = scoresAverage(justThisYearMovies);
          bestYear = moviesByYear[i].year;
        }
        lastCheckedYear = moviesByYear[i].year;
      }
    }
    return `The best year was ${bestYear} with an average rate of ${highestAvg}`;
  }
}
console.log(` `);
console.log(`<----------------- Iteration 8  ------------------>`);
console.log(bestYearAvg(movies));
console.log(` `);
