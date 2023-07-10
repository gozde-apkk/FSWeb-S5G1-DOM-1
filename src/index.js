const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')


/* Kodlar Buradan aşağıya */


const navkismi = document.querySelectorAll("nav a");

navkismi.forEach((item) => item.className="italic");
  navkismi[0].textContent=siteContent["nav"]["nav-item-1"];
  navkismi[1].textContent=siteContent["nav"]["nav-item-2"];
  navkismi[2].textContent=siteContent["nav"]["nav-item-3"];
  navkismi[3].textContent=siteContent["nav"]["nav-item-4"];
  navkismi[4].textContent=siteContent["nav"]["nav-item-5"];
  navkismi[5].textContent=siteContent["nav"]["nav-item-6"];

document.querySelector(".cta h1").textContent=siteContent["cta"]["h1"]
document.querySelector(".cta button").textContent=siteContent["cta"]["button"]
document.querySelector("#logo-img").src=siteContent["images"]["logo-img"]
document.querySelector("#cta-img").src=siteContent["images"]["cta-img"]

const mainkismi=document.querySelectorAll(".text-content h4")
mainkismi[0].textContent=siteContent["ana-içerik"]["özellikler-h4"];
mainkismi[1].textContent=siteContent["ana-içerik"]["hakkımızda-h4"];
mainkismi[2].textContent=siteContent["ana-içerik"]["servisler-h4"];
mainkismi[3].textContent=siteContent["ana-içerik"]["ürünler-h4"];
mainkismi[4].textContent=siteContent["ana-içerik"]["vizyon-h4"];
document.querySelector("#middle-img").src = siteContent["images"]["accent-img"];

const mainicerik=document.querySelectorAll(".text-content p");
mainicerik[0].textContent=siteContent["ana-içerik"]["özellikler-içerik"];
mainicerik[1].textContent=siteContent["ana-içerik"]["hakkımızda-içerik"];
mainicerik[2].textContent=siteContent["ana-içerik"]["servisler-içeriği"];
mainicerik[3].textContent=siteContent["ana-içerik"]["ürünler-içeriği"];
mainicerik[4].textContent=siteContent["ana-içerik"]["vizyon-içeriği"];

const sonkisim=document.querySelector(".contact h4");
sonkisim.textContent=siteContent["iletisim"]["iletişim-h4"]

const diger=document.querySelectorAll(".contact p")
diger[0].textContent=siteContent["iletisim"]["adres"]
diger[1].textContent=siteContent["iletisim"]["telefon"]
diger[2].textContent=siteContent["iletisim"]["email"]

const copy=document.querySelectorAll("footer a");
copy.forEach((foot)=>foot.className="bold")
copy[0].textContent=siteContent["footer"]["copyright"]