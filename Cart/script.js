// const product = [
//   {
//     id: 0,
//     image: "../assets/images/product-1.jpg",
//     title: "Animi Dolor Pariatur",
//     price: 10.0,
//   },
//   {
//     id: 1,
//     image: "../assets/images/product-2.jpg",
//     title: "Art Deco Home",
//     price: 30.0,
//   },
//   {
//     id: 2,
//     image: "../assets/images/product-3.jpg",
//     title: "Artificial potted plant",
//     price: 40.0,
//   },
//   {
//     id: 3,
//     image: "../assets/images/product-4.jpg",
//     title: "Dark Green Jug",
//     price: 17.1,
//   },
//   {
//     id: 4,
//     image: "../assets/images/product-5.jpg",
//     title: "Drinking Glasses",
//     price: 21.0,
//   },
//   {
//     id: 5,
//     image: "../assets/images/product-6.jpg",
//     title: "Helen Chair",
//     price: 69.5,
//   },
//   {
//     id: 6,
//     image: "../assets/images/product-7.jpg",
//     title: "High Quality Glass Bottle",
//     price: 30.1,
//   },
//   {
//     id: 7,
//     image: "../assets/images/product-8.jpg",
//     title: "Living Room & Bedroom Lights",
//     price: 45.0,
//   },
// ];
// const categories = [
//   ...new Set(
//     product.map((item) => {
//       return item;
//     })
//   ),
// ];
// let i = 0;
// document.getElementById("root").innerHTML = categories
//   .map((item) => {
//     var { image, title, price } = item;
//     return (
//       `<div class='box'>
//             <div class='img-box'>
//                 <img class='images' src=${image}></img>
//             </div>
//         <div class='bottom'>
//         <p>${title}</p>
//         <h2>$ ${price}</h2>` +
//       "<button onclick='addtocart(" +
//       i++ +
//       ")'>Add to cart</button>" +
//       `</div>
//         </div>`
//     );
//   })
//   .join("");

// var cart = [];

// function addtocart(a) {
//   cart.push({ ...categories[a] });
//   displaycart();
// }
// function displaycart(a) {
//   let j = 0;
//   if (cart.length == 0) {
//     document.getElementById("cartItem").innerHTML = "Your cart is empty";
//   } else {
//     document.getElementById("cartItem").innerHTML = cart
//       .map((items) => {
//         var { image, title, price } = items;
//         return (
//           `<div class='cart-item'>
//           <div class='row-img'>
//                   <img class='rowimg' src=${image}>
//           </div>
//           <p style='font-size:12px;'>${title}</p>
//           <h2 style='font-size:15px;'>$ ${price}</h2>` +
//           "<i class='fa-solid fa-trash' onclick='delElement(" +
//           (j++) +
//           ")'></i></div>"
//         );
//       })
//       .join('');
//   }
// }


// chat gpt code

const product = [
  {
    id: 0,
    image: "../assets/images/product-1.jpg",
    title: "Animi Dolor Pariatur",
    price: 10.0,
  },
  {
    id: 1,
    image: "../assets/images/product-2.jpg",
    title: "Art Deco Home",
    price: 30.0,
  },
  {
    id: 2,
    image: "../assets/images/product-3.jpg",
    title: "Artificial potted plant",
    price: 40.0,
  },
  {
    id: 3,
    image: "../assets/images/product-4.jpg",
    title: "Dark Green Jug",
    price: 17.1,
  },
  {
    id: 4,
    image: "../assets/images/product-5.jpg",
    title: "Drinking Glasses",
    price: 21.0,
  },
  {
    id: 5,
    image: "../assets/images/product-6.jpg",
    title: "Helen Chair",
    price: 69.5,
  },
  {
    id: 6,
    image: "../assets/images/product-7.jpg",
    title: "High Quality Glass Bottle",
    price: 30.1,
  },
  {
    id: 7,
    image: "../assets/images/product-8.jpg",
    title: "Living Room & Bedroom Lights",
    price: 45.0,
  },
];

const categories = product;
let total = 0;
document.getElementById("root").innerHTML = categories
  .map((item, index) => {
    // var { image, title, price } = item;
    return (
      `<div class='box'>
        <div class='img-box'>
          <img class='images' src=${item.image} alt='${item.title}'></img>
        </div>
        <div class='bottom'>
          <p>${item.title}</p>
          <h2>$ ${item.price}</h2>
          <button onclick='addtocart(${index})'>Add to cart</button>
        </div>
      </div>`
    );
  })
  .join("");

var cart = [];
let cart2 = document.querySelector(".cartItem");
let total2 = document.querySelector("#total");
function addtocart(index) {
  console.log("added to cart");
  cart.push({ ...categories[index] });
  total = total + categories[index].price;
  displaycart();
  cart.map((item)=>{console.log(item)});
}

function displaycart() {
  document.getElementById("count").innerHTML=cart.length;
  console.log("display cart executed");
  if (cart.length == 0) {
    console.log("cart is empty");
    cart2.innerHTML = "Your cart is empty";
    total2.innerHTML="$ "+0+".00";
  } else {
    console.log("cart is not empty");
    // total = total+price;
    // document.getElementById("total").innerHTML="$ "+total+".00";
    total2.innerHTML = "$ "+total+".00";
    cart2.innerHTML = cart
      .map((item, index) => {
        // var { image, title, price } = item;
        return (
          `<div class="cart-item">
            <div class="row-img">
              <img class="rowimg" src="${item.image}" alt="${item.title}">
            </div>
            <p style='font-size:12px;'>${item.title}</p>
            <h2 style='font-size:15px;'>$ ${item.price}</h2>
            <i class='fa fa-trash' onclick='delElement(${index})'></i>
          </div>`
        );
      })
      .join('');
    // document.getElementsByClassName("cartItem").innerHTML = "cart is full";
  }
}

function delElement(index) {
  cart.splice(index, 1);
  total = total - categories[index].price;
  displaycart();
}