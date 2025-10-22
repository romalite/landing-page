const cart = {};

document.addEventListener('DOMContentLoaded', () => {
    const cartPanel = document.getElementById('cartPanel');
    const overlay = document.getElementById('overlay');
    const cartToggle = document.getElementById('cartToggle');


    //open the cart
    cartToggle.addEventListener("click", () => {
      cartPanel.classList.add("open");
      overlay.classList.add("active");
    });
    //close the cart
    closeCart.addEventListener("click", closeCartPanel);
    overlay.addEventListener("click", closeCartPanel);

    function closeCartPanel(){
        cartPanel.classList.remove("opeen");
        overlay.classList.remove("active");
    }

    //adding a product to the cart
  
                    
                    window.addToCart = function(productName, productPrice) {
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
                    }
                    function updateCartDisplay(){
                        const cartList = document.getElementById('cart');
                        const totalDisplay = document.getElementById('cartTotal');
                        cartList.innerHTML = '';
                        let total = 0;

                        for (let product in cart){
                            const listItem = document.createElement('li');
                            listItem.innerText = `${product} - Quantity: ${cart[product].quantity}, Total Price: $${cart[product].totalPrice.toFixed(2)}`;
                            cartList.appendChild(listItem);
                            total += cart[product].totalPrice;
                        }
                        totalDisplay.textContent = total.toFixed(2);
                        console.log(cart);
                    };
                    
            
    // Clear cart functionality
    const clearCartBtn = document.getElementById('clearCartBtn');
    clearCartBtn.addEventListener('click', () => {
        for (let product in cart) {
            delete cart[product];
        }
        updateCartDisplay();


   
    });
});