const {textConverter, textStats } = require("./konverter.js");

let orig = "Тест ѓ ж ѕ љ њ ќ ч ш ";
let conv = textConverter("cyr2lat", orig);

console.log(orig);
console.log(conv);

const randomText = "Резултатот од овој текст ќе биде латиничен текст";

let stats = textStats(randomText);
console.log(stats);