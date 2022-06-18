var totalItems = 0;
var totalPrice = 0;
var isPromoCodeApplied = false;

var data = JSON.parse(localStorage.getItem("atc")) || [] ;

var product = document.querySelector(".productcont");

data.forEach((element,i) => {

    totalItems += element.quantity;
    totalPrice += element.prodprice;

    var productDiv = document.createElement("div")
    productDiv.classList.add("product")

    var imgDiv = document.createElement("div")
    imgDiv.classList.add("imgDiv")

    var img = document.createElement("img")
    img.setAttribute("src",element.prodimage)

    var detailsDiv = document.createElement("div")
    detailsDiv.classList.add("detailsDiv")

    var productName = document.createElement("h3")
    productName.classList.add("productName")
    productName.innerText = element.prodname;

    var qty = document.createElement("h4")
    qty.innerText = "QTY : " ;
    let qtyInput = document.createElement("input");
    qtyInput.setAttribute("type", "number");
    qtyInput.setAttribute("id", "qty");
    qtyInput.setAttribute("min", 1);
    qtyInput.setAttribute("value", element.quantity);
    qtyInput.setAttribute("onchange", "updatePrice()");

    var price = document.createElement("h3")
    price.innerText = "price : $"  + element.prodprice;
    price.classList.add("price")
    var deleteItem = document.createElement("button")
    deleteItem.innerText = "DELETE"
    deleteItem.addEventListener("click",function (){
        var filteredItem = data.filter(function(cur,i){
            return cur.id != element.id
        })
        localStorage.setItem("atc",JSON.stringify(filteredItem))
        window.location.reload();
    })  
qty.appendChild(qtyInput)
    imgDiv.append(img)
    detailsDiv.append(productName,qty,price,deleteItem)
    productDiv.append(imgDiv,detailsDiv)
    product.append(productDiv)

   
});


document.querySelector(".totalItem").innerText = totalItems;
showTotalCartValue(totalPrice)

document.querySelector("#checkout").addEventListener("click",goToPayment);

function goToPayment() {
    alert("Confirm Payment ?");
}

document.querySelector("#applyPromo").addEventListener("click",addPromoCode);

function addPromoCode() {
    var promocode = document.querySelector("#promoCode").value;
    console.log(promocode);

    if(promocode == "masai30" && isPromoCodeApplied == false)
    {
        isPromoCodeApplied = true;
        totalPrice = 0.7 * Number(totalPrice);
        showTotalCartValue(totalPrice);
    } else if(promocode == "masai30" && isPromoCodeApplied == true)
    {
        alert("Promocode already applied");
    } else {
        alert("Promocode is Wrong");
    }
}

function showTotalCartValue(totalPrice) {
    document.querySelector(".totalPrice").innerText = "$"+totalPrice;
}


document.querySelector("#emptyCart").addEventListener("click",emptyCart);

function emptyCart() {
    localStorage.removeItem('atc');
    window.location.reload();
}

  let checkout = document.querySelector("#checkout");
  checkout.addEventListener("click", () => {
    checkout.innerText = "Loading...";
    setTimeout(() => {
      window.location.href = "checkout.html";
    }, 3000);
  });
  