
function myFunction() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = parseInt(num1) + parseInt(num2);
    document.getElementById("result").innerHTML = "Result: " + result;
}

function onNum1Changed() {
    let num1_new = document.getElementById("num1").value;
    document.getElementById("result").innerHTML = "Result: " + num1_new;
}

function onNum2Changed() {
    let num2_new = document.getElementById("num2").value;
    document.getElementById("result").innerHTML = "Result: " + num2_new;
}

function add() {
    let result = document.getElementById("result").innerHTML;
}


