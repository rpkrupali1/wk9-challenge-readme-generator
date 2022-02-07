const Employee = require("./Employee");

class Intern extends Employee{
    constructor(name,email, school){
        super(name,email);
        this.school = school;
    };

    getRole(){
        return 'Intern';
    };

    getschool(){
        return `School: ${this.school}`
    }
}

module.exports = Intern;