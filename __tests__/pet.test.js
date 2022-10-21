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