function Car(color, brand) {
    this.color = color;
    this.brand = brand;
    this.start = function() {
      console.log("started");
    };
  }
  
  let car1 = new Car("blue", "Audi");
  console.log(car1);  // Car { }