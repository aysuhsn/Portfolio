let nameInput = document.querySelector("#name");
let usernameInput = document.querySelector("#username");
let emailInput = document.querySelector("#email");
let passwordInput = document.querySelector("#password");
let confirmPasswordInput = document.querySelector("#confirmpassword");
let form = document.querySelector("form");

let passwordIcon = document.createElement("span");
passwordInput.parentNode.appendChild(passwordIcon);

function showToast(message, color = "green") {
  Toastify({
    text: message,
    duration: 3000,
    gravity: "top",
    position: "right",
    backgroundColor: color,
  }).showToast();
}

let usernameRegex = /^[a-zA-Z0-9_-]{3,20}$/;
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%&]).{8,}$/;

passwordInput.addEventListener("input", function () {
  let password = passwordInput.value;
  if (passwordRegex.test(password)) {
    passwordIcon.textContent = "Strong";
    passwordIcon.style.color = "green";
  } else {
    passwordIcon.textContent = "Weak";
    passwordIcon.style.color = "red";
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let name = nameInput.value.trim();
  let username = usernameInput.value.trim();
  let email = emailInput.value.trim();
  let password = passwordInput.value.trim();
  let confirmPassword = confirmPasswordInput.value.trim();

  if (!name || !username || !email || !password || !confirmPassword) {
    showToast("Butun saheleri doldurun.");
    return;
  }

  if (!usernameRegex.test(username)) {
    showToast("Username 3-20 simvol olmali və yalniz herf, reqem, _ ve - ola biler.");
    return;
  }

  if (!emailRegex.test(email)) {
    showToast("Email duzgun formatda deyil.");
    return;
  }

  if (!passwordRegex.test(password)) {
    showToast("Sifre guclu olmalidir: en azi 8 simvol, boyuk və kiçik herf, reqem və xususi simvol olmalidir.");
    return;
  }

  if (password !== confirmPassword) {
    showToast("Sifreler eyni deyil.");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];
  let userExists = users.some(
    (user) => user.username === username || user.email === email
  );

  if (userExists) {
    showToast("Bu username və ya email artiq movcuddur.");
    return;
  }

  let id = uuidv4()
  let newUser = {
    name,
    username,
    email,
    password,
    id,
  };

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  showToast("Qeydiyyat ugurla tamamlandi!", "green");

  form.reset();
  passwordIcon.textContent = "";

  setTimeout(() => {
    window.location.href = "login.html";
  }, 1500);
});
