"use strict";
let makecity = (city, country = 'Pakistan') => {
    console.log(city + " is in " + country);
};
makecity("Karachi");
makecity("Islamabad", "Pakistan");
makecity("Tokyo", "Japan");
