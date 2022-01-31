//packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
const writeToFile = require('./utils/generateFiles');

//array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is name of your repository? (Required)',
            validate: nameInput => nameInput ? true : false
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide description of your repository. (Required)',
            validate: descriptionInput => descriptionInput ? true : false
        },
        {
            type: 'input',
            name: 'purpose',
            message: 'Please provide purpose for your repository.'
        },
        {
            type: 'input',
            name: 'installGuide',
            message: 'Please provide installation instructions. (Required)',
            validate: installInput => installInput ? true : false
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide usage information',
            default: ""
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Please provide name who contributed this',
            default: "",

        },
        {
            type: 'input',
            name: 'technologies',
            message: 'Please provide all technologies used to build this application seperated by comma'
        },
        {
            type: 'input',
            name: 'testInstructions',
            message: 'Please provide test instructions'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Please choose license from given option (Check all that apply)',
            choices: ['MIT', 'Apache','Mozilla']
        },
        {
            type: 'input',
            name: 'githubUser',
            message: 'What is your github user name? (Required)',
            validate: githubNameInput => githubNameInput ? true : false
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? (Required)',
            validate: emailInput => emailInput ? true : false 
        }
    ]);
}

// function to initialize app
function init() {
    questions()
        .then(data => generateMarkdown(data))
        .then(data => writeToFile('./dist/README.md',data));
}

// Function call to initialize app
init();