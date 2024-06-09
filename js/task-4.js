const loginForm = document.querySelector(".login-form");
const emailInput = loginForm.elements.email;
const passwordInput = loginForm.elements.password;
const button = document.querySelector('button[type="submit"]');
button.innerHTML = "Log in";

const emailInput = document.getElementById("emailInput");

// Додаємо обробник подій для події mouseover
emailInput.addEventListener("mouseover", function () {
  // Змінюємо колір рамки на #000 (чорний)
  this.style.border = "1px solid #000";
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (!emailValue || !passwordValue) {
    alert("All form fields must be filled in");
    return;
  }

  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(formData);

  loginForm.reset();
});
