function orderSandwich(...items: string[]): void {
    console.log('Sandwich Order Summary:');
    console.log('----------------------');
    console.log('Items:');
    for (let item of items) {
      console.log('-', item);
    }
    console.log('----------------------\n');
  }
  
  orderSandwich('Bread', 'Ketchup', 'Cheese', 'Lettuce', 'Onion');
  orderSandwich('Bread', 'Ham', 'Swiss Cheese');
  orderSandwich('Bread', 'Chicken', 'Mayonnaise');