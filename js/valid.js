const form = document.getElementById("partner-form");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const companyInput = document.getElementById("company");
const nameInput = document.getElementById("name");
const submitBtn = form.querySelector("button");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\+?\d{10,15}$/;

function validateForm() {
  let valid = true;

  if (!emailInput.value.trim()) {
    emailInput.nextElementSibling.textContent = "Email обов'язковий!";
    valid = false;
  } else if (!emailRegex.test(emailInput.value.trim())) {
    emailInput.nextElementSibling.textContent = "Введіть коректний email";
    valid = false;
  } else {
    emailInput.nextElementSibling.textContent = "";
  }

  if (!phoneInput.value.trim()) {
    phoneInput.nextElementSibling.textContent = "Номер телефону обов'язковий!";
    valid = false;
  } else if (!phoneRegex.test(phoneInput.value.trim())) {
    phoneInput.nextElementSibling.textContent =
      "Введіть коректний номер телефону";
    valid = false;
  } else {
    phoneInput.nextElementSibling.textContent = "";
  }

  companyInput.nextElementSibling.textContent = "";
  nameInput.nextElementSibling.textContent = "";

  submitBtn.disabled = !valid;
}

[emailInput, phoneInput, companyInput, nameInput].forEach((input) => {
  input.addEventListener("input", validateForm);
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Дякуємо! Ваша заявка відправлена.");
  form.reset();
  submitBtn.disabled = true;
});
