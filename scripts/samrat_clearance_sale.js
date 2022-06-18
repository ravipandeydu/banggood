import footer from "../components/footer.js"
//console.log(footer())
document.querySelector("#totalfooter").innerHTML = footer()

import navbar from "../components/navbar.js"
document.querySelector("#navbar").innerHTML = navbar()


let samdata1 = [
    {
     prodimage: "https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/DB/98/3dea1df3-a5c7-4ab3-8e55-b4ac5b3a2fb4.JPG.webp",
     prodname: "BLUEARROW D03013 Digital Ultra-Micro Presion Servo For Blade 130X Helicopter",
     prodprice: 794.54,
     prodorg_prc: "₹1,908.02",
     proddisc: "-58%",
     quantity: 1,
},
{
    prodimage:"https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/54/08/c17dfef7-1a20-46ba-934a-56dec3b07d9d.jpg.webp",
    prodname: "1 Pair RJX HOBBY 92mm 3K Carbon Fiber Tail Blades For RC Helicopter",
    prodprice: 794.54 ,
    prodorg_prc: "₹1,192.21",
    proddisc: "-33%",
    quantity: 1,
},
{
    prodimage:"https://imgaz3.staticbg.com/thumb/large/oaupload/banggood/images/62/B7/9e0355ac-88a1-4e5d-8ff7-01cee677d71f.jpg.webp",
    prodname: "42 Stepper Motor with Motor Fixing Bracket Kit for Smart Robot Car Chassis",
    prodprice: 794.54,
    prodorg_prc: "₹2,226.15",
    proddisc:" -64%",
    quantity: 1,
},
{
    prodimage:"https://imgaz.staticbg.com/thumb/large/oaupload/banggood/images/47/08/76592bf2-190e-4feb-8c94-b1070089c531.jpg.webp",
    prodname: "Mini 2.4G Electric RC Boat Vehicle Models High Speed 25km/h",
    prodprice: 555.94,
    prodorg_prc: "₹2,623.82",
    proddisc: "-79%",
    quantity: 1,
}
]

let samdata2 = [
    {
        prodimage:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/1C/11/16828c14-97bf-40d7-95fe-d1e1a4467ace.jpg.webp",
        prodname: "TOPSHAK RG3 Hand Nut Riveter Complete 3 in 1 Types of Tasks with Extremely Labor-Saving",
        prodprice: 7210.54 ,
        prodorg_prc: "₹10,338.61",
        proddisc: "-30%",
        quantity: 1,
    },
    {
        prodimage:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/84/21/b8a94c40-4777-46cc-a354-1244160e3046.jpg.webp",
        prodname: "Xiaomi Mijia 1S 4K Cinema  150 inch ALPD 4K 3D BT 4.0 MIUI TV Xiaomi Projector",
        prodprice: 132025.40,
        prodorg_prc: "₹151,113.52",
        proddisc: "-13%",
        quantity: 1,
    },
    {
        prodimage:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/78/A1/f80fabe1-c128-4dfb-ab48-b4b5882c2b63.jpg.webp",
        prodname: "TOPSHAK 6-Amp Electric Hand Planer 16500/min Home DIY Dual Side Dust Outlet",
        prodprice: 7634.45 ,
        prodorg_prc: "₹9,225.13",
        proddisc: "-17%",
        quantity: 1,
    },
    {
        prodimage:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/52/80/ad62dc77-28e9-45ab-a07b-c43febb5c8d4.png.webp",
        prodname: "XIAOMI Redmi 27-Inch Gaming Monitor 1080P Full HD Ultra-thin Gaming Computer",
        prodprice: 22825.42 ,
        prodorg_prc: "₹36,584.78",
        proddisc: "-38%",
        quantity: 1,
    },
    {
        prodimage:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/6A/F2/2c94c9aa-e7f1-4f1c-a638-51fbbd59fe9e.jpg.webp",
        prodname: "Xiaomi Mi 4K UHD Android TV 9.0 ALPD 3.0 1300lm Iaser Smart TV Global Version",
        prodprice: 136797.43 ,
        prodorg_prc: "₹225,875.34",
        proddisc: "-39%",
        quantity: 1,
    },
    {
        prodimage:"https://imgaz3.staticbg.com/thumb/list_grid/oaupload/banggood/images/D7/1B/c4d08876-46a4-4b9c-931f-a54902b45a36.jpg.webp",
        prodname: "iMars 7 Inch 2 Din for Android 8.0 Car Stereo Radio MP5 Player FM with Rear Camera",
        prodprice: 5964.24  ,
        prodorg_prc: "13,201.82",
        proddisc: "-55%",
        quantity: 1,
    },
    {
        prodimage:"https://imgaz.staticbg.com/thumb/list_grid/oaupload/banggood/images/3A/49/da43b827-2585-4e8c-8908-caa0204aa277.jpg.webp",
        prodname: "Wltoys 284131 1/28 2.4G 4WD Short Course Drift RC Car Vehicle Models With Light",
        prodprice: 4532.63 ,
        prodorg_prc: "₹6,441.45",
        proddisc: "-30%",
        quantity: 1,
    },
    {
        prodimage:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/01/55/44fe3978-831f-4ab8-89e0-b1e389bb772a.jpg.webp",
        prodname: "XIAOMI 2Pro Mijia Mi Smart Projector WIFI LED Full HD Native 1080P Auto EU Plug",
        prodprice: 58854.25 ,
        prodorg_prc: "₹87,486.44",
        proddisc: "-33%",
        quantity: 1,
    },
    {
        prodimage:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/4E/4D/e8d180b8-6b08-4589-b5ae-56d23b4cf011.jpg.webp",
        prodname: "New ATOMSTACK A5 PRO Laser Engraving Machine Cutter Wood Cutting Design Desktop",
        prodprice: 21473.34 ,
        prodorg_prc: "₹47,719.51",
        proddisc: "-55%",
        quantity: 1,
    },
    {
        prodimage:"https://imgaz3.staticbg.com/thumb/large/oaupload/banggood/images/1B/CD/b37b1501-d276-4b69-af82-e16681637e94.jpg.webp",
        prodname: "H96 Max V11 bluetooth 4.0 5G Wifi 4K UHD HDR TV Box Video Decoder OTT Box - EU Plug",
        prodprice: 3021.49 ,
        prodorg_prc: "₹5,487.04",
        proddisc: "-45%",
        quantity: 1,
    }

]

let samdata3 = [
    {
        prodimage:"https://imgaz2.staticbg.com/thumb/large/oaupload/banggood/images/8E/99/fb4b6448-ca9d-4ecd-ad7f-54d25ee9f634.jpg.webp",
        prodname: "7.4V 380mAh 5C Lipo Battery For Eachine FMS Land Cruiser 80 RC Car Parts",
        prodprice: 555.94 ,
        prodorg_prc: "₹1,908.02",
        proddisc: "-71%",
        quantity: 1,
    },
    {
        prodimage:"https://imgaz1.staticbg.com/thumb/list_grid/oaupload/ser1/banggood/images/D1/13/cccb4833-ac86-41af-a220-13a4f69f1f39.jpg.webp",
        prodname: "1PC Metal Shock real Absorber 4WD High Speed Racing RC Car Models Parts",
        prodprice: 591.73,
        prodorg_prc: "₹874.08",
        proddisc: "-32%",
        quantity: 1,
    },
    {
        prodimage:"https://imgaz1.staticbg.com/thumb/list_grid/oaupload/banggood/images/E5/0F/7018185c-a510-4388-83fb-bf40395d7779.jpg.webp",
        prodname: "LED Side Marker Indicator Light Waterproof For Truck Bus Van - Yellow",
        prodprice: 237.81 ,
        prodorg_prc: "₹715.01",
        proddisc: "-67%",
        quantity: 1,
    },
    {
        prodimage:"https://imgaz1.staticbg.com/thumb/list_grid/2014/xuzijiao/06/SKU240381/SKU240381.jpg.webp",
        prodname: "Wltoys A979 Metal Upgrade Shock Absorber 2Pcs RC Car with all Parts - Blue",
        prodprice: 612.41 ,
        prodorg_prc: "₹1,192.21",
        proddisc: "-49%",
        quantity: 1,
    },
    {
        prodimage:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/FD/2D/fb2b621e-eb0b-4b17-9e42-1930cedd9450.JPG.webp",
        prodname: "0.8mm 50g Rosin Core Solder Wire 63/37 Tin Lead Flux Soldering Welder Iron - 1Pcs",
        prodprice: 234.62 ,
        prodorg_prc: "₹874.08",
        proddisc: "-73%",
        quantity: 1,
    },
    {
        prodimage:"https://imgaz3.staticbg.com/thumb/list_grid/oaupload/banggood/images/59/BC/b5f17c21-28a8-4b5b-b265-69133c1b84dd.jpg.webp",
        prodname: "Metal Upgrade Motor Seat 144001 1/14 4WD RC Car Models with all Parts - Black",
        prodprice: 182.13  ,
        prodorg_prc: "₹1,271.75",
        proddisc: "-86%",
        quantity: 1,
    },
    {
        prodimage:"https://imgaz.staticbg.com/thumb/list_grid/oaupload/banggood/images/DE/16/b3491496-d521-46e0-9ada-541fa6104812.jpg.webp",
        prodname: "12mm Wheel Hub Hexagonal Adapter 25mm WRAITH RC Car Parts - Blue",
        prodprice: 317.34 ,
        prodorg_prc: "₹953.61",
        proddisc: "-67%",
        quantity: 1,
    },
    {
        prodimage:"https://imgaz2.staticbg.com/thumb/list_grid/oaupload/banggood/images/7C/6B/ec7fcda5-9f0f-4cba-aa2d-861fc138506e.jpg.webp",
        prodname: "2Pcs 1000W Car Tweeters Speakers Vehicle Loud Dome Balanced best Stereo",
        prodprice: 715.01 ,
        prodorg_prc: "₹1,033.14",
        proddisc: "-31%",
        quantity: 1,
    },
    {
        prodimage:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/4E/4D/e8d180b8-6b08-4589-b5ae-56d23b4cf011.jpg.webp",
        prodname: "URUAV FPV Hanging Hooks On Wall Parts for FPV Racing RC Drone - Red",
        prodprice: 794.54 ,
        prodorg_prc: "₹953.61",
        proddisc: "-17%",
        quantity: 1,
    },
    {
        prodimage:"https://imgaz.staticbg.com/thumb/list_grid/oaupload/banggood/images/5E/54/eea5ac2f-f394-7bd4-4491-2d647c230379.jpg.webp",
        prodname: "Yellow 1M 8/10/12/14/16/18 AWG Silicone Wire SR Wire - 26AWG",
        prodprice: 111.35 ,
        prodorg_prc: "₹476.41",
        proddisc: "-77%",
        quantity: 1,
    }

]

let samdata4 = [
    {
        prodimage:"https://imgaz1.staticbg.com/thumb/list_grid/oaupload/banggood/images/B5/2E/f2422547-e22f-43f4-92b4-2886bca0fc68.jpg.webp",
        prodname: "New ATOMSTACK M50 Double Ultra-Fine Compressed Spot Milling DIY Laser",
        prodprice: 23859.36,
        prodorg_prc: "₹55,672.90",
        proddisc: "-57%",
        quantity: 1,
    },
    {
        prodimage:"https://imgaz3.staticbg.com/thumb/large/oaupload/banggood/images/04/40/6277e98c-f60f-47d9-bb9c-3d91b0f45bfc.png.webp",
        prodname: "ORTUR Laser Master 2 Pro Laser Large Engraving Fast Speed High Laser Engraver",
        prodprice: 31812.74  ,
        prodorg_prc: "₹71,579.67",
        proddisc: "-56%",
        quantity: 1,
    },
    {
        prodimage:"https://imgaz1.staticbg.com/thumb/large/oaupload/banggood/images/C4/77/753de850-c84c-4870-9f51-98876b59ba7e.jpg.webp",
        prodname: "Gaming Chair Design Padded Armrest Restractable for Home Office - Black",
        prodprice: 15905.97,
        prodorg_prc: "₹17500.45",
        proddisc: "-11%",
        quantity: 1,
    },
    {
        prodimage:"https://imgaz.staticbg.com/thumb/large/oaupload/banggood/images/A5/46/94a4f183-2a3d-4d61-96aa-61bf25f12946.jpg.webp",
        prodname: "Android 11.0 8K UHD TV Box 5G Wifi 4K voice Control OTT Box Support Youtube 4K Netflix HD",
        prodprice: 6759.58 ,
        prodorg_prc: "₹9,702.33",
        proddisc: "-30%",
        quantity: 1,
    },
    {
        prodimage:"https://imgaz.staticbg.com/thumb/large/oaupload/banggood/images/1C/D0/182568a3-08b5-495d-8c8b-a21274d52053.jpg.webp",
        prodname: "TOPSHAK RG1 Rivet Gun Kit with 80 Pcs Rivets Anti-slip Professional Durable Single Hand",
        prodprice:  3101.02,
        prodorg_prc: "₹3,737.30",
        proddisc: "-17%",
        quantity: 1,
    }
]

let samdata5 = [ 
    {
        prodimage:"https://imgaz1.staticbg.com/thumb/large/oaupload/banggood/images/FB/DE/48abb7ec-4dc3-4cd4-b61f-ae36fccad7c3.jpg.webp",
        prodname: "2500W Power Strip Socket USB Charger For iPhone 13 13 Pro Max 13 Mini  - EU Plug",
        prodprice: 1987.55 ,
        prodorg_prc: "₹3,657.76",
        proddisc: "-46%"
    },
    {
        prodimage:"https://imgaz1.staticbg.com/thumb/large/oaupload/banggood/images/06/BB/80b38fb1-161b-4c83-88f9-cb700ddcceb3.jpg.webp",
        prodname: "RGB Laptop Cooling Pad with 5 Strong Cooling Fans for Up to17.3 inches Laptop",
        prodprice: 3975.90 ,
        prodorg_prc: "₹4,294.03",
        proddisc: "-7%",
        quantity: 1,
    },
    {
        prodimage:"https://imgaz1.staticbg.com/thumb/large/oaupload/banggood/images/B1/DF/49397fdd-91f9-4176-9043-d997ac2e1af8.jpg.webp",
        prodname: "Desktop Charging 10W Wireless Charger Charging Pad For iPhone 11 SE- US Plug",
        prodprice:3498.69 ,
        prodorg_prc: "₹4,214.50",
        proddisc: "-17%",
        quantity: 1,
    },
    {
        prodimage:"https://imgaz1.staticbg.com/thumb/list_grid/oaupload/banggood/images/AF/46/8ed8639b-6bb0-42d4-a455-cb5ef1ed2770.jpg.webp",
        prodname: "Zeblaze NEO 1.3 inch Full-Round Touch Screen IP67 Waterproof Smart Watch - Brown",
        prodprice: 3975.90 ,
        prodorg_prc: "₹5,805.18",
        proddisc: "-32%",
        quantity: 1,
    },
    {
        prodimage:"https://imgaz.staticbg.com/thumb/large/oaupload/banggood/images/DB/6D/85ae8da7-c8d2-433e-a223-80a461b1e47d.jpg.webp",
        prodname: "In Stock Model MK2 Tony Heart Lamp Light DIY Model Iron-Man Science Toy - 1",
        prodprice: 3975.90,
        prodorg_prc: "₹5,407.51",
        proddisc: "-27%",
        quantity: 1,
    }
]
let samdata6 = [
    {
        prodimage:"https://imgaz.staticbg.com/thumb/large/oaupload/banggood/images/62/5A/5beb0daf-e4b8-4935-94e5-26884b269e0e.png.webp",
        prodname: "Realme GT Neo 2 5G Snapdragon 870 120Hz Refresh Rate Fast Charge Smartphone - Blue",
        prodprice: 39687.39 ,
        prodorg_prc: "₹42,073.41",
        proddisc: "-6%",
        quantity: 1,
    },
    {
        prodimage:"https://imgaz2.staticbg.com/thumb/large/oaupload/banggood/images/B7/7F/f8816b6a-c716-4687-a091-cf61ecbcddb3.jpg.webp",
        prodname: "Alldocube iPlay 40H 4G LTE 10.4 Inch 2K Screen octa core  Android 11 Tablet - Black",
        prodprice: 14712.97 ,
        prodorg_prc: "₹19,087.33",
        proddisc: "-23%",
        quantity: 1,
    },
    {
        prodimage:"https://imgaz1.staticbg.com/thumb/large/oaupload/banggood/images/2B/F8/9e9b17af-42f0-4f93-8c9c-68d658818c34.jpg.webp",
        prodname: "BlitzWolf Pro 3 Axis Foldable Selfie Sticks Tripod for Action Camera Phone - Black",
        prodprice: 6441.45,
        prodorg_prc: "₹10,020.47",
        proddisc: "-36%",
        quantity: 1,
    },
    {
        prodimage:"https://imgaz2.staticbg.com/thumb/large/oaupload/banggood/images/E0/4C/24d60706-b63c-4b9d-a745-3cd2dcb65864.jpg.webp",
        prodname: "Teclast F15 Plus 2 Laptop 15.6 inch Intel N4120 Quad-Core 128GB SSD Notebook",
        prodprice: 27836.05 ,
        prodorg_prc: "₹31,017.41",
        proddisc: "-10%",
        quantity: 1,
    },
    {
        prodimage:"https://imgaz2.staticbg.com/thumb/large/oaupload/banggood/images/9C/49/1ca9e491-1764-448d-ad1b-b37254e309d4.jpg.webp",
        prodname: "Tuya WiFi Smart IR Infrared Remote Controller RGB Light Smart Home - Black",
        prodprice: 1112.68 ,
        prodorg_prc: "₹2,385.22",
        proddisc: "-53%",
        quantity: 1,
    }
]

let samdata7 = [
    {
        prodimage:"https://imgaz.staticbg.com/thumb/large/oaupload/banggood/images/32/FB/a3d33e8d-324b-4bea-96c0-fa3ae9c689a0.jpg.webp",
        prodname: "4 PCS Women Faux Leather Handbag Elegant  Crossbody Bag - Grey",
        prodprice: 5032.11,
        prodorg_prc: "₹9,622.80",
        proddisc: "-48%",
        quantity: 1,
    },
    {
        prodimage:"https://imgaz2.staticbg.com/thumb/large/oaupload/banggood/images/EB/1E/bd19e418-2a4d-43c4-9cca-96806d1f14fd.jpg.webp",
        prodname: "Women Comfy Suede Warm Lining Belt Buckle Ankle Boots - 6 Green",
        prodprice: 2941.96 ,
        prodorg_prc: "₹3,578.23",
        proddisc: "-18%",
        quantity: 1,
    },
    {
        prodimage:"https://imgaz1.staticbg.com/thumb/large/oaupload/banggood/images/8D/7A/603fb057-82ce-4f9f-838d-4ec9b7e0b07f.jpg.webp",
        prodname: "Women Retro Hollow Out Comfortable Breathable Casual Sandals - Beige 5",
        prodprice: 3498.69 ,
        prodorg_prc: "₹4,214.50",
        proddisc: "-17%",
        quantity: 1,
    },
    {
        prodimage:"https://imgaz1.staticbg.com/thumb/list_grid/oaupload/banggood/images/06/71/ab582f03-a768-4bc4-86b5-1253e4c74f15.JPG.webp",
        prodname: "Women Waterproof Large Capacity Handbag Shoulder Bag - Black",
        prodprice: 3765.93  ,
        prodorg_prc: "₹4,294.03",
        proddisc: "-12%",
        quantity: 1,
    },
    {
        prodimage:"https://imgaz1.staticbg.com/thumb/large/oaupload/banggood/images/85/CC/21de0d39-6954-4d48-be77-7d8b7db8f078.jpg.webp",
        prodname: "Brenice Women Solid Cosmetic Handbag Capacity Bag - light pink",
        prodprice: 6005.60 ,
        prodorg_prc: "₹37,419.88",
        proddisc: "-84%",
        quantity: 1,
    },
    {
        prodimage:"https://imgaz.staticbg.com/thumb/large/oaupload/banggood/images/E6/FF/e224d56d-c49c-463f-b7b1-9c6459267920.jpg.webp",
        prodname: "Ekphero Men Vintage Faux Leather Large Capacity Briefcases Handbag - Black",
        prodprice: 5463.18 ,
        prodorg_prc: "₹14,553.90",
        proddisc: "-63%",
        quantity: 1,
    },
    {
        prodimage:"https://imgaz3.staticbg.com/thumb/large/oaupload/banggood/images/AF/C3/4ef5fc4f-a88f-47f6-a84b-9458ce3e6ffa.jpg.webp",
        prodname: "E Ekphero Men Genuine Leather Zipper Multi Card Slot Leather Card Holder Wallet - Coffee",
        prodprice: 1908.02 ,
        prodorg_prc: "₹3,975.90",
        proddisc: "-52%",
        quantity: 1,
    },
    {
        prodimage:"https://imgaz1.staticbg.com/thumb/large/oaupload/banggood/images/1F/76/3af3b902-4946-4d36-b56b-7b83c5cf6a4e.jpg.webp",
        prodname: "EKSA Gaming Headset Noise Reduction Mic Headphone Gamer for PS4 Laptop PC",
        prodprice: 4134.96 ,
        prodorg_prc: "₹5,009.84",
        proddisc: "-18%",
        quantity: 1,
    },
    {
        prodimage:"https://imgaz.staticbg.com/thumb/large/oaupload/banggood/images/FA/E5/a0a41332-70c1-4d30-bbe6-0df0e5c2716c.jpg.webp",
        prodname: "Geneva Business with Calendar Dial Stainless Steel Band Waterproof Men Quartz Watch - 001",
        prodprice: 794.54 ,
        prodorg_prc: "₹2,067.08",
        proddisc: "-62%",
        quantity: 1,
    },
    {
        prodimage:"https://imgaz2.staticbg.com/thumb/large/oaupload/banggood/images/E9/3B/d294ca38-33f9-4679-b868-b4a33d247458.jpg.webp",
        prodname: "Mens Corduroy Casual Long Sleeve Drawstring Hooded Shirts With Pocket - S Navy",
        prodprice: 2782.89 ,
        prodorg_prc: "₹3,975.90",
        proddisc: "-30%",
        quantity: 1,
    }
]
samapp1(samdata1)
samapp2(samdata2)
samapp3(samdata3)
samapp4(samdata4)
samapp5(samdata5)
samapp6(samdata6)
samapp7(samdata7)

function samapp1(samdata1){

    samdata1.forEach(function(el){
        let total = document.createElement("div")
        total.addEventListener("click",function(){
            display(el)
        })
        let img = document.createElement("img")
        img.id = "sam1img"
        img.src = el.prodimage
        
        let subtotal = document.createElement("div")
        let div = document.createElement("div")
        div.id="div1"
        let but1 = document.createElement("span")
        but1.innerText = "Snap Up"
        but1.id= "but1"

        let name = document.createElement("span")
        name.id = "sam1name"
        name.innerText = `Swap Up ${el.prodname}`
        div.append(but1,name)
        
        let price = document.createElement("h2")
        price.id = "sam1price" 
        price.innerText =`₹${el.prodprice}`
        
        let but2 = document.createElement("p")
        but2.innerText = "Swap Up";
        but2.id = "but2" 
        subtotal.append(div,price,but2)
        total.append(img,subtotal)
        document.querySelector("#sam1").append(total)
    })
}


function samapp2(samdata2){

    samdata2.forEach(function(el){
        let total = document.createElement("div")
        total.addEventListener("click",function(){
            display(el)
        })
        let img = document.createElement("img")
        img.id = "sam2img"
        img.src = el.prodimage
        
        let subtotal = document.createElement("div")
        
        let name = document.createElement("h4")
        name.id = "sam2name"
        name.innerText = el.prodname
        
        let price = document.createElement("h2")
        price.id = "sam2price" 
        price.innerText =`₹${el.prodprice}`
        
        let design = document.createElement("div")
        design.className = "design"
        let icon = document.createElement("img")
        icon.src = "./images/graph.png"
        icon.className = "icon"
        let plus = document.createElement("span")
        plus.className = "plus"
        plus.innerText = "Lowest price in 90 days"
     
        design.append(icon,plus)
       

        let extra = document.createElement("div")
        extra.className = "extra"
        let hot = document.createElement("span")
        hot.className = "hot"
        hot.innerText = "Hot Sale"
        
        let sold = document.createElement("span")
        sold.className = "sold"
        let num = Math.floor(Math.random() * 5000) + 1
        sold.innerText = `${num} sold`
        
        extra.append(hot,sold)
        subtotal.append(name,extra,price,design)
        total.append(img,subtotal)
        document.querySelector("#sam2").append(total)
    })
}

function samapp3(samdata3){

    samdata3.forEach(function(el){
        let total = document.createElement("div")
        total.addEventListener("click",function(){
            display(el)
        })
        let img = document.createElement("img")
        img.id = "sam2img"
        img.src = el.prodimage
        
        let subtotal = document.createElement("div")
        let name = document.createElement("h4")
        name.id = "sam2name"
        name.innerText = el.prodname
        
        let price = document.createElement("h2")
        price.id = "sam2price" 
        price.innerText =`₹${el.prodprice}`
        price.innerText =`₹${el.prodprice}`
        
        let design = document.createElement("div")
        design.className = "design"
        let icon = document.createElement("img")
        icon.src = "./images/graph.png"
        icon.className = "icon"
        let plus = document.createElement("span")
        plus.className = "plus"
        plus.innerText = "Lowest price in 90 days"
     
        design.append(icon,plus)
       

        let extra = document.createElement("div")
        extra.className = "extra"
        let hot = document.createElement("span")
        hot.className = "hot"
        hot.innerText = "Hot Sale"
        
        let sold = document.createElement("span")
        sold.className = "sold"
        let num = Math.floor(Math.random() * 5000) + 1
        sold.innerText = `${num} sold`
        
        extra.append(hot,sold)
        subtotal.append(name,extra,price,design)
        total.append(img,subtotal)
        document.querySelector("#sam3").append(total)
    })
}

function samapp4(samdata4){

    samdata4.forEach(function(el){
        let total = document.createElement("div")
        total.addEventListener("click",function(){
            display(el)
        })
        let img = document.createElement("img")
        img.id = "sam2img"
        img.src = el.prodimage
        
        let subtotal = document.createElement("div")
        let name = document.createElement("h4")
        name.id = "sam2name"
        name.innerText = el.prodname
        
        let price = document.createElement("h2")
        price.id = "sam2price" 
        price.innerText =`₹${el.prodprice}`

        let design = document.createElement("div")
        design.className = "design"
        let icon = document.createElement("img")
        icon.src = "./images/graph.png"
        icon.className = "icon"
        let plus = document.createElement("span")
        plus.className = "plus"
        plus.innerText = "Lowest price in 90 days"
     
        design.append(icon,plus)
       

        let extra = document.createElement("div")
        extra.className = "extra"
        let hot = document.createElement("span")
        hot.className = "hot"
        hot.innerText = "Hot Sale"
        
        let sold = document.createElement("span")
        sold.className = "sold"
        let num = Math.floor(Math.random() * 5000) + 1
        sold.innerText = `${num} sold`
        
        extra.append(hot,sold)
        subtotal.append(name,extra,price,design)
        total.append(img,subtotal)
        document.querySelector("#sam4").append(total)
    })
}

function samapp5(samdata5){

    samdata5.forEach(function(el){
        let total = document.createElement("div")
        total.addEventListener("click",function(){
            display(el)
        })
        let img = document.createElement("img")
        img.id = "sam2img"
        img.src = el.prodimage
        
        let subtotal = document.createElement("div")
        let name = document.createElement("h4")
        name.id = "sam2name"
        name.innerText = el.prodname
        
        let price = document.createElement("h2")
        price.id = "sam2price" 
        price.innerText =`₹${el.prodprice}`

        price.innerText =`₹${el.prodprice}`
        
        let design = document.createElement("div")
        design.className = "design"
        let icon = document.createElement("img")
        icon.src = "./images/graph.png"
        icon.className = "icon"
        let plus = document.createElement("span")
        plus.className = "plus"
        plus.innerText = "Lowest price in 90 days"
     
        design.append(icon,plus)
       

        let extra = document.createElement("div")
        extra.className = "extra"
        let hot = document.createElement("span")
        hot.className = "hot"
        hot.innerText = "Hot Sale"
        
        let sold = document.createElement("span")
        sold.className = "sold"
        let num = Math.floor(Math.random() * 5000) + 1
        sold.innerText = `${num} sold`
        
        extra.append(hot,sold)
        subtotal.append(name,extra,price,design)
        total.append(img,subtotal)
        document.querySelector("#sam5").append(total)
    })
}
function samapp6(samdata6){

    samdata6.forEach(function(el){
        let total = document.createElement("div")
        total.addEventListener("click",function(){
            display(el)
        })
        let img = document.createElement("img")
        img.id = "sam2img"
        img.src = el.prodimage
        
        let subtotal = document.createElement("div")
        let name = document.createElement("h4")
        name.id = "sam2name"
        name.innerText = el.prodname
        
        let price = document.createElement("h2")
        price.id = "sam2price" 
        price.innerText =`₹${el.prodprice}`

        let design = document.createElement("div")
        design.className = "design"
        let icon = document.createElement("img")
        icon.src = "./images/graph.png"
        icon.className = "icon"
        let plus = document.createElement("span")
        plus.className = "plus"
        plus.innerText = "Lowest price in 90 days"
     
        design.append(icon,plus)
       

        let extra = document.createElement("div")
        extra.className = "extra"
        let hot = document.createElement("span")
        hot.className = "hot"
        hot.innerText = "Hot Sale"
        
        let sold = document.createElement("span")
        sold.className = "sold"
        let num = Math.floor(Math.random() * 5000) + 1
        sold.innerText = `${num} sold`
        
        extra.append(hot,sold)
        subtotal.append(name,extra,price,design)
        total.append(img,subtotal)
        document.querySelector("#sam6").append(total)
    })
}

function samapp7(samdata7){

    samdata7.forEach(function(el){
        let total = document.createElement("div")
        total.addEventListener("click",function(){
            display(el)
        })
        let img = document.createElement("img")
        img.id = "sam2img"
        img.src = el.prodimage
        
        let subtotal = document.createElement("div")
        let name = document.createElement("h4")
        name.id = "sam2name"
        name.innerText = el.prodname
        
        let price = document.createElement("h2")
        price.id = "sam2price" 
        price.innerText =`₹${el.prodprice}`

        let design = document.createElement("div")
        design.className = "design"
        let icon = document.createElement("img")
        icon.src = "./images/graph.png"
        icon.className = "icon"
        let plus = document.createElement("span")
        plus.className = "plus"
        plus.innerText = "Lowest price in 90 days"
     
        design.append(icon,plus)
       

        let extra = document.createElement("div")
        extra.className = "extra"
        let hot = document.createElement("span")
        hot.className = "hot"
        hot.innerText = "Hot Sale"
        
        let sold = document.createElement("span")
        sold.className = "sold"
        let num = Math.floor(Math.random() * 5000) + 1
        sold.innerText = `${num} sold`
        
        extra.append(hot,sold)
        subtotal.append(name,extra,price,design)
        total.append(img,subtotal)
        document.querySelector("#sam7").append(total)
    })
}

let arr = []
function display(el){
 
    
    console.log(el)
    localStorage.setItem("fulldata",JSON.stringify(el))
    window.location.href = "samrat_display.html"
}