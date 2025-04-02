// Task1
let num = 153;
let sum = 0;
let temp = num;

while (temp > 0) {
    let digit = temp % 10;
    sum = sum + (digit * digit * digit);
    temp = (temp - digit) / 10;
}

if (sum === num) {
    console.log(num + " Armstrong ədədidir");
} else {
    console.log(num + " Armstrong ədədi deyil");
}

// Task2
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(i + " x " + j + " = " + (i * j));
    }
}


// Task3
let users = [
    { name: "Ali", age: 25 },
    { name: "Veli", age: 35 },
    { name: "Sara", age: 20 },
    { name: "Mahir", age: 40 }
];

for (let i = 0; i < users.length; i++) {
    if (users[i].age > 30) {
        console.log(users[i].name + " 30-dan böyükdür");
    } else {
        console.log(users[i].name + " 30-dan kiçikdir");
    }
}


// Task4
let arr = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
let toplam = 0;
let i = 0;

while (i < arr.length) {
    toplam = toplam + arr[i];
    i = i + 1;
}

console.log("Ədədi orta:", toplam / arr.length);


// Task5
let a = 10;
let b = 3;
console.log("Mod:", a % b);


// Task6
let arr2 = [203, 19, 2, 13, 196, 86, 35, 77];
let max = arr2[0];

for (let i = 1; i < arr2.length; i++) {
    if (arr2[i] > max) {
        max = arr2[i];
    }
}

console.log("Ən böyük ədəd:", max);


// Task7
let min = arr2[0];
let max2 = arr2[0];
let minIndex = 0;
let maxIndex = 0;

for (let i = 1; i < arr2.length; i++) {
    if (arr2[i] < min) {
        min = arr2[i];
        minIndex = i;
    }
    if (arr2[i] > max2) {
        max2 = arr2[i];
        maxIndex = i;
    }
}

let temp2 = arr2[minIndex];
arr2[minIndex] = arr2[maxIndex];
arr2[maxIndex] = temp2;

console.log("Dəyişdirilmiş array:", arr2);


// Task8
let toplam2 = 0;

for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] !== min && arr2[i] !== max2) {
        toplam2 = toplam2 + arr2[i];
    }
}

console.log("Cəm (min və max çıxarıldıqdan sonra):", toplam2);

// Task9
let axtarilan = 35;
let tapildi = false;

for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === axtarilan) {
        tapildi = true;
    }
}

console.log("Array-də var?", tapildi);


// Task10
let birReqem = 0;
let ikiReqem = 0;
let ucReqem = 0;

for (let i = 0; i < arr2.length; i++) {
    let uzunluq = arr2[i].toString().length;
    if (uzunluq === 1) {
        birReqem++;
    } else if (uzunluq === 2) {
        ikiReqem++;
    } else if (uzunluq === 3) {
        ucReqem++;
    }
}

console.log("1 rəqəmli:", birReqem, "2 rəqəmli:", ikiReqem, "3 rəqəmli:", ucReqem);