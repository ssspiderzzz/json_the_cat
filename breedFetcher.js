const fs = require('fs');
const request = require('request');
const breedName = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;


request(url, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:\n', body);
  const data = JSON.parse(body);
  const breed = data[0];
  if (breed) {
    console.log(breed.description);
  } else {
    console.log(`Failed to find breed ${breedName}`);
  }
});

const download = function(content) {
  fs.writeFile("./tmp/index.html", content, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log(`Downloaded and saved ${(getFilesizeInBytes("./tmp/index.html"))} bytes to ./temp/index.html`);
  });
};

const getFilesizeInBytes = function(filename) {
  const stats = fs.statSync(filename);
  const fileSizeInBytes = stats.size;
  return fileSizeInBytes;
};