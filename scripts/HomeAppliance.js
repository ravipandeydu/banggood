
import footer from "../components/footer.js";
//console.log(footer())
document.querySelector("#totalfooter").innerHTML = footer();

import navbar from "../components/navbar.js";
document.querySelector("#navbar").innerHTML = navbar();

var data = [
  {
    prodimage:
      "https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/18/4D/4293b559-a0f8-4318-b7e2-50215b8aebe8.jpg.webp",
    prodprice: "₹14806.71",
    prodorg_prc: "₹17,612.34",
    proddisc: " 16% Off",
    prodname: "brizhome air BH",
    id: 1,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/DE/9B/0e66baa5-9574-4076-9c78-3120d969b3d7.jpg.webp",
    prodprice: "₹2804.85",
    prodorg_prc: "₹1635.84",
    proddisc: " 232% Off",
    prodname: "hand held portable handy car",
    id: 2,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/40/59/70a5fdad-25a7-4451-8bb1-b2c2657439d8.jpg.webp",
    prodprice: "₹1479.97",
    prodorg_prc: "₹2,025.51",
    proddisc: " 232% Off",
    prodname: "replacement for xaomi mirza",
    id: 3,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/45/80/0225c84a-066c-418d-a9ed-367c806500b4.jpg.webp",
    prodprice: "₹1479.97",
    prodorg_prc: "₹2,025.51",
    proddisc: " 39% Off",
    prodname: "semi automatic",
    id: 4,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/3E/DA/bc934c32-9a4a-4b8f-b2c1-265580940999.jpg.webp",
    prodprice: "₹903.26",
    prodorg_prc: "₹1324.10",
    proddisc: " 32% Off",
    prodname: "replacement for panasonic",
    id: 5,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/F7/65/04b58847-45f8-4960-be90-0e8889246b5e.jpg.webp",
    prodprice: "₹2804.85",
    prodorg_prc: "₹2648.98",
    proddisc: " 23% Off",
    prodname: "loski air conditioner",
    id: 6,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/8E/AE/9e90ad75-1cdc-436b-bd04-5824ba9e1148.jpg.webp",
    prodprice: "₹2025.51",
    prodorg_prc: "₹3350.39",
    proddisc: " 35% Off",
    prodname: "hand held portable handy car",
    id: 7,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/AF/1C/f8c9ad7d-df9f-4d22-aa46-31a6732d5c54.png.webp",
    prodprice: "₹15586.05",
    prodorg_prc: "₹28,756.92",
    proddisc: " 18%% Off",
    prodname: "handheld vacume",
    id: 8,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/FD/16/80ba72c4-215b-43db-8da8-26a5c0f443de.jpg.webp",
    prodprice: "₹47539.04",
    prodorg_prc: "₹54,553.12",
    proddisc: " 13% Off",
    prodname: "robo vacume cleaner",
    id: 9,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/EC/F1/b9e3498c-9387-4fe0-942c-b5c488110d12.jpg.webp",
    prodprice: "₹9164.27",
    prodorg_prc: "₹12040.04",
    proddisc: " 24% Off",
    prodname: "portable air conditioner ",
    id: 10,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/45/2E/639e997b-4f84-43b1-a64a-61adaac35666.jpeg.webp",
    prodprice: "₹1090.30",
    prodorg_prc: "₹2025.51",
    proddisc: " 46% Off",
    prodname: "replacement kit",
    id: 11,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/BB/99/62206b72-d30f-4322-b47b-3149e7a356fd.jpg.webp",
    prodprice: "₹1324.10",
    prodorg_prc: "₹1635.84",
    proddisc: " 19% Off",
    prodname: "360 degree roateting sprots",
    id: 12,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/7D/E3/6068c8b0-99d7-414f-92b3-59d96a242c50.jpg.webp",
    prodprice: "₹14650.84",
    prodorg_prc: "₹15663.9",
    proddisc: " 32% Off",
    prodname: "bilzvolt vertical",
    id: 13,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/FC/8B/1f571374-9f9a-441a-8bb0-19c6e923a022.jpg.webp",
    prodprice: "₹2181.38",
    prodorg_prc: "₹2648.98",
    proddisc: " 18% Off",
    prodname: "portable air cooler fan min",
    id: 14,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/18/4D/4293b559-a0f8-4318-b7e2-50215b8aebe8.jpg.webp",
    prodprice: "₹14806.71",
    prodorg_prc: "₹17,612.34",
    proddisc: " 16% Off",
    prodname: "brizhome air BH",
    id: 1,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/DE/9B/0e66baa5-9574-4076-9c78-3120d969b3d7.jpg.webp",
    prodprice: "₹2804.85",
    prodorg_prc: "₹1635.84",
    proddisc: " 232% Off",
    prodname: "hand held portable handy car",
    id: 2,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/40/59/70a5fdad-25a7-4451-8bb1-b2c2657439d8.jpg.webp",
    prodprice: "₹1479.97",
    prodorg_prc: "₹2,025.51",
    proddisc: " 232% Off",
    prodname: "replacement for xaomi mirza",
    id: 3,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/45/80/0225c84a-066c-418d-a9ed-367c806500b4.jpg.webp",
    prodprice: "₹1479.97",
    prodorg_prc: "₹2,025.51",
    proddisc: " 39% Off",
    prodname: "semi automatic",
    id: 4,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/3E/DA/bc934c32-9a4a-4b8f-b2c1-265580940999.jpg.webp",
    prodprice: "₹903.26",
    prodorg_prc: "₹1324.10",
    proddisc: " 32% Off",
    prodname: "replacement for panasonic",
    id: 5,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/F7/65/04b58847-45f8-4960-be90-0e8889246b5e.jpg.webp",
    prodprice: "₹2804.85",
    prodorg_prc: "₹2648.98",
    proddisc: " 23% Off",
    prodname: "loski air conditioner",
    id: 6,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/8E/AE/9e90ad75-1cdc-436b-bd04-5824ba9e1148.jpg.webp",
    prodprice: "₹2025.51",
    prodorg_prc: "₹3350.39",
    proddisc: " 35% Off",
    prodname: "hand held portable handy car",
    id: 7,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/AF/1C/f8c9ad7d-df9f-4d22-aa46-31a6732d5c54.png.webp",
    prodprice: "₹15586.05",
    prodorg_prc: "₹28,756.92",
    proddisc: " 18%% Off",
    prodname: "handheld vacume",
    id: 8,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/FD/16/80ba72c4-215b-43db-8da8-26a5c0f443de.jpg.webp",
    prodprice: "₹47539.04",
    prodorg_prc: "₹54,553.12",
    proddisc: " 13% Off",
    prodname: "robo vacume cleaner",
    id: 9,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/EC/F1/b9e3498c-9387-4fe0-942c-b5c488110d12.jpg.webp",
    prodprice: "₹9164.27",
    prodorg_prc: "₹12040.04",
    proddisc: " 24% Off",
    prodname: "portable air conditioner ",
    id: 10,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/45/2E/639e997b-4f84-43b1-a64a-61adaac35666.jpeg.webp",
    prodprice: "₹1090.30",
    prodorg_prc: "₹2025.51",
    proddisc: " 46% Off",
    prodname: "replacement kit",
    id: 11,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/BB/99/62206b72-d30f-4322-b47b-3149e7a356fd.jpg.webp",
    prodprice: "₹1324.10",
    prodorg_prc: "₹1635.84",
    proddisc: " 19% Off",
    prodname: "360 degree roateting sprots",
    id: 12,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/7D/E3/6068c8b0-99d7-414f-92b3-59d96a242c50.jpg.webp",
    prodprice: "₹14650.84",
    prodorg_prc: "₹15663.9",
    proddisc: " 32% Off",
    prodname: "bilzvolt vertical",
    id: 13,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/FC/8B/1f571374-9f9a-441a-8bb0-19c6e923a022.jpg.webp",
    prodprice: "₹2181.38",
    prodorg_prc: "₹2648.98",
    proddisc: " 18% Off",
    prodname: "portable air cooler fan min",
    id: 14,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/18/4D/4293b559-a0f8-4318-b7e2-50215b8aebe8.jpg.webp",
    prodprice: "₹14806.71",
    prodorg_prc: "₹17,612.34",
    proddisc: " 16% Off",
    prodname: "brizhome air BH",
    id: 1,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/DE/9B/0e66baa5-9574-4076-9c78-3120d969b3d7.jpg.webp",
    prodprice: "₹2804.85",
    prodorg_prc: "₹1635.84",
    proddisc: " 232% Off",
    prodname: "hand held portable handy car",
    id: 2,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/40/59/70a5fdad-25a7-4451-8bb1-b2c2657439d8.jpg.webp",
    prodprice: "₹1479.97",
    prodorg_prc: "₹2,025.51",
    proddisc: " 232% Off",
    prodname: "replacement for xaomi mirza",
    id: 3,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/45/80/0225c84a-066c-418d-a9ed-367c806500b4.jpg.webp",
    prodprice: "₹1479.97",
    prodorg_prc: "₹2,025.51",
    proddisc: " 39% Off",
    prodname: "semi automatic",
    id: 4,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/3E/DA/bc934c32-9a4a-4b8f-b2c1-265580940999.jpg.webp",
    prodprice: "₹903.26",
    prodorg_prc: "₹1324.10",
    proddisc: " 32% Off",
    prodname: "replacement for panasonic",
    id: 5,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/F7/65/04b58847-45f8-4960-be90-0e8889246b5e.jpg.webp",
    prodprice: "₹2804.85",
    prodorg_prc: "₹2648.98",
    proddisc: " 23% Off",
    prodname: "loski air conditioner",
    id: 6,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/8E/AE/9e90ad75-1cdc-436b-bd04-5824ba9e1148.jpg.webp",
    prodprice: "₹2025.51",
    prodorg_prc: "₹3350.39",
    proddisc: " 35% Off",
    prodname: "hand held portable handy car",
    id: 7,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/AF/1C/f8c9ad7d-df9f-4d22-aa46-31a6732d5c54.png.webp",
    prodprice: "₹15586.05",
    prodorg_prc: "₹28,756.92",
    proddisc: " 18%% Off",
    prodname: "handheld vacume",
    id: 8,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/FD/16/80ba72c4-215b-43db-8da8-26a5c0f443de.jpg.webp",
    prodprice: "₹47539.04",
    prodorg_prc: "₹54,553.12",
    proddisc: " 13% Off",
    prodname: "robo vacume cleaner",
    id: 9,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/EC/F1/b9e3498c-9387-4fe0-942c-b5c488110d12.jpg.webp",
    prodprice: "₹9164.27",
    prodorg_prc: "₹12040.04",
    proddisc: " 24% Off",
    prodname: "portable air conditioner ",
    id: 10,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/45/2E/639e997b-4f84-43b1-a64a-61adaac35666.jpeg.webp",
    prodprice: "₹1090.30",
    prodorg_prc: "₹2025.51",
    proddisc: " 46% Off",
    prodname: "replacement kit",
    id: 11,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/BB/99/62206b72-d30f-4322-b47b-3149e7a356fd.jpg.webp",
    prodprice: "₹1324.10",
    prodorg_prc: "₹1635.84",
    proddisc: " 19% Off",
    prodname: "360 degree roateting sprots",
    id: 12,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/7D/E3/6068c8b0-99d7-414f-92b3-59d96a242c50.jpg.webp",
    prodprice: "₹14650.84",
    prodorg_prc: "₹15663.9",
    proddisc: " 32% Off",
    prodname: "bilzvolt vertical",
    id: 13,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/FC/8B/1f571374-9f9a-441a-8bb0-19c6e923a022.jpg.webp",
    prodprice: "₹2181.38",
    prodorg_prc: "₹2648.98",
    proddisc: " 18% Off",
    prodname: "portable air cooler fan min",
    id: 14,
    quantity: 1,
  },
];

display(data);
function display(data) {
  var parentOfCard = document.getElementById("jewelryTopRightBottom");
  parentOfCard.innerHTML = "";

  data.forEach(function (el) {
    var card = document.createElement("div");
    // var img2=document.createElement("img");
    // img2.setAttribute("src","https://cdn.pixabay.com/photo/2020/09/30/07/48/heart-5614865__340.png")
    var img = document.createElement("img");
    img.setAttribute("src", el.prodimage);
    img.addEventListener("click", function () {
      addToCart(el);
    });

    var prodprice = document.createElement("h2");
    var p = "";
    for (var i = 1; i < el.prodprice.length; i++) {
      p = p + el.prodprice[i];
    }
    p = parseFloat(+p).toFixed(2);
    var p1 = el.prodprice[0] + p;
    // .split("").slice(0,9).join("");
    prodprice.innerText = p1;
    var para = document.createElement("p");

    para.innerHTML =
      "<span>" + el.prodorg_prc + "</span> " + el.proddisc + "";
    // var prodorg_prc=document.createElement("span");
    // prodorg_prc.innerText=el.prodorg_prc;
    // para.append(prodorg_prc);
    // para.innerText=el.proddisc;
    var prodname = document.createElement("a");
    prodname.innerText = el.prodname;
    var review = document.createElement("a");
    review.innerText = "review";
    card.append(img, prodprice, para, prodname, review);

    parentOfCard.append(card);
    // img.addEventListener("mouseover", function( event ) {
    //     img2.style.zIndex=1;
    //     img.addEventListener("mouseout",function() {
    //        img2.style.zIndex=-1;
    //     });
    //   });
  });
}

// show cart img
// function showCart(el,index){
//     img2.style.zIndex=1;

//     // reset the color after a short delay
//     setTimeout(function() {
//         img2.style.zIndex=-1;
//     }, 500);
//   }

// search by prodprice
var btn = document
  .querySelector("#jewelryTopRightTop>button")
  .addEventListener("click", searchData);

function searchData() {
  var minPrice = document.querySelectorAll("#jewelryTopRightTop>input")[0]
    .value;
  var maxPrice = document.querySelectorAll("#jewelryTopRightTop>input")[1]
    .value;
  maxPrice = +maxPrice;
  minPrice = +minPrice;
  console.log(maxPrice, typeof maxPrice);
  var searchedDarta = [];
  data.forEach(function (el) {
    var prodprice = el.prodprice;

    var Actualprice = "";
    for (var i = 1; i < prodprice.length; i++) {
      Actualprice = Actualprice + prodprice[i];
    }
    Actualprice = +Actualprice;
    if (Actualprice >= minPrice && Actualprice <= maxPrice) {
      // console.log(prodprice)
      // console.log(Actualprice,typeof(Actualprice),maxPrice,minPrice)
      searchedDarta.push(el);
    }
  });
  if (searchedDarta.length <= 0) {
    display(data);
    alert("product between these prodprice is not exist");
  } else {
    display(searchedDarta);
  }
}

var cartData = JSON.parse(localStorage.getItem("atc")) || [];

document.querySelector(".number>h1").innerText = cartData.length;

// function addToCart(el) {
//   console.log("hello");
//   var id = el.id;
//   var cartData = JSON.parse(localStorage.getItem("atc")) || [];

//   document.querySelector(".number>h1").innerText = cartData.length;
//   var add = true;
//   cartData.forEach(function (el) {
//     if (id === el.id) {
//       add = false;
//     }
//   });
//   if (add) {
//     var p = "";
//     for (var i = 1; i < el.prodprice.length; i++) {
//       p = p + el.prodprice[i];
//     }
//     p = parseFloat(+p * 76.27).toFixed(2);
//     p = +p;
//     //var p1=(((el.prodprice)[0])+p);
//     var obj = {
//       prodimage: el.prodimage,
//       prodprice: p,
//       prodorg_prc: el.prodorg_prc,
//       proddisc: el.proddisc,
//       id: el.id,
//       prodname: el.prodname,
//       quantity: el.quantity,
//     };
//     cartData.push(obj);
//     localStorage.setItem("atc", JSON.stringify(cartData));
//     document.querySelector(".number>h1").innerText = cartData.length;
//     alert("item is added to the cart");
//   } else {
//     alert("item is already exist");
//   }
// }


function addToCart(el) {
  let price=el.prodprice;
  let p="";
  for(let i=1;i<price.length;i++){
   p=p+price[i];
  }
  el.prodprice=p;
     localStorage.setItem("fulldata",JSON.stringify(el))
     window.location.href = "women'sDisplay.html"
 }

// go to cart
document.getElementById("jewelryCart").addEventListener("click", function () {
  window.location.href = "cart.html";
});
