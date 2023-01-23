// import na fs
const fs = require("fs");

// studenti handler funckija
const studenti = (req, res) => {
    res.send('Podaocite se zapisani vo studenti.txt');
};

module.exports = {
    studenti,
};