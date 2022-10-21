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