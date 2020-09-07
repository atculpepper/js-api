const app = document.getElementById('root');
console.log(app);
const logo = document.createElement('img');
logo.src = 'ghibli_logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

fetch('https://ghibliapi.herokuapp.com/films')
  .then((response) => {
    return (data = response.json());
  })
  .then((data) => {
    // console.log(data);
    for (let film of data) {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = film.title;

      const p = document.createElement('p');
      film.description = film.description.substring(0, 300);
      p.textContent = `${film.description}...`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
      console.log(film.title);
      console.log(film.description);
    }
  })

  .catch((err) => {
    console.log(err);
  });
