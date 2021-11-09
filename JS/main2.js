import { products } from "./data.js";


$(document).ready(()=> {
    products.map((item,index)=>{
        $('#table_products').append(
            `
            <tr>
            <th scope="row">${index+1}</th>
            <td><img src= ${item.thumbnail} /></td>
            <td>${item.name}</td>
            <td>${item.category}</td>
            <td>${item.date}</td>
            <td>$${item.prize}</td>
            <td>
              <button type="button" id="${item.id}" class="btn btn-dark btn-sm add_cart">
                Add to cart
              </button>
              
            </td>
          </tr>
            `
        )
    })
})