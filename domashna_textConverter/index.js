const { textConverter, textStats } = require("./konverter.js");

// let orig = "rezultatot od ovoj tekst kje bide kirilichen tekst";
// let conv = textConverter("lat2cyr", orig);
// console.log(orig);
// console.log(conv);

let orig = "Тест ш ќ ж ч њ љ ѕ  ";
let conv = textConverter("cyr2lat", orig);
console.log(orig);
console.log(conv);

const randomText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit? Phasellus a lectus at sapien fringilla interdum sed id lorem! In nec interdum leo, non imperdiet nulla. In nec interdum leo, non imperdiet nulla. In nec interdum leo, non imperdiet nulla?";

let stats = textStats(randomText);
console.log(stats);