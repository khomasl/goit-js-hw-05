const Car = function ({ brand, model, price} = {}) {//деструктуризация
    this.brand = brand;
    this.model = model;
    this.price = price;
};

Car.prototype.sayHi = function() {
    console.log('Hello :>> ', Hello);
}

Car.prototype.changePrice = function(newPrice){
    this.price = newPrice;
}
console.log('Car :>> ', Car);

const myCar = new Car({
    brand: 'Audi',
    model: 'Q3',
    price: 35000,
});
console.log('myCar :>> ', myCar);
myCar.changePrice(40000);
console.log('myCar :>> ', myCar);

const myCar2 = new Car({
    brand: 'BMW',
    model: 'X6',
    price: 50000,
});
console.log('myCar2 :>> ', myCar2);