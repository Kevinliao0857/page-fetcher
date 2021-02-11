const url = process.argv[2];
const path = process.argv[3];
const request = require("request");
const fs = require("fs");

request(url, (error, response, body) => {
  if(error){
    console.log("ERROR!")
  } else if (response.statusCode !== 200) {
    console.log("Everything did not go great :( ")
  }
  fs.writeFile(path, body, fileError => {
    if(fileError) {
      console.log("Error! Something's wrong with the file")
    } else {
      console.log(`Downloaded and saved ${fs.statSync(path).size} bytes to ${path}.`)
      console.log("Download Complete")
    }
  })
})