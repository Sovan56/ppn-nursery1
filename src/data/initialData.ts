import { BusinessInfo, Product, CustomerReview, GalleryItem, CustomerEnquiry } from '../types';

export const INITIAL_BUSINESS_INFO: BusinessInfo = {
  name: "PPN Nursery",
  tagline: "Premium Plants & Complete Garden Solutions in Bengaluru",
  description: "PPN Nursery is a trusted garden center located in Battarahalli, Bengaluru. We offer a wide range of healthy indoor and outdoor plants, decorative pots, organic soil, manure, and gardening essentials for homes, offices, and landscape projects.",
  rating: 5.0,
  reviewCount: 321,
  address: "Venus Home, 57/1, Ward 52, Kithaganur Main Road, TC Palya Cross Road, TC Palya Circle, Virgo Nagar, Old Madras Road, Near Indus Valley School, Battarahalli, Bengaluru, Karnataka 560049, India",
  mapsPlusCode: "2PC4+MF Bengaluru, Karnataka",
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.054363236713!2d77.7011!3d13.0322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae111234567890%3A0x1234567890abcdef!2sPPN%20Nursery!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  mapsDirectionsUrl: "https://maps.google.com/?q=2PC4%2BMF+Bengaluru,+Karnataka",
  phone: "087620 43246",
  email: "info@ppnnursery.com",
  hours: "Open daily · 9:00 AM – 8:00 PM",
  services: [
    "In-store shopping",
    "In-store pick-up",
    "Doorstep delivery available",
    "Bulk orders for housing societies & landscapers",
    "Gardening guidance & consultation"
  ],
  serviceAreas: [
    "Battarahalli",
    "Virgo Nagar",
    "TC Palya Cross",
    "KR Puram",
    "Whitefield",
    "Old Madras Road",
    "Greater Bengaluru"
  ],
  whatsappNumber: "918762043246",
  announcement: "🌿 Open Daily 9 AM - 8 PM • Delivery & Pick-Up Available in Bengaluru • Call 087620 43246"
};

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: "prod-1",
    name: "Snake Plant (Sansevieria)",
    category: "Indoor",
    description: "Tough air-purifying indoor plant that converts CO2 into oxygen at night. Excellent for bedrooms and offices.",
    priceRange: "₹150 – ₹350",
    inStock: true,
    featured: true,
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bf6?auto=format&fit=crop&q=80&w=800",
    careInstructions: {
      light: "Low to bright indirect light",
      water: "Water every 2–3 weeks (allow soil to dry)",
      difficulty: "Easy"
    },
    addedDate: "2026-01-15"
  },
  {
    id: "prod-2",
    name: "Areca Palm (Chrysalidocarpus)",
    category: "Indoor",
    description: "Lush tropical foliage that humidifies indoor air and purifies pollutants. Great for living rooms and balcony corners.",
    priceRange: "₹250 – ₹600",
    inStock: true,
    featured: true,
    image: "https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&q=80&w=800",
    careInstructions: {
      light: "Bright, indirect light",
      water: "Water when top 1 inch of soil is dry",
      difficulty: "Easy"
    },
    addedDate: "2026-01-16"
  },
  {
    id: "prod-3",
    name: "Money Plant (Golden Pothos)",
    category: "Indoor",
    description: "Popular indoor climber with glossy green leaves marbled in gold. Symbol of prosperity and good luck.",
    priceRange: "₹100 – ₹250",
    inStock: true,
    featured: true,
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&q=80&w=800",
    careInstructions: {
      light: "Low to bright indirect light",
      water: "Water weekly or when soil feels dry",
      difficulty: "Easy"
    },
    addedDate: "2026-01-18"
  },
  {
    id: "prod-4",
    name: "Bougainvillea (Vibrant Pink / Orange)",
    category: "Flowering",
    description: "Hardy, sun-loving flowering vine that produces abundant colorful blooms throughout Bengaluru's dry and warm weather.",
    priceRange: "₹180 – ₹400",
    inStock: true,
    featured: true,
    image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&q=80&w=800",
    careInstructions: {
      light: "Full direct sunlight (6+ hours)",
      water: "Moderate watering; drought resilient",
      difficulty: "Easy"
    },
    addedDate: "2026-01-20"
  },
  {
    id: "prod-5",
    name: "ZZ Plant (Zamioculcas Zamiifolia)",
    category: "Indoor",
    description: "Extremely resilient plant with glossy dark green waxy leaves. Perfect for modern office spaces or dim corners.",
    priceRange: "₹300 – ₹650",
    inStock: true,
    featured: false,
    image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&q=80&w=800",
    careInstructions: {
      light: "Low light to medium indirect light",
      water: "Water once every 3–4 weeks",
      difficulty: "Easy"
    },
    addedDate: "2026-02-01"
  },
  {
    id: "prod-6",
    name: "Peace Lily (Spathiphyllum)",
    category: "Indoor",
    description: "Elegant air purifier with dark green foliage and long-lasting white spathe blooms. Droops gently to signal when thirsty.",
    priceRange: "₹200 – ₹450",
    inStock: true,
    featured: true,
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e7355?auto=format&fit=crop&q=80&w=800",
    careInstructions: {
      light: "Medium to low indirect light",
      water: "Keep soil consistently moist, not soggy",
      difficulty: "Moderate"
    },
    addedDate: "2026-02-05"
  },
  {
    id: "prod-7",
    name: "Jasmine (Mogra / Madurai Malli)",
    category: "Flowering",
    description: "Deeply fragrant white flowering shrub popular for home gardens and balconies. Sweet natural perfume.",
    priceRange: "₹150 – ₹320",
    inStock: true,
    featured: true,
    image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&q=80&w=800",
    careInstructions: {
      light: "Full morning or afternoon sun",
      water: "Daily light watering in summers",
      difficulty: "Moderate"
    },
    addedDate: "2026-02-10"
  },
  {
    id: "prod-8",
    name: "Hibiscus (Gudhal Multi-Color)",
    category: "Flowering",
    description: "Tropical flowering plant featuring large dramatic blooms in crimson, yellow, pink, and orange.",
    priceRange: "₹120 – ₹300",
    inStock: true,
    featured: false,
    image: "https://images.unsplash.com/photo-1550950158-d0d960dff51b?auto=format&fit=crop&q=80&w=800",
    careInstructions: {
      light: "Direct sunlight for best flowering",
      water: "Regular watering; well-draining soil",
      difficulty: "Moderate"
    },
    addedDate: "2026-02-12"
  },
  {
    id: "prod-9",
    name: "Croton Petra (Codiaeum variegatum)",
    category: "Outdoor",
    description: "Striking broad-leaved foliage plant bursting with fiery yellow, red, and bronze veins for colorful garden borders.",
    priceRange: "₹180 – ₹420",
    inStock: true,
    featured: false,
    image: "https://images.unsplash.com/photo-1617173944883-6ffbd35d584d?auto=format&fit=crop&q=80&w=800",
    careInstructions: {
      light: "Bright indirect light or partial sun",
      water: "Keep soil moderately moist",
      difficulty: "Moderate"
    },
    addedDate: "2026-02-15"
  },
  {
    id: "prod-10",
    name: "Ficus Lyrata (Fiddle Leaf Fig)",
    category: "Indoor",
    description: "Architectural indoor tree with broad violin-shaped leaves. Adds high-end elegance to living rooms and lobbies.",
    priceRange: "₹450 – ₹950",
    inStock: true,
    featured: false,
    image: "https://images.unsplash.com/photo-1545241047-10d210a514d0?auto=format&fit=crop&q=80&w=800",
    careInstructions: {
      light: "Bright filtered sunlight",
      water: "Water when top 2 inches dry out",
      difficulty: "Moderate"
    },
    addedDate: "2026-02-18"
  },
  {
    id: "prod-11",
    name: "Premium Cocopeat Brick (5 kg Block)",
    category: "Garden Supplies",
    description: "Compressed 100% natural coconut coir block. Expands to 75 liters of rich water-retentive growing medium.",
    priceRange: "₹180 – ₹250",
    inStock: true,
    featured: true,
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80&w=800",
    careInstructions: {
      difficulty: "Easy"
    },
    addedDate: "2026-02-20"
  },
  {
    id: "prod-12",
    name: "Organic Vermicompost Manure (10 kg Bag)",
    category: "Garden Supplies",
    description: "Pure earthworm-castings organic fertilizer enriched with natural plant nutrients and beneficial micro-flora.",
    priceRange: "₹220 – ₹350",
    inStock: true,
    featured: false,
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800",
    careInstructions: {
      difficulty: "Easy"
    },
    addedDate: "2026-02-22"
  },
  {
    id: "prod-13",
    name: "Handcrafted Ceramic Planter Pots (Set of 3)",
    category: "Garden Supplies",
    description: "Beautiful glazed ceramic pots with drainage holes and saucers. Elegant earthy and pastel finishes.",
    priceRange: "₹450 – ₹850",
    inStock: true,
    featured: true,
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80&w=800",
    careInstructions: {
      difficulty: "Easy"
    },
    addedDate: "2026-02-25"
  },
  {
    id: "prod-14",
    name: "Ergonomic Gardening Tool Set (5 Pieces)",
    category: "Garden Supplies",
    description: "Includes hand trowel, cultivator rake, bypass pruner shears, root weeder, and anti-slip garden gloves.",
    priceRange: "₹350 – ₹600",
    inStock: true,
    featured: false,
    image: "https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?auto=format&fit=crop&q=80&w=800",
    careInstructions: {
      difficulty: "Easy"
    },
    addedDate: "2026-02-28"
  },
  {
    id: "prod-15",
    name: "Hybrid English Rose Plants",
    category: "Flowering",
    description: "Fragrant hybrid roses in glowing crimson, sunshine yellow, and soft pastel pink. Continuous blooming variety.",
    priceRange: "₹120 – ₹280",
    inStock: true,
    featured: false,
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800",
    careInstructions: {
      light: "Full direct sunlight",
      water: "Regular morning watering",
      difficulty: "Moderate"
    },
    addedDate: "2026-03-01"
  },
  {
    id: "prod-16",
    name: "Bismarckia & Foxtail Palm Saplings",
    category: "Outdoor",
    description: "Majestic landscape palms perfect for residential society lawns, bungalow entrances, and commercial premises.",
    priceRange: "₹350 – ₹1,200",
    inStock: true,
    featured: false,
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=800",
    careInstructions: {
      light: "Full outdoor sun",
      water: "Moderate, deep watering",
      difficulty: "Easy"
    },
    addedDate: "2026-03-05"
  }
];

export const INITIAL_REVIEWS: CustomerReview[] = [
  {
    id: "rev-1",
    author: "Ananya Sharma",
    rating: 5,
    comment: "Excellent variety of healthy indoor plants! The staff at PPN Nursery was very knowledgeable and guided me on light and watering care for my snake plant and peace lily. Highly recommended in Battarahalli area.",
    date: "2 weeks ago",
    verified: true
  },
  {
    id: "rev-2",
    author: "Rajesh Kumar (President, Green Villa Society)",
    rating: 5,
    comment: "Ordered bulk palms, flowering shrubs, and cocopeat for our apartment garden project in Virgo Nagar. Prompt doorstep delivery and top-quality plants at very reasonable wholesale rates.",
    date: "1 month ago",
    verified: true
  },
  {
    id: "rev-3",
    author: "Priya Venkatesh",
    rating: 5,
    comment: "Great experience shopping here! They have gorgeous ceramic pots, organic manure, and freshly potted roses. Very polite service and convenient location near Old Madras Road.",
    date: "1 month ago",
    verified: true
  }
];

export const INITIAL_GALLERY: GalleryItem[] = [
  {
    id: "gal-1",
    title: "PPN Nursery Main Entrance & Walkway",
    category: "Nursery Layout",
    imageUrl: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1200",
    caption: "Spacious green canopy filled with vibrant indoor and outdoor plants at Battarahalli."
  },
  {
    id: "gal-2",
    title: "Indoor Air-Purifying Plants Display",
    category: "Indoor Collection",
    imageUrl: "https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&q=80&w=1200",
    caption: "Curated collection of Areca Palms, Snake Plants, ZZ Plants, and Money Plants."
  },
  {
    id: "gal-3",
    title: "Flowering Bougainvillea & Roses Row",
    category: "Outdoor & Palms",
    imageUrl: "https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&q=80&w=1200",
    caption: "Dazzling array of sun-loving flowering plants in full bloom."
  },
  {
    id: "gal-4",
    title: "Ceramic Pots & Designer Planters Section",
    category: "Supplies & Pots",
    imageUrl: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80&w=1200",
    caption: "Handcrafted pottery, terracotta pots, and decorative drainage saucers."
  },
  {
    id: "gal-5",
    title: "Organic Soil, Cocopeat & Fertilizers Stock",
    category: "Supplies & Pots",
    imageUrl: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80&w=1200",
    caption: "Premium quality vermicompost, potting mix, and 5kg cocopeat blocks."
  },
  {
    id: "gal-6",
    title: "Landscape Palms & Garden Shrubs Area",
    category: "Outdoor & Palms",
    imageUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=1200",
    caption: "Healthy outdoor saplings for housing societies, lawns, and office gardens."
  }
];

export const INITIAL_ENQUIRIES: CustomerEnquiry[] = [
  {
    id: "enq-1",
    name: "Srinivas Rao",
    phone: "09876543210",
    email: "srinivas.rao@gmail.com",
    interest: "Bulk / Wholesale",
    message: "Hi, we are looking for 40 Areca Palms and 200kg organic compost for our apartment society in KR Puram. Please share quote and delivery time.",
    productName: "Areca Palm",
    date: "2026-03-28",
    status: "New"
  },
  {
    id: "enq-2",
    name: "Meera Nair",
    phone: "09812345678",
    email: "meera.nair@hotmail.com",
    interest: "Indoor Plants",
    message: "Hello, do you have Snake Plants and ZZ Plants ready in ceramic pots? I would like 4 sets for my office desk in Whitefield.",
    productName: "Snake Plant (Sansevieria)",
    date: "2026-03-29",
    status: "Contacted"
  }
];
