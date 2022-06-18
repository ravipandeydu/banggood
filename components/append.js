function displayData(data, container){
    data.forEach((elem) => {
        var box = document.createElement('div')
        box.setAttribute('id', "cards")
        box.addEventListener('click', function(){
            detailDisplay(elem)
        })

        var image = document.createElement('img')
        image.src = elem.prodimage

        let namebox = document.createElement('div')
        namebox.setAttribute('id', 'namebox')

        var name = document.createElement('p')
        name.innerText = elem.prodname

        namebox.append(name)

        let pricebox = document.createElement('div')
        pricebox.setAttribute('id', 'pricebox')

        var price = document.createElement('h3')
        price.innerText = elem.prodprice
        price.setAttribute('id', 'price')

        var striked= document.createElement('s')
        striked.innerText = elem.striked

        var disc = document.createElement('p')
        disc.innerText = elem.proddisc

        pricebox.append(striked,disc)

        box.append(image,namebox,price,pricebox)
        container.append(box)
    })
}

function detailDisplay(el){
    console.log(el)
    localStorage.setItem('detail', JSON.stringify(el))
    window.location.href = "display.html"
}

export default displayData;