const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generatePage = require('./src/generateHtmlTemplate');
const generateFile = require('./utils/generatehtmlFile');
var teamMembers = [];

const getTeamMemberInfo = () => {        
    return inquirer.prompt([
        { 
        type: 'input',
        name: 'name',
        message: 'What is your name? (Required) ',
        validate: name => name ? true : false
        },
        {
        type: 'input',
        name: 'email',
        message: 'Please enter your valid email (Required)',
        validate: email => email ? true : false
        },
        {
            type: 'list',
            name: 'role',
            message: 'Please select your role (Required)',
            choices:  ['Manager', 'Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github user name? (Required)',
            when: answers => answers.role === 'Engineer',
            validate: role => role ? true : false
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is your scool name? (Required)',
            when: answers => answers.role === 'Intern',
            validate: school => school ? true : false
        },
        {
            type: 'confirm',
            name: 'confirmAddTeamMember',
            message: 'Would you like to add another team member?',
            default: false
        }
    ])
    .then(teamMemberData => {
        let employee;
        if(teamMemberData.role==='Manager')
            employee = new Manager(teamMemberData.name,teamMemberData.email);
        else if(teamMemberData.role==='Engineer')
            employee = new Engineer(teamMemberData.name,teamMemberData.email,teamMemberData.github);
        else if(teamMemberData.role==='Intern')
            employee = new Intern(teamMemberData.name,teamMemberData.email,teamMemberData.school);
        
        teamMembers.push(employee);

        if(teamMemberData.confirmAddTeamMember)
            return getTeamMemberInfo();               
        else
            return teamMembers;
    });   
};

getTeamMemberInfo()
.then(teamMembers => generatePage(teamMembers))
.then(fileContents=> generateFile.generateFile('./dist/index.html',fileContents))
.then(()=>generateFile.copyFile('./src/style.css','./dist/style.css'));