const fs = require('fs');
const jsonSass = require('json-sass');

fs.createReadStream('../thema.json')
    .pipe(jsonSass({ prefix: '$thema: '}))
    .pipe(fs.createWriteStream('../style/_thema.scss'));

    console.log("Wrote stuff")