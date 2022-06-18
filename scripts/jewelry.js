// var LogData = JSON.parse(localStorage.getItem("login_data"));
// var nameOfPerson = document.querySelector(".hello>span");
//     nameOfPerson.innerText=LogData[0].email;
//     nameOfPerson.style.cursor="auto";

import footer from "../components/footer.js";
//console.log(footer())
document.querySelector("#totalfooter").innerHTML = footer();

import navbar from "../components/navbar.js";
document.querySelector("#navbar").innerHTML = navbar();


var data = [
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/53/B7/cebb66f6-d4b1-4782-92a6-d580c7540c01.jpg.webp",
    prodprice: "₹392.04",
    prodorg_prc: "₹842.49",
    proddisc: " 53% Off",
    prodname: "African Hallow Braided circle",
    id: "jewelry" + 1,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/A3/F5/d5f97e83-7928-4a8a-8800-ea0a5558b6b5.jpg.webp",
    prodprice: "₹585.31",
    prodorg_prc: "₹1199",
    proddisc: " 49% Off",
    prodname: "925 strailing silvr",
    id: "jewelry" + 2,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/FE/98/449b8158-1171-440c-813c-cf8bd75f771c.jpg.webp",
    prodprice: "₹1099",
    prodorg_prc: "₹1559.97",
    proddisc: " 34% Off",
    prodname: "bohimen creative luminious",
    id: "jewelry" + 3,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/0E/16/d423b060-01eb-4063-a996-a55b972fe371.jpg.webp",
    prodprice: "₹980.15",
    prodorg_prc: "₹1559.97",
    proddisc: " 39% Off",
    prodname: "silver plated simple snake",
    id: "jewelry" + 4,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/A3/F5/49f5f923-0df1-481d-9be1-7d32b1a5028b.jpg.webp",
    prodprice: "₹286.40",
    prodorg_prc: "₹780.30",
    proddisc: " 66% Off",
    prodname: "silver plated simple glass slipper",
    id: "jewelry" + 5,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/gallery/upload/2015/08/SKU246403_2.jpg.webp",
    prodprice: "₹178.71",
    prodorg_prc: "₹701.56",
    proddisc: " 60% Off",
    prodname: "multi color glass sliper slipper",
    id: "jewelry" + 6,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/87/C9/5b079b14-bcc9-4864-beb6-8d233538130b.jpg.webp",
    prodprice: "₹1325.86",
    prodorg_prc: "₹1638.01",
    proddisc: " 19% Off",
    prodname: "mono color glass magnifire",
    id: "jewelry" + 7,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/D5/6A/e32aa121-e95c-4757-99e0-a8d90423c327.jpg.webp",
    prodprice: "₹3468.77",
    prodorg_prc: "₹4213.24",
    proddisc: " 18% Off",
    prodname: "punk genuine leather warp",
    id: "jewelry" + 8,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/12/20/096476ec-627d-c888-87ca-a6d9b932ff9c.jpg.webp",
    prodprice: "₹838.12",
    prodorg_prc: "₹1325.86",
    proddisc: " 37% Off",
    prodname: "tanzanite ziracvon loose",
    id: "jewelry" + 9,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/0E/C9/edd0a105-2d77-47f0-be1f-c2a3e4f44f1d.jpg.webp",
    prodprice: "₹1012.15",
    prodorg_prc: "₹1638.01",
    proddisc: " 38% Off",
    prodname: "double eagle",
    id: "jewelry" + 10,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz1.staticbg.com/thumb/gallery/oaupload/ser1/banggood/images/A9/F3/218667da-cb74-4cf6-b1d8-9703e1073d46.jpg.webp",
    prodprice: "₹574.36",
    prodorg_prc: "₹857.63",
    proddisc: " 33% Off",
    prodname: "i love you present",
    id: "jewelry" + 11,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/gallery/oaupload/ser1/banggood/images/3D/D6/2dcac586-5297-4302-bc9d-2e5e13656881.jpg.webp",
    prodprice: "₹935.67",
    prodorg_prc: "₹1169.78",
    proddisc: " 20% Off",
    prodname: "gold plated peremeter cristal",
    id: "jewelry" + 12,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/71/6F/41371d2f-5f42-4021-b3ca-60a574e6999a.jpg.webp",
    prodprice: "₹1863.54",
    prodorg_prc: "₹2730.53",
    proddisc: " 32% Off",
    prodname: "diamond tester gemstone selecter",
    id: "jewelry" + 13,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/C2/E8/6fd033f9-8e9e-45ce-b214-7e2691abec68.jpg.webp",
    prodprice: "₹458.86",
    prodorg_prc: "₹701.56",
    proddisc: " 35% Off",
    prodname: "vintage multilayer braceler",
    id: "jewelry" + 14,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/F2/00/4aa488fb-ba54-43a8-ae42-911190f41136.jpg.webp",
    prodprice: "₹515.05",
    prodorg_prc: "₹935.67",
    proddisc: " 45% Off",
    prodname: "hope racin geometry",
    id: "jewelry" + 15,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/2C/D2/e923adf3-ea3e-4890-b58f-c94230b8fcc5.jpg.webp",
    prodprice: "₹1023.07",
    prodorg_prc: "₹1638.01",
    proddisc: " 38% Off",
    prodname: "special gircon inland",
    id: "jewelry" + 16,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/6F/CF/3abde787-1681-4d95-b702-d4528d4e6f33.jpg.webp",
    prodprice: "₹746.82",
    prodorg_prc: "₹1325.86",
    proddisc: " 44% Off",
    prodname: "cute pendant neckless",
    id: "jewelry" + 17,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/3F/7E/ff725c94-c521-faae-ec49-eab35d8e290c.jpg.webp",
    prodprice: "₹1064.43",
    prodorg_prc: "₹1559.97",
    proddisc: " 32% Off",
    prodname: "gold plated 10mm plane chain",
    id: "jewelry" + 18,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/DA/0D/7b357050-57fb-45bd-94c7-92d126912104.jpg.webp",
    prodprice: "₹1115.16",
    prodorg_prc: "₹1638.01",
    proddisc: " 32% Off",
    prodname: "cristal rehiness stone",
    id: "jewelry" + 19,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/70/02/dc4f02e5-0d93-4b86-8681-688674e6b0d6.JPG.webp",
    prodprice: "₹549.38",
    prodorg_prc: "₹1794.08",
    proddisc: " 69% Off",
    prodname: "luminus gold silver dragon",
    id: "jewelry" + 20,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/EC/FD/ba1a25ac-6cde-49a0-b629-3feba335e42d.jpg.webp",
    prodprice: "₹931.77",
    prodorg_prc: "₹1403.89",
    proddisc: " 38% Off",
    prodname: "trendy zericate zirrconia crystal",
    id: "jewelry" + 21,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/gallery/upload/2015/07/SKU223952_1.jpg.webp",
    prodprice: "₹1234.55",
    prodorg_prc: "₹1716.04",
    proddisc: " 28% Off",
    prodname: "elagent silver rehine stone",
    id: "jewelry" + 22,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/53/B7/cebb66f6-d4b1-4782-92a6-d580c7540c01.jpg.webp",
    prodprice: "₹392.04",
    prodorg_prc: "₹842.49",
    proddisc: " 53% Off",
    prodname: "African Hallow Braided circle",
    id: "jewelry" + 23,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/A3/F5/d5f97e83-7928-4a8a-8800-ea0a5558b6b5.jpg.webp",
    prodprice: "₹585.31",
    prodorg_prc: "₹1199",
    proddisc: " 49% Off",
    prodname: "925 strailing silvr",
    id: "jewelry" + 24,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/FE/98/449b8158-1171-440c-813c-cf8bd75f771c.jpg.webp",
    prodprice: "₹1099",
    prodorg_prc: "₹1559.97",
    proddisc: " 34% Off",
    prodname: "bohimen creative luminious",
    id: "jewelry" + 25,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/0E/16/d423b060-01eb-4063-a996-a55b972fe371.jpg.webp",
    prodprice: "₹980.15",
    prodorg_prc: "₹1559.97",
    proddisc: " 39% Off",
    prodname: "silver plated simple snake",
    id: "jewelry" + 26,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/A3/F5/49f5f923-0df1-481d-9be1-7d32b1a5028b.jpg.webp",
    prodprice: "₹286.40",
    prodorg_prc: "₹780.30",
    proddisc: " 66% Off",
    prodname: "silver plated simple glass slipper",
    id: "jewelry" + 27,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/gallery/upload/2015/08/SKU246403_2.jpg.webp",
    prodprice: "₹178.71",
    prodorg_prc: "₹701.56",
    proddisc: " 60% Off",
    prodname: "multi color glass sliper slipper",
    id: "jewelry" + 28,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/87/C9/5b079b14-bcc9-4864-beb6-8d233538130b.jpg.webp",
    prodprice: "₹1325.86",
    prodorg_prc: "₹1638.01",
    proddisc: " 19% Off",
    prodname: "mono color glass magnifire",
    id: "jewelry" + 29,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/D5/6A/e32aa121-e95c-4757-99e0-a8d90423c327.jpg.webp",
    prodprice: "₹3468.77",
    prodorg_prc: "₹4213.24",
    proddisc: " 18% Off",
    prodname: "punk genuine leather warp",
    id: "jewelry" + 30,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/12/20/096476ec-627d-c888-87ca-a6d9b932ff9c.jpg.webp",
    prodprice: "₹838.12",
    prodorg_prc: "₹1325.86",
    proddisc: " 37% Off",
    prodname: "tanzanite ziracvon loose",
    id: "jewelry" + 31,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/0E/C9/edd0a105-2d77-47f0-be1f-c2a3e4f44f1d.jpg.webp",
    prodprice: "₹1012.15",
    prodorg_prc: "₹1638.01",
    proddisc: " 38% Off",
    prodname: "double eagle",
    id: "jewelry" + 32,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz1.staticbg.com/thumb/gallery/oaupload/ser1/banggood/images/A9/F3/218667da-cb74-4cf6-b1d8-9703e1073d46.jpg.webp",
    prodprice: "₹574.36",
    prodorg_prc: "₹857.63",
    proddisc: " 33% Off",
    prodname: "i love you present",
    id: "jewelry" + 33,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/gallery/oaupload/ser1/banggood/images/3D/D6/2dcac586-5297-4302-bc9d-2e5e13656881.jpg.webp",
    prodprice: "₹935.67",
    prodorg_prc: "₹1169.78",
    proddisc: " 20% Off",
    prodname: "gold plated peremeter cristal",
    id: "jewelry" + 34,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/71/6F/41371d2f-5f42-4021-b3ca-60a574e6999a.jpg.webp",
    prodprice: "₹1863.54",
    prodorg_prc: "₹2730.53",
    proddisc: " 32% Off",
    prodname: "diamond tester gemstone selecter",
    id: "jewelry" + 35,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/C2/E8/6fd033f9-8e9e-45ce-b214-7e2691abec68.jpg.webp",
    prodprice: "₹458.86",
    prodorg_prc: "₹701.56",
    proddisc: " 35% Off",
    prodname: "vintage multilayer braceler",
    id: "jewelry" + 36,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/F2/00/4aa488fb-ba54-43a8-ae42-911190f41136.jpg.webp",
    prodprice: "₹515.05",
    prodorg_prc: "₹935.67",
    proddisc: " 45% Off",
    prodname: "hope racin geometry",
    id: "jewelry" + 37,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/2C/D2/e923adf3-ea3e-4890-b58f-c94230b8fcc5.jpg.webp",
    prodprice: "₹1023.07",
    prodorg_prc: "₹1638.01",
    proddisc: " 38% Off",
    prodname: "special gircon inland",
    id: "jewelry" + 38,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/6F/CF/3abde787-1681-4d95-b702-d4528d4e6f33.jpg.webp",
    prodprice: "₹746.82",
    prodorg_prc: "₹1325.86",
    proddisc: " 44% Off",
    prodname: "cute pendant neckless",
    id: "jewelry" + 39,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/3F/7E/ff725c94-c521-faae-ec49-eab35d8e290c.jpg.webp",
    prodprice: "₹1064.43",
    prodorg_prc: "₹1559.97",
    proddisc: " 32% Off",
    prodname: "gold plated 10mm plane chain",
    id: "jewelry" + 40,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/DA/0D/7b357050-57fb-45bd-94c7-92d126912104.jpg.webp",
    prodprice: "₹1115.16",
    prodorg_prc: "₹1638.01",
    proddisc: " 32% Off",
    prodname: "cristal rehiness stone",
    id: "jewelry" + 41,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/70/02/dc4f02e5-0d93-4b86-8681-688674e6b0d6.JPG.webp",
    prodprice: "₹549.38",
    prodorg_prc: "₹1794.08",
    proddisc: " 69% Off",
    prodname: "luminus gold silver dragon",
    id: "jewelry" + 42,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/EC/FD/ba1a25ac-6cde-49a0-b629-3feba335e42d.jpg.webp",
    prodprice: "₹931.77",
    prodorg_prc: "₹1403.89",
    proddisc: " 38% Off",
    prodname: "trendy zericate zirrconia crystal",
    id: "jewelry" + 43,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/gallery/upload/2015/07/SKU223952_1.jpg.webp",
    prodprice: "₹1234.55",
    prodorg_prc: "₹1716.04",
    proddisc: " 28% Off",
    prodname: "elagent silver rehine stone",
    id: "jewelry" + 44,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/53/B7/cebb66f6-d4b1-4782-92a6-d580c7540c01.jpg.webp",
    prodprice: "₹392.04",
    prodorg_prc: "₹842.49",
    proddisc: " 53% Off",
    prodname: "African Hallow Braided circle",
    id: "jewelry" + 45,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/A3/F5/d5f97e83-7928-4a8a-8800-ea0a5558b6b5.jpg.webp",
    prodprice: "₹585.31",
    prodorg_prc: "₹1199",
    proddisc: " 49% Off",
    prodname: "925 strailing silvr",
    id: "jewelry" + 46,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/FE/98/449b8158-1171-440c-813c-cf8bd75f771c.jpg.webp",
    prodprice: "₹1099",
    prodorg_prc: "₹1559.97",
    proddisc: " 34% Off",
    prodname: "bohimen creative luminious",
    id: "jewelry" + 47,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/0E/16/d423b060-01eb-4063-a996-a55b972fe371.jpg.webp",
    prodprice: "₹980.15",
    prodorg_prc: "₹1559.97",
    proddisc: " 39% Off",
    prodname: "silver plated simple snake",
    id: "jewelry" + 48,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/A3/F5/49f5f923-0df1-481d-9be1-7d32b1a5028b.jpg.webp",
    prodprice: "₹286.40",
    prodorg_prc: "₹780.30",
    proddisc: " 66% Off",
    prodname: "silver plated simple glass slipper",
    id: "jewelry" + 49,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/gallery/upload/2015/08/SKU246403_2.jpg.webp",
    prodprice: "₹178.71",
    prodorg_prc: "₹701.56",
    proddisc: " 60% Off",
    prodname: "multi color glass sliper slipper",
    id: "jewelry" + 50,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/87/C9/5b079b14-bcc9-4864-beb6-8d233538130b.jpg.webp",
    prodprice: "₹1325.86",
    prodorg_prc: "₹1638.01",
    proddisc: " 19% Off",
    prodname: "mono color glass magnifire",
    id: "jewelry" + 51,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/D5/6A/e32aa121-e95c-4757-99e0-a8d90423c327.jpg.webp",
    prodprice: "₹3468.77",
    prodorg_prc: "₹4213.24",
    proddisc: " 18% Off",
    prodname: "punk genuine leather warp",
    id: "jewelry" + 52,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/12/20/096476ec-627d-c888-87ca-a6d9b932ff9c.jpg.webp",
    prodprice: "₹838.12",
    prodorg_prc: "₹1325.86",
    proddisc: " 37% Off",
    prodname: "tanzanite ziracvon loose",
    id: "jewelry" + 53,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/0E/C9/edd0a105-2d77-47f0-be1f-c2a3e4f44f1d.jpg.webp",
    prodprice: "₹1012.15",
    prodorg_prc: "₹1638.01",
    proddisc: " 38% Off",
    prodname: "double eagle",
    id: "jewelry" + 54,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz1.staticbg.com/thumb/gallery/oaupload/ser1/banggood/images/A9/F3/218667da-cb74-4cf6-b1d8-9703e1073d46.jpg.webp",
    prodprice: "₹574.36",
    prodorg_prc: "₹857.63",
    proddisc: " 33% Off",
    prodname: "i love you present",
    id: "jewelry" + 55,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/gallery/oaupload/ser1/banggood/images/3D/D6/2dcac586-5297-4302-bc9d-2e5e13656881.jpg.webp",
    prodprice: "₹935.67",
    prodorg_prc: "₹1169.78",
    proddisc: " 20% Off",
    prodname: "gold plated peremeter cristal",
    id: "jewelry" + 56,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/71/6F/41371d2f-5f42-4021-b3ca-60a574e6999a.jpg.webp",
    prodprice: "₹1863.54",
    prodorg_prc: "₹2730.53",
    proddisc: " 32% Off",
    prodname: "diamond tester gemstone selecter",
    id: "jewelry" + 57,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/C2/E8/6fd033f9-8e9e-45ce-b214-7e2691abec68.jpg.webp",
    prodprice: "₹458.86",
    prodorg_prc: "₹701.56",
    proddisc: " 35% Off",
    prodname: "vintage multilayer braceler",
    id: "jewelry" + 58,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/F2/00/4aa488fb-ba54-43a8-ae42-911190f41136.jpg.webp",
    prodprice: "₹515.05",
    prodorg_prc: "₹935.67",
    proddisc: " 45% Off",
    prodname: "hope racin geometry",
    id: "jewelry" + 59,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/2C/D2/e923adf3-ea3e-4890-b58f-c94230b8fcc5.jpg.webp",
    prodprice: "₹1023.07",
    prodorg_prc: "₹1638.01",
    proddisc: " 38% Off",
    prodname: "special gircon inland",
    id: "jewelry" + 60,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz.staticbg.com/thumb/gallery/oaupload/banggood/images/6F/CF/3abde787-1681-4d95-b702-d4528d4e6f33.jpg.webp",
    prodprice: "₹746.82",
    prodorg_prc: "₹1325.86",
    proddisc: " 44% Off",
    prodname: "cute pendant neckless",
    id: "jewelry" + 61,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/3F/7E/ff725c94-c521-faae-ec49-eab35d8e290c.jpg.webp",
    prodprice: "₹1064.43",
    prodorg_prc: "₹1559.97",
    proddisc: " 32% Off",
    prodname: "gold plated 10mm plane chain",
    id: "jewelry" + 62,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz2.staticbg.com/thumb/gallery/oaupload/banggood/images/DA/0D/7b357050-57fb-45bd-94c7-92d126912104.jpg.webp",
    prodprice: "₹1115.16",
    prodorg_prc: "₹1638.01",
    proddisc: " 32% Off",
    prodname: "cristal rehiness stone",
    id: "jewelry" + 63,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz1.staticbg.com/thumb/gallery/oaupload/banggood/images/70/02/dc4f02e5-0d93-4b86-8681-688674e6b0d6.JPG.webp",
    prodprice: "₹549.38",
    prodorg_prc: "₹1794.08",
    proddisc: " 69% Off",
    prodname: "luminus gold silver dragon",
    id: "jewelry" + 64,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/gallery/oaupload/banggood/images/EC/FD/ba1a25ac-6cde-49a0-b629-3feba335e42d.jpg.webp",
    prodprice: "₹931.77",
    prodorg_prc: "₹1403.89",
    proddisc: " 38% Off",
    prodname: "trendy zericate zirrconia crystal",
    id: "jewelry" + 65,
    quantity: 1,
  },
  {
    prodimage:
      "https://imgaz3.staticbg.com/thumb/gallery/upload/2015/07/SKU223952_1.jpg.webp",
    prodprice: "₹1234.55",
    prodorg_prc: "₹1716.04",
    proddisc: " 28% Off",
    prodname: "elagent silver rehine stone",
    id: "jewelry" + 66,
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

    prodprice.innerText = el.prodprice;
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
  // console.log(maxPrice,typeof(maxPrice))
  var searchedDarta = [];
  data.forEach(function (el) {
    var prodprice = el.prodprice;

    var Actualprice = "";
    for (var i = 1; i < prodprice.length; i++) {
      Actualprice = Actualprice + prodprice[i];
    }
    if (Actualprice >= minPrice && Actualprice <= maxPrice) {
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

//addTo cart

var cartData = JSON.parse(localStorage.getItem("atc")) || [];

document.querySelector(".number>h1").innerText = cartData.length;

// function addToCart(el) {
//   console.log("hello");
//   var id = el.id;
//   var cartData = JSON.parse(localStorage.getItem("atc")) || [];

//   document.querySelector(".number>h1").innerText = cartData.length;
//   var add = true;
//   cartData.forEach(function (el) {
//     if (id === el.id) {
//       add = false;
//     }
//   });
//   if (add) {
//     var p = "";
//     for (var i = 1; i < el.prodprice.length; i++) {
//       p = p + el.prodprice[i];
//     }

//     var obj = {
//       prodimage: el.prodimage,
//       prodprice: p,
//       prodorg_prc: el.prodorg_prc,
//       proddisc: el.proddisc,
//       id: el.id,
//       prodname: el.prodname,
//       quantity: el.quantity,
//     };
//     cartData.push(obj);
//     localStorage.setItem("atc", JSON.stringify(cartData));
//     document.querySelector(".number>h1").innerText = cartData.length;
//     alert("item is added to the cart");
//   } else {
//     alert("item is already exist");
//   }
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

// go to home

function GotoHome() {
  window.location.href = "index.html";
}
