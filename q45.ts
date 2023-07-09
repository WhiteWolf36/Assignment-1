function storeCarInfo(manufacturer: string, modelName: string, ...args: [string, any][]): object {
    const carInfo: any = {
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
  