// https://www.youtube.com/watch?v=2885eMV5nRE

// Чтение каталога images с последующей записью всех имен файлов в images.json
const fs = require('fs'),
      images = fs.readdirSync('./01/images');

fs.writeFile('./01/images.json', JSON.stringify(images), 'utf8', function (err) {
  if (err) console.error(err);
})