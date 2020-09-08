const app = document.getElementById('root');
console.log(app);
const logo = document.createElement('img');
logo.src = 'LOTR3.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

const token = 't9PKHG9COdTM_N1qMGXI';
const url = 'https://the-one-api.dev/v2/character?sort=name:asc';
const bearer = 'Bearer ' + token;

fetch(url, {
  method: 'GET',
  withCredentials: true,
  headers: {
    Authorization: bearer,
  },
})
  .then((response) => {
    return (data = response.json());
  })
  .then((data) => {
    console.log(data);
    array = data.docs;
    console.log(array);
    array.forEach((character) => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = character.name;

      const ul = document.createElement('ul');
      ul.setAttribute('class', 'ul');
      const li = document.createElement('li');
      li.setAttribute('class', 'li');
      // character.spouse = character.description.substring(0, 300);
      if (!character.spouse) {
        li.textContent = null;
      } else {
        li.textContent = `Spouse: ${character.spouse}`;
      }

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(ul);
      card.appendChild(li);
    });
  })
  //   for (let character of data) {
  //     const card = document.createElement('div');
  //     card.setAttribute('class', 'card');

  //     const h1 = document.createElement('h1');
  //     h1.textContent = character.name;

  //     const ul = document.createElement('ul');
  //     const li = document.createElement('li');
  //     character.spouse = character.description.substring(0, 300);
  //     li.textContent = `Spouse: ${character.spouse}...`;

  //     container.appendChild(card);
  //     card.appendChild(h1);
  //     card.appendChild(ul);
  //     card.appendChild(li);
  //     console.log(character.name);
  //     console.log(character.spouse);
  //   }
  // })

  .catch((err) => {
    console.log(err);
  });
