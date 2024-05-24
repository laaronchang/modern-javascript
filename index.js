/* global moment */

let x = "These are not the droids you are looking for.";
console.log(x);

var datetime = moment().startOf("day").fromNow();
console.log(datetime);

var calendar = moment().subtract(10, 'days').calendar();
console.log(calendar);

var stuff = moment().format('YYYY [pwn] YYYY');
console.log(stuff)