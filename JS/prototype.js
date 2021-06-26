const animal = { eats: true };
const dog = Object.create(animal);
dog.barks = true;

console.log(dog.barks); // true
console.log(dog.eats); // true
console.log('dog :>> ', dog);

const Guest = function (name, room) {
    this.name = name;
    this.room = room;
  };

console.log(Guest.prototype); // {constructor: ƒ}
Guest.prototype.showGuestInfo = function () {
    console.log(`name: ${this.name}, room: ${this.room}`);
  };
  
  const mango = new Guest('Mango', 28);
  const poly = new Guest('Poly', 36);
  
  mango.showGuestInfo(); // name: Mango, room: 28
  poly.showGuestInfo(); // name: Poly, room: 36

console.log(mango);