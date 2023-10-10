// const List = require('./list/le')
// const List2 = require('./list2/le')
// console.log('THE LIST')
// console.log(List2)
// const Hello = require('./hello')
//!/usr/bin/env node
// process.argv.push('cli')
const an = require('./lib/index')
require("@babel/register");
require = require("esm")(module/*, options*/)
const plugins = require('./plugins')
an({...plugins,"Hello":require('./hello')})
// console.log(anzii)