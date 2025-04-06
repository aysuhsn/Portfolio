// String Methods
let str = "I am frontend DEVELOPER I LEARN Javascript";
// Task1 Verilmis string-de sait herflewrin tapilmasi
function findVowels(text) {
    let vowels = "aoieEOAi";
    return text.split("").filter(char => vowels.includes(char));
  }
  console.log(findVowels(str));

// Task2 Verilmiş string-de sozlerin bosluga gore sayi.
function wordCount(text) {
    return text.trim().split(" ").length;
  }
  console.log(wordCount(str));
  
// Task3 Verilmiş stringin-in ən uzun sözünü ekrana çıxaran proqram yazın
function findLongestWord(str) {
    let words = str.split(" ");
    let longest = words[0];
  
    for (let i = 1; i < words.length; i++) {
      if (words[i].length > longest.length) {
        longest = words[i];
      }
    }
  
    return longest;
  }
  console.log("Longest Word:", findLongestWord("I am frontend DEVELOPER I LEARN Javascript"));
  
 
// Task4 Verilmiş string-in bütün hərfləri böyük olan sözün özünü və indeksini çapa çıxaran proqram yazın.
function findUppercaseWords(str) {
    let words = str.split(" ");
    let result = [];
  
    for (let i = 0; i < words.length; i++) {
      if (words[i] === words[i].toUpperCase()) {
        result.push({ word: words[i], index: i });
      }
    }
  
    return result;
  }
  console.log("Uppercase Words & Indexes:", findUppercaseWords("I am frontend DEVELOPER I LEARN Javascript"));
  

//   Task6 Hər hansı bir cümlədə istənilən  baş hərflə olan simvolları birləşdirib qaytaran funksiya yazın.
function getCapitalizedInitials(str) {
    return str
      .split(" ")
      .map(word => word[0])
      .filter(char => char === char.toUpperCase())
      .join("");
  }
  console.log("Capitalized Initials:", getCapitalizedInitials("My name is Jhon"));

//   Task7 Cümlədə olan bütün sözləri ixtisar edən proqram tərtib edin.
function abbreviateWords(str) {
    return str.split(" ").map(word => {
      if (word.length < 4) return word;
      return word[0] + (word.length - 2) + word[word.length - 1];
    }).join(" ");
  }
  console.log("Abbreviated Words:", abbreviateWords("komputer stekan javascript is good"));



//   Array Methods 
// Task1 Verilmis arrayde tekrarlanan reqemleri silmek ve tekrar reqemlerin sayini gostermek.
function removeDuplicates(arr) {
    let counts = {};
    for (let num of arr) {
      counts[num] = (counts[num] || 0) + 1;
    }
    let unique = Object.keys(counts).map(Number);
    return { unique, counts };
  }
  console.log("Unique numbers and their counts:", removeDuplicates([1, 2, 3, 2, 1, 4, 5, 4, 4]));
  
// Task2 Verilmis sozun polindrom olub olmadığını yoxlayan alqoritm yazmaq.
function isPalindrome(word) {
    let reversed = word.split("").reverse().join("");
    return word === reversed;
  }
  console.log("Is 'level' a palindrome?", isPalindrome("level"));
  console.log("Is 'salam' a palindrome?", isPalindrome("salam"));

// Task3 Girilen ededin verilmis arreyde nece elementden kicik oldugunu yazan alqoritim.
function countSmallerThan(arr, num) {
    let count = 0;
    for (let item of arr) {
      if (item < num) count++;
    }
    return count;
  }
  console.log("Numbers smaller than 5:", countSmallerThan([3, 7, 2, 9, 1], 5));

// Task4 customers  array-in icindeki objectlerdeki hobbileri array-in reduce metodundan istifade ederek yazdirmaq.
let customers = [
    {
      name: "Tyrone",
      personal: {
        age: 33,
        hobbies: ["Bicycling", "Camping"],
      },
    },
    {
      name: "Elizabeth",
      personal: {
        age: 25,
        hobbies: ["Guitar", "Reading", "Gardening"],
      },
    },
    {
      name: "Penny",
      personal: {
        age: 36,
        hobbies: ["Comics", "Chess", "Legos"],
      },
    },
  ];
  
  function getAllHobbies(customers) {
    return customers.reduce((result, customer) => {
      return result.concat(customer.personal.hobbies);
    }, []);
  }
  console.log("All hobbies:", getAllHobbies(customers));

// Task5 Random reqemlerden ibaret array yaratmaq,en boyuk ve en kicik elemanlar,ortalamani,toplami ve elemanlarin kvadratini tapmaq(Math metodlarindan istifade ederek)
function randomStats(size) {
    let arr = Array.from({ length: size }, () => Math.floor(Math.random() * 100));
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let sum = arr.reduce((acc, num) => acc + num, 0);
    let average = sum / arr.length;
    let squares = arr.map(num => num * num);
  
    return { arr, max, min, sum, average, squares };
  }
  console.log("Random stats:", randomStats(10));

  