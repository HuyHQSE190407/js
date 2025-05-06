let person = {
    name: "John",
    birthYear: 2005,
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA"
    },
    points: [10, 5, 9, 8, 10],

    getAge: function() {
        return 2025 - this.birthYear;
    },

    averagePoints: function() {
        sumCores = this.points.reduce((a, b) => a + b, 0);
        return sumCores / this.points.length;
    }
};

// let inputKey = prompt("Enter a key to get its value (name, birthYear, address, points):");
// console.log(person[inputKey]);
// delete person[inputKey];

delete person.name;
console.log(person); // undefined
person["email"]= "saitama0102huy@gmail.com";