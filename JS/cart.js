import { products } from "./data.js";

let cart = [];
$(document).ready(() => {
  $(".add_cart").click((event) => {
    const id = event.target.id;
    products.map((item) => {
     if(item.id == id){
         let isAddedToCart = false
        cart.map((cartItem,index)=>{
            if(cartItem.id == id){
                cart[index] = {
                    ...cartItem,orders:cart[index].orders +=1
                }
                isAddedToCart = true
            }
          })
        if(isAddedToCart == false){
            const addItem = {
                ...item,orders:1 
            } 
            cart = [...cart, addItem]

        }
        let totalItems = 0
        cart.map((cartProduct) =>{
            totalItems += cartProduct.orders
            console.log(totalItems)
            $('#cart_item_count').text(totalItems);
        })
        console.log(cart);
     }
    });
  });
});
