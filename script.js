fetch('https://ghibliapi.herokuapp.com/films')
  .then((response) => {
    return (data = response.json());
  })
  .then((data) => {
    console.log(data);
    for (let film of data) {
      console.log(film.title);
    }
  })

  //  (let film of data) {
  //   console.log(film.title);
  // }

  .catch((err) => {
    console.log(err);
  });

// let films = JSON.parse(films);

// data.forEach((movie) => {
//   console.log(movie.title);
// });
