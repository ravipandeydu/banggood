    import navbar from "../components/navbar.js"
    document.querySelector("#navbar").innerHTML = navbar()



    let data = JSON.parse(localStorage.getItem("fulldata"))

    totaldata(data)

    function totaldata(data){
    
        let div = document.createElement("div")

        let img = document.createElement("img")
        img.src = data.prodimage
        img.id = "prodsimg"

        let subdiv = document.createElement("div")
        let name = document.createElement("h2")
        name.innerText = data.prodname
        
        let lowest = document.createElement("h3")
        lowest.innerText = "LOWEST PRICE IN 90 DAYS"
        lowest.id="low"
        

        let totalprice = document.createElement("div")
        totalprice.id = "allprice"
        let sale = document.createElement("h5")
        sale.innerText = "SALE"
        let price = document.createElement("h1")
         price.innerText =`₹${data.prodprice}`
        let orgprc = document.createElement("h3")
        orgprc.innerText = data.prodorg_prc;
        let disc = document.createElement("h4")
        disc.innerText = data.proddisc
        totalprice.append(sale,price,orgprc,disc)
       
        let newuse = document.createElement("span")
        newuse.innerText = "₹317.59 New User Allowance"
        newuse.id = "newuse"
        
        let hr = document.createElement("hr")
        
        let con = document.createElement("div")
        con.id = "con"
        let ship =document.createElement("p")
        ship.id ="ship"
        ship.innerText = "Ship From: "
        let which = document.createElement("p")
        which.id = "which" 
        which.innerText = "CN"
        con.append(ship,which)
        
        let down = document.createElement("span")
        down.id = "down"
        down.innerText = "CN"
        
        

        let qty = document.createElement("p")
        qty.id="qty"
        qty.innerText = "QTY: "
        
        let sub = document.createElement("p")
        sub.innerText = "-"
        sub.id = "sub"
        sub.addEventListener("click",function(){
            subitem()
        })
        let quan = document.createElement("p")
        quan.innerHTML = 1
        quan.id = "quan"
        let plus = document.createElement("p")
        plus.innerText = "+" 
        plus.id = "plus"
        plus.addEventListener("click",function(){
            additem()
        })
        let stock = document.createElement("h6")
        stock.id ="stock"
        stock.innerText = "In Stock."
        let hrs  = document.createElement("p")
        hrs.id = "hrs"
        hrs.innerText = "Ships in 24 hours"
         let fullqty = document.createElement("div")
         fullqty.id = "fullqty" 
         fullqty.append(sub,quan,plus,stock,hrs)
         
         let totalbuts = document.createElement("div")
         let but1 = document.createElement("button")
         but1.id = "but1"
         but1.innerText = "Check Location"
         but1.addEventListener("click",buyone)
         let but2 = document.createElement("button")
         but2.id = "but2"
         but2.innerText = "Add to Cart"
         but2.addEventListener("click",function(){
            addtocart(data)
         })
         totalbuts.append(but1,but2)

        subdiv.append(name,lowest,totalprice,newuse,hr,con,down,qty,fullqty,totalbuts)
        div.append(img,subdiv)
        document.querySelector("#show").append(div)
    }
    
    let cart=JSON.parse(localStorage.getItem("atc")) || [];
   function addtocart(data){
    
    cart.push(data)
    localStorage.setItem("atc",JSON.stringify(cart))
    alert("Congratulation You item is added to cart")
   }
   let i =  0;
   let alltotal = data.quantity
   let allprices = data.prodprice
   function subitem(){
    //console.log("click me")

    i--;
    if(i==0){
        alert("Item's Quantity can't be Remove to less than 1")
    }
    else{
        document.querySelector("#quan").innerText = i
        data.quantity = i
        // data.prodprice = allprices * i
    }
   }
   
  
   function additem(){
    //console.log("click me")

    i++;
    
        
        document.querySelector("#quan").innerText = i
        data.quantity = i
        // data.prodprice = allprices * i
      
   }
   
   function buyone(){
    alert("Allow Current Location to access your Location")

    setTimeout(function(){
       alert("Yes, the Item will be delivered in your area")
    },3000)
   }
   