"use strict";
let personname = "Ahmad Aziz";
console.log(personname.toUpperCase()); //Converting to UpperCase
console.log(personname.toLowerCase()); //Converting to LowerCase
//Converting to TitleCase by splitting the string to an array the capitalizing the first word.
console.log(personname.toLowerCase().split(' ').map(function (word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
}).join(' '));
