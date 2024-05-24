/* global moment */

let x = "These are not the droids you are looking for.";
console.log(x);

// var moment = require('moment'); // require
// moment().format();

// console.log(moment().startOf("day").fromNow());

// console.log(moment().subtract(10, 'days').calendar());

// console.log(moment().format('YYYY [pwn] YYYY'));

import moment from 'moment';

console.log(moment().startOf("day").fromNow());