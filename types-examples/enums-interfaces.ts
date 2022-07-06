enum toys { bone, chicken, ball };
const dog: {
  name: string;
  age: number;
  tricks: string[];
  breed: [number, string]; // This is a Tuple, just in case that you forgot it, Doris
  favoriteToy: toys;
  callTheDog: () => void //Function with no parameters, that returns nothing (void)
  getATrick: (trackId: number) => string // Function that takes one number, return string
} = {
  name: 'Orion',
  age: 30,
  tricks: ['sit down', 'play dead', 'rollover'],
  breed: [1, 'Cacri'],
  favoriteToy: toys.chicken,
  callTheDog: () => { console.log('peeeeeeeeeeeerro perro perro perro, veeeeeeeeeeeeeen perrito perrito perrito')},
  getATrick: (trickId: number) => { return this.tricks[trickId] }
};
dog.callTheDog();
console.log(dog.name);
dog.tricks.forEach(trick => console.info(trick.toUpperCase()));