// working with với class list

//take element for interaction
let element = document.getElementById("myElement");

//add one new class for element
element.classList.add('newClass1');
//check element has class
console.log(element.classList.contains('newClass4')); // true

//remove class
element.classList.remove('newClass');

//replace class
element.classList.replace('newClass1', 'newClass2');
//toggle class
element.classList.toggle('newClass3'); //add newClass3
element.classList.toggle('newClass3'); //add newClass3