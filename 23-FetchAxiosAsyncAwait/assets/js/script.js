document.addEventListener("DOMContentLoaded", async () => {
  let products = (await axios("http://localhost:3000/products")).data;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let currentUser = users.find((user) => user.isLogined == true);
    let loginBtn = document.querySelector(".daxilol");
    let basket=currentUser?.basket || []
    let login = document.querySelector(".login");
    let register = document.querySelector(".register");
    let logout = document.querySelector(".logout");
    let userBtn = document.querySelector(".username");
    userBtn.textContent = currentUser?.username

    let logoutUserFunction = () => {
        currentUser.isLogined = false;
        localStorage.setItem("users", JSON.stringify(users))
        userBtn.textContent = "username"
        updateStatus()
    }
    function updateStatus() {
        if (currentUser) {
            login.classList.add("d-none");
            register.classList.add("d-none");
            logout.classList.remove("d-none");
            userBtn.textContent = currentUser.username;
            loginBtn.textContent = "Çıxış";
            
        } else {
            login.classList.remove("d-none");
            register.classList.remove("d-none");
            logout.classList.add("d-none");
        }

    }
    updateStatus()
    logout.addEventListener("click", logoutUserFunction)

    function createUsercard() {
        products.forEach((product) => {
            let card = document.createElement("div")
            card.classList.add("card")
            card.style.cursor = "pointer"
            card.addEventListener("click", () => {
              window.location.href = `product-detail.html?id=${product.id}`
            })

            let cardImage = document.createElement("div")
            cardImage.classList.add("card-image")

            let heartIcon = document.createElement("i")
            heartIcon.classList.add("fa-regular", "fa-heart", "card-heart")

            card.appendChild(heartIcon)
            heartIcon.addEventListener("click", (e) =>{
              e.stopPropagation();
              toggleuserwishlist(product.id, heartIcon);
            }
              )
            
            let img = document.createElement("img")
            img.src =`${product.image}`

            let cardContent = document.createElement("div")
            cardContent.classList.add("card-content")


            let cardTitle = document.createElement("h2")
            cardTitle.classList.add("card-title")
            cardTitle.textContent = `${product.title.slice(0, 20)}...`

            let cardCategory = document.createElement("p")
            cardCategory.classList.add("card-category")
            cardCategory.textContent = `${product.category}`

            let cardFooter = document.createElement("div")
            cardFooter.classList.add("card-footer")

            let cardPrice = document.createElement("span")
            cardPrice.classList.add("card-price")
            cardPrice.textContent = `$${product.price}`

            let cardRating = document.createElement("div")
            cardRating.classList.add("card-rating")

            let rate = document.createElement("span")
            rate.textContent = `${product.rating.rate}`
            let reviews = document.createElement("span")
            reviews.textContent = `${product.rating.count}`

            let addBtn = document.createElement("button")
            addBtn.classList.add("addbtn")
            addBtn.textContent = "Add Basket"
            addBtn.style.width = "100%"
            addBtn.style.padding = "10px"
            addBtn.style.backgroundColor = "blue"
            addBtn.style.color = "white"
            addBtn.style.border = "none"
            addBtn.addEventListener("click", (e) => {
              e.stopPropagation();
              addBasket(product.id)
            })


            cardRating.append(rate, reviews)
            cardFooter.append(cardPrice, cardRating)
            cardContent.append(cardTitle, cardCategory, cardFooter, addBtn)
            cardImage.appendChild(img)
            card.append(cardImage, cardContent)

            let cards = document.querySelector(".cards")

            cards.append(card)

        })
    }

    function toggleuserwishlist(productId, heartIcon) {
        if (!currentUser) {
            toast("please login to add wishlisst")
            setTimeout(() => {
                window.location.href = "login.html"
            }, 3000);
        }
        let userIndex = users.findIndex((user) => user.id == currentUser.id)

        let currentProduct = currentUser.wishlist.some((item) => item.id == productId)
        if (currentProduct) {
            let currentProductIndex = currentUser.wishlist.findIndex((product) => product.id == productId)
            currentUser.wishlist.splice(currentProductIndex, 1)
            toast("product removed wishlist")

            heartIcon.classList.add("fa-regular")
            heartIcon.classList.remove("fa-solid")

        } else {
            let addProduct = products.find((product) => product.id == productId)
            currentUser.wishlist.push(addProduct)
            users[userIndex] = currentUser
            localStorage.setItem("users", JSON.stringify(users))
            toast("product add wishlist")
            heartIcon.classList.remove("fa-regular")
            heartIcon.classList.add("fa-solid")
        }
        users[userIndex].wishlist = currentUser.wishlist
        localStorage.setItem("users", JSON.stringify(users))
    }

    function addBasket(productId) {
        if (!currentUser) {
            toast("please login to basket")
            setTimeout(() => {
                window.location.href = "login.html"
            }, 3000);
        }

        let existProduct=basket.find((product)=>product.id==productId)
        let userIndex = users.findIndex((user) => user.id == currentUser.id)

        if(!existProduct){ 
            let product=products.find((item)=>item.id==productId)
            basket.push({...product,count:1})
            toast("product add successfully")

        }else{
            existProduct.count++;
            toast("product add successfully")
        }
        users[userIndex].basket = basket
        localStorage.setItem("users", JSON.stringify(users))
        
    }
    function basketCount(){
        let result=basket.reduce((acc,product)=>acc+product.count,0)
        let countIcon=document.querySelector(".wrapper sup")
        countIcon.textContent=result
    }
    basketCount()
    updateStatus()
    createUsercard()
})
let toast = (text) => {
    Toastify({
        text: `${text}`,
        duration: 3000,
        position: "right",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right,rgb(83, 253, 233),rgb(162, 255, 1))",
        },
        onClick: function () { }
    }).showToast();
}
