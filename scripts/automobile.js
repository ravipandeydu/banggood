// var LogData = JSON.parse(localStorage.getItem("login_data"));
// var nameOfPerson = document.querySelector(".hello>span");
//     nameOfPerson.innerText=LogData[0].email;
//     nameOfPerson.style.cursor="auto";


import footer from "../components/footer.js";
//console.log(footer())
document.querySelector("#totalfooter").innerHTML = footer();

import navbar from "../components/navbar.js";
document.querySelector("#navbar").innerHTML = navbar();


var data=[{prodimage:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/09/E1/740964fd-63f1-4a46-a62f-c6b29aa8333b.jpg.webp",
                   prodprice:"₹18703.41",
                    prodorg_prc:"₹18703.41",
                    proddisc:" ",
                    prodname:"LED Headlight Headlamp For BMW",
                    reviews:"6 Reviews",quantity:1,id:"automobile"+1

                },
                {prodimage:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/56/A7/f43fad5b-9ac2-4554-82b5-73d0b4c2a664.jpg.webp",
                   prodprice:"₹5844.28",
                    prodorg_prc:"₹12936.29",
                    proddisc:"55% Off",
                    prodname:"iMars 7 Inch 2 Din for Android 8.0",
                    reviews:"4256 Reviews",quantity:1,id:"automobile"+2

                },
                {prodimage:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/52/CE/33b86c56-5f32-4284-a157-69c19f9367a5.jpg.webp",
                   prodprice:"₹10910.00",
                    prodorg_prc:"₹13248.02",
                    proddisc:"18% Off",
                    prodname:"K-808APR 12V 600W 8 Inch Car High",
                    reviews:"17 Reviews",quantity:1,id:"automobile"+3

                },
                {prodimage:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/CA/06/2d46daf6-2481-4691-9246-fda137c6c89b.JPG.webp",
                   prodprice:"₹2415.18",
                    prodorg_prc:"₹4207.66",
                    proddisc:"43% Off",
                    prodname:"Front Fog Light Lamp Cover Grille",
                    reviews:"7 Reviews",quantity:1,id:"automobile"+4

                },
                {prodimage:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/52/01/5a8271c9-fb0b-4906-b1db-8a7b900f8ffb.jpg.webp",
                   prodprice:"₹1479.97",
                    prodorg_prc:"₹2025.51",
                    proddisc:"27% Off",
                    prodname:"NovSight A500-N39 2PCS 72W Car",
                    reviews:"177 Reviews",quantity:1,id:"automobile"+5

                },
                {prodimage:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/A8/9D/f4ae256b-1e88-4805-96a6-7a7426c457ad.jpg.webp",
                   prodprice:"₹7013.29",
                    prodorg_prc:"₹14806.71",
                    proddisc:"53% Off",
                    prodname:"iMars 10.1 Inch 2Din for Android 8.1",
                    reviews:"653 Reviews",quantity:1,id:"automobile"+6

                },
                {prodimage:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/01/FD/72ef7c26-4e8b-493f-89f0-5025d9e46e94.jpg.webp",
                   prodprice:"₹6233.95",
                    prodorg_prc:"₹7948.50",
                    proddisc:"22% Off",
                    prodname:"70mai Dash Cam Pro Plus A500S",
                    reviews:"232 Reviews",quantity:1,id:"automobile"+7

                },
                {prodimage:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/1E/75/1f3fd765-fc47-4bdf-8975-328a8be1c4ba.jpg.webp",
                   prodprice:"₹9740.99",
                    prodorg_prc:"₹13092.16",
                    proddisc:"26% Off",
                    prodname:"AZDOME M550 Dash Cam 3",
                    reviews:"14 Reviews",quantity:1,id:"automobile"+8

                },
                {prodimage:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/25/81/07c95fb9-f74e-427b-8e02-3343cf3a38a3.jpg.webp",
                   prodprice:"₹778.56",
                    prodorg_prc:"₹778.56",
                    proddisc:" ",
                    prodname:"H4/BA20D/P15D LED Motorcycle",
                    reviews:"1 Reviews",quantity:1,id:"automobile"+9

                },
                {prodimage:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/62/A7/6eb144da-3410-45ed-8e1f-95715b702147.jpg.webp",
                   prodprice:"₹1168.23",
                    prodorg_prc:"₹2038.76",
                    proddisc:"43% Off",
                    prodname:"2Pcs 10 LED Rear Stop Indicator Tail",
                    reviews:"9 Reviews",quantity:1,id:"automobile"+10

                },
                {prodimage:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/2A/31/7da05c4b-b14a-49a0-8bda-17fb131e8b50.jpg.webp",
                   prodprice:"₹856.50",
                    prodorg_prc:"₹1324.10",
                    proddisc:"35% Off",
                    prodname:"P5130 4.1 Inch 1 DIN Car Stereo",
                    reviews:"184 Reviews",quantity:1,id:"automobile"+11

                },
                {prodimage:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/A3/51/f4ab47c0-7a2c-4da4-9e41-01fd99a925cd.jpg.webp",
                   prodprice:"₹5298.74",
                    prodorg_prc:"₹6389.82",
                    proddisc:"17% Off",
                    prodname:"NovSight A500-N37 2PCS 120W Car",
                    reviews:"249 Reviews",quantity:1,id:"automobile"+12

                },
                {prodimage:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/34/4A/bedf4666-ba04-4299-a45b-e8575a9ce120.jpg.webp",
                   prodprice:"₹7870.57",
                    prodorg_prc:"₹10286.53",
                    proddisc:"24% Off",
                    prodname:"12V 400W 9 sound 150dB Loud Car",
                    reviews:"11 Reviews",quantity:1,id:"automobile"+13

                },
                {prodimage:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/87/4B/ca1c80ee-d794-40f9-b2aa-ee23b53b0a6a.jpg.webp",
                   prodprice:"₹3740.06",
                    prodorg_prc:"₹4519.40",
                    proddisc:"17% Off",
                    prodname:"Infitary Q2 12V-110V 130W",
                    reviews:"15 Reviews",quantity:1,id:"automobile"+14

                },
                {prodimage:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/09/C9/cd478756-c6c1-4688-8321-3e0be3e1730f.jpg.webp",
                   prodprice:"₹8421.56",
                    prodorg_prc:"₹16287.45",
                    proddisc:"48% Off",
                    prodname:"Waterproof Motorcycle Full Face",
                    reviews:"27 Reviews",quantity:1,id:"automobile"+15

                },
                {prodimage:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/49/F8/2e8b0f5c-01cb-4491-84c5-fc6430e1c075.jpg.webp",
                   prodprice:"₹3506.26",
                    prodorg_prc:"₹5298.74",
                    proddisc:"34% Off",
                    prodname:"7805 4.1 Inch WINCE Car MP5",
                    reviews:"83 Reviews",quantity:1,id:"automobile"+16

                },
                {prodimage:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/77/3E/5b49a6a4-748e-41e2-96a9-fc88ccdb2b61.jpg.webp",
                   prodprice:"₹2337.24",
                    prodorg_prc:"₹3584.19",
                    proddisc:"35% Off",
                    prodname:"LF9 Pro 1080P Full HD Car DVR WiFi",
                    reviews:"11 Reviews",quantity:1,id:"automobile"+17

                },
                {prodimage:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/E5/0F/7018185c-a510-4388-83fb-bf40395d7779.jpg.webp",
                   prodprice:"₹233.02",
                    prodorg_prc:"₹700.63",
                    proddisc:"67% Off",
                    prodname:"LED Side Marker Indicator Light",
                    reviews:"25 Reviews",quantity:1,id:"automobile"+18

                },
                {prodimage:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/CB/EB/9acec921-9d12-40dc-b289-4c763419c615.jpg.webp",
                   prodprice:"₹12156.95",
                    prodorg_prc:"₹14650.84",
                    proddisc:"17% Off",
                    prodname:"SOMAN 955 Motorcycle bluetooth",
                    reviews:"9 Reviews",quantity:1,id:"automobile"+19

                },
                {prodimage:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/EB/24/c01ddc3b-c1d0-44fe-919e-7257a79fb604.jpg.webp",
                   prodprice:"₹3740.06",
                    prodorg_prc:"₹4675.27",
                    proddisc:"20% Off",
                    prodname:"NovSight A500-N50 2PCS 70W Car",
                    reviews:"30 Reviews",quantity:1,id:"automobile"+20

                },
                {prodimage:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/51/AF/b6f2760c-4ecb-4c7f-b1ca-8f8fd2ec8b7a.jpg.webp",
                   prodprice:"₹6467.75",
                    prodorg_prc:"₹14806.71",
                    proddisc:"56% Off",
                    prodname:"Mars 10.1 Inch 2 Din for Android",
                    reviews:"110 Reviews",quantity:1,id:"automobile"+21

                },
                {prodimage:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/ser1/banggood/images/77/5E/90f28ef0-0b25-4fd9-b5d4-7c6d51e50211.jpg.webp",
                   prodprice:"₹1479.97",
                    prodorg_prc:"₹2025.51",
                    proddisc:"27% Off",
                    prodname:"G8 12V Car Audio Stereo Power HIFI",
                    reviews:"52 Reviews",quantity:1,id:"automobile"+22

                },
                {prodimage:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/26/47/4d12f951-1279-4282-bf5f-43c37e087104.jpg.webp",
                   prodprice:"₹611.78",
                    prodorg_prc:"₹1713.77",
                    proddisc:"64% Off",
                    prodname:"Mini 2 Channel DC 12V Car Power",
                    reviews:"49 Reviews",quantity:1,id:"automobile"+23

                },
                {prodimage:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/48/2A/ab14971c-5431-4ead-b06a-7b0f20b70ef3.jpg.webp",
                   prodprice:"₹1129.27",
                    prodorg_prc:"₹1713.77",
                    proddisc:"34% Off",
                    prodname:"12V 32 LED Rear Stop Light Tail",
                    reviews:"11 Reviews",quantity:1,id:"automobile"+24

                },
                {prodimage:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/09/E1/740964fd-63f1-4a46-a62f-c6b29aa8333b.jpg.webp",
                   prodprice:"₹18703.41",
                    prodorg_prc:"₹18703.41",
                    proddisc:" ",
                    prodname:"LED Headlight Headlamp For BMW",
                    reviews:"6 Reviews",quantity:1,id:"automobile"+25

                },
                {prodimage:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/56/A7/f43fad5b-9ac2-4554-82b5-73d0b4c2a664.jpg.webp",
                   prodprice:"₹5844.28",
                    prodorg_prc:"₹12936.29",
                    proddisc:"55% Off",
                    prodname:"iMars 7 Inch 2 Din for Android 8.0",
                    reviews:"4256 Reviews",quantity:1,id:"automobile"+26

                },
                {prodimage:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/52/CE/33b86c56-5f32-4284-a157-69c19f9367a5.jpg.webp",
                   prodprice:"₹10910.00",
                    prodorg_prc:"₹13248.02",
                    proddisc:"18% Off",
                    prodname:"K-808APR 12V 600W 8 Inch Car High",
                    reviews:"17 Reviews",quantity:1,id:"automobile"+27

                },
                {prodimage:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/CA/06/2d46daf6-2481-4691-9246-fda137c6c89b.JPG.webp",
                   prodprice:"₹2415.18",
                    prodorg_prc:"₹4207.66",
                    proddisc:"43% Off",
                    prodname:"Front Fog Light Lamp Cover Grille",
                    reviews:"7 Reviews",quantity:1,id:"automobile"+28

                },
                {prodimage:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/52/01/5a8271c9-fb0b-4906-b1db-8a7b900f8ffb.jpg.webp",
                   prodprice:"₹1479.97",
                    prodorg_prc:"₹2025.51",
                    proddisc:"27% Off",
                    prodname:"NovSight A500-N39 2PCS 72W Car",
                    reviews:"177 Reviews",quantity:1,id:"automobile"+29

                },
                {prodimage:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/A8/9D/f4ae256b-1e88-4805-96a6-7a7426c457ad.jpg.webp",
                   prodprice:"₹7013.29",
                    prodorg_prc:"₹14806.71",
                    proddisc:"53% Off",
                    prodname:"iMars 10.1 Inch 2Din for Android 8.1",
                    reviews:"653 Reviews",quantity:1,id:"automobile"+30

                },
                {prodimage:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/01/FD/72ef7c26-4e8b-493f-89f0-5025d9e46e94.jpg.webp",
                   prodprice:"₹6233.95",
                    prodorg_prc:"₹7948.50",
                    proddisc:"22% Off",
                    prodname:"70mai Dash Cam Pro Plus A500S",
                    reviews:"232 Reviews",quantity:1,id:"automobile"+31

                },
                {prodimage:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/1E/75/1f3fd765-fc47-4bdf-8975-328a8be1c4ba.jpg.webp",
                   prodprice:"₹9740.99",
                    prodorg_prc:"₹13092.16",
                    proddisc:"26% Off",
                    prodname:"AZDOME M550 Dash Cam 3",
                    reviews:"14 Reviews",quantity:1,id:"automobile"+32

                },
                {prodimage:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/25/81/07c95fb9-f74e-427b-8e02-3343cf3a38a3.jpg.webp",
                   prodprice:"₹778.56",
                    prodorg_prc:"₹778.56",
                    proddisc:" ",
                    prodname:"H4/BA20D/P15D LED Motorcycle",
                    reviews:"1 Reviews",quantity:1,id:"automobile"+33

                },
                {prodimage:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/62/A7/6eb144da-3410-45ed-8e1f-95715b702147.jpg.webp",
                   prodprice:"₹1168.23",
                    prodorg_prc:"₹2038.76",
                    proddisc:"43% Off",
                    prodname:"2Pcs 10 LED Rear Stop Indicator Tail",
                    reviews:"9 Reviews",quantity:1,id:"automobile"+34

                },
                {prodimage:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/2A/31/7da05c4b-b14a-49a0-8bda-17fb131e8b50.jpg.webp",
                   prodprice:"₹856.50",
                    prodorg_prc:"₹1324.10",
                    proddisc:"35% Off",
                    prodname:"P5130 4.1 Inch 1 DIN Car Stereo",
                    reviews:"184 Reviews",quantity:1,id:"automobile"+35

                },
                {prodimage:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/A3/51/f4ab47c0-7a2c-4da4-9e41-01fd99a925cd.jpg.webp",
                   prodprice:"₹5298.74",
                    prodorg_prc:"₹6389.82",
                    proddisc:"17% Off",
                    prodname:"NovSight A500-N37 2PCS 120W Car",
                    reviews:"249 Reviews",quantity:1,id:"automobile"+36

                },
                {prodimage:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/34/4A/bedf4666-ba04-4299-a45b-e8575a9ce120.jpg.webp",
                   prodprice:"₹7870.57",
                    prodorg_prc:"₹10286.53",
                    proddisc:"24% Off",
                    prodname:"12V 400W 9 sound 150dB Loud Car",
                    reviews:"11 Reviews",quantity:1,id:"automobile"+37

                },
                {prodimage:"https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/87/4B/ca1c80ee-d794-40f9-b2aa-ee23b53b0a6a.jpg.webp",
                   prodprice:"₹3740.06",
                    prodorg_prc:"₹4519.40",
                    proddisc:"17% Off",
                    prodname:"Infitary Q2 12V-110V 130W",
                    reviews:"15 Reviews",quantity:1,id:"automobile"+38

                },
                {prodimage:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/09/C9/cd478756-c6c1-4688-8321-3e0be3e1730f.jpg.webp",
                   prodprice:"₹8421.56",
                    prodorg_prc:"₹16287.45",
                    proddisc:"48% Off",
                    prodname:"Waterproof Motorcycle Full Face",
                    reviews:"27 Reviews",quantity:1,id:"automobile"+39

                },
                {prodimage:"https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/49/F8/2e8b0f5c-01cb-4491-84c5-fc6430e1c075.jpg.webp",
                   prodprice:"₹3506.26",
                    prodorg_prc:"₹5298.74",
                    proddisc:"34% Off",
                    prodname:"7805 4.1 Inch WINCE Car MP5",
                    reviews:"83 Reviews",quantity:1,id:"automobile"+40

                },
                {prodimage:"https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/77/3E/5b49a6a4-748e-41e2-96a9-fc88ccdb2b61.jpg.webp",
                   prodprice:"₹2337.24",
                    prodorg_prc:"₹3584.19",
                    proddisc:"35% Off",
                    prodname:"LF9 Pro 1080P Full HD Car DVR WiFi",
                    reviews:"11 Reviews",quantity:1,id:"automobile"+41

                },
                {prodimage:"https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/E5/0F/7018185c-a510-4388-83fb-bf40395d7779.jpg.webp",
                   prodprice:"₹233.02",
                    prodorg_prc:"₹700.63",
                    proddisc:"67% Off",
                    prodname:"LED Side Marker Indicator Light",
                    reviews:"25 Reviews",quantity:1,id:"automobile"+42

                },
                
                ]
             
                
                display(data);
                function display(data){
                    var parentOfCard=document.getElementById("jewelryTopRightBottom");
                    parentOfCard.innerHTML="";
                
                    data.forEach(function(el){
                        var card=document.createElement("div");
                        // var img2=document.createElement("img");
                        // img2.setAttribute("src","https://cdn.pixabay.com/photo/2020/09/30/07/48/heart-5614865__340.png")
                        var img=document.createElement("img");
                        img.setAttribute("src",el.prodimage);
                        img.addEventListener("click",function(){addToCart(el)});
                       
                       
                        var prodprice=document.createElement("h2");
                        var p="";
                        for(var i=1;i<(el.prodprice).length;i++){
                         p=p+(el.prodprice)[i];
                        }
                        p=parseFloat((+(p))).toFixed(2); 
                        var p1=(((el.prodprice)[0])+p);
                        // .split("").slice(0,9).join("");
                        prodprice.innerText=p1;
                        var para=document.createElement("p");
                       
                        para.innerHTML="<span>"+el.prodorg_prc+"</span> "+el.proddisc+"";
                        // var prodorg_prc=document.createElement("span");
                        // prodorg_prc.innerText=el.prodorg_prc;
                        // para.append(prodorg_prc);
                        // para.innerText=el.proddisc;
                        var prodname=document.createElement("a");
                        prodname.innerText=el.prodname;
                        var review=document.createElement("a");
                        review.innerText="review";
                        card.append(img,prodprice,para,prodname,review);
                
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
                var btn=document.querySelector("#jewelryTopRightTop>button").addEventListener("click",searchData);
                
                function searchData(){
                    var minPrice=document.querySelectorAll("#jewelryTopRightTop>input")[0].value;
                    var maxPrice=document.querySelectorAll("#jewelryTopRightTop>input")[1].value; 
                    maxPrice=+(maxPrice);
                    minPrice=+(minPrice);   
                    console.log(maxPrice,typeof(maxPrice))
                    var searchedDarta=[];
                    data.forEach(function(el){
                        var prodprice=el.prodprice;
                        
                        var Actualprice="";
                        for(var i=1;i<prodprice.length;i++){
                            Actualprice=Actualprice+prodprice[i];
                        }
                        Actualprice=(+(Actualprice)); 
                       if(Actualprice>=minPrice&&Actualprice<=maxPrice){
                        // console.log(prodprice)
                        // console.log(Actualprice,typeof(Actualprice),maxPrice,minPrice)
                           searchedDarta.push(el);
                       }
                    });
                    if(searchedDarta.length<=0){
                        display(data);
                        alert("product between these prodprice is not exist");
                    }else{
                        display(searchedDarta);
                    }
                }
                
                var cartData=JSON.parse(localStorage.getItem("atc"))||[];
                   
                document.querySelector(".number>h1").innerText=cartData.length;
                
                // function addToCart(el){
                //     console.log("hello");
                //     var id=el.id;
                //     var cartData=JSON.parse(localStorage.getItem("atc"))||[];
                   
                //     document.querySelector(".number>h1").innerText=cartData.length;
                //     var add=true;
                //     cartData.forEach(function(el){
                //         if(id===el.id){
                //             add=false;
                //         }
                //     });
                //     if(add){
                //         var p="";
                //         for(var i=1;i<(el.prodprice).length;i++){
                //          p=p+(el.prodprice)[i];
                //         }
                //         p=parseFloat((+(p))*76.27).toFixed(2); 
                //         p=+(p);
                //         //var p1=(((el.prodprice)[0])+p);
                //         var obj={
                //             prodimage:el.prodimage,
                //             prodprice:p,
                //             prodorg_prc:el.prodorg_prc,
                //             proddisc:el.proddisc,
                //             id:el.id,
                //             prodname:el.prodname,
                //             quantity:el.quantity
                
                //         }
                //         cartData.push(obj);
                //         localStorage.setItem("atc",JSON.stringify(cartData));
                //         document.querySelector(".number>h1").innerText=cartData.length;
                //         alert("item is added to the cart");
                //     }else{
                //         alert("item is already exist");
                //     }
                    
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
                document.getElementById("jewelryCart").addEventListener("click",function(){window.location.href="cart.html"});
                
                