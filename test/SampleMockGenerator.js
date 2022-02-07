const generatePage = require('../src/generateHtmlTemplate');
const writeToFile = require('../utils/generatehtmlFile');
const mockData = require('./SampleMock');

writeToFile.copyFile('./src/style.css','./dist/style.css');
writeToFile.generateFile('./dist/index.html',generatePage(mockData));