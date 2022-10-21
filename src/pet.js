const MAXIMUM_FITNESS = 10;
const STARTING_AGE = 0;
const STARTING_HUNGER = 0;

function Pet(name) {
    this.name = name;
    this.age = STARTING_AGE;
    this.hunger = STARTING_HUNGER;
    this.fitness = MAXIMUM_FITNESS;
};

Pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
};

Pet.prototype.walk = function() {
    if ((this.fitness + 4) <= MAXIMUM_FITNESS ) {
        this.fitness += 4;
    } else {
        this.fitness = MAXIMUM_FITNESS;
    };
};

Pet.prototype.feed = function() {
    if ((this.hunger - 3) >= STARTING_HUNGER ) {
        this.hunger -= 3;
    } else {
        this.hunger = STARTING_HUNGER;
    };
};

module.exports = Pet;