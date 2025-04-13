document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    let usernameOrEmail = document.querySelector("#username").value.trim();
    let password = document.querySelector("#password").value.trim();
  
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let usernameRegex = /^[a-zA-Z0-9_-]{3,20}$/;
    let passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  
    let loginKey = `loginAttempts_${usernameOrEmail}`;
    let lockoutKey = `lockout_${usernameOrEmail}`;
  
    let currentTime = new Date().getTime();
    let locked = localStorage.getItem(lockoutKey);
  
    if (locked && currentTime < locked) {
      let rest = Math.ceil((locked - currentTime) / 60000);
      return showToast(`Hesab muveqqeti olaraq bloklanib. ${rest} deqiqe sonra yeniden cehd edin`, "error");
    }
  
    if (!emailRegex.test(usernameOrEmail) && !usernameRegex.test(usernameOrEmail)) {
      return showToast("Zehmet olmasa duzgun username ve ya email daxil edin", "error");
    }
  
    if (!passwordRegex.test(password)) {
      return showToast("Parol en az 8 simvol olmalidir ve boyuk, kicik herf, reqem ve simvoldan ibaret olmalidir", "error");
    }
  
    let users = JSON.parse(localStorage.getItem("users")) || [];
  
    let matchedUser = users.find(
      (user) =>
        (user.username === usernameOrEmail || user.email === usernameOrEmail) && user.password === password
    );
  
    if (!matchedUser) {
      let attempts = Number(localStorage.getItem(loginKey)) || 0;
      attempts++;
      localStorage.setItem(loginKey, attempts);
  
      if (attempts >= 5) {
        let lockUntil = currentTime + 15 * 60 * 1000;
        localStorage.setItem(lockoutKey, lockUntil);
        localStorage.removeItem(loginKey);
        return showToast("Cox sayda sehv cehd. Hesab 15 deqiqelik bloklanib", "error");
      }
  
      return showToast(`Username/email ve ya parol sehvdir (${attempts}/5)`, "error");
    }
  
    localStorage.removeItem(loginKey);
    localStorage.removeItem(lockoutKey);
    localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));
    showToast("Giris ugurla tamamlandi!", "success");
  
    document.querySelector("#settings-icon").style.display = "block";
  
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1500);
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      document.querySelector("#settings-icon").style.display = "block";
    }
  
    document.querySelector("#settings-icon").addEventListener("click", function () {
      window.location.href = "account.html";
    });
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
  