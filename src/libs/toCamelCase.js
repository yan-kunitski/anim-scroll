module.exports = str => str.replace(/-[a-z]/g, m => m[1].toUpperCase());
