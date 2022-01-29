const generateMarkdown = require('../utils/generateMarkdown');
const writeToFile = require('../utils/generateFiles');
const mockData = require('./sample-answers');


writeToFile('./dist/README.md',generateMarkdown(mockData));