console.log("log from /server/main.js");

// import './../imports/utils.js';

import {say_hello} from './../imports/utils.js';

console.log(say_hello());

import {add} from './../imports/math.js';

console.log(add(1, 2));
