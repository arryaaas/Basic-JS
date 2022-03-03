class Tiger {
    constructor() {
        this.strength = Math.floor(Math.random() * 100);
    }

    growl() {
        return "grrrrrrr";
    }
}

// TODO 1
// Menggunakan CommonJS
module.exports = Tiger;

// Menggunakan ES6 Module
// export default Tiger;
