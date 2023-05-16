"use strict";

let inputFieldText = document.querySelector(".input-Class");
let buttonAdd = document.querySelector(".btn-add");
let ulItem = document.querySelector(".ul-list");
let ClearAll = document.querySelector(".clearAllitems");



let formElement = document.querySelector(".form-element");

formElement.addEventListener("submit", function (event) {
  event.preventDefault();

  let inputValue = inputFieldText.value;
  if (inputValue == " ") {
    return;
  }


  let liElement = document.createElement("li");

  let btnDelete = document.createElement("button");
  btnDelete.textContent = "Delete This Item";
  btnDelete.addEventListener("click", function () {
    liElement.remove();
  });

  liElement.textContent = inputValue;

  liElement.appendChild(btnDelete);
  ulItem.appendChild(liElement);

  
  inputFieldText.value = " ";
});

ClearAll.addEventListener("click", function () {
  ulItem.innerHTML = " ";
});

// burger bar
let navigationElement = document.getElementById("navigationElement");
let burgerElement = document.getElementById("toggleButton");
let navulelement= document.getElementById('nav-ul');

burgerElement.addEventListener("click", function () {
  navigationElement.classList.toggle("activeNav");
  burgerElement.classList.toggle("activeLine");
  navulelement.classList.toggle('inactive');
});



