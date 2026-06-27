
let products = [

{
id:1,
name:"iPhone 15",
price:70000,
image:"iphone15.jpg"
},

{
id:2,
name:"Samsung Galaxy S24",
price:65000,
image:"s24.jpg"
},

{
id:3,
name:"Nike Shoes",
price:5000,
image:"nike.jpg"
},

{
id:4,
name:"T-Shirt",
price:1500,
image:"tshirt.jpg"
},

{
id:5,
name:"Laptop",
price:55000,
image:"laptop.jpg"
},

{
id:6,
name:"Headphones",
price:3000,
image:"headphones.jpg"
},

{
id:7,
name:"Smart Watch",
price:4000,
image:"smartwatch.jpg"
},

{
id:8,
name:"Backpack",
price:2000,
image:"backpack.jpg"
},

{
id:9,
name:"Sunglasses",
price:1200,
image:"sunglasses.jpg"
},

{
id:10,
name:"Camera",
price:45000,
image:"camera.jpg"
}

];


let cart=[];



function displayProducts(){


let container=document.getElementById("product-container");


products.forEach(product=>{


container.innerHTML += `


<div class="card">


<img src="${product.image}">


<h3>${product.name}</h3>


<p>₹${product.price}</p>


<button onclick="addCart(${product.id})">

Add Cart

</button>


</div>


`;


});


}



function addCart(id){


let product=products.find(item=>item.id==id);


cart.push(product);


displayCart();


}



function displayCart(){


let cartBox=document.getElementById("cart-items");


cartBox.innerHTML="";


let total=0;



cart.forEach(item=>{


cartBox.innerHTML += `

<p>
${item.name} - ₹${item.price}
</p>

`;


total += item.price;


});



document.getElementById("total").innerHTML=total;


}



function showCart(){

document.querySelector(".cart").scrollIntoView();

}



displayProducts();
