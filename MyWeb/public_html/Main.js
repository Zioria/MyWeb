/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
let number = 0;
function addOrder(Item){
    alert("Your wish is granted")
    number++;
    document.getElementById("cart").innerHTML = Item+": "+ number
}

