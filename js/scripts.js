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
  /*listPokemon.classList.add("list-group-item");*/
  button.innerText = pokemon.name;
  button.classList.add("btn-md", "btn-primary");
  button.style.backgroundImage = "url('images/leather-background.jpg')";
  button.addEventListener('click',function (){
    showDetails(pokemon);
  });
  listPokemon.appendChild(button);
  pokemonList.appendChild(listPokemon);
  button.addEventListener("click", function(event){
      pokemonRepository.showDetails(pokemon)
  })
}

/* start of modal javascript */
function showModal(title, text, img) {
  let modalTitle = document.querySelector('#pokemonModalLabel');
  let modalBody = document.querySelector('.modal-body');
  let pokemonHeight = document.querySelector("#pokemonHeight");
            let pokemonImage = document.querySelector("#pokemonImage");
      
            modalTitle.innerText = title;
            pokemonHeight.innerText = text;
            pokemonImage.setAttribute('src', img);
          }

function showDetails(pokemon) {
  loadDetails(pokemon).then(function () {
    showModal( pokemon.name,
      "Height: " + pokemon.height,
      pokemon.imageURL);
      $('#pokemonModal').modal('show');
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

   // Get references to search bar input and Pokemon list
   let searchInput = document.querySelector('.form-control[type="search"]');
   let pokemonList = document.querySelector('.pokemon-list');
 
   // Add event listener to the input field's 'input' event
   searchInput.addEventListener('input', function(event) { 
     let searchTerm = searchInput.value.toLowerCase(); 
 
     if (searchTerm.trim() === '') { 
       // If search term is empty, display all Pokemon
       pokemonList.innerHTML = ''; 
       pokemonRepository.getAll().forEach(function(pokemon) {
         pokemonRepository.addListItem(pokemon);
       });
     } else {
       // Filter the list based on the search term
       let filteredList = pokemonRepository.getAll().filter(function(pokemon) {
         return pokemon.name.toLowerCase().includes(searchTerm);
       });
       pokemonList.innerHTML = ''; 
       filteredList.forEach(function(pokemon) {
         pokemonRepository.addListItem(pokemon);
       });
     }
   });
 });
document.body.style.backgroundImage = "url('images/background.jpg')";
