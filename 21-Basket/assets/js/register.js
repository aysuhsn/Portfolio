document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector("form");
    let name = document.querySelector("#name");
    let username = document.querySelector("#username");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    let confirmpassword = document.querySelector("#confirmpassword");

    let users = JSON.parse(localStorage.getItem("users")) || [];

    form.addEventListener("submit", submit);

    function submit(e) {
        e.preventDefault();
        // task5  
        let uniqueUser = users.some(
            (item) => item.username === username.value || item.email === email.value
        );
        if (uniqueUser) {
            toast("Bu istifadeci adi ve ya e-poçt artiq movcuddur.");
            return;
        }
        // task1
        let usernameRegex = /^[a-zA-Z0-9_-]{3,20}$/;
        if (!usernameRegex.test(username.value)) {
            toast("İstifadeci adi minimum 3, maksimum 20 simvol olmalidir.");
            return;
        }
        // task2
        let emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email.value)) {
            toast("Zehmet olmasa duzgun e-poçt daxil edin.");
            return;
        }
         // task3
        let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%&]).{8,}$/;
        if (!passwordRegex.test(password.value)) {
            toast("Sifre minimum 8 simvol, 1 boyuk herf, 1 kicik herf, 1 reqem və 1 xususi simvol içermelidir.");
            let check1=document.querySelector(".check1")
            let check=document.querySelector(".check")
            check.style.display = "block";
            check.style.backgroundColor = "red";
            check1.style.display = "block";
            check1.style.backgroundColor = "red";
            return;
        } else {
            let check1=document.querySelector(".check1")
            let check=document.querySelector(".check")
            check.style.display = "block";
            check.style.backgroundColor = "green";
            check1.style.display = "block";
            check1.style.backgroundColor = "green";

        }
         // task4
        if (password.value !== confirmpassword.value) {
            toast("Sifreler uygun deyil.");
            return;
        }
        id=uuidv4()
        let newUser = {
            name: name.value,
            username: username.value,
            email: email.value,
            password: password.value,
            isLogined: false,
            id,
            wishlist: [],
        };

        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));

        toast("Qeydiyyat ugurla tamamlandi!");

        setTimeout(() => {
            window.location.href = "login.html";
        }, 1000);
    }

    let toast = (text) => {
        Toastify({
            text: text,
            duration: 3000,
            position: "right",
            style: {
                background: "linear-gradient(to right,rgb(83, 253, 233),rgb(162, 255, 1))",
            }
        }).showToast();
    };
});





