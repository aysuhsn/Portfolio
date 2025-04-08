// Task1
// 1 Elementler uzerinde kecid ile
document.querySelector('.heart').addEventListener('click', function () {
    let image = this.parentElement.querySelector('img').src;
    let card = this.parentElement.parentElement;
    let title = card.querySelector('.cardTitle').textContent;
    let text = card.querySelector('.cardText').textContent;
    let price = card.querySelector('.cardPrice').textContent;
  
    let product = {
      image,
      title,
      text,
      price
    };
  
    console.log("Product (parentElement usulu):", product);
  });
  

// Closest ile
document.querySelector('.heart').addEventListener('click', function () {
    let card = this.closest('.card');
    let image = card.querySelector('img').src;
    let title = card.querySelector('.cardTitle').textContent;
    let text = card.querySelector('.cardText').textContent;
    let price = card.querySelector('.cardPrice').textContent;
  
    let product = {
      image,
      title,
      text,
      price
    };
  
    console.log("Product from closest():", product);
  });

// 3
let card = document.querySelector('.card');

card.querySelector('.cardTitle').textContent = "Heading";
card.querySelector('.cardText').textContent = "Super comfy and light.";
card.querySelector('.cardPrice').textContent = "220 AZN";
card.querySelector('img').src = "https://mail.sun.az/uploads/posts/2021-07/1625633230_loading.az_i-6.jpg"; 


