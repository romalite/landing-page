"use strict";

const cart = {};

document.addEventListener("DOMContentLoaded", () => {
  const cartPanel = document.getElementById("cartPanel");
  const overlay = document.getElementById("overlay");
  const cartToggle = document.getElementById("cartToggle");
  const closeCart = document.getElementById("closeCart");

  // Открыть корзину
  cartToggle.addEventListener("click", () => {
    cartPanel.classList.add("open");
    overlay.classList.add("active");
  });

  // Закрыть корзину
  closeCart.addEventListener("click", closeCartPanel);
  overlay.addEventListener("click", closeCartPanel);

  function closeCartPanel() {
    cartPanel.classList.remove("open");
    overlay.classList.remove("active");
  }

  // Добавление товара
  window.addToCart = function (productName, productPrice) {
    if (cart[productName]) {
      cart[productName].quantity += 1;
      cart[productName].totalPrice += productPrice;
    } else {
      cart[productName] = {
        quantity: 1,
        totalPrice: productPrice
      };
    }
    updateCartDisplay();
  };

  // Обновление корзины
  function updateCartDisplay() {
    const cartList = document.getElementById("cart");
    const totalDisplay = document.getElementById("cartTotal");
    cartList.innerHTML = "";

    let total = 0;
    for (let product in cart) {
      const li = document.createElement("li");
      li.textContent = `${product} — Quantity: ${cart[product].quantity}, Price: — $${cart[product].totalPrice.toFixed(2)}`;
      cartList.appendChild(li);
      total += cart[product].totalPrice;
    }

    totalDisplay.textContent = total.toFixed(2);
    console.log(cart);
  }

  // Clear cart functionality
    const clearCartBtn = document.getElementById('clearCartBtn');
    clearCartBtn.addEventListener('click', () => {
        for (let product in cart) {
            delete cart[product];
        }
        updateCartDisplay();


   
    });
});
