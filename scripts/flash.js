var flashArr = []

class flashdeals{
    constructor(name,image,price,striked,disc,rate){
        this.prodname = name;
        this.prodimage =image;
        this.prodprice = price;
        this.striked = striked;
        this.proddisc = disc;
        this.rate = rate;
        this.quantity = 1;
    }
}

var flashobj1 = new flashdeals("AODUKE JMS578 SATA M.2 NGFF External Hard Drive Enclosure SSD Solid State USB3.1 GEN1 Transparent Mobile Hard Disk Box with USB Cable DM201SU - BLack","https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/65/AA/6eef8c51-b432-40d5-844f-67c7b13044cd.jpg.webp","₹1,031.39", "₹1,587.17", "35% Off",1587.17)
var flashobj2 = new flashdeals("iMars J05 1500A 18000mAh Portable Car Jump Starter Powerbank Emergency Battery Booster Fireproof with LED Flashlight QC3.0 USB Port","https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/9C/A5/be9bbc56-b522-4454-9ddd-b862a8d19b11.jpg.webp","₹4,366.12","₹7,542.05","-42%", 4366.12)
var flashobj3 = new flashdeals("BlitzWolf® BW-PC1 2500W Power Strip Socket USB Charger With 3 * AC Outlets /20W USB-C PD/ 18W 2 * USB-A QC3.0 Fast Charging For iPhone 13 13 Pro Max 13 Mini For OnePlus 9Pro For Xiaomi MI10 - EU Plug","https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/83/8B/6f38722d-bd98-4131-be2e-9689770180be.jpg.webp","₹1,984.17","₹3,651.53","-46%",1,984.17)
var flashobj4 = new flashdeals("KROAK SP-01 20W 17.6V Shingled Solar Panel Flexible Outdoor Waterproof Portable Superior Monocrystalline Solar Power Cell Battery Charger for Car Camping Phone","https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/44/C3/53943346-e295-4207-b85f-cc6ee7ad0138.jpg.webp","₹1,984.17","₹4,763.11","-58%",1984.17)
var flashobj5 = new flashdeals("BlitzWolf® BW-WA3 100W bluetooth Speaker Portable Speakers Quad Drivers Dual Diaphragm Deep Bass RGB Light TWS 5000mAh Outdoors Wireless Speaker - Black","https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/85/A8/4f80d6ee-dfd3-46c1-96f9-f493a49ab004.jpg.webp","₹6,668.67","₹15,084.90","-56%",6668.67)
var flashobj6 = new flashdeals("BaoFeng UV-S9 Plus Walkie Talkie Tri-Band 10W Powerful 10W CB Radio Transceiver VHF UHF 10W 10km Long Range up of uv-5r Portable Radio 2xAntenna - Silver","https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/46/89/40c73fa8-ac59-453d-b12f-8301f5052328.jpg.webp","₹2,857.55","₹4,763.11","-40%",2857.55)
var flashobj7 = new flashdeals("100W Solar Panel Kit 12V Battery Charger 10-100A LCD Controller For Caravan Van Boat - without solar controller","https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/53/72/4af57742-6796-486e-b2ef-4579af4cb556.jpg.webp","₹1,269.58","₹2,778.15","-54%",1269.58)
var flashobj8 = new flashdeals("BlitzWolf® AirAux AA-SAR1 60W bluetooth V5.0 Soundbar TV Bar Powerful Bass DSP Stereo HDMI Optical AUX Speaker Home Theater - EU Plug","https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/0F/D6/b55b21f3-d4e3-49a9-a535-e7c9b5334715.jpg.webp","₹5,557.09","₹12,702.95","-56%",5557.09)
var flashobj1 = new flashdeals("AODUKE JMS578 SATA M.2 NGFF External Hard Drive Enclosure SSD Solid State USB3.1 GEN1 Transparent Mobile Hard Disk Box with USB Cable DM201SU - BLack","https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/65/AA/6eef8c51-b432-40d5-844f-67c7b13044cd.jpg.webp","₹1,031.39", "₹1,587.17", "35% Off",1587.17)
var flashobj2 = new flashdeals("iMars J05 1500A 18000mAh Portable Car Jump Starter Powerbank Emergency Battery Booster Fireproof with LED Flashlight QC3.0 USB Port","https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/9C/A5/be9bbc56-b522-4454-9ddd-b862a8d19b11.jpg.webp","₹4,366.12","₹7,542.05","-42%", 4366.12)
var flashobj3 = new flashdeals("BlitzWolf® BW-PC1 2500W Power Strip Socket USB Charger With 3 * AC Outlets /20W USB-C PD/ 18W 2 * USB-A QC3.0 Fast Charging For iPhone 13 13 Pro Max 13 Mini For OnePlus 9Pro For Xiaomi MI10 - EU Plug","https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/83/8B/6f38722d-bd98-4131-be2e-9689770180be.jpg.webp","₹1,984.17","₹3,651.53","-46%",1,984.17)
var flashobj4 = new flashdeals("KROAK SP-01 20W 17.6V Shingled Solar Panel Flexible Outdoor Waterproof Portable Superior Monocrystalline Solar Power Cell Battery Charger for Car Camping Phone","https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/44/C3/53943346-e295-4207-b85f-cc6ee7ad0138.jpg.webp","₹1,984.17","₹4,763.11","-58%",1984.17)
var flashobj5 = new flashdeals("BlitzWolf® BW-WA3 100W bluetooth Speaker Portable Speakers Quad Drivers Dual Diaphragm Deep Bass RGB Light TWS 5000mAh Outdoors Wireless Speaker - Black","https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/85/A8/4f80d6ee-dfd3-46c1-96f9-f493a49ab004.jpg.webp","₹6,668.67","₹15,084.90","-56%",6668.67)
var flashobj6 = new flashdeals("BaoFeng UV-S9 Plus Walkie Talkie Tri-Band 10W Powerful 10W CB Radio Transceiver VHF UHF 10W 10km Long Range up of uv-5r Portable Radio 2xAntenna - Silver","https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/46/89/40c73fa8-ac59-453d-b12f-8301f5052328.jpg.webp","₹2,857.55","₹4,763.11","-40%",2857.55)
var flashobj7 = new flashdeals("100W Solar Panel Kit 12V Battery Charger 10-100A LCD Controller For Caravan Van Boat - without solar controller","https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/53/72/4af57742-6796-486e-b2ef-4579af4cb556.jpg.webp","₹1,269.58","₹2,778.15","-54%",1269.58)
var flashobj8 = new flashdeals("BlitzWolf® AirAux AA-SAR1 60W bluetooth V5.0 Soundbar TV Bar Powerful Bass DSP Stereo HDMI Optical AUX Speaker Home Theater - EU Plug","https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/0F/D6/b55b21f3-d4e3-49a9-a535-e7c9b5334715.jpg.webp","₹5,557.09","₹12,702.95","-56%",5557.09)
var flashobj1 = new flashdeals("AODUKE JMS578 SATA M.2 NGFF External Hard Drive Enclosure SSD Solid State USB3.1 GEN1 Transparent Mobile Hard Disk Box with USB Cable DM201SU - BLack","https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/65/AA/6eef8c51-b432-40d5-844f-67c7b13044cd.jpg.webp","₹1,031.39", "₹1,587.17", "35% Off",1587.17)
var flashobj2 = new flashdeals("iMars J05 1500A 18000mAh Portable Car Jump Starter Powerbank Emergency Battery Booster Fireproof with LED Flashlight QC3.0 USB Port","https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/9C/A5/be9bbc56-b522-4454-9ddd-b862a8d19b11.jpg.webp","₹4,366.12","₹7,542.05","-42%", 4366.12)
var flashobj3 = new flashdeals("BlitzWolf® BW-PC1 2500W Power Strip Socket USB Charger With 3 * AC Outlets /20W USB-C PD/ 18W 2 * USB-A QC3.0 Fast Charging For iPhone 13 13 Pro Max 13 Mini For OnePlus 9Pro For Xiaomi MI10 - EU Plug","https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/83/8B/6f38722d-bd98-4131-be2e-9689770180be.jpg.webp","₹1,984.17","₹3,651.53","-46%",1,984.17)
var flashobj4 = new flashdeals("KROAK SP-01 20W 17.6V Shingled Solar Panel Flexible Outdoor Waterproof Portable Superior Monocrystalline Solar Power Cell Battery Charger for Car Camping Phone","https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/44/C3/53943346-e295-4207-b85f-cc6ee7ad0138.jpg.webp","₹1,984.17","₹4,763.11","-58%",1984.17)
var flashobj5 = new flashdeals("BlitzWolf® BW-WA3 100W bluetooth Speaker Portable Speakers Quad Drivers Dual Diaphragm Deep Bass RGB Light TWS 5000mAh Outdoors Wireless Speaker - Black","https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/85/A8/4f80d6ee-dfd3-46c1-96f9-f493a49ab004.jpg.webp","₹6,668.67","₹15,084.90","-56%",6668.67)
var flashobj6 = new flashdeals("BaoFeng UV-S9 Plus Walkie Talkie Tri-Band 10W Powerful 10W CB Radio Transceiver VHF UHF 10W 10km Long Range up of uv-5r Portable Radio 2xAntenna - Silver","https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/46/89/40c73fa8-ac59-453d-b12f-8301f5052328.jpg.webp","₹2,857.55","₹4,763.11","-40%",2857.55)
var flashobj7 = new flashdeals("100W Solar Panel Kit 12V Battery Charger 10-100A LCD Controller For Caravan Van Boat - without solar controller","https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/53/72/4af57742-6796-486e-b2ef-4579af4cb556.jpg.webp","₹1,269.58","₹2,778.15","-54%",1269.58)
var flashobj8 = new flashdeals("BlitzWolf® AirAux AA-SAR1 60W bluetooth V5.0 Soundbar TV Bar Powerful Bass DSP Stereo HDMI Optical AUX Speaker Home Theater - EU Plug","https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/0F/D6/b55b21f3-d4e3-49a9-a535-e7c9b5334715.jpg.webp","₹5,557.09","₹12,702.95","-56%",5557.09)
var flashobj1 = new flashdeals("AODUKE JMS578 SATA M.2 NGFF External Hard Drive Enclosure SSD Solid State USB3.1 GEN1 Transparent Mobile Hard Disk Box with USB Cable DM201SU - BLack","https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/65/AA/6eef8c51-b432-40d5-844f-67c7b13044cd.jpg.webp","₹1,031.39", "₹1,587.17", "35% Off",1587.17)
var flashobj2 = new flashdeals("iMars J05 1500A 18000mAh Portable Car Jump Starter Powerbank Emergency Battery Booster Fireproof with LED Flashlight QC3.0 USB Port","https://imgaz2.staticbg.com/thumb/view/oaupload/banggood/images/9C/A5/be9bbc56-b522-4454-9ddd-b862a8d19b11.jpg.webp","₹4,366.12","₹7,542.05","-42%", 4366.12)
var flashobj3 = new flashdeals("BlitzWolf® BW-PC1 2500W Power Strip Socket USB Charger With 3 * AC Outlets /20W USB-C PD/ 18W 2 * USB-A QC3.0 Fast Charging For iPhone 13 13 Pro Max 13 Mini For OnePlus 9Pro For Xiaomi MI10 - EU Plug","https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/83/8B/6f38722d-bd98-4131-be2e-9689770180be.jpg.webp","₹1,984.17","₹3,651.53","-46%",1,984.17)
var flashobj4 = new flashdeals("KROAK SP-01 20W 17.6V Shingled Solar Panel Flexible Outdoor Waterproof Portable Superior Monocrystalline Solar Power Cell Battery Charger for Car Camping Phone","https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/44/C3/53943346-e295-4207-b85f-cc6ee7ad0138.jpg.webp","₹1,984.17","₹4,763.11","-58%",1984.17)
var flashobj5 = new flashdeals("BlitzWolf® BW-WA3 100W bluetooth Speaker Portable Speakers Quad Drivers Dual Diaphragm Deep Bass RGB Light TWS 5000mAh Outdoors Wireless Speaker - Black","https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/85/A8/4f80d6ee-dfd3-46c1-96f9-f493a49ab004.jpg.webp","₹6,668.67","₹15,084.90","-56%",6668.67)
var flashobj6 = new flashdeals("BaoFeng UV-S9 Plus Walkie Talkie Tri-Band 10W Powerful 10W CB Radio Transceiver VHF UHF 10W 10km Long Range up of uv-5r Portable Radio 2xAntenna - Silver","https://imgaz.staticbg.com/thumb/view/oaupload/banggood/images/46/89/40c73fa8-ac59-453d-b12f-8301f5052328.jpg.webp","₹2,857.55","₹4,763.11","-40%",2857.55)
var flashobj7 = new flashdeals("100W Solar Panel Kit 12V Battery Charger 10-100A LCD Controller For Caravan Van Boat - without solar controller","https://imgaz1.staticbg.com/thumb/view/oaupload/banggood/images/53/72/4af57742-6796-486e-b2ef-4579af4cb556.jpg.webp","₹1,269.58","₹2,778.15","-54%",1269.58)
var flashobj8 = new flashdeals("BlitzWolf® AirAux AA-SAR1 60W bluetooth V5.0 Soundbar TV Bar Powerful Bass DSP Stereo HDMI Optical AUX Speaker Home Theater - EU Plug","https://imgaz3.staticbg.com/thumb/view/oaupload/banggood/images/0F/D6/b55b21f3-d4e3-49a9-a535-e7c9b5334715.jpg.webp","₹5,557.09","₹12,702.95","-56%",5557.09)

flashArr.push(flashobj1, flashobj2,flashobj3,flashobj4,flashobj5,flashobj6,flashobj7,flashobj8,flashobj1, flashobj2,flashobj3,flashobj4,flashobj5,flashobj6,flashobj7,flashobj8,flashobj1, flashobj2,flashobj3,flashobj4,flashobj5,flashobj6,flashobj7,flashobj8,flashobj1, flashobj2,flashobj3,flashobj4,flashobj5,flashobj6)

import navbar from "../components/navbar.js"
document.querySelector('#navbar').innerHTML = navbar()

import footer from "../components/footer.js"
document.querySelector('#totalfooter').innerHTML = footer()

import displayData from "../components/append.js"
let cont = document.querySelector('#container')
displayData(flashArr, cont)



