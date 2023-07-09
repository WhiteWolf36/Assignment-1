"use strict";
function storeCarInfo(manufacturer, modelName, ...args) {
    const carInfo = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    for (let [key, value] of args) {
        carInfo[key] = value;
    }
    return carInfo;
}
const carInfo = storeCarInfo('Bugatti', 'Veron', ['color', 'red'], ['optionalFeature', 'electronic vehicle']);
console.log(carInfo);
