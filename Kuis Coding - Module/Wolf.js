class Wolf {
    constructor() {
        this.strength = Math.floor(Math.random() * 100);
    }

    howl() {
        return "Auuuuuuuuu";
    }
}

// TODO 2
// Menggunakan CommonJS
module.exports = Wolf;

// Menggunakan ES6 Module
// export default Wolf;
