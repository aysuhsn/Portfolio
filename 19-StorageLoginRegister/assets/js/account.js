document.addEventListener("DOMContentLoaded", function () {
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedInUser) {
      showToast("Zehmet olmasa evvelce giris edin", "error");
      setTimeout(() => {
        window.location.href = "login.html";
      }, 2000);
      return;
    }
  
    document.querySelector("#username").value = loggedInUser.username;
    document.querySelector("#email").value = loggedInUser.email;
  
    document.querySelector("#account-form").addEventListener("submit", function (e) {
      e.preventDefault();
  
      let username = document.querySelector("#username").value.trim();
      let email = document.querySelector("#email").value.trim();
      let password = document.querySelector("#password").value.trim();
  
      let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  
      if (password && !passwordRegex.test(password)) {
        return showToast("Parol zeifdir. Guclu parol daxil edin", "error");
      }
  
      let users = JSON.parse(localStorage.getItem("users")) || [];
      let index = users.findIndex(u => u.username === loggedInUser.username || u.email === loggedInUser.email);
      if (index !== -1) {
        users[index].username = username;
        users[index].email = email;
        if (password) users[index].password = password;
  
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("loggedInUser", JSON.stringify(users[index]));
  
        showToast("Melumatlar yenilendi", "success");
      }
      setTimeout(() => {
        window.location.href = "login.html";
      }, 1500);
    });
  
    function showToast(message, type) {
      Toastify({
        text: message,
        duration: 3000,
        gravity: "top",
        position: "right",
        style: {
          background: type === "success" ? "green" : "red",
        },
      }).showToast();
    }
  });
  