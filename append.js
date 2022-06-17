function displayData(data, container){
    data.forEach((elem) => {
        var box = document.createElement('div')

        var image = document.createElement('img')
        image.src = elem.image

        let namebox = document.createElement('div')
        namebox.setAttribute('id', 'namebox')

        var name = document.createElement('p')
        name.innerText = elem.name

        namebox.append(name)

        let pricebox = document.createElement('div')
        pricebox.setAttribute('id', 'pricebox')

        var price = document.createElement('h3')
        price.innerText = elem.price
        price.setAttribute('id', 'price')

        var striked= document.createElement('s')
        striked.innerText = elem.striked

        var disc = document.createElement('p')
        disc.innerText = elem.disc

        pricebox.append(striked,disc)

        box.append(image,namebox,price,pricebox)
        container.append(box)
    })
}

export default displayData;