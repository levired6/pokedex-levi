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
    // Iterate over the Pokémon list
    for (let i = 0; i < pokemonList.length; i++){
    let pokemon = pokemonList[i];
    let heightInMeters = parseFloat(pokemon.height.slice(0, -1));
    document.write(pokemon.name + " (height" + pokemon.height + ")");
    if (heightInMeters > 1.7) {
    document.write(" - Wow, that's big!<br>");
    } else {
    document.write("<br>");
    }
  }
      

