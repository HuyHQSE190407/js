//declare a class in javascript
class employee {
  //constructor method
  // The constructor method is a special method for creating and initializing an object created with a class.
  constructor(name, ID, birthYear, homeTown) {
    this.name = name;
    this.ID = ID;
    this.birthYear = birthYear;
    this.homeTown = homeTown;
  }
  //method
  showInfo() {
    return `${this.name} ${this.ID} ${this.birthYear} ${this.homeTown}`;
  }
}
// create an object from the class
const stu3 = new employee("John", "12345", 2005, "New York");
console.log(stu3); // John 12345 2005 New York\

//create parent class
class School {
  constructor(name, ID, birthYear, homeTown) {
    //call parent class constructor
    this.name = name;
    this.ID = ID;
    this.birthYear = birthYear;
    this.homeTown = homeTown;
  }
  //method
  calAge() {
    return 2025 - this.birthYear;
  }
}
//create child class from parent class
class Student extends School {
  constructor(name, ID, birthYear, homeTown, major) {
    super(name, ID, birthYear, homeTown);
    this.major = major;
  }
  study() {
    return `${this.name} is studying ${this.major}`;
  }
}
const stu1 = new Student(
  "John",
  "12345",
  2005,
  "New York",
  "software engineer"
);
console.log(stu1.name);
console.log(stu1.ID);
console.log(stu1.birthYear);
console.log(stu1.homeTown);
console.log(stu1.major);
console.log(stu1.calAge());

console.log(stu1.study()); // John is studying software engineer
