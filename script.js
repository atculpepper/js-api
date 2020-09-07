// fetch('https://ghibliapi.herokuapp.com/films')
//   .then((response) => {
//     return (data = response.json());
//   })
//   .then((data) => {
//     console.log(data);
//     for (let film of data) {
//       console.log(film.title);
//     }
//   })

//   .catch((err) => {
//     console.log(err);
//   });

const app = document.getElementById('root');
console.log(app);
const logo = document.createElement('img');
logo.src = 'ghibli_logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);
