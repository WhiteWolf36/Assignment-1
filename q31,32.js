"use strict";
let users = ["Ali", "Ahmad", "Qamar", "Abdullah", "Bilal"];
if (users.length == 0) {
    console.log("We need some users!");
}
let new_users = users;
new_users.push("John");
new_users.push("Qasim");
users.forEach((element) => {
    new_users.forEach((item) => {
        if (element.toLowerCase() == item.toLowerCase()) {
            console.log(`${element} Username already exists!`);
        }
    });
});
