"use strict";
let make_shirt1 = (size = 'large', msg = 'I love Typescript') => {
    console.log(msg + "\n(size: " + size + ")");
};
make_shirt1();
make_shirt1("medium");
make_shirt1("small", "I love React");
