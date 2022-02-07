const Employee = require('../lib/Employee');

describe('Employee',() => {
    describe('employee',() => {
        it("test for emplyee object",()=>{
            const employee = new Employee('Krupali','krupali@gmail.com');
            expect(employee.name).toBe('Krupali');
            expect(employee.id).toEqual(expect.any(Number));
            expect(employee.email).toBe('krupali@gmail.com');
        });

        it('Get name',()=>{
            const employee = new Employee('krupali','krupali@gmail.com');
            expect(employee.getName()).toBe('Krupali');
        });

        it('Get email', () => {
            const employee = new Employee('krupali','krupali@gmail.com');
            expect(employee.getEmail()).toBe('Email: krupali@gmail.com');
        })
    });
});