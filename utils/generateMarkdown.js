// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}
  ${data.description}

  # Table of contents
  * [Purpose](#purpose)
  * [Installation Guidelines](#installation-guidelines)
  * [Usage](#usage)
  * [Contributors](#contributors)
  * [Test Instructions](#test-instructions)
  * [Questions](#questions)
  * [License](#license)

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
  Please reach out to us for any questions [here](https://github.com/${data.githubUser}) or you can also send me question via email @${data.email}

  ## License
  Please consult the attached LICENSE file for details. All rights not explicitly granted by the License are reserved by Original Author.
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
