const Manager = require('../lib/Manager');

describe('Manager',() => {
    describe('Test for parent object properties',() => {
        it("test for Manager object",()=>{
            const manager = new Manager('Krupali','krupali@gmail.com');
            expect(manager.name).toBe('Krupali');
            expect(manager.id).toEqual(expect.any(Number));
            expect(manager.email).toBe('krupali@gmail.com');
        });

        it('Get name',()=>{
            const manager = new Manager('krupali','krupali@gmail.com');
            expect(manager.getName()).toBe('Krupali');
        });

        it('Get email', () => {
            const manager = new Manager('krupali','krupali@gmail.com');
            expect(manager.getEmail()).toBe('Email: krupali@gmail.com');
        });        
    });

    describe('Test for overriden methods', () =>{
        it('Get role',()=>{
            const manager = new Manager('krupali','krupali@gmail.com');
            expect(manager.getRole()).toBe('Manager');
        });
    });

    describe('Test for specific manager methods', () =>{
        it('Get office',()=>{
            const manager = new Manager('krupali','krupali@gmail.com');
            expect(manager.officeNumber).toEqual(expect.any(Number));
        });
    });
});