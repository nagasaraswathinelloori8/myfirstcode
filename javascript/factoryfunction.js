function createCar(color, brand) {
    return {
      color: color,
      brand: brand,
      start: function() {
        console.log("started");
      }
    };
  }
  
  let car1 = createCar("blue", "Audi");
  let car2 = createCar("red", "Tata");
  let car3 = createCar("green", "BMW");
  
  console.log(car1);  // Object { color: "blue", brand: "Audi", start: ƒ() }
  console.log(car2);  // Object { color: "red", brand: "Tata", start: ƒ() }
  console.log(car3);  // Object { color: "green", brand: "BMW", start: ƒ() }