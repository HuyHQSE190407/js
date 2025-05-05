function onChangedResult() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);

  if (isNaN(num1)) num1 = 0;
  if (isNaN(num2)) num2 = 0;

  let result = num1 + num2;
  document.getElementById("result").innerHTML = "Result: " + result;
}

function showDate() {
  document.getElementById("date").innerHTML = Date();
}

function stringTest() {
  let text = prompt("Enter a string:");
  text = text.toUpperCase();
  alert(text);
}

function replacedString() {
  let str = prompt("Enter a string:");
  let str2 = prompt("Enter a string to replace:");
  let newStr = "";
  let positionToReplace = prompt("Enter the position to replace:");
  for (let i = 0; i < str.length; i++) {
    if (i == positionToReplace) {
      newStr = str.slide(i) + str2 + str.slice(i + str2.length);
    }
  }
  alert(newStr);
}

function numberMethods() {
  let x = 3.9329;
  x = x.toExponential(4);
  alert(x);
}

//array methods in js

function accessArray() {
  let arr = ["volvo", "audi", "bmw", "mercedes"];
  let text = "<ul>";
  for (let i = 0; i < arr.length; i++) {
    text += "<li>" + arr[i] + "</li>";
  }
  document.getElementById("demo").innerHTML = text;
}

function accessArray2() {
  let arr = ["volvo", "vin_fast", "bmw", "mercedes"];
  let text = "<ul>";
  arr.forEach(function (value) {
    text += "<li>" + value + "</li>";
  });
  text += "</ul>";
  document.getElementById("demo").innerHTML = text;
}
function clarifyArray_object() {
  let person = new Array("John", "Doe");
  alert(person[0] + " " + person[1]);

  let x = "";
  const myObj = {
    name: "John",
    age: 30,
    cars: [
      { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
      { name: "BMW", models: ["320", "X3", "X5"] },
      { name: "Fiat", models: ["500", "Panda"] },
    ],
  };

  for (let i in myObj.cars) {
    x += "<h2>" + myObj.cars[i].name + "</h2>";
    for (let j in myObj.cars[i].models) {
      x += myObj.cars[i].models[j] + "<br>";
    }
  }
}

function join_array() {
  let fruits = ["Banana", "Orange", "Apple", "Mango"];
  let text = fruits.join(" * ");
  let position = prompt("Enter the position to to show:");

  for (let i = 0; i < fruits.length; i++) {
    if(i == position) {
        delete fruits[i];
    }
  }
  alert("length of array: " + fruits.length);
  alert("element of array: " + fruits);
}
