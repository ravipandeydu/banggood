

var detailobj = JSON.parse(localStorage.getItem('detail'))

let addcartarr = JSON.parse(localStorage.getItem('atc')) || []

display(detailobj)

function display(data){
    let detailbox = document.querySelector('#detailbox')

    let imagebox = document.createElement('div')

    let image = document.createElement('img')
    image.src = data.prodimage

    let restbox = document.createElement('div')

    let name = document.createElement('h2')
    name.innerText = data.prodname
    name.id = "name"

    let pricebox = document.createElement('div')
    pricebox.id= "pricebox"

    let price = document.createElement('h2')
    price.innerText = data.prodprice

    let strike  = document.createElement('s')
    strike.innerText = data.striked

    let disc = document.createElement('p')
    disc.innerText = data.proddisc

    pricebox.append(price,strike,disc)

    let buttonbox = document.createElement('div')
    buttonbox.id = "buttonbox"

    let addcart = document.createElement('button')
    addcart.innerText= "Add to Cart"
    addcart.addEventListener('click', function(){
        addcartfunc(data)
    })

    let buynow = document.createElement('button')
    buynow.innerText = "Buy Now"
    buynow.addEventListener("click", buynowfunc)

    buttonbox.append(buynow,addcart)
    pricebox.append(price,strike,disc)
    restbox.append(name,pricebox,buttonbox)
    imagebox.append(image)
    detailbox.append(imagebox,restbox)
    
}
function buynowfunc(){
    alert("Allow Current Location to access your Location")

    setTimeout(function(){
       alert("Yes, the Item will be delivered in your area")
    },3000)
}

function addcartfunc(el){
    addcartarr.push(el)
    localStorage.setItem('atc', JSON.stringify(addcartarr))
}