

import footer from "../components/footer.js";
//console.log(footer())
document.querySelector("#totalfooter").innerHTML = footer();

import navbar from "../components/navbar.js";
document.querySelector("#navbar").innerHTML = navbar();

var data = [
  {
    prodimage:
      "https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/B4/8D/41da7abb-aa68-43fc-b169-41191b8fb4db.jpg.webp",
    prodprice: "₹11455.54",
    prodorg_prc: "₹24548.47",
    proddisc: "53% Off",
    prodname: "[Face Unlock]TICWRIS MAX 2.86 Inchl",
    quantity: 1,
    id: "phone" + 1,
  },
  {
    prodimage:
      "https://imgaz1.staticbg.com/thumb/gallery/oaupload/ser1/banggood/images/56/1C/b5d43678-d19e-44c2-98f4-048c8f3bdc00.jpg.webp",
    prodprice: "₹1275.78",
    prodorg_prc: " ₹6779.49",
    proddisc: "14% Off",
    prodname: "W2025 Rugged Feature Phone Dual",
    quantity: 1,
    id: "phone" + 2,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/99/C3/85a2b7f1-9062-4642-aa36-61345d8a6383.jpg.webp",
    prodprice: "₹5844.28",
    prodorg_prc: "₹86.99",
    proddisc: "14% Off",
    prodname: "SOYES XS11 3G Mini Smart Android",
    quantity: 1,
    id: "phone" + 3,
  },
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/DF/72/6c64aa2e-f788-43df-a322-9da6b9251d75.jpg.webp",
    prodprice: "₹1869.64",
    prodorg_prc: "₹2259.31",
    proddisc: "17% Off",
    prodname: "Bakeey for Xiaomi Redmi Note 10",
    quantity: 1,
    id: "phone" + 4,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/8F/83/a1e9f70f-5f78-494d-a856-24f3217e18b9.jpg.webp",
    prodprice: "₹6896.39",
    prodorg_prc: "₹19092.30",
    proddisc: "64% Off",
    prodname: "SOYES XS12 4G Mini Smart Phone",
    quantity: 1,
    id: "phone" + 5,
  },
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/BD/CF/c1587418-354b-449f-978d-3bfb4d776cb9.jpg.webp",
    prodprice: "₹2493.1",
    prodorg_prc: "₹5454.61",
    proddisc: "54% Off",
    prodname: "BlitzWolf® BW-BTS6 bluetooth 5.0",
    quantity: 1,
    id: "phone" + 6,
  },
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/7B/2E/ed015f69-6014-490b-889f-cce0e0590b57.jpg.webp",
    prodprice: "₹1168.23",
    prodorg_prc: "₹2259.31",
    proddisc: "48% Off",
    prodname: "Bakeey for Doogee S88 Pro/ Doogee",
    quantity: 1,
    id: "phone" + 7,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/4F/37/3bb899e9-db6f-486f-b1b0-ddc059b25b2c.jpg.webp",
    prodprice: "₹2259.319",
    prodorg_prc: "₹5454.61",
    proddisc: "59% Off",
    prodname: "SENBONO GTS3 1.69 inch HD Full",
    quantity: 1,
    id: "phone" + 8,
  },
  {
    prodimage:
      "https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/AB/E9/b11a11dd-8848-427b-8f7a-e5427eae0996.jpg.webp",
    prodprice: "₹2415.18",
    prodorg_prc: "₹4441.47",
    proddisc: "46% Off",
    prodname: "BlitzWolf® BW-BR7 NFC-enabled",
    quantity: 1,
    id: "phone" + 9,
  },
  {
    prodimage:
      "https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/03/5B/bd0f503f-74c4-41a1-87d4-042339146293.jpg.webp",
    prodprice: "₹1324.10",
    prodorg_prc: "₹2103.44",
    proddisc: "37% Off",
    prodname: "enovo QT81 TWS bluetooth 5.0",
    quantity: 1,
    id: "phone" + 10,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/2C/CE/5805d750-731a-47ea-85f7-52c6cd2fcbf2.jpg.webp",
    prodprice: "₹20964.28",
    prodorg_prc: "₹33433.74",
    proddisc: "37% Off",
    prodname: "Xiaomi Redmi Note 11 Global",
    quantity: 1,
    id: "phone" + 11,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/66/1C/9df983f6-3d67-4c3f-a8bf-e9ea68efceb5.jpg.webp",
    prodprice: "₹2337.24",
    prodorg_prc: "₹3272.45",
    proddisc: "29% Off",
    prodname: "Ulefone for Ulefone Power ARMOR",
    quantity: 1,
    id: "phone" + 12,
  },
  {
    prodimage:
      "https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/A2/51/a4bb6179-0f1b-4d16-9544-0d59c2fe546b.jpg.webp",
    prodprice: "₹26419.67",
    prodorg_prc: "₹3272.45",
    proddisc: "29% Off",
    prodname: "Xiaomi Redmi 9A Global Version",
    quantity: 1,
    id: "phone" + 13,
  },
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/B4/7C/8b5d1473-7564-43ff-a629-565fa3df6366.jpg.webp",
    prodprice: "₹4207.66",
    prodorg_prc: "₹9351.32",
    proddisc: "55% Off",
    prodname: "OKMAT APPLLP 6 1.6 inch",
    quantity: 1,
    id: "phone" + 14,
  },
  {
    prodimage:
      "https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/B5/BB/26e3f029-f7d7-4ae3-bf0b-d6f4563ae3b1.jpg.webp",
    prodprice: "₹1557.90",
    prodorg_prc: "₹2337.24",
    proddisc: "33% Off",
    prodname: "B126 bluetooth 5.0 Speaker Alarm",
    quantity: 1,
    id: "phone" + 15,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/9C/B3/e8fe90f9-e578-4584-b9a8-8740814ed989.jpg.webp",
    prodprice: "₹20964.28",
    prodorg_prc: "₹32026.99",
    proddisc: "37% Off",
    prodname: "POCO X4 Pro 5G Global Version",
    quantity: 1,
    id: "phone" + 16,
  },
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/74/6B/03a9bd5c-c732-4c23-b1e7-6f56288df514.jpg.webp",
    prodprice: "₹1109.00",
    prodorg_prc: "₹2258.53",
    proddisc: "51% Off",
    prodname: "Bakeey for Umidigi A11 Pro Max",
    quantity: 1,
    id: "phone" + 17,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/09/79/399e192a-d21c-4008-979c-5a840f8c857f.jpg.webp",
    prodprice: "₹26419.67",
    prodorg_prc: "₹44344.52",
    proddisc: "40% Off",
    prodname: "POCO F3 Global Version 6.67 inch",
    quantity: 1,
    id: "phone" + 18,
  },
  {
    prodimage:
      "https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/9A/C7/66f35372-1054-4cf5-aa60-80e108cb49bb.jpg.webp",
    prodprice: "₹7792.63",
    prodorg_prc: "₹11845.21",
    proddisc: "34% Off",
    prodname: "SOYES S10-H 4G Mini SmartPhone",
    quantity: 1,
    id: "phone" + 19,
  },
  {
    prodimage:
      "https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/3C/15/aed33e1a-e121-4b31-8b08-c0a666b30a6d.jpg.webp",
    prodprice: "₹1109.00",
    prodorg_prc: "₹2258.53",
    proddisc: "51% Off",
    prodname: "TG TG621 bluetooth 5.0 Speaker",
    quantity: 1,
    id: "phone" + 20,
  },
  {
    prodimage:
      "https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/B4/8D/41da7abb-aa68-43fc-b169-41191b8fb4db.jpg.webp",
    prodprice: "₹11455.54",
    prodorg_prc: "₹24548.47",
    proddisc: "53% Off",
    prodname: "[Face Unlock]TICWRIS MAX 2.86 Inchl",
    quantity: 1,
    id: "phone" + 21,
  },
  {
    prodimage:
      "https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/A2/51/a4bb6179-0f1b-4d16-9544-0d59c2fe546b.jpg.webp",
    prodprice: "₹26419.67",
    prodorg_prc: "₹44344.52",
    proddisc: "40% Off",
    prodname: "Xiaomi Redmi 9A Global Version",
    quantity: 1,
    id: "phone" + 22,
  },
  {
    prodimage:
      "https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/AB/E9/b11a11dd-8848-427b-8f7a-e5427eae0996.jpg.webp",
    prodprice: "₹2415.18",
    prodorg_prc: "₹4441.47",
    proddisc: "46% Off",
    prodname: "BlitzWolf® BW-BR7 NFC-enabled",
    quantity: 1,
    id: "phone" + 23,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/4F/37/3bb899e9-db6f-486f-b1b0-ddc059b25b2c.jpg.webp",
    prodprice: "₹2259.319",
    prodorg_prc: "₹5454.61",
    proddisc: "59% Off",
    prodname: "SENBONO GTS3 1.69 inch HD Full",
    quantity: 1,
    id: "phone" + 24,
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
  // console.log("hello");
  // var id = el.id;
  // var cartData = JSON.parse(localStorage.getItem("cart")) || [];

  // document.querySelector(".number>h1").innerText = cartData.length;
  // var add = true;
  // cartData.forEach(function (el) {
  //   if (id === el.id) {
  //     add = false;
  //   }
  // });
  // if (add) {
  //   var p = "";
  //   for (var i = 1; i < el.prodprice.length; i++) {
  //     p = p + el.prodprice[i];
  //   }
  //   p = parseFloat(+p * 76.27).toFixed(2);
  //   p = +p;
  //   //var p1=(((el.prodprice)[0])+p);
  //   var obj = {
  //     prodimage: el.prodimage,
  //     prodprice: p,
  //     prodorg_prc: el.prodorg_prc,
  //     proddisc: el.proddisc,
  //     id: el.id,
  //     prodname: el.prodname,
  //     quantity: el.quantity,
  //   };
  //   cartData.push(obj);
  //   localStorage.setItem("cart", JSON.stringify(cartData));
  //   document.querySelector(".number>h1").innerText = cartData.length;
  //   alert("item is added to the cart");
  // } else {
  //   alert("item is already exist");
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
