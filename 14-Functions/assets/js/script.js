// Task1

function calculate(a, b, operation) {
    if (operation === '+') return a + b;
    if (operation === '-') return a - b;
    if (operation === '*') return a * b;
    if (operation === '/') return a / b;
    return 'Duzgun operator daxil edin';
}

console.log(calculate(10, 5, '+'));
console.log(calculate(10, 5, '-'));
console.log(calculate(10, 5, '*'));
console.log(calculate(10, 5, '/'));

// Task2

function findEvenOdd(...numbers) {
    let even = numbers.filter(num => num % 2 === 0);
    let odd = numbers.filter(num => num % 2 !== 0);
    return { even, odd };
}

console.log(findEvenOdd(14, 20, 35, 40, 57, 60, 100));

// Task3

function sumDivisibleBy4And5(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 4 === 0 && arr[i] % 5 === 0) {
            sum += arr[i];
        }
    }
    return sum;
}

console.log(sumDivisibleBy4And5([14, 20, 35, 40, 57, 60, 100]));


// Task4

function countCharacter(sentence, char) {
    let count = 0;
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === char) {
            count++;
        }
    }
    return count;
}

console.log(countCharacter("Salam dünya", 'a'));


// Task5

function checkAbundantOrDeficient(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) sum += i;
    }
    if (sum > num) {
        return 'Abundant';
    } else {
        return 'Deficient';
    }
}

console.log(checkAbundantOrDeficient(12));
console.log(checkAbundantOrDeficient(13));

// Task6

function squareArray(arr) {
    let squaredArr = [];
    for (let i = 0; i < arr.length; i++) {
        squaredArr.push(arr[i] * arr[i]);
    }
    return squaredArr;
}

console.log(squareArray([2, 3, 4]));


// Task7

function ageDifference(people) {
    let minAge = people[0].age;
    let maxAge = people[0].age;
    for (let i = 1; i < people.length; i++) {
        if (people[i].age < minAge) {
            minAge = people[i].age;
        }
        if (people[i].age > maxAge) {
            maxAge = people[i].age;
        }
    }
    return [minAge, maxAge, maxAge - minAge];
}

console.log(ageDifference([{name: "A", age: 13}, {name: "B", age: 67}, {name: "C", age: 54}]));

