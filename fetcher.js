const args = process.argv.splice(2)
console.log(args);

const fs = require('fs');

const content = 'Some content!';

fs.writeFile('./index.html', content, err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});