// TODO: Create a function that returns a license badge based on which license is passed in

const { license } = require("../test/sample-answers");

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var licenses = "";
  if(license){
    for (let i = 0; i < license.length; i++) {
      licenses = licenses + " [![License: " + license[i] + 
                      "](https://img.shields.io/badge/License-"+ license[i]
                      +"-yellow.svg)](https://opensource.org/licenses/"
                      + license[i] + ") "
      
    };
    return licenses;
  }
  else return "";
}

//Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  //[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  if(license){    
    return `\n* [License](#license)\n`;
  }
  else return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license){
    return `
    ## License
    Please consult the attached LICENSE file for details. All rights not explicitly granted by the ${license} License are reserved by Original Author.
    `
  }
  else return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}
  ${data.description}

  ${renderLicenseBadge(data.license)}

  # Table of contents
  * [Purpose](#purpose)
  * [Installation Guidelines](#installation-guidelines)
  * [Usage](#usage)
  * [Contributors](#contributors)
  * [Test Instructions](#test-instructions)
  * [Questions](#questions)
  ${renderLicenseLink(data.license)}

  ## Purpose
  ${data.purpose}

  ## Istallation Guidelines
  ${data.installGuide}

  ## Usage
  ${data.usage}

  ## Contributors
  ${data.contributors}

  ## Test Instructions
  ${data.testInstructions}

  ## Questions
  Please reach out to us for any questions [here](https://github.com/${data.githubUser}).
  Or you can also send me your questions through email at [${data.email}](mailto:${data.email})

  ${renderLicenseSection(data.license)}

  Copyright (c) 2021
`;
}

module.exports = generateMarkdown;
