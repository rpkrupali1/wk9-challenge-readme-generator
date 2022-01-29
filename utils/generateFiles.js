const fs = require('fs');

//Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve,reject) => {
        fs.writeFileSync(fileName,data, err =>{
            if(err){
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
}

module.exports = writeToFile;