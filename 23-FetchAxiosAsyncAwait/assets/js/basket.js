document.addEventListener("DOMContentLoaded", () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let currentUser = users.find((user) => user.isLogined == true);
    let userIndex = users.findIndex((user) => user.id == currentUser.id)
    let basket = currentUser.basket;
    function createBasket() {
        let basketContainer = document.querySelector(".basket")
        basketContainer.innerHTML = ""
        basket.forEach(element => {
            let basketItem = document.createElement("div")
            basketItem.classList.add("basket-item")

            let basketImage = document.createElement("div")
            basketImage.classList.add("image")

            let image = document.createElement("img")
            image.src = element.image

            let basketTitle = document.createElement("h6")
            basketTitle.classList.add("title")
            basketTitle.textContent = element.title

            let basketCategory = document.createElement("p")
            basketCategory.classList.add("category")
            basketCategory.textContent = element.category

            let basketprice = document.createElement("p")
            basketprice.classList.add("price")
            basketprice.textContent = "$" + element.price

            let countArea = document.createElement("div")
            countArea.classList.add("count-area")

            let minusBtn = document.createElement("button")
            minusBtn.classList.add("minus-btn")
            minusBtn.textContent = "-"
            minusBtn.addEventListener("click", () => decrement(element.id, countElem, minusBtn, basketprice, element.price))

            let countElem = document.createElement("p")
            countElem.classList.add("count")
            countElem.textContent = element.count

            let plusBtn = document.createElement("button")
            plusBtn.classList.add("plus-btn")
            plusBtn.textContent = "+"
            plusBtn.addEventListener("click", () => increment(element.id, countElem, minusBtn, basketprice, element.price))

            let removeBtn = document.createElement("button")
            removeBtn.classList.add("btn", "btn-danger")
            removeBtn.textContent = "Remove"

            removeBtn.addEventListener("click", () => removeProduct(element.id))
            let allremove=document.querySelector(".all-remove")
            allremove.addEventListener("click", clearBasket)

            countArea.append(minusBtn, countElem, plusBtn)
            basketItem.append(basketImage, basketTitle, basketCategory, basketprice, countArea, removeBtn)
            basketImage.appendChild(image)
            basketContainer.append(basketItem,allremove)

        });



    }
    function increment(productId, countElem, minusbtnElem, priceElem, unitPrice) {
        let existProduct = basket.find((product) => product.id == productId)
        if (existProduct) {
            existProduct.count++;
            countElem.textContent = existProduct.count

            priceElem.textContent = "$" + (existProduct.count * unitPrice).toFixed(2)

            if (existProduct.count > 1) {
                minusbtnElem.removeAttribute("disabled")
            }
        }
        users[userIndex].basket = basket
        localStorage.setItem("users", JSON.stringify(users))
        total()
    }
    function decrement(productId, countElem, minusBtnElem, priceElem, unitPrice) {
        let existProduct = basket.find((product) => product.id == productId)
        if (existProduct && existProduct.count > 1) {
            existProduct.count--;
            countElem.textContent = existProduct.count
    
            priceElem.textContent = "$" + (existProduct.count * unitPrice).toFixed(2)
    
            if (existProduct.count === 1) {
                minusBtnElem.setAttribute("disabled", "true")
            }
        }
        users[userIndex].basket = basket
        localStorage.setItem("users", JSON.stringify(users))
        total()
    }
    function clearBasket() {
        basket = [] 
        users[userIndex].basket = basket 
        localStorage.setItem("users", JSON.stringify(users))
    
        document.querySelector(".basket").innerHTML = "" 
        total() 
    }
    
    function total() {
        let result = 0;

        basket.forEach(product => {
            result += product.count * product.price
        });
        let totalelement = document.querySelector(".total-price")
        totalelement.textContent = result.toFixed(2);
    }
    function removeProduct(productId) {
        let existProductIndex = basket.findIndex((product) => product.id == productId)

        if (existProductIndex != -1) {
            basket.splice(existProductIndex, 1)
            users[userIndex].basket = basket
            localStorage.setItem("users", JSON.stringify(users))
            toast("product deleted successfuly")
        }
        createBasket()
        total()
    }
    createBasket()
    total()

})
let toast = (text) => {
    Toastify({
        text: text,
        duration: 3000,
        position: "right",
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
    }).showToast();
};
