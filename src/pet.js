const MAXIMUM_FITNESS = 10;
const MINIMUM_AGE = 0;
const MINIMUM_HUNGER = 0;

function Pet(name) {
    this.name = name;
    this.age = MINIMUM_AGE;
    this.hunger = MINIMUM_HUNGER;
    this.fitness = MAXIMUM_FITNESS;
};

Pet.prototype = {
  get isAlive() {
    return (this.age < 30) && (this.hunger < 10) && (this.fitness > 0);
  }
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
    if ((this.hunger - 3) >= MINIMUM_HUNGER ) {
        this.hunger -= 3;
    } else {
        this.hunger = MINIMUM_HUNGER;
    };
};

Pet.prototype.checkUp = function() { 
    const hungryAndUnfit = ((this.fitness <= 3 ) && (this.hunger >= 5));
    const unfit = (this.fitness <= 3);
    const hungry = (this.hunger >= 5);
    const feelsGreat = 'I feel great!'
    
    if (hungryAndUnfit == true) {
        return 'I am hungry AND I need a walk!'
    };
    if (unfit == true) {
        return 'I need a walk!'
    };
    if (hungry == true) {
        return 'I am hungry!'
    };
    return feelsGreat;
    
};


    

module.exports = Pet;