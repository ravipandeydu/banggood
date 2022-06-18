
//Top image slideshow
let id = 0
function slshow(){
    // if(id == images.length){
    //     id = 0;
    // }
    let images =['https://imgaz.staticbg.com/banggood/os/202206/20220613033249_817.jpg',
                'https://imgaz.staticbg.com/banggood/os/202206/20220614210925_202.jpg',
                'https://imgaz.staticbg.com/banggood/os/202206/20220613024146_986.jpg',
                'https://imgaz.staticbg.com/banggood/os/202206/20220613024821_945.jpg',
                'https://imgaz.staticbg.com/banggood/os/202206/20220615034249_587.jpg',
                'https://imgaz.staticbg.com/banggood/os/202206/20220613054118_697.jpg',
                'https://imgaz.staticbg.com/banggood/os/202206/20220615032350_646.jpg'
                ]
    if(id == images.length){
        id = 0;
    }

    let image = document.createElement('img');
    image.src = images[id];
    id++;

    document.getElementById('slideShow').innerHTML = null;
    document.getElementById('slideShow').append(image);

}
slshow()
setInterval(slshow,3000);


// hobbyCardText slideshow

let tn =0;
function txShow(){
    let text =['Pay $1 Get Lowest Price','Buy 2 get 50% Off For Outdoors','Hobby Day Sale'];
    if(tn == text.length){
        tn = 0;
    }
    document.querySelector('#hobbyCardText > h1').innerText =null;
    document.querySelector('#hobbyCardText > h1').innerText = text[tn];
    tn++;
}
txShow();
setInterval(txShow,2000);


let Pdata =[
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
        prodname: "Version]Xiaomi Mijia 1S 4K Cinema  150 inch ALPD 4K 3D BT 4.0 MIUI TV Xiaomi Projector",
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
    },
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
    },
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
    },
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
        prodname: "Version]Xiaomi Mijia 1S 4K Cinema  150 inch ALPD 4K 3D BT 4.0 MIUI TV Xiaomi Projector",
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

]
// prodimage:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/1C/11/16828c14-97bf-40d7-95fe-d1e1a4467ace.jpg.webp",
// prodname: "TOPSHAK RG3 Hand Nut Riveter Complete 3 in 1 Types of Tasks with Extremely Labor-Saving",
// prodprice: 7210.54 ,
// prodorg_prc: "₹10,338.61",
// proddisc: "-30%",

function displayPicks(data){
    data.forEach(function(ele){
        let card = document.createElement('div');
        card.className ='card';

        let image = document.createElement('img');
        image.src = ele.prodimage;

        let price = document.createElement('p');
        price.className = 'price';
        price.innerText = `₹ ${ele.prodprice}`;

        let prePrice =document.createElement('p');
        prePrice.className ='prePrice';
        prePrice.innerText = `₹ ${ele.prodorg_prc}`

        let discount = document.createElement('p');
        discount.className ='discount';
        discount.innerText = `${ele.proddisc} Off`

        card.append(image,price,prePrice,discount);

        document.getElementById('picksForYou').append(card);
    })
}
displayPicks(Pdata)