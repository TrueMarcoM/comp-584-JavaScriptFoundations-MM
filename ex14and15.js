function Animal(species, sound) {
    this.species = species;
    this.sound = sound;
}

var dog = new Animal("Canine", "Woof");
var cat = new Animal("Feline", "Meow");

var animalArray = [dog, cat];

console.log(animalArray);