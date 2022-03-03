/**
 * TODO 1 (Tiger.js)
 * Ekspor nilai dari class Tiger
 *
 * TODO 2 (Wolf.js)
 * Ekspor nilai dari class Wolf
 *
 * TODO 3 (main.js)
 * Impor class Tiger dan Wolf
 *
 * TODO 4 (main.js)
 * Ekspor fungsi fight, myTiger, myWolf, dan result
 *
 * Untuk Mengaktifkan ES6 module,
 * tambahkan properti "type": "module" pada package.json
 * atau dengan mengubah ekstensi .js menjadi .mjs.
 */

// TODO 3
// Menggunakan CommonJS
const Tiger = require("./Tiger.js");
const Wolf = require("./Wolf.js");

// Menggunakan ES6 Module
// import Tiger from "./Tiger.js";
// import Wolf from "./Wolf.js";

const fight = (tiger, wolf) => {
    if (tiger.strength > wolf.strength) {
        return tiger.growl();
    }
    if (wolf.strength > tiger.strength) {
        return wolf.howl();
    }
    return "Harimau dan serigala sama-sama kuat!";
};

const myTiger = new Tiger();
const myWolf = new Wolf();

const result = fight(myTiger, myWolf);

console.log(result);

// TODO 4
// Menggunakan CommonJS
module.exports = { fight, myTiger, myWolf, result };

// Menggunakan ES6 Module
// export { fight, myTiger, myWolf, result };
