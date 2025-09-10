"use strict";

const newsletterSection = document.querySelector(".newsletter-container");
const successSection = document.querySelector(".success-container");
const form = document.querySelector(".form");
const emailInput = document.querySelector(".input");
const dismissButton = document.querySelector(".dismiss-btn");

const createErrorMessage = (input) => {
  let errorElement = input.nextElementSibling;

  if (!errorElement || !errorElement.classList.contains("error-message")) {
    errorElement = document.createElement("p");
    errorElement.classList.add("error-message");
    input.parentElement.insertBefore(errorElement, input.nextElementSibling);
  }
  return errorElement;
};

const isValidEmail = (email) => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email.value.trim());
};

const validationCheck = (e) => {
  e.preventDefault();

  const errorMessage = createErrorMessage(emailInput);
  const userEmail = emailInput.value.trim();

  emailInput.classList.remove("error-general");
  errorMessage.textContent = " ";

  if (!isValidEmail(emailInput)) {
    emailInput.classList.add("error-general");
    errorMessage.textContent = "Valid email required";
    return;
  } else {
    newsletterSection.classList.add("hidden");
    successSection.classList.remove("hidden");
    successSection.querySelector("b").textContent = userEmail;
  }

  form.reset();
};

const dismissMessage = () => {
  successSection.classList.add("hidden");
  newsletterSection.classList.remove("hidden");
}

form.addEventListener("submit", validationCheck);
dismissButton.addEventListener("click", dismissMessage);