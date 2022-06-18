import footer from "../components/footer.js";
//console.log(footer())
document.querySelector("#totalfooter").innerHTML = footer();

import navbar from "../components/navbar.js";
document.querySelector("#navbar").innerHTML = navbar();

var data = [
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/BD/1E/5fcd2c9b-c966-4972-ae4d-caa0a2f4d59d.jpg.webp",
    prodprice: "₹1599",
    prodorg_prc: "₹2099",
    proddisc: " 53% Off",
    prodname: "African Hallow Braided circle",
    id: 1,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/FB/4B/4d9a1e5b-5bde-4d16-afbe-24c48612740a.jpeg.webp",
    prodprice: "₹1768",
    prodorg_prc: "₹2499",
    proddisc: " 49% Off",
    prodname: "925 strailing silvr",
    id: 2,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/CB/06/22bab4f1-704e-44b9-9432-3e0088ed5896.jpg.webp",
    prodprice: "₹1311",
    prodorg_prc: "₹1999",
    proddisc: " 34% Off",
    prodname: "bohimen creative luminious",
    id: 3,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/8B/72/a23e4914-54ae-4556-aa59-cdf85a812ab2.jpg.webp",
    prodprice: "₹1256",
    prodorg_prc: "₹2999",
    proddisc: " 39% Off",
    prodname: "silver plated simple snake",
    id: 4,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/4E/32/be1531f2-d0b3-4c30-9e5c-5e15cb9da40a.jpg.webp",
    prodprice: "₹3167",
    prodorg_prc: "₹4999",
    proddisc: " 66% Off",
    prodname: "silver plated simple glass slipper",
    id: 5,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/B2/1C/6609d3a6-d2ac-4351-af0f-2aaee8ab8249.jpg.webp",
    prodprice: "₹1229",
    prodorg_prc: "₹3499",
    proddisc: " 60% Off",
    prodname: "multi color glass sliper slipper",
    id: 6,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/B3/F8/0c15e924-b9b9-4d20-8df7-21c585f462bc.jpg.webp",
    prodprice: "₹1699",
    prodorg_prc: "₹2099",
    proddisc: " 19% Off",
    prodname: "mono color glass magnifire",
    id: 7,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/D1/74/6d5ad3f3-9a2b-4e97-9745-05bc6e25d0af.jpg.webp",
    prodprice: "₹4445",
    prodorg_prc: "₹5399",
    proddisc: " 18% Off",
    prodname: "punk genuine leather warp",
    id: 8,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/58/AB/34538bae-f75b-48c6-ba16-498041157c16.jpg.webp",
    prodprice: "₹1074",
    prodorg_prc: "₹1699",
    proddisc: " 37% Off",
    prodname: "tanzanite ziracvon loose",
    id: 9,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/view/oaupload/ser1/banggood/images/AC/E6/c1634b4e-2179-4850-8b61-52759a9fb856.jpg.webp",
    prodprice: "₹1297",
    prodorg_prc: "₹2099",
    proddisc: " 38% Off",
    prodname: "double eagle",
    id: 10,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/49/2D/8383af63-c90b-40e5-9a77-3b9393d84d93.png.webp",
    prodprice: "₹736",
    prodorg_prc: "1099",
    proddisc: " 33% Off",
    prodname: "i love you present",
    id: 11,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/B6/A2/bb0f6129-0fe2-47b1-bf40-cef77f6c7ba0.jpg.webp",
    prodprice: "₹1199",
    prodorg_prc: "₹1499",
    proddisc: " 20% Off",
    prodname: "gold plated peremeter cristal",
    id: 12,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/9E/92/2c8c8c4b-d5b4-48b5-99a7-3a7b46d9362f.jpg.webp",
    prodprice: "₹2388",
    prodorg_prc: "₹3499",
    proddisc: " 32% Off",
    prodname: "diamond tester gemstone selecter",
    id: 13,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/A3/D2/e9cbc051-fc2f-4821-9a46-de3d4fd0339d.jpg.webp",
    prodprice: "₹588",
    prodorg_prc: "₹899",
    proddisc: " 35% Off",
    prodname: "vintage multilayer braceler",
    id: 14,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/33/C1/f88d4f18-1a2a-42ea-bcc0-b62b8158876c.jpg.webp",
    prodprice: "₹660",
    prodorg_prc: "₹1199",
    proddisc: " 45% Off",
    prodname: "hope racin geometry",
    id: 15,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/39/72/391e5b75-658d-4bdf-8d25-3edcafbba3df.jpg.webp",
    prodprice: "₹1311",
    prodorg_prc: "₹2099",
    proddisc: " 38% Off",
    prodname: "special gircon inland",
    id: 16,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/73/E4/64b8047f-f40a-43ca-89c8-8caa58f7dce4.jpg.webp",
    prodprice: "₹957",
    prodorg_prc: "₹1699",
    proddisc: " 44% Off",
    prodname: "cute pendant neckless",
    id: 17,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/B3/52/300367a2-4f33-4cb7-a1e4-42776017e105.jpg.webp",
    prodprice: "₹1364",
    prodorg_prc: "₹1999",
    proddisc: " 32% Off",
    prodname: "gold plated 10mm plane chain",
    id: 18,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/DA/54/67c75fe6-9ca1-487b-ae19-27fbb1705c25.jpg.webp",
    prodprice: "₹1429",
    prodorg_prc: "₹2099",
    proddisc: " 32% Off",
    prodname: "cristal rehiness stone",
    id: 19,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/5B/BE/92f5a9b1-5c79-43c5-a9b8-bdb9a0c24f36.jpg.webp",
    prodprice: "₹704",
    prodorg_prc: "₹2299",
    proddisc: " 69% Off",
    prodname: "luminus gold silver dragon",
    id: 20,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/36/3C/50f5d169-1495-49e2-b9c8-5b6ef63e6d50.jpg.webp",
    prodprice: "₹1194",
    prodorg_prc: "₹1799",
    proddisc: " 38% Off",
    prodname: "trendy zericate zirrconia crystal",
    id: 21,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/12/2C/8091a30d-3afb-498e-8597-425ffbfc83a4.jpg.webp",
    prodprice: "₹1582",
    prodorg_prc: "₹2199",
    proddisc: " 28% Off",
    prodname: "elagent silver rehine stone",
    id: 22,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/CA/21/b1d050c4-6b90-41c6-9b68-5cfdc7e1c0ad.jpg.webp",
    prodprice: "₹514",
    prodorg_prc: "₹1099",
    proddisc: " 53% Off",
    prodname: "African Hallow Braided circle",
    id: 23,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/3C/54/4ad8dca9-4dbc-4f46-9d6e-2e01045a9c34.jpg.webp",
    prodprice: "₹768",
    prodorg_prc: "₹1499",
    proddisc: " 49% Off",
    prodname: "925 strailing silvr",
    id: 24,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/44/81/d51d0900-9842-45a3-91c2-b4fda9454b32.jpg.webp",
    prodprice: "₹1311",
    prodorg_prc: "₹1999",
    proddisc: " 34% Off",
    prodname: "bohimen creative luminious",
    id: 25,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/88/B7/cc272112-c122-4670-88e5-15c0a6c825e4.jpg.webp",
    prodprice: "₹1256",
    prodorg_prc: "₹1999",
    proddisc: " 39% Off",
    prodname: "silver plated simple snake",
    id: 26,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/92/6D/3efd74e1-fd88-4cf0-8fc9-58383b129983.jpg.webp",
    prodprice: "₹367",
    prodorg_prc: "₹999",
    proddisc: " 66% Off",
    prodname: "silver plated simple glass slipper",
    id: 27,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/B0/C8/f4873f35-f9b8-4a90-9be2-699074bbaa62.jpg.webp",
    prodprice: "₹229",
    prodorg_prc: "₹899",
    proddisc: " 60% Off",
    prodname: "multi color glass sliper slipper",
    id: 28,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/89/8D/ac10e317-52fe-45d5-a665-5bed2cd23773.jpg.webp",
    prodprice: "₹1699",
    prodorg_prc: "₹2099",
    proddisc: " 19% Off",
    prodname: "mono color glass magnifire",
    id: 29,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/C0/E7/87ea06e6-da80-4645-8261-893b942201c0.jpg.webp",
    prodprice: "₹4445",
    prodorg_prc: "₹5399",
    proddisc: " 18% Off",
    prodname: "punk genuine leather warp",
    id: 30,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/C0/E7/87ea06e6-da80-4645-8261-893b942201c0.jpg.webp",
    prodprice: "₹1074",
    prodorg_prc: "₹1699",
    proddisc: " 37% Off",
    prodname: "tanzanite ziracvon loose",
    id: 31,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/9E/5A/80dd79c6-aa91-4979-8d2f-a7d550fcbccd.jpg.webp",
    prodprice: "₹1297",
    prodorg_prc: "₹2099",
    proddisc: " 38% Off",
    prodname: "double eagle",
    id: 32,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/42/41/43163949-a257-443c-b442-6d50c87e1259.jpg.webp",
    prodprice: "₹736",
    prodorg_prc: "₹1099",
    proddisc: " 33% Off",
    prodname: "i love you present",
    id: 33,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/84/37/ef8b81ca-25fe-4151-9f07-b4b0ba5313a5.jpg.webp",
    prodprice: "₹1199",
    prodorg_prc: "₹1499",
    proddisc: " 20% Off",
    prodname: "gold plated peremeter cristal",
    id: 34,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/34/EC/9a679bb6-2121-4f38-b539-0f97420fbbf9.jpg.webp",
    prodprice: "₹2388",
    prodorg_prc: "₹3499",
    proddisc: " 32% Off",
    prodname: "diamond tester gemstone selecter",
    id: 35,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/08/37/ecbbc379-a56c-4c44-88e8-a7d3fcae7a31.jpg.webp",
    prodprice: "₹588",
    prodorg_prc: "₹899",
    proddisc: " 35% Off",
    prodname: "vintage multilayer braceler",
    id: 36,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/C9/9E/f00f550a-ebf9-40f9-97ea-1ce6e2ccafa4.jpg.webp",
    prodprice: "₹660",
    prodorg_prc: "₹1199",
    proddisc: " 45% Off",
    prodname: "hope racin geometry",
    id: 37,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/6B/EC/d5a6fd27-4582-4911-b0fb-332e46490ce2.jpg.webp",
    prodprice: "₹1311",
    prodorg_prc: "₹2099",
    proddisc: " 38% Off",
    prodname: "special gircon inland",
    id: 38,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/1A/46/7b6c6d8d-0ed3-402c-b5e4-95d5c4477d5d.jpg.webp",
    prodprice: "₹957",
    prodorg_prc: "₹1699",
    proddisc: " 44% Off",
    prodname: "cute pendant neckless",
    id: 39,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/27/D7/53c491bd-6bb9-4d27-9c44-d012e098ecd7.jpg.webp",
    prodprice: "₹1364",
    prodorg_prc: "₹1999",
    proddisc: " 32% Off",
    prodname: "gold plated 10mm plane chain",
    id: 40,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/B8/81/82996695-05ab-46e8-8542-a535741915ce.jpg.webp",
    prodprice: "₹1429",
    prodorg_prc: "₹2099",
    proddisc: " 32% Off",
    prodname: "cristal rehiness stone",
    id: 41,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/E8/F2/7b9ff7e7-1e67-4664-bd5e-bddbbbc479a8.jpg.webp",
    prodprice: "₹704",
    prodorg_prc: "₹2299",
    proddisc: " 69% Off",
    prodname: "luminus gold silver dragon",
    id: 42,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/30/2E/e43d8d76-c280-4b23-a21e-f825e661358e.jpg.webp",
    prodprice: "₹1194",
    prodorg_prc: "₹1799",
    proddisc: " 38% Off",
    prodname: "trendy zericate zirrconia crystal",
    id: 43,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/83/3E/c2f8f2c7-d137-46ae-b76e-82346864b983.jpg.webp",
    prodprice: "₹1582",
    prodorg_prc: "₹2199",
    proddisc: " 28% Off",
    prodname: "elagent silver rehine stone",
    id: 44,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/48/EA/41775aca-d4cf-4532-b0b0-0c10411a21c7.jpg.webp",
    prodprice: "₹514",
    prodorg_prc: "₹1099",
    proddisc: " 53% Off",
    prodname: "African Hallow Braided circle",
    id: 45,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/2C/78/cfa237f0-27b1-4a03-9e7d-cf0195048925.jpg.webp",
    prodprice: "₹768",
    prodorg_prc: "₹1499",
    proddisc: " 49% Off",
    prodname: "925 strailing silvr",
    id: 46,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz1.staticbg.com/thumb/view/oaupload/ser1/banggood/images/69/B3/576408d3-9641-4804-9983-9ec1cc092b66.jpg.webp",
    prodprice: "₹1311",
    prodorg_prc: "₹1999",
    proddisc: " 34% Off",
    prodname: "bohimen creative luminious",
    id: 47,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/91/AB/d9ec6bf3-b224-4a7d-bab7-bfa37bdde83e.jpg.webp",
    prodprice: "₹1256",
    prodorg_prc: "₹1999",
    proddisc: " 39% Off",
    prodname: "silver plated simple snake",
    id: 48,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/61/42/4ffeb655-d861-4259-9bdb-483fd24bb9fd.jpeg.webp",
    prodprice: "₹367",
    prodorg_prc: "₹999",
    proddisc: " 66% Off",
    prodname: "silver plated simple glass slipper",
    id: 49,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/A9/20/d3a60a7e-2c81-40e8-b6b8-b3d90f891aea.jpg.webp",
    prodprice: "₹229",
    prodorg_prc: "₹899",
    proddisc: " 60% Off",
    prodname: "multi color glass sliper slipper",
    id: 50,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/D8/48/5388d425-4972-4015-951f-3f89f723db39.jpg.webp",
    prodprice: "₹1699",
    prodorg_prc: "₹2099",
    proddisc: " 19% Off",
    prodname: "mono color glass magnifire",
    id: 51,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/8F/24/9223c1c9-08a1-464c-b035-19de38e25d8e.jpg.webp",
    prodprice: "₹4445",
    prodorg_prc: "₹5399",
    proddisc: " 18% Off",
    prodname: "punk genuine leather warp",
    id: 52,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/23/02/9b85d760-1725-4221-9d13-7b0f51de4bfc.jpg.webp",
    prodprice: "₹1074",
    prodorg_prc: "₹1699",
    proddisc: " 37% Off",
    prodname: "tanzanite ziracvon loose",
    id: 53,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/5B/20/afb5d920-eae3-4230-94a7-5541770e80b1.jpg.webp",
    prodprice: "₹1297",
    prodorg_prc: "₹2099",
    proddisc: " 38% Off",
    prodname: "double eagle",
    id: 54,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/BD/29/02db7d81-35b7-4d9c-a53d-f36bbef3a738.jpg.webp",
    prodprice: "₹736",
    prodorg_prc: "₹1099",
    proddisc: " 33% Off",
    prodname: "i love you present",
    id: 55,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/D4/8E/e63e0127-7bd8-4260-9b1f-5463cf171995.jpg.webp",
    prodprice: "₹1199",
    prodorg_prc: "₹1499",
    proddisc: " 20% Off",
    prodname: "gold plated peremeter cristal",
    id: 56,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/23/88/4cfc49a5-2d52-4c9d-b416-13c88395b342.jpg.webp",
    prodprice: "₹2388",
    prodorg_prc: "₹3499",
    proddisc: " 32% Off",
    prodname: "diamond tester gemstone selecter",
    id: 57,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/FC/87/184b1f39-2209-4a3b-a775-b9bfbe859779.jpg.webp",
    prodprice: "₹588",
    prodorg_prc: "₹899",
    proddisc: " 35% Off",
    prodname: "vintage multilayer braceler",
    id: 58,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/view/oaupload/ser1/banggood/images/B3/BF/a23d55da-0963-494a-8934-1f08862e1a02.jpg.webp",
    prodprice: "₹660",
    prodorg_prc: "₹1199",
    proddisc: " 45% Off",
    prodname: "hope racin geometry",
    id: 59,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/62/4A/fbe7bf4f-758d-4fe2-8e09-db6f1c50a60e.jpg.webp",
    prodprice: "₹1311",
    prodorg_prc: "₹2099",
    proddisc: " 38% Off",
    prodname: "special gircon inland",
    id: 60,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz1.staticbg.com/thumb/view/oaupload/ser1/banggood/images/3F/8B/fb9578da-726e-444e-85d3-b8fa2bfeb3db.jpg.webp",
    prodprice: "₹957",
    prodorg_prc: "₹1699",
    proddisc: " 44% Off",
    prodname: "cute pendant neckless",
    id: 61,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/C8/42/281d84eb-1433-4756-b280-eade9869a07b.jpg.webp",
    prodprice: "₹1364",
    prodorg_prc: "₹1999",
    proddisc: " 32% Off",
    prodname: "gold plated 10mm plane chain",
    id: 62,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/8F/6B/164f59cc-9979-4ce7-9cfe-7156ed43e650.jpg.webp",
    prodprice: "₹1429",
    prodorg_prc: "₹2099",
    proddisc: " 32% Off",
    prodname: "cristal rehiness stone",
    id: 63,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/B3/ED/9f729797-f11e-48be-9015-08a923d7a3d7.jpg.webp",
    prodprice: "₹704",
    prodorg_prc: "₹2299",
    proddisc: " 69% Off",
    prodname: "luminus gold silver dragon",
    id: 64,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/38/2B/33bfe519-2842-4443-9022-c4b4c29517dd.jpg.webp",
    prodprice: "₹1194",
    prodorg_prc: "₹1799",
    proddisc: " 38% Off",
    prodname: "trendy zericate zirrconia crystal",
    id: 65,
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

    para.innerHTML = "<span>" + el.prodorg_prc + "</span> " + el.proddisc + "";
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
document.getElementById("cartlogo").addEventListener("click", function () {
  window.location.href = "cart.html";
});
