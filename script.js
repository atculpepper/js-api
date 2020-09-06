fetch('https://ghibliapi.herokuapp.com/films')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    // let data = JSON.parse(data);
  })
  .catch((err) => {
    console.log(err);
  });
