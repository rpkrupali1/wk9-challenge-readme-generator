const Employee = require("./Employee");

class Manager extends Employee{
    constructor(name,email){
        super(name,email);
        this.officeNumber = Math.floor(Math.random() * 1 + 30);
    };

    getRole(){
        return 'Manager';
    };

    getOffice(){
        return `Office number:${this.officeNumber}`
    }
}

module.exports = Manager;