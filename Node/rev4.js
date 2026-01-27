const _ = require("lodash");

// using lodash (example utility)
const nums = [1, 4, 9, 16];

// use lodash map + JS Math.sqrt
const result = _.map(nums, Math.sqrt);

console.log(result);
