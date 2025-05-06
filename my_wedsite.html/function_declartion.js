function Student(name, ID, birthYear, homeTown) {
  this.name = name;
  this.ID = ID;
  this.birthYear = birthYear;
  this.homeTown = homeTown;

  this.showInfo = function () {
    return `${this.name} ${this.ID} ${this.birthYear} ${this.homeTown}`;
  };
}

const student1 = new Student("John", "12345", 2005, "New York");
 // John 12345 2005 New York
console.log(student1 instanceof Student); // true

Student.prototype.email = "saitam0102huy@gmail.com";
