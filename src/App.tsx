import React, { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { ThemeToggle } from './components/ThemeToggle';
import { PhoneModal } from './components/PhoneModal';
import { NewsModal } from './components/NewsModal';
import { Footer } from './components/Footer';
import { ComingSoon } from './components/ComingSoon';
import { Phone, NewsItem } from './types';
import { Smartphone, Scale } from 'lucide-react';

// Mock data - In a real app, this would come from an API
const mockPhones: Phone[] = [
    // Example phone data
    {
      "id": "1",
      "name": "iQOO Neo 10R",
      "brand": "iQOO",
      "image": "https://exstatic-in.iqoo.com/Oz84QB3Wo0uns8j1/in/1741668268810/52912b36dac4d520d49cfab09e88bf21.png.webp",
      "stores": [
        { "name": "iQOO Store", "url": "https://www.iqoo.com/in/neo-10r", "price": "₹26,998" },
        { "name": "Amazon", "url": "https://www.amazon.in/iQOO-Snapdragon-Processor-Slimmest-Smartphone/dp/B0DW47XR3X", "price": "₹26,998" }
      ],
      "reviews": [
        {
          "author": "TechRadar",
          "rating": 4.5,
          "text": "The iQOO Neo 10R offers impressive performance with its latest chipset and a smooth 120Hz display. The battery life is commendable, easily lasting a full day of heavy usage. However, the camera performance in low light conditions could be improved."
        }
      ],
      "videoReviews": [
        {
          "title": "iQOO Neo 10R Review",
          "url": "https://www.youtube.com/watch?v=nTFPgSB471E&pp=ygUTaXFvbyBuZW8gMTByIHJldmlldw%3D%3D",
          "thumbnail": "https://i.ytimg.com/vi/nTFPgSB471E/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAGHDqSI-kGiseF-RrXlI1QxskGSg"
        }
      ],
      "releaseDate": "2025-03-15"
    },
    {
      "id": "2",
      "name": "vivo V50",
      "brand": "vivo",
      "image": "https://m.media-amazon.com/images/I/71m7OmKyA5L._AC_UF1000,1000_QL80_.jpg",
      "stores": [
        { "name": "vivo Store", "url": "https://www.vivo.com/in/v50", "price": "₹34,999" },
        { "name": "Flipkart", "url": "https://www.flipkart.com/vivo-v50-5g-rose-red-128-gb/p/itm12bbdca230795", "price": "₹34,999" }
      ],
      "reviews": [
        {
          "author": "GSM Arena",
          "rating": 4.7,
          "text": "The vivo V50 stands out with its sleek design and vibrant AMOLED display. The camera setup delivers sharp and detailed images, even in challenging lighting conditions. On the downside, the absence of stereo speakers is noticeable."
        }
      ],
      "videoReviews": [
        {
          "title": "vivo V50 Unboxing and Review",
          "url": "https://www.youtube.com/watch?v=iTKpF1tRku0&pp=ygUIdml2byB2NTA%3D",
          "thumbnail": "https://i.ytimg.com/vi/iTKpF1tRku0/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA1KvMJgVdlesrWEAr2v-eWEJwA1Q"
        }
      ],
      "releaseDate": "2025-03-20"
    },
    {
      "id": "3",
      "name": "realme P3 Pro",
      "brand": "realme",
      "image": "https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/c/y/n/-original-imah9m58zvvd44hf.jpeg?q=20&crop=true",
      "stores": [
        { "name": "realme Store", "url": "https://www.realme.com/in/p3-pro", "price": "₹23,999" },
        { "name": "Amazon", "url": "https://www.amazon.in/realme-p3-pro/dp/B0EXAMPLE", "price": "₹23,999" }
      ],
      "reviews": [
        {
          "author": "The Verge",
          "rating": 4.3,
          "text": "The realme P3 Pro offers great value for its price, featuring a robust build and a capable camera system. The device handles multitasking efficiently, though the pre-installed bloatware can be a bit intrusive."
        }
      ],
      "videoReviews": [
        {
          "title": "realme P3 Pro Hands-on Review",
          "url": "https://www.youtube.com/watch?v=oSVn9iJWapk&pp=ygUNcmVhbG1lIHAzIHBybw%3D%3D",
          "thumbnail": "https://i.ytimg.com/vi/oSVn9iJWapk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCRAkS-E9dmM2AYl9yLiKO5r3jxNw"
        }
      ],
      "releaseDate": "2025-03-25"
    },
    {
      "id": "4",
      "name": "OnePlus 13R",
      "brand": "OnePlus",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7L8MH2qX_bq-LM4FSFMdU3EcP_ifHciuWww&s",
      "stores": [
        { "name": "OnePlus Store", "url": "https://www.oneplus.in/13r", "price": "₹42,998" },
        { "name": "Amazon", "url": "https://www.amazon.in/OnePlus-13R-Smarter-Storage-Nebula/dp/B0DPS62DYH", "price": "₹42,998" }
      ],
      "reviews": [
        {
          "author": "Android Central",
          "rating": 4.8,
          "text": "The OnePlus 13R delivers top-tier performance with its latest processor and fluid OxygenOS experience. The 120Hz OLED display is a visual treat, and the battery charges remarkably fast. However, the lack of a headphone jack might be a drawback for some users."
        }
      ],
      "videoReviews": [
        {
          "title": "OnePlus 13R In-depth Review",
          "url": "https://www.youtube.com/watch?v=iGMve5HRFAk&pp=ygULb25lcGx1cyAxM3I%3D",
          "thumbnail": "https://i.ytimg.com/vi/iGMve5HRFAk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDwMsoiNXsOJczCqBsV-NrXDpJuew"
        }
      ],
      "releaseDate": "2025-03-28"
    },
    {
      "id": "5",
      "name": "Samsung Galaxy M16 5G",
      "brand": "Samsung",
      "image": "https://images.hindustantimes.com/tech/htmobile4/P38955/images/Design/156210-v3-samsung-galaxy-m16-mobile-phone-large-10.jpg",
      "stores": [
        { "name": "Samsung Store", "url": "https://www.samsung.com/in/galaxy-m16-5g", "price": "₹11,499" },
        { "name": "Amazon", "url": "https://www.amazon.in/Samsung-MediaTek-Dimensity-Charging-Upgrades/dp/B0DX6QQMGK", "price": "₹11,499" }
      ],
      "reviews": [
        {
          "author": "CNET",
          "rating": 4.2,
          "text": "The Samsung Galaxy M16 5G is a budget-friendly option offering 5G connectivity and a decent display. The battery life is impressive, supporting extended usage. However, the device's performance may lag under heavy multitasking."
        }
      ],
      "videoReviews": [
        {
          "title": "Samsung Galaxy M16 5G Review",
          "url": "https://www.youtube.com/watch?v=5naRLjFU-LM&pp=ygUOc2Ftc3VuZyBtMTYgNWc%3D",
          "thumbnail": "https://i.ytimg.com/vi/5naRLjFU-LM/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAxZgRy-nrAJWFVbp_ctdTqXhuEyQ"
        }
      ],
      "releaseDate": "2025-03-30"
    },
  
      {
        "id": "6",
        "name": "Moto Edge 60 Fusion",
        "brand": "Motorola",
        "image": "https://m.media-amazon.com/images/I/81ZkMDjcjFL.jpg",
        "stores": [
          { "name": "Motorola Store", "url": "https://www.motorola.com/in/moto-edge-60-fusion", "price": "₹25,000" },
          { "name": "Amazon", "url": "https://www.flipkart.com/motorola-edge-60-fusion-5g-pantone-amazonite-256-gb/p/itm9218b12ff853f", "price": "₹25,000" }
        ],
        "reviews": [
          {
            "author": "TechRadar",
            "rating": 4.5,
            "text": "The Moto Edge 60 Fusion offers a sleek design, powerful performance, and excellent camera capabilities, making it a great mid-range option."
          }
        ],
        "videoReviews": [
          {
            "title": "Moto Edge 60 Fusion Review",
            "url": "https://www.youtube.com/watch?v=ygu26xUSRt4&pp=ygUXbW90b3JvbGEgZWRnZSA2MCBmdXNpb24%3D",
            "thumbnail": "https://i.ytimg.com/vi/ygu26xUSRt4/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAXAftXyhsCVGaAGW7dEZISGbDBTQ"
          }
        ],
        "releaseDate": "2025-04-02"
      },
      {
        "id": "7",
        "name": "Samsung Galaxy S25 Edge",
        "brand": "Samsung",
        "image": "https://mobilemall.pk/public_html/images/product/product_1737957264samsung-galaxy-s25-edge-r4.jpg",
        "stores": [
          { "name": "Samsung Store", "url": "https://www.samsung.com/in/galaxy-s25-edge", "price": "?????" },
        ],
        "reviews": [
          {
            "author": "GSM Arena",
            "rating": 4.7,
            "text": "The Galaxy S25 Edge is a premium device with top-notch features, including a stunning display and powerful processor."
          }
        ],
        "videoReviews": [
          {
            "title": "Samsung Galaxy S25 Edge Review",
            "url": "https://www.youtube.com/watch?v=example7",
            "thumbnail": "https://marketplace.canva.com/EAFZk58D9Lk/1/0/900w/canva-black-white-modern-coming-soon-instagram-story-V71tGs0HuEw.jpg"
          }
        ],
        "releaseDate": "2025-04-16"
      },
      {
        "id": "8",
        "name": "OPPO Find X8 Ultra",
        "brand": "OPPO",
        "image": "https://www.oppo.com/content/dam/oppo/product-asset-library/find/find-x8-series/en/oppo-find-x8/main/assets/images-color-b-1-mo.png",
        "stores": [
          { "name": "COMING SOON", "url": "", "price": "₹95,000" },
          { "name": "COMING SOON", "url": "", "price": "₹95,000" }
        ],
        "reviews": [
          {
            "author": "The Verge",
            "rating": 4.8,
            "text": "The OPPO Find X8 Ultra excels in camera performance and design, making it a standout flagship."
          }
        ],
        "videoReviews": [
          {
            "title": "OPPO Find X8 Ultra Review",
            "url": "https://www.youtube.com/watch?v=p24qhUFIe68&pp=ygUSb3BwbyBmaW5kIHg4IHVsdHJh",
            "thumbnail": "https://i.ytimg.com/vi/p24qhUFIe68/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAeUPoUBXGoHP9Zhn5hgYT88Ad1pg"
          }
        ],
        "releaseDate": "2025-04-10"
      },
      {
        "id": "9",
        "name": "iQOO Z10 5G",
        "brand": "iQOO",
        "image": "https://cdn1.smartprix.com/rx-ifY1Hjbv5-w420-h420/iqoo-z10-5g.webp",
        "stores": [
          { "name": "iQOO Store", "url": "https://www.iqoo.com/in/z10-5g", "price": "₹22,999" },
          { "name": "Amazon", "url": "https://www.amazon.in/b?ie=UTF8&node=100371451031", "price": "₹22,999" }
        ],
        "reviews": [
          {
            "author": "91Mobiles",
            "rating": 4.3,
            "text": "The iQOO Z10 5G is a solid budget-friendly option with good performance and 5G connectivity."
          }
        ],
        "videoReviews": [
          {
            "title": "iQOO Z10 5G Review",
            "url": "https://www.youtube.com/watch?v=xROUvhMi3R0&pp=ygUIaXFvbyB6MTA%3D",
            "thumbnail": "https://i.ytimg.com/vi/xROUvhMi3R0/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAhngyQ4CpIG0RKOVD-eT8p0NzJhQ"
          }
        ],
        "releaseDate": "2025-04-11"
      },
      {
        "id": "10",
        "name": "POCO F7 Pro 5G",
        "brand": "POCO",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCeMzlwpgLXcxG7FRDsIUDL0kYHBr18Dnarw&s",
        "stores": [
          { "name": "COMING SOON", "url": "void", "price": "?????" },
          { "name": "COMING SOON", "url": "void", "price": "₹?????" }
        ],
        "reviews": [
          {
            "author": "Android Authority",
            "rating": 4.4,
            "text": "The POCO F7 Pro 5G offers excellent value for money with its high-end specs and competitive pricing."
          }
        ],
        "videoReviews": [
          {
            "title": "POCO F7 Pro 5G Review",
            "url": "https://www.youtube.com/watch?v=example10",
            "thumbnail": "https://i.ytimg.com/vi/VvPOHg7S8Jo/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLB1TR2-iT9k7dNet-I4_pZcESdhRg"
          }
        ],
        "releaseDate": "YET TO LAUNCH"
      },
      {
        "id": "11",
        "name": "POCO F6 5G",
        "brand": "POCO",
        "image": "https://rukminim2.flixcart.com/image/750/900/xif0q/mobile/f/g/h/f6-5g-mzb0h51in-poco-original-imahf3aafhcsjprb.jpeg?q=20&crop=false",
        "stores": [
          { "name": "Flipkart", "url": "https://www.flipkart.com/poco-f6-5g-titanium-256-gb/p/itmb5451dec31503", "price": "₹24,999" }
        ],
        "reviews": [
          {
            "author": "GSMArena",
            "rating": 4.6,
            "text": "The POCO F6 5G offers excellent performance with its Snapdragon 8s Gen 3 processor, a vibrant AMOLED display, and a robust camera setup. It's a great choice for gamers and photography enthusiasts."
          }
        ],
        "videoReviews": [
          {
            "title": "POCO F6 5G Review",
            "url": "https://www.youtube.com/watch?v=3A1Ig3yeeXQ&pp=ygUOcG9jbyBmNiByZXZpZXc%3D",
            "thumbnail": "https://i.ytimg.com/vi/3A1Ig3yeeXQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCf59OHgUAe1FwXuhhCo4RJbJCSMQ"
          }
        ],
        "releaseDate": "2024-05-23"
      },
      {
        "id": "12", 
        "name": "Samsung Galaxy S25 Ultra",
        "brand": "Samsung",
        "image": "https://i.gadgets360cdn.com/products/large/samsung-galaxy-s25-ultra-795x800-1738321292.jpg?downsize=*:360",
        "stores": [
          { "name": "Samsung Store", "url": "https://www.samsung.com/in/galaxy-s25-ultra", "price": "₹1,19,999" },
          { "name": "Amazon", "url": "https://www.amazon.in/Samsung-Smartphone-Titanium-Silverblue-Included/dp/B0DSKNKCYX", "price": "₹1,19,999" }
        ],
        "reviews": [
          {
            "author": "TechCrunch",
            "rating": 4.9,
            "text": "The Samsung Galaxy S25 Ultra is a powerhouse with its stunning display, top-notch camera system, and premium build quality. It's the best flagship phone of the year."
          }
        ],
        "videoReviews": [
          {
            "title": "Shot on Galaxy S25 Ultra - 30 Days review ",
            "url": "https://www.youtube.com/watch?v=BaslT3Zbfc4&t=59s&pp=ygUYc2Ftc3VuZyBzMjUgdWx0cmEgcmV2aWV3",
            "thumbnail": "https://i.ytimg.com/vi/BaslT3Zbfc4/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCjPrrHemFqTou79dstjHri2jqVEg"
          }
        ],
        "releaseDate": "2025-02-07"
      }
      
    
    
  

  ];

const mockNews: NewsItem[] = [
  {
    id: '1',
    title: 'Samsung Galaxy S25 Edge Launches',
    summary: 'Samsung unveils its slimmest Galaxy-S smartphone with a 2K AMOLED display, Snapdragon 8 Elite processor, and dual rear cameras including a 200MP primary sensor.',
    image: 'https://i.ytimg.com/vi/qg0cqDb8B7o/sddefault.jpg',
    date: '2025-04-16',
  },
  {
    id: '2',
    title: 'Motorola Edge 60 Fusion Debuts',
    summary: 'Motorola introduces its latest mid-range smartphone featuring a curved AMOLED display, MediaTek Dimensity 7400 processor, and a triple-camera setup.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvaeIz-sCshDERmlej06FthZD89uHBWRUQLg&s',
    date: '2025-04-02',
  },
  {
    id: '3',
    title: 'iQOO Z10 5G Announced',
    summary: 'iQOO launches its thinnest smartphone with a 7300mAh battery, Snapdragon 7s Gen 3 processor, and quad-curved display for enhanced visuals.',
    image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202503/iqoo-z10-5g-210153208-16x9_2.jpg?VersionId=o1Alw48pfrAOWhXS4fmYAxm6hsqpn41M&size=690:388',
    date: '2025-04-11',
  },
  {
    id: '4',
    title: 'Vivo X200 Ultra Unveiled',
    summary: 'Vivo introduces its camera-centric flagship with a 200MP periscope telephoto lens, twin imaging chips, and AI-powered optimizations.',
    image: 'https://i.gadgets360cdn.com/large/vivo_x200_ultra_tenaa_cnmo_gadgets_360_1736413462627.jpg',
    date: '2025-04-10',
  },
  {
    id: '5',
    title: 'OPPO Find X8 Ultra Released',
    summary: 'OPPO launches its flagship with a quad-camera setup, 2K LTPO OLED display, and Snapdragon 8 Elite CPU for high-end performance.',
    image: 'https://images.fonearena.com/blog/wp-content/uploads/2025/03/OPPO-Find-X8s-and-Find-X8-Ultra-launch-teaser-1024x571.jpg',
    date: '2025-04-10',
  }
  ,
  {
    id: '6',
    title: 'Xiaomi 14 Pro Launches',
    summary: 'Xiaomi unveils its latest flagship with a 200MP camera, Snapdragon 8 Gen 3 processor, and a stunning AMOLED display.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvFPbUXJwSle3tVO07gc5gtZi9SOhS8Ka6WQ&s',
    date: '2025-04-10',
  },
  {
    id: '7',
    title: 'Google Pixel 9 Pro Announced',
    summary: 'Google introduces its latest flagship with advanced AI features, a stunning OLED display, and an improved camera system.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH_QJ5HLdfNMYMXmvil6wWK3CrRFMihlrVSg&s',
    date: '2025-04-10',
  },  





];

function App() {
  const [selectedPhone, setSelectedPhone] = useState<Phone | null>(null);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [searchResults, setSearchResults] = useState<Phone[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showingComingSoon, setShowingComingSoon] = useState(false);
  const [showAllNews, setShowAllNews] = useState(false);

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setIsSearching(false);
      return;
    }
    
    setIsSearching(true);
    // In a real app, this would be an API call
    const results = mockPhones.filter(phone => 
      phone.name.toLowerCase().includes(query.toLowerCase()) ||
      phone.brand.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  if (showingComingSoon) {
    return <ComingSoon />;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Header */}
      <header className="sticky top-0 bg-white dark:bg-gray-800 shadow-md z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Smartphone className="w-8 h-8 text-blue-500" />
              <h1 className="text-xl font-bold">SmartBuyGuide</h1>
            </div>
            <SearchBar onSearch={handleSearch} />
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowingComingSoon(true)}
                className="hidden md:flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors"
              >
                <Scale className="w-5 h-5" />
                <span>Compare</span>
              </button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Banner Section */}
        <section className="mb-12">
          <div className="relative w-full h-64 bg-blue-500 rounded-xl overflow-hidden shadow-md">
            <img
              src="https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/product/1741692391383/zip/img/iqooneo10r-kv-img1-lg-x2.jpg" // Replace with your banner image URL
              alt="Promotional Banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h2 className="text-3xl font-bold text-white text-center">
                Welcome to PhoneGuide! <br />
                Discover the Latest Smartphones
              </h2>
            </div>
          </div>
        </section>

        {isSearching ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.map(phone => (
              <div
                key={phone.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-all"
                onClick={() => setSelectedPhone(phone)}
              >
                <img src={phone.image} alt={phone.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{phone.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Released: {phone.releaseDate}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {/* Latest Launches */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Latest Launches</h2>
              <div className="flex gap-6 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                {mockPhones.map(phone => (
                  <div
                    key={phone.id}
                    className="flex-none w-64 bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-all"
                    onClick={() => setSelectedPhone(phone)}
                  >
                    <img src={phone.image} alt={phone.name} className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">{phone.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Released: {phone.releaseDate}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* News Section */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Latest News</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(showAllNews ? mockNews : mockNews.slice(0, 4)).map(news => (
                  <div
                    key={news.id}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-all"
                    onClick={() => setSelectedNews(news)}
                  >
                    <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2">{news.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-2 line-clamp-2">{news.summary}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">{news.date}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                {!showAllNews ? (
                  <button
                    onClick={() => setShowAllNews(true)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors"
                  >
                    See More
                  </button>
                ) : (
                  <button
                    onClick={() => setShowAllNews(false)}
                    className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors"
                  >
                    See Less
                  </button>
                )}
              </div>
            </section>
          </>
        )}
      </main>

      <Footer />

      {selectedPhone && (
        <PhoneModal
          phone={selectedPhone}
          onClose={() => setSelectedPhone(null)}
        />
      )}

      {selectedNews && (
        <NewsModal
          news={selectedNews}
          onClose={() => setSelectedNews(null)}
        />
      )}
    </div>
  );
}

export default App;
