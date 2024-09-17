console.log("Hello")

const game = {
  party: [],

  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
}

// console.dir(pokemon, { maxArrayLength: null })

console.log(pokemon[58])

// Exercise 2

// console.log(game)

/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/

game.difficulty = "Easy", 

console.log(game.difficulty)

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/

/* choice:  
number: 4, 
name: "Charmander", 
type: "fire", 
hp: 39, 
starter: true 
*/

console.log(pokemon[3])

console.log(game.party)

game.party.push(pokemon[3])

console.log(game.party)

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:

Pokémon 1: Bulbasaur
Pokémon 4: Charmander
Pokémon 7: Squirtle
Pokémon 25: Pikachu
*/

game.party.unshift(pokemon[30])
game.party.unshift(pokemon[35])
game.party.unshift(pokemon[58])


/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/

// console.log(music.currentPlaylist[music.trackIdx]); // 'Just Ken'

// something about key:value pairs

console.log(game.gyms[0].completed) // exp out: false
console.log(game.gyms[1].completed) // exp out: false
console.log(game.gyms[2].completed) // exp out: false

game.gyms.forEach((gym) => {
    if (gym.difficulty < 3) {
    gym.completed = "true"
    }
  })
  console.log(game.gyms)

  console.log(game.gyms[0].completed) // exp out: true
  console.log(game.gyms[1].completed) // exp out: true
  console.log(game.gyms[2].completed) // exp out: false

/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. 
When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/
console.log(game.party)

game.evolve = function() {
  console.log(game.party[0])
  console.log(game.party[1])
  console.log(game.party[2])
  console.log(game.party[3])
  for (let index = 0; index < game.party.length; index++) {
    game.party += 1

  // game.party.splice(pokemon[i + 1])
  }
}
// I need to iterate through the array then replace each property with the next Pokemon but I don't know
// how to automate that so the next pokemon automatically evolves
  // const element = array[index];

game.evolve()

console.log(game.party[0])
console.log(game.party[1])
console.log(game.party[2])
console.log(game.party[3])

/*
const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
}

*/