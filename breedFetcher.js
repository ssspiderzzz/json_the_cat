const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    const data = JSON.parse(body);
    const breed = data[0];
    callback(error, breed.description);
  });
};

module.exports = {fetchBreedDescription};

/*
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
*/