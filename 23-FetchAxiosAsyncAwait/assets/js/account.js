document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector("form");
    let name = document.querySelector("#name");
    let username = document.querySelector("#username");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let currentUser = users.find(user => user.isLogined);

    if (currentUser) {
        name.value = currentUser.name || "";
        username.value = currentUser.username || "";
        email.value = currentUser.email || "";
        password.value = currentUser.password || "";
    } else {
        alert("No logged-in user found.");
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let usernameRegex = /^[a-zA-Z0-9_-]{3,20}$/;
        let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%&]).{8,}$/;

        if (!usernameRegex.test(username.value)) {
            alert("Username must be 3-20 characters, only letters, numbers, _ or -");
            return;
        }

        if (!passwordRegex.test(password.value)) {
            alert("Password must be at least 8 characters with uppercase, lowercase, number, and special char");
            return;
        }

        let updatedUsers = users.map(user => {
            if (user.isLogined) {
                return {
                    name: name.value,
                    username: username.value,
                    email: email.value,
                    password: password.value
                };
            }
            return user;
        });

        localStorage.setItem("user", JSON.stringify(updatedUsers));

        alert("Information updated successfully!");

        window.location.href = "login.html";
    });
});
