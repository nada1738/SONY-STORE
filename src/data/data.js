import heroimg from "../assets/hero.png";

import hightlightimg from "../assets/hightlightimg.png";
import sneakershoe from "../assets/sneaker.png";

import clip from "../assets/video/clip.mp4";
import vcover1 from "../assets/video/vcover1.png";
import vcover2 from "../assets/video/vcover2.png";
import vcover3 from "../assets/video/vcover3.png";

import psale1 from "../assets/nike-air-red.png";
import psale2 from "../assets/nike-adapt-bb.png";
import psale3 from "../assets/nike-adapt-bb-smart.png";

import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.png";
import product8 from "../assets/product8.png";
import product9 from "../assets/product9.png";
import product10 from "../assets/product10.png";
import product11 from "../assets/product11.png";
import product12 from "../assets/product12.png";


import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import messenger from "../assets/messenger.svg";

const heroapi = {
  title: "Take Shots With Sony",
  subtitle: "Smile it's Sony",
  img: heroimg,
  btntext: "Explore Product",
  viddeos: [
    { imgsrc: vcover1, clip: clip },
    { imgsrc: vcover2, clip: clip },
    { imgsrc: vcover3, clip: clip },
  ],
  sociallinks: [
    { icon: facebook },
    { icon: messenger },
    { icon: instagram },
    { icon: twitter },
    { icon: youtube },
  ],
};

const popularsales = {
  title: "Popular Sales",
  items: [
    {
      id: "0p0x1",
      title: "Sony  W830 Compact ",
      text: "Sony Product",
      rating: "4.9",
      btn: "Buy Now",
      img: psale2,
      price: "200",
      color: "from-blue-600 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0p0x2",
      title: "Sony Alpha 7R II",
      text: "Sony Product",
      rating: "4.5",
      btn: "Buy Now",
      img: psale1,
      price: "200",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0p0x3",
      title: "Sony Alpha ZV-E10",
      text: "Sony Product",
      rating: "5+",
      btn: "Buy Now",
      img: psale3,
      price: "200",
      color: "from-violet-500 to-indigo-500",
      shadow: "shadow-lg shadow-violet-500",
    },
  ],
};

const highlight = {
  heading: "HIGHLIGHTS",
  title: "SONY WITH LIMITLESS CHOICES",
  text: "Our Purpose is to move the world forward. We take action by building community, protecting our planet and increasing access to photography.",
  btn: "Explore More",
  url: "https://electronics.sony.com/imaging/interchangeable-lens-cameras/c/all-interchangeable-lens-cameras",
  img: hightlightimg,
};

const sneaker = {
  heading: "FEATURED",
  title: "SONY YOUR EYES ",
  text: "The radiance lives on Nike Sneakers Air Lancing Shoes, the basket ball OG that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.",
  btn: "Explore More",
  url: "https://electronics.sony.com/imaging/camcorders/all-camcorders/p/fdrax100-b",
  img: sneakershoe,
};

const toprateslaes = {
  title: "Top Rated Sales",
  items: [
    {
      id: "0M0x1",
      title: "Sony RX10 IV with 0.03",
      text: "SONY PRODUCT",
      rating: "5+",
      btn: "Buy Now",
      img: product7,
      price: "150",
      color: "from-sky-600 to-indigo-600",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0M0x2",
      title: "Sony Alpha 9 II",
      text: "SONY PRODUCT",
      rating: "5+",
      btn: "Buy Now",
      img: product2,
      price: "150",
      color: "from-green-500 to-emerald-500",
      shadow: "shadow-lg shadow-green-500",
    },
    {
      id: "0M0x3",
      title: "Sony FE 200–600 mm",
      text: "SONY PRODUCT",
      rating: "5+",
      btn: "Buy Now",
      img: product3,
      price: "150",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0M0x4",
      title: "Sony Alpha 6400 ",
      text: "SONY PRODUCT",
      rating: "5+",
      btn: "Buy Now",
      img: product4,
      price: "150",
      color: "from-orange-500 to-amber-500",
      shadow: "shadow-lg shadow-orange-500",
    },
    {
      id: "0M0x5",
      title: "Sony Alpha 7R II",
      text: "SONY PRODUCT",
      rating: "5+",
      btn: "Buy Now",
      img: product5,
      price: "150",
      color: "from-gray-900 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x6",
      title: "Sony FE 200–600 mm",
      text: "SONY PRODUCT",
      rating: "5+",
      btn: "Buy Now",
      img: product6,
      price: "150",
      color: "from-blue-500 to-cyan-500",
      shadow: "shadow-lg shadow-cyan-500",
    },
    {
      id: "0M0x7",
      title: "Sony FR7 Cinema Line",
      text: "SONY PRODUCT",
      rating: "5+",
      btn: "Buy Now",
      img: product1,
      price: "150",
      color: "from-yellow-500 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x8",
      title: "Sony Alpha 6100",
      text: "SONY PRODUCT",
      rating: "5+",
      btn: "Buy Now",
      img: product9,
      price: "150",
      color: "from-[#936550] to-orange-900",
      shadow: "shadow-lg shadow-orange-800",
    },
    {
      id: "0M0x9",
      title: "Sony Alpha 6600 ",
      text: "SONY PRODUCT",
      rating: "5+",
      btn: "Buy Now",
      img: product10,
      price: "150",
      color: "from-indigo-700 to-indigo-700",
      shadow: "shadow-lg shadow-indigo-500",
    },
    {
      id: "0M0x10",
      title: "Sony FE 12-24mm F2.8",
      text: "SONY PRODUCT",
      rating: "5+",
      btn: "Buy Now",
      img: product12,
      price: "150",
      color: "from-green-600 to-lime-500",
      shadow: "shadow-lg shadow-lime-500",
    },
    {
      id: "0M0x11",
      title: "Sony Alpha 9 II",
      text: "SONY PRODUCT",
      rating: "5+",
      btn: "Buy Now",
      img: product11,
      price: "150",
      color: "from-slate-900 to-black",
      shadow: "shadow-lg shadow-black",
    },
    {
      id: "0M0x12",
      title: "Sony Alpha 7C",
      text: "SONY PRODUCT",
      rating: "5+",
      btn: "Buy Now",
      img: product8,
      price: "150",
      color: "from-blue-900 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
  ],
};


const story = {
  title: "Top Stories",
  news: [
    {
      title: "Jayson Tatum Debuts",
      text: "How to create artistic selfies from above using your smartphone.",
      img: "https://www.myclickmagazine.com/wp-content/uploads/2018/12/Shooting_From_Above_by_Dana_Walton_14.jpg",
      url: "https://www.myclickmagazine.com/selfies-from-above/",
      like: "3/5",
      time: "11 Mins",
      by: " Dana Walton",
      btn: "Read More"
    },
    {
      title: "unique photography style",
      text: "How I found my unique photography style by doing these 5 things",
      img: "https://www.myclickmagazine.com/wp-content/uploads/2019/05/Finding-Your-Unique-Voice-Jess-Buttermore-8-767x512.jpg",
      time: "41 Mins",
      like: "5/5",
      url: "https://www.myclickmagazine.com/how-to-find-your-photography-style/",
      by: "Jess Buttermore",
      btn: "Read More"
    },
    {
      title: "family photo sessions",
      text: "6 Tips to take the worry (and blurry) out of extended family photo sessions",
      img: "https://www.myclickmagazine.com/wp-content/uploads/2019/05/Extended-Family-Session-Jen-Sebring-1-5-767x511.jpg",
      time: "2 Hours",
      url: "https://www.myclickmagazine.com/extended-family-photo-sessions/",
      like: "5/5",
      by: "Jen Sebring ",
      btn: "Read More"
    },
    {
      title: "best photography products ",
      text: " Here’s every photographer’s dream list! Click’s best new and tried-and-true photography products for 2019",
      img: "https://www.myclickmagazine.com/wp-content/uploads/2019/10/clicks-best-2019-use-767x511.jpg",
      time: "7 Months",
      url: "https://www.myclickmagazine.com/best-photography-products-2019/",
      like: "5/5",
      by: "Click Magazine",
      btn: "Read More"
    },
    {
      title: "busy life for photography",
      text: "How to make time in your incredibly busy life for photography",
      img: "https://www.myclickmagazine.com/wp-content/uploads/2019/09/Fujifilm-review-Karlee-Hooper-6-767x511.jpg",
      time: "1 Months",
      url: "https://www.myclickmagazine.com/make-time-photography-art-fujifilm-review/",
      like: "3/5",
      by: "JKarlee Hooper",
      btn: "Read More"
    },
    {
      title: "Street Photography",
      text: "Want to rock your phone camera like a pro? 10 mobile photography tips you need",
      img: "https://www.myclickmagazine.com/wp-content/uploads/2019/02/mobile-photography-iris-bergmann-02.jpg",
      time: "25 Days",
      url: "https://www.myclickmagazine.com/mobile-photography-tips-phone-camera/",
      like: "3/5",
      by: "Iris Bergmann",
      btn: "Read More"
    },
    {
      title: "Baby photographers",
      text: "14 Baby photographers breaking Instagram with a cuteness overload",
      img: "https://www.myclickmagazine.com/wp-content/uploads/2019/04/Image-1-of-3-767x511.jpg",
      url: "https://www.myclickmagazine.com/lifestyle-baby-photographers-on-instagram/",
      time: "6 Days",
      like: "4/5",
      by: "Micael Le",
      btn: "Read More"
    },
    {
      title: "digital images to print",
      text: "A pro’s guide to prepping your digital images to print (and sell!) beautifully",
      img: "https://www.myclickmagazine.com/wp-content/uploads/2019/01/preparing-digital-images-for-print-kate-luber-07-767x511.jpg",
      url: "https://www.myclickmagazine.com/preparing-digital-images-for-printing/",
      time: "5 Days",
      like: "4/5",
      by: "Kate Luber",
      btn: "Read More"
    },
    {
      title: "mobile photography",
      text: "There is nothing more rewarding than being able to use mobile photography to capture life’s moments. ",
      img: "https://www.myclickmagazine.com/wp-content/uploads/2019/02/mobile-photography-iris-bergmann-03-767x556.jpg",
      url: "https://www.myclickmagazine.com/mobile-photography-tips-phone-camera/",
      time: "5 Days",
      like: "4/5",
      by: "Micael Le",
      btn: "Read More"
    },
  ],
};


const footerAPI = {
  TTitles: [ {title: "About Nike"},{title: "Get Help"},{title: "Company"} ],
  links: [
    [
      {link: "News"},
      {link: "Careers"},
      {link: "Investors"},
      {link: "Prupose"},
      {link: "Sustainability"},
    ],
    [
      {link: "Order Status"},
      {link: "Shipping & Delivery"},
      {link: "Payment Options"},
      {link: "Gift Card Balance"},
      {link: "Contact Us"},
      {link: "FAQ"},
      {link: "Blog"},
    ],
    [
      {link: "Gift Cards"},
      {link: "Promotions"},
      {link: "Find A Store"},
      {link: "Signup"},
      {link: "Sony Jouneral"},
      {link: "Send Us Feeback"},
    ],
  ]
};


export { heroapi, footerAPI, story, sneaker, highlight, toprateslaes, popularsales };
