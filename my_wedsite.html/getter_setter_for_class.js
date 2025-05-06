class school {
    constructor(ID, name, birthYear, homeTown, scores) {
        this.ID = ID;
        this.name = name;
        this.birthYear = birthYear;
        this.homeTown = homeTown;
        this._scores = scores;
    }
    //method for calculating age
    calcAge() {
        return 2025 - this.birthYear;
    }
    //getter for scores
    get scores() {
        return this._scores;
    }
    //setter for scores
    set scores(value) {
        if(value >= 0 && value <= 10) {
            this._scores = value;
        } else {
            console.log("Invalid score. Score must be between 0 and 10.");
        }
    }
}

const student1 = new school("12345", "John", 2005, "New York", 9);

student1.scores = 10;
console.log(student1.scores); // 9
