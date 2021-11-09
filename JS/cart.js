import { products } from "./data.js";

let cart = [];
$(document).ready(() => {
  $(".add_cart").click((event) => {
    const id = event.target.id;
    products.map((item) => {
      if (item.id == id) {
        if (cart.length == 0) {
          const addItem = { ...item, orders: 1 };
          cart = [...cart, addItem];
        } else {
          cart.map((cartItem) => {
            if (cartItem.id == item.id) {
              if (cartItem.orders == 1) {
              return console.log("yes");
              }
            }else{
                const addItem = { ...item, orders: 1 };
                cart = [...cart, addItem];
            }
          });
        }

        console.log(cart);
      }
    });
  });
});
