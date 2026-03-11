//By default on importing this folder
//if no file is passed then it exports index.js

const sum = require("./sum")
const sub = require("./sub")
const mul = require("./mul")

module.exports = {sum, sub, mul};