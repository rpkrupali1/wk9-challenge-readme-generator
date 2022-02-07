const Engineer = require('../lib/Engineer');

describe('Engineer',() => {
    describe('Test for Parent inherited methods and properties',() => {
        it("test for Engineer object",()=>{
            const engineer = new Engineer('Krupali','krupali@gmail.com');
            expect(engineer.name).toBe('Krupali');
            expect(engineer.id).toEqual(expect.any(Number));
            expect(engineer.email).toBe('krupali@gmail.com');
        });

        it('Get name',()=>{
            const engineer = new Engineer('krupali','krupali@gmail.com');
            expect(engineer.getName()).toBe('Krupali');
        });

        it('Get email', () => {
            const engineer = new Engineer('krupali','krupali@gmail.com');
            expect(engineer.getEmail()).toBe('Email: krupali@gmail.com');
        })
    });

    describe('Test for overriden methods', () =>{
        it('Get role',()=>{
            const engineer = new Engineer('krupali','krupali@gmail.com');
            expect(engineer.getRole()).toBe('Engineer');
        });
    });

    describe('Test for employee specific methods', () =>{
        it('Get github',()=>{
            const engineer = new Engineer('krupali','krupali@gmail.com','rpkrupali1');
            expect(engineer.getGithub()).toBe('Github: rpkrupali1');
        });
    });
});