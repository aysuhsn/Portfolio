let inputOne = document.querySelector('.inputone');
let inputTwo = document.querySelector('.inputtwo');
let result = document.querySelector('.result');

let plusBtn = document.querySelector('.plusbtn');
let minusBtn = document.querySelector('.minusbtn');
let multbtn = document.querySelector('.multbtn');
let devBtn = document.querySelector('.devbtn');

plusBtn.addEventListener('click', function(e) {
    e.preventDefault();

    if (isNaN(inputOne.value) || isNaN(inputTwo.value) || inputOne.value === "" || inputTwo.value === "") {
        alert("Zehmet olmasa her iki xanaya reqem daxil edin");
        return;
    }
let num1 = Number(inputOne.value);
let num2 = Number(inputTwo.value);
let sum = num1 + num2;

result.value = sum;
inputOne.value = "";
inputTwo.value = "";
});

minusBtn.addEventListener('click', function(e) {
    e.preventDefault();

    if (isNaN(inputOne.value) || isNaN(inputTwo.value) || inputOne.value === "" || inputTwo.value === "") {
        alert("Zehmet olmasa her iki xanaya reqem daxil edin");
        return;
    }
let num1 = Number(inputOne.value);
let num2 = Number(inputTwo.value);
let sum = num1 - num2;

result.value = sum;
inputOne.value = "";
inputTwo.value = "";
});

multbtn.addEventListener('click', function(e) {
    e.preventDefault();

    if (isNaN(inputOne.value) || isNaN(inputTwo.value) || inputOne.value === "" || inputTwo.value === "") {
        alert("Zehmet olmasa her iki xanaya reqem daxil edin");
        return;
    }
let num1 = Number(inputOne.value);
let num2 = Number(inputTwo.value);
let sum = num1 * num2;

result.value = sum;
inputOne.value = "";
inputTwo.value = "";
});

devBtn.addEventListener('click', function(e) {
    e.preventDefault();

    if (isNaN(inputOne.value) || isNaN(inputTwo.value) || inputOne.value === "" || inputTwo.value === "") {
        alert("Zehmet olmasa her iki xanaya reqem daxil edin");
        return;
    }
let num1 = Number(inputOne.value);
let num2 = Number(inputTwo.value);
if (num2 === 0) {
    alert("Sifira bolmək olmaz!");
    return;
}
let sum = num1 / num2;

result.value = sum;
inputOne.value = "";
inputTwo.value = "";
});
