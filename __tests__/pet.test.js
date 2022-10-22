const Pet = require ('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
});
describe('constructor', () => {
    it('Sets the name property', () => {
        const pet = new Pet('Fido');
        expect(pet.name).toEqual('Fido')
    });
});
describe('constructor', () => {
    it('has an initial age of 0', () => {
        const pet = new Pet('Fido');
        expect(pet.age).toEqual(0)
    });
});
describe('growUp', () => {
    it('Increments the age by 1', () => {
     const pet = new Pet('Fido');
     pet.growUp();
     expect(pet.age).toEqual(1);
    });
    it('Increments the Hunger by 5', () => {
     const pet = new Pet('Fido');
     pet.growUp();
     expect(pet.hunger).toEqual(5);
    });
    it('Decreases the Fitness by 3', () => {
     const pet = new Pet('Fido');
     pet.growUp();
     expect(pet.fitness).toEqual(7);
    });
});
describe('constructor', () => {
    it('has an initial hunger of 0', () => {
        const pet = new Pet('Fido');
        expect(pet.hunger).toEqual(0)
    });
});
describe('constructor', () => {
    it('has an initial fitness of 10', () => {
        const pet = new Pet('Fido');
        expect(pet.fitness).toEqual(10)
    });
});
describe('walk', () => {
    it('Increases Fitness by 4', () => {
      const pet = new Pet('Fido');
      pet.fitness = 4;
      pet.walk();

      expect(pet.fitness).toEqual(8);
    });
    it('Increases Fitness up to a maximum of 10', () => {
        const pet = new Pet('Fido');
        pet.fitness = 8;
        pet.walk();
  
        expect(pet.fitness).toEqual(10);  
    })
});
describe('feed', () => {
    it('Decreases pets hunger level by 3', () => {
        const pet = new Pet ('Fido');
        pet.hunger = 5;
        pet.feed();

        expect(pet.hunger).toEqual(2);
    });
    it('Decreases pets hunger to a minimum of 0', () => {
        const pet = new Pet ('Fido');
        pet.hunger = 2;
        pet.feed();

        expect(pet.hunger).toEqual(0);
    });    
});
describe('checkUp', () => {
    it('returns "I need a walk!" if fitness is 3 or less.', () => {
       const pet = new Pet('Fido');
       pet.fitness = 3;
       pet.checkUp();

       expect(pet.checkUp()).toBe('I need a walk!');

       pet.fitness = 1;
       pet.checkUp();

       expect(pet.checkUp()).toBe('I need a walk!');
    });
});

describe('checkUp', () => {
    it('returns "I am hungry!" if hunger is 5 or more.', () => {
       const pet = new Pet('Fido');
       pet.hunger = 5;
       pet.checkUp();

       expect(pet.checkUp()).toBe('I am hungry!');

       pet.hunger = 7;
       pet.checkUp();

       expect(pet.checkUp()).toBe('I am hungry!');
    });
});

describe('checkUp', () => {
    it('returns "I am hungry AND I need a walk!" if hunger is 5 or more and Fitnes is 3 or less.', () => {
       const pet = new Pet('Fido');
       pet.hunger = 7;
       pet.fitness = 2;
       pet.checkUp();

       expect(pet.checkUp()).toBe('I am hungry AND I need a walk!');

       pet.hunger = 5;
       pet.fitness = 3;
       pet.checkUp();

       expect(pet.checkUp()).toBe('I am hungry AND I need a walk!');
    });
});
describe('checkUp', () => {
    it('Returns "I feel great!" if Hunger is less than 5 AND Fitness is more than 3', () => {
        const pet = new Pet('Fido');
        this.hunger = 4;
        this.fitness = 4;
        pet.checkUp();

        expect(pet.checkUp()).toBe('I feel great!')

        this.hunger = 1;
        this.fitness = 10;
        pet.checkUp();

        expect(pet.checkUp()).toBe('I feel great!');
    });
});