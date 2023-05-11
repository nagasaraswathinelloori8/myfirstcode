function Car(color, brand) {
    this.color = color;
    this.brand = brand;
    this.start = function() {
      console.log("started");
    };
  }
  console.log(Car.name);  // Car
  console.log(Car.length);  // 2
  console.log(typeof(Car));  // function