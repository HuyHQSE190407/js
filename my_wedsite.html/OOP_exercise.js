class Shape {
    constructor(name) {
        this.name = name;
    }
    calArea() {
        return 0;
    }
}

class Square extends Shape {
    constructor(name, side) {
        super(name);
        this.side = side;
    }
    calArea() {
        return this.side * this.side;
    }
}

class Rectangle extends Shape {
    constructor(name, length, width) {
        super(name);
        this.length = length;
        this.width = width;
    }
    calArea() {
        return this.length * this.width;
    }
}

let square1 = new Square("Square", 5);
console.log(`area of ${square1.name} is: ${square1.calArea()}`); // area of Square is: 25

console.log("Shape area: " + new Shape("Shape").calArea()); // Shape area: 0