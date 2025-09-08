"use strict";

const newsletterSection = document.querySelector(".newsletter-container");
const successSection = document.querySelector(".success-container");
const form = document.querySelector(".form");
const emailInput = document.querySelector(".input");

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

  emailInput.classList.remove("error-general");
  errorMessage.textContent = " ";

  if (!isValidEmail(emailInput)) {
    emailInput.classList.add("error-general");
    errorMessage.textContent = "Valid email required";
    return;
  }

  form.reset();
};

form.addEventListener("submit", validationCheck);