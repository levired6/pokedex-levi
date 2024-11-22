let pokemonRepository = (function () {
//array list for pokemon
let pokemonList = [
  {
    id: 1,
    name: "Bulbasaur",
    height: ".7m",
    types: ["Grass", "Poison"],
    hp: 45,
    attack: 49,
    defense: 49,
    speed: 45,
    spAttack: 65,
    spDefense: 65,
  },
  {
    id: 2,
    name: "Ivysaur",
    height: "1m",
    types: ["Grass", "Poison"],
    hp: 60,
    attack: 62,
    defense: 63,
    speed: 60,
    spAttack: 80,
    spDefense: 80,
  },
  {
    id: 3,
    name: "Venusaur",
    height: "2m",
    types: ["Grass", "Poison"],
    hp: 80,
    attack: 82,
    defense: 83,
    speed: 80,
    spAttack: 100,
    spDefense: 100,
  },
  {
    id: 4,
    name: "Charmander",
    height: ".6m",
    types: ["Fire"],
    hp: 39,
    attack: 52,
    defense: 43,
    speed: 65,
    spAttack: 60,
    spDefense: 50,
  },
  {
    id: 5,
    name: "Charmeleon",
    height: "1.1m",
    types: ["Fire"],
    hp: 58,
    attack: 64,
    defense: 58,
    speed: 80,
    spAttack: 80,
    spDefense: 65,
  },
  {
    id: 6,
    name: "Charizard",
    height: "1.7m",
    types: ["Fire", "Flying"],
    hp: 78,
    attack: 84,
    defense: 78,
    speed: 100,
    spAttack: 109,
    spDefense: 85,
  },
  {
    id: 7,
    name: "Squirtle",
    height: ".5m",
    types: ["Water"],
    hp: 44,
    attack: 48,
    defense: 65,
    speed: 43,
    spAttack: 50,
    spDefense: 64,
  },
];

function getAll() {
  return pokemonList;
}

function add(addPokemon) {
  let keysNeeded = ['name','height','types'];
  if (
    typeof addPokemon === 'object' &&
    Object.keys(addPokemon).length === keysNeeded.length &&
    addPokemon !== null &&
    addPokemon.name !== undefined &&
    addPokemon.height !== undefined &&
    addPokemon.type !== undefined
) {
    pokemonList.push(addPokemon);
  } else {
    console.error ('Please provide an object with name, height and type of properties')
  }
}

function addListenerToButton(button, pokemon) {
  button.addEventListener('click', function () {
    showDetails(pokemon);
  });
}
function addListItem(pokemon) {
  let pokemonList= document.querySelector('.pokemon-list');
  let listItemPokemon = document.createElement('li');
  let button = document.createElement('button');

  button.innerText = pokemon.name;
  button.classList.add('button-class');
  addListenerToButton(button, pokemon);
  listItemPokemon.appendChild(button);
  pokemonList.appendChild(listItemPokemon);
}

function showDetails(pokemon) {
  console.log(pokemon);
}

return {
  getAll: getAll,
  add: add,
  addListItem: addListItem,
  showDetails: showDetails
}
})();

function findName(nameList, nameSearched) {
  return nameList.filter((addpokemon) =>
    addPokemon.name.toLowerCase().includes(nameSearched.toLowerCase())
  );
}
pokemonRepository.getAll().forEach(pokemonRepository.addListItem);
document.body.style.backgroundImage = "url('images/background.jpg')";
