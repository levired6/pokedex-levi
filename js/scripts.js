/* pokemon array with each object */
let pokemonRepository = (function() {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

function add(pokemon) {
  if (
    typeof pokemon === "object" &&
    "name" in pokemon &&
    "detailsURL" in pokemon
  ) {
    pokemonList.push(pokemon);
  } else {
    console.log("Pokemon is not correct");
  }
}

function getAll() {
  return pokemonList;
}

function addListItem(pokemon) {
  let pokemonList = document.querySelector('.pokemon-list');
  let listPokemon = document.createElement("li");
  let button = document.createElement("button");
  button.innerText = pokemon.name;
  button.classList.add("button-class");
  button.addEventListener('click',function (){
    showDetails(pokemon);
  });
  listPokemon.appendChild(button);
  pokemonList.appendChild(listPokemon);
}

/* start of modal javascript */
function showModal(title, text, img) {
  let modalContainer = document.querySelector('#modal-container');
  modalContainer.innerText = '';  //clear previous content

  let modal = document.createElement('div');
  modal.classList.add('modal');

  //Add the new modal content
  let closeButtonElement = document.createElement('button');
  closeButtonElement.classList.add('modal-close');
  closeButtonElement.innerText = 'Close';
  closeButtonElement.addEventListener('click', hideModal);

  let pokemonName = document.createElement('h1');
    pokemonName.innerText = title;

  let pokemonHeight = document.createElement('p');
    pokemonHeight.innerText = text;

  let pokemonImage = document.createElement('img');
  pokemonImage.setAttribute('src', img);
  pokemonImage.setAttribute('width', '100%');
  pokemonImage.setAttribute('height', '100%');

  modal.appendChild(closeButtonElement);
  modal.appendChild(pokemonName);
  modal.appendChild(pokemonHeight);
  modal.appendChild(pokemonImage);
  modalContainer.appendChild(modal);

  modalContainer.classList.add('is-visible');

  modalContainer.addEventListener('click', (e) => {
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });
}
function hideModal() {
  let modalContainer = document.querySelector('#modal-container');
  modalContainer.classList.remove('is-visible');
}

function showDetails(pokemon) {
  loadDetails(pokemon).then(function () {
    showModal( pokemon.name,
      "Height: " + pokemon.height,
      pokemon.imageURL);
  });
}

function loadList() {
  return fetch(apiUrl).then(function(response) {
    return response.json();
  }).then(function(json) {
    json.results.forEach(function (item) {
      let pokemon = {
        name: item.name,
        detailsURL: item.url
      };
      add(pokemon);
    });
  }).catch(function (e) {
    console.error(e);
  })
}
function loadDetails(item) {
  let url = item.detailsURL;
  return fetch(url).then(function (response) {
    return response.json();
  }).then(function (details) {
    item.imageURL = details.sprites.front_default;
    item.height= details.height;
    item.types = details.types;
  }).catch(function (e) {
    console.error(e)
  });
}

return {
  getAll: getAll,
  add: add,
  addListItem: addListItem,
  loadList: loadList,
  loadDetails: loadDetails,
  showDetails: showDetails
};
})();

// forEach method to print out details of pokemon
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
document.body.style.backgroundImage = "url('images/background.jpg')";