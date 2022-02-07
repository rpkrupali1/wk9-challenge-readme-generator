class Employee {
    constructor(name,email){
        this.name = name;
        this.email = email;
        this.id = Math.floor(Math.random() * 100 + 100);
    };

    getId(){
        return 'ID: ' + this.id;
    };

    getName(){
        return this.name.charAt(0).toUpperCase() + this.name.slice(1);
    };

    getEmail(){
        return 'Email: ' + this.email;
    };

    getRole(){
        return 'Employee';
    }
}

module.exports = Employee;