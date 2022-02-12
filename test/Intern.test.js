const Intern = require('../lib/Intern');

describe('Intern',() => {
    describe('Test for parent employee object',() => {
        it("test for Intern object",()=>{
            const intern = new Intern('Krupali','krupali@gmail.com');
            expect(intern.name).toBe('Krupali');
            expect(intern.id).toEqual(expect.any(Number));
            expect(intern.email).toBe('krupali@gmail.com');
        });

        it('Get name',()=>{
            const intern = new Intern('krupali','krupali@gmail.com');
            expect(intern.getName()).toBe('Krupali');
        });

        it('Get email', () => {
            const intern = new Intern('krupali','krupali@gmail.com');
            expect(intern.getEmail()).toBe('Email: krupali@gmail.com');
        })
    });

    describe('Test for overriden methods', () =>{
        it('Get role',()=>{
            const intern = new Intern('krupali','krupali@gmail.com');
            expect(intern.getRole()).toBe('Intern');
        });
    });
    describe('Intern specific methods', () =>{
        it('Get school',()=>{
            const intern = new Intern('krupali','krupali@gmail.com','MichiganStateUniversity');
            expect(intern.getschool()).toBe('School: MichiganStateUniversity');
        });
    });
});