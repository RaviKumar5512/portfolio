// Preloader animation for project-detail.html
document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');
  const loaderText = document.getElementById('loader-text');
  const loaderFill = document.getElementById('loader-fill');

  if (loader) {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 15) + 12;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        if (loaderText) loaderText.textContent = `Loading ${progress}%`;
        if (loaderFill) loaderFill.style.width = `${progress}%`;
        setTimeout(() => {
          loader.classList.add('hidden');
        }, 200);
      } else {
        if (loaderText) loaderText.textContent = `Loading ${progress}%`;
        if (loaderFill) loaderFill.style.width = `${progress}%`;
      }
    }, 25);
  }

  // Load project details based on URL query parameter ?id=
  initProjectDetails();
});

const projectDatabase = {
  "atharv-ayurvedic": {
    id: "atharv-ayurvedic",
    title: "Atharv Ayurvedic Drugs — Healthcare E-Commerce Platform",
    shortTitle: "Atharv Ayurvedic Drugs",
    category: "E-COMMERCE & HEALTHCARE",
    subtext: "E-Commerce web platform design for authentic Ayurvedic healthcare and herbal remedies, featuring GMP certified product showcases, streamlined checkout, and doctor-approved badges.",
    client: "Atharv Ayurvedic Drugs",
    role: "UI/UX & Web Designer",
    timeline: "2024",
    tools: "HTML5, CSS3, JavaScript, WooCommerce",
    image: "images/Atharv Ayurvedic Drugs.png",
    liveUrl: "https://atharvayurvedicdrugs.com/",
    colors: [
      { hex: "#8B1E26", name: "Ayurvedic Crimson" },
      { hex: "#DAA520", name: "Herbal Gold" },
      { hex: "#10B981", name: "Natural Green" },
      { hex: "#FFFFFF", name: "Clean White" }
    ],
    features: [
      { icon: "fa-leaf", title: "Herbal Product Taxonomy", desc: "Intuitive categorization for Ayurvedic supplements, oils, baby care, and natural remedies." },
      { icon: "fa-cart-shopping", title: "Streamlined Checkout", desc: "Frictionless cart addition, prepaid discounts (10% off), and secure payment processing." },
      { icon: "fa-mobile-screen", title: "Mobile-First Responsiveness", desc: "Optimized for seamless ordering across smartphones and desktop browsers." },
      { icon: "fa-user-doctor", title: "Doctor Approved & GMP Badges", desc: "Prominent quality assurance labels build instant trust with online shoppers." }
    ]
  },
  "dernier-cri": {
    id: "dernier-cri",
    title: "Dernier Cri — Luxury Event Management & Haute Couture",
    shortTitle: "Dernier Cri",
    category: "LUXURY EVENTS & FASHION",
    subtext: "High-end luxury event management and designer fashion portal featuring 'Amplify Reach' digital showcases, appointment booking, and traffic analytics widgets.",
    client: "Dernier Cri Brand",
    role: "UI/UX & Web Designer",
    timeline: "2024",
    tools: "Figma, HTML5, CSS3, SASS",
    image: "images/Derniercri.png",
    liveUrl: "https://derniercri.in/",
    colors: [
      { hex: "#7C3AED", name: "Royal Violet" },
      { hex: "#FF6B00", name: "Unleash Orange" },
      { hex: "#0B0B0E", name: "Obsidian Dark" },
      { hex: "#FFFFFF", name: "Pure White" }
    ],
    features: [
      { icon: "fa-calendar-check", title: "Instant Appointment Booking", desc: "Direct appointment booking workflow for corporate events and fashion celebrations." },
      { icon: "fa-crown", title: "Runway Fashion Showcase", desc: "Full-bleed editorial visuals highlighting event management brilliance." },
      { icon: "fa-chart-line", title: "Traffic & Engagement Analytics", desc: "Embedded performance metric cards showing brand reach growth." },
      { icon: "fa-sliders", title: "Multi-Service Registration", desc: "Categorized portal for event registrations, bookings, and inquiries." }
    ]
  },
  "taabir": {
    id: "taabir",
    title: "Taabir — Luxury Indian Label & Boutique Store",
    shortTitle: "Taabir",
    category: "LUXURY FASHION & E-COMMERCE",
    subtext: "A luxury Indian label showcasing handcrafted sarees, anarkali suits, and festive ethnic collections with intuitive side filters and view options.",
    client: "Taabir Clothing",
    role: "Web & UI/UX Designer",
    timeline: "2024",
    tools: "HTML5, CSS3, JavaScript",
    image: "images/Taabir.png",
    liveUrl: "https://taabir.in/",
    colors: [
      { hex: "#D4AF37", name: "Royal Gold" },
      { hex: "#0F172A", name: "Deep Navy" },
      { hex: "#DC2626", name: "Heritage Crimson" },
      { hex: "#F8FAFC", name: "Ivory Silk" }
    ],
    features: [
      { icon: "fa-shirt", title: "Multi-Grid Product View", desc: "Toggle between 2, 3, or 4 column grid layouts for seamless collection browsing." },
      { icon: "fa-filter", title: "Sidebar Category & Availability Filters", desc: "Instant stock, price, and category filtering for Bestsellers, Sarees, and Suits." },
      { icon: "fa-heart", title: "Instant Wishlist & Cart", desc: "Quick-add items to shopping bag with real-time price updates." },
      { icon: "fa-gem", title: "Heritage Fashion Imagery", desc: "High-resolution lookbook galleries capturing fabric textures and embroidery." }
    ]
  },
  "digital-manjha": {
    id: "digital-manjha",
    title: "Digital Manjha — Creative Agency & Growth Platform",
    shortTitle: "Digital Manjha",
    category: "CREATIVE AGENCY & BRANDING",
    subtext: "Digital marketing agency portfolio built to 'Make Your Business Fly' with cutting-edge technology, service packages, and customer trust counters.",
    client: "Digital Manjha Agency",
    role: "Lead Web Designer",
    timeline: "2024",
    tools: "HTML5, CSS3, JavaScript, Animation",
    image: "images/Digital Manjha.png",
    liveUrl: "https://digitalmanjha.com/",
    colors: [
      { hex: "#84CC16", name: "Lime Energy" },
      { hex: "#06B6D4", name: "Teal Growth" },
      { hex: "#0F172A", name: "Dark Slate" },
      { hex: "#FFFFFF", name: "Bright White" }
    ],
    features: [
      { icon: "fa-users-line", title: "Customer Proof Banner", desc: "Highlighting '66+ Happy Customers' with neon accent counters." },
      { icon: "fa-headset", title: "Direct Call & Service CTA", desc: "1-click phone consultation CTA and transparent service overview." },
      { icon: "fa-rocket", title: "Cutting-Edge Tech Stack", desc: "Modern frontend layout engineered for speed and conversion." },
      { icon: "fa-lightbulb", title: "Strategic Service Breakdown", desc: "Clear packaging for SEO, Social Media, Branding, and Web Dev." }
    ]
  },
  "empros": {
    id: "empros",
    title: "Empros — Ocean Freight & Global Logistics Portal",
    shortTitle: "Empros",
    category: "GLOBAL LOGISTICS & ENTERPRISE",
    subtext: "A corporate logistics web portal specializing in Ocean Freight, Air Cargo, and global supply chain management with phone helpline and instant quote requests.",
    client: "Empros Global Logistics",
    role: "UI/UX & Web Designer",
    timeline: "2024",
    tools: "Angular, Bootstrap, CSS3",
    image: "images/Empros.png",
    liveUrl: "https://empros.in/",
    colors: [
      { hex: "#0284C7", name: "Ocean Blue" },
      { hex: "#F59E0B", name: "Amber Alert" },
      { hex: "#0F172A", name: "Navy Charcoal" },
      { hex: "#FFFFFF", name: "Clean White" }
    ],
    features: [
      { icon: "fa-ship", title: "Ocean Freight Showcase", desc: "Dynamic hero carousel highlighting container shipping and air transport services." },
      { icon: "fa-phone-volume", title: "Direct Contact Helpline", desc: "Prominent contact bar with immediate phone connectivity (+91 9810582127)." },
      { icon: "fa-industry", title: "Industry Reliability Index", desc: "Demonstrating supply chain trust across global logistics partners." },
      { icon: "fa-route", title: "Cargo Tracking & Quote Request", desc: "Fast quote inquiry form for enterprise freight shipments." }
    ]
  },
  "sareen-kataria": {
    id: "sareen-kataria",
    title: "House of Sareen Kataria — Haute Couture E-Commerce",
    shortTitle: "House of Sareen Kataria",
    category: "LUXURY FASHION & E-COMMERCE",
    subtext: "Haute couture bridal wear and designer ethnic fashion website with high-definition visual layouts, curated lookbooks, and custom ordering.",
    client: "Sareen Kataria Couture",
    role: "UI/UX Designer",
    timeline: "2024",
    tools: "Figma, Web Design, CSS3",
    image: "images/TueSpot Solutions.png",
    liveUrl: "https://houseofsareenkataria.com/",
    colors: [
      { hex: "#B91C1C", name: "Couture Red" },
      { hex: "#D4AF37", name: "Zari Gold" },
      { hex: "#18181B", name: "Dark Velvet" },
      { hex: "#FFFFFF", name: "Pure White" }
    ],
    features: [
      { icon: "fa-gem", title: "High-Fashion Lookbooks", desc: "Full-screen imagery displaying hand-embroidered details and bridal collections." },
      { icon: "fa-sliders", title: "Custom Fitting Request", desc: "Bespoke measurement inquiry workflow for couture outfits." },
      { icon: "fa-palette", title: "Elegant Aesthetics", desc: "Premium typography and luxurious visual hierarchy." },
      { icon: "fa-bag-shopping", title: "Global Shipping Portal", desc: "Multi-currency price toggle and international tracking." }
    ]
  },
  "everything-green": {
    id: "everything-green",
    title: "Everything Green — Eco Solutions & Marketplace",
    shortTitle: "Everything Green",
    category: "SUSTAINABILITY & E-COMMERCE",
    subtext: "An eco-friendly web platform promoting sustainable living, biodegradable products, and environmental awareness.",
    client: "Everything Green India",
    role: "UI/UX Designer",
    timeline: "2024",
    tools: "Web Design, Figma, CSS3",
    image: "images/Car Dealer Ship.png",
    liveUrl: "https://everythinggreen.in/",
    colors: [
      { hex: "#16A34A", name: "Forest Green" },
      { hex: "#84CC16", name: "Bio Lime" },
      { hex: "#0F172A", name: "Dark Slate" },
      { hex: "#FFFFFF", name: "Eco White" }
    ],
    features: [
      { icon: "fa-seedling", title: "Eco-Impact Calculator", desc: "Displays plastic saved and carbon offset for each product." },
      { icon: "fa-box-open", title: "Zero-Waste Product Store", desc: "Categorized sustainable alternatives for home and care." },
      { icon: "fa-book-open-reader", title: "Green Blog & Guides", desc: "Educational content hub sharing tips for zero-waste lifestyle." },
      { icon: "fa-recycle", title: "Recycling Drop Points", desc: "Resource recycling guidelines and collection point map." }
    ]
  },
  "mannat-academy": {
    id: "mannat-academy",
    title: "Mannat Academy — Educational Coaching Portal",
    shortTitle: "Mannat Academy",
    category: "EDTECH & WEB DESIGN",
    subtext: "Educational coaching institute portal offering structured course directories, exam preparation resources, and online student admission forms.",
    client: "Mannat Academy",
    role: "Web Designer",
    timeline: "2024",
    tools: "HTML5, CSS3, JavaScript, Bootstrap",
    image: "images/Soma Digital Library.png",
    liveUrl: "https://mannatacademy.com/",
    colors: [
      { hex: "#2563EB", name: "Academic Blue" },
      { hex: "#F59E0B", name: "Sun Yellow" },
      { hex: "#0F172A", name: "Dark Slate" },
      { hex: "#FFFFFF", name: "Clean White" }
    ],
    features: [
      { icon: "fa-graduation-cap", title: "Course Directory", desc: "Detailed syllabus breakdown for nursing and competitive exams." },
      { icon: "fa-file-signature", title: "Online Admission Form", desc: "Seamless digital registration and fee payment workflow." },
      { icon: "fa-trophy", title: "Topper Hall of Fame", desc: "Showcase section highlighting student rank accomplishments." },
      { icon: "fa-headset", title: "Counseling Inquiry Desk", desc: "Direct WhatsApp and callback request widgets." }
    ]
  },
  "imperial-weaves": {
    id: "imperial-weaves",
    title: "Imperial Weaves — Heritage Handloom Textiles",
    shortTitle: "Imperial Weaves",
    category: "HERITAGE TEXTILES & E-COMMERCE",
    subtext: "Handcrafted luxury silk sarees and traditional handloom textiles showcase platform preserving artisan heritage through digital commerce.",
    client: "Imperial Weaves",
    role: "UI/UX & Web Designer",
    timeline: "2024",
    tools: "Figma, HTML5, CSS3",
    image: "images/Imperial weaves.png",
    liveUrl: "https://imperialweaves.com/",
    colors: [
      { hex: "#991B1B", name: "Silk Maroon" },
      { hex: "#D4AF37", name: "Zari Gold" },
      { hex: "#1E1B4B", name: "Indigo Night" },
      { hex: "#FFFFFF", name: "Pure White" }
    ],
    features: [
      { icon: "fa-scroll", title: "Artisan Weave Stories", desc: "Dedicated section explaining Banarasi and Kanjeevaram techniques." },
      { icon: "fa-magnifying-glass-plus", title: "High-Res Fabric Zoom", desc: "Ultra-sharp viewer for inspect zari threads and motifs." },
      { icon: "fa-gift", title: "Custom Gift Packaging UI", desc: "Add personalized gift notes during checkout." },
      { icon: "fa-certificate", title: "Silk Mark Certification", desc: "Authenticity verification guarantee displayed on product pages." }
    ]
  },
  "hardcode-shampoo": {
    id: "hardcode-shampoo",
    title: "Hardcode Shampoo — Men's Grooming E-Commerce",
    shortTitle: "Hardcode Shampoo",
    category: "PERSONAL CARE & E-COMMERCE",
    subtext: "Bold, modern e-commerce website for men's specialized hair care products, featuring ingredient breakdowns and subscription options.",
    client: "Hardcode Care",
    role: "UI/UX Designer",
    timeline: "2024",
    tools: "Figma, Web Design, SASS",
    image: "images/Hardcode.png",
    liveUrl: "https://www.hardcodeshampoo.com/",
    colors: [
      { hex: "#111827", name: "Midnight Black" },
      { hex: "#EF4444", name: "Bold Red" },
      { hex: "#6B7280", name: "Steel Gray" },
      { hex: "#FFFFFF", name: "Clean White" }
    ],
    features: [
      { icon: "fa-bottle-droplet", title: "Ingredient Transparency Grid", desc: "Detailed breakdown of natural oils and hair compounds." },
      { icon: "fa-arrows-rotate", title: "Auto-Refill Subscription", desc: "Subscribe & save 15% recurring delivery checkout option." },
      { icon: "fa-flask", title: "Hair Quiz Recommendation", desc: "3-question quiz matching users with shampoo for scalp type." },
      { icon: "fa-star-half-stroke", title: "Verified Customer Reviews", desc: "Real user photo reviews and rating distribution bar." }
    ]
  },
  "orogoo": {
    id: "orogoo",
    title: "Orogoo Job Portal — Web UI/UX Case Study",
    shortTitle: "Orogoo Job Portal",
    category: "WEB DESIGN & UI/UX",
    subtext: "Responsive UI screens, candidate search dashboards, and streamlined employer user flows for a short-term job portal.",
    client: "Orogoo Enterprise",
    role: "UI/UX & Web Designer",
    timeline: "2023",
    tools: "Figma, Angular, Bootstrap",
    image: "images/orogoos.png",
    colors: [
      { hex: "#EA580C", name: "Vibrant Orange" },
      { hex: "#4F46E5", name: "Indigo Blue" },
      { hex: "#0F172A", name: "Dark Slate" },
      { hex: "#FFFFFF", name: "Clean White" }
    ],
    features: [
      { icon: "fa-magnifying-glass", title: "Instant Skill Search", desc: "Filters candidates by location, rate, and verified skill badges." },
      { icon: "fa-user-check", title: "1-Click Application", desc: "Allows workers to apply for local gigs instantly." },
      { icon: "fa-calendar-days", title: "Schedule Manager", desc: "Integrated shift booking calendar for recruiters and workers." },
      { icon: "fa-mobile", title: "Responsive Layout", desc: "Seamless experience on mobile, tablet, and desktop." }
    ]
  },
  "tuespot": {
    id: "tuespot",
    title: "TueSpot Solutions — Corporate Web & UI Architecture",
    shortTitle: "TueSpot Solutions",
    category: "WEB DESIGN & SYSTEM QA",
    subtext: "Establishing reusable UI component systems, information architecture standards, and design-to-development QA workflows.",
    client: "TueSpot Solutions Pvt. Ltd.",
    role: "UI/UX & Web Designer",
    timeline: "2022 - 2024",
    tools: "Angular, Figma, Bootstrap, CSS3",
    image: "images/TueSpot Solutions.png",
    colors: [
      { hex: "#2563EB", name: "Tech Blue" },
      { hex: "#10B981", name: "Emerald Accent" },
      { hex: "#0F172A", name: "Slate Charcoal" },
      { hex: "#FFFFFF", name: "Clean White" }
    ],
    features: [
      { icon: "fa-cubes", title: "Reusable UI System", desc: "Created design tokens and Angular components that sped up builds by 40%." },
      { icon: "fa-bug", title: "Codebase Design QA", desc: "Resolved design-to-development UI bugs directly against frontend code." },
      { icon: "fa-sitemap", title: "Information Architecture", desc: "Structured user navigation trees and wireframes for complex apps." },
      { icon: "fa-handshake", title: "Stakeholder Alignment", desc: "Turned requirement docs into polished UI interfaces." }
    ]
  },
  "freight-pulse": {
    id: "freight-pulse",
    title: "Freight Pulse — Fleet & Logistics Dashboard",
    shortTitle: "Freight Pulse",
    category: "DASHBOARD & WEB APP",
    subtext: "A real-time logistics tracking platform for freight managers to monitor truck dispatches, route efficiency, and fuel consumption.",
    client: "Logistics Global",
    role: "UI/UX Designer",
    timeline: "2023",
    tools: "Figma, Tailwind CSS, JS",
    image: "images/Freight Pulse.png",
    colors: [
      { hex: "#0284C7", name: "Fleet Blue" },
      { hex: "#EAB308", name: "Route Yellow" },
      { hex: "#0F172A", name: "Slate Dark" },
      { hex: "#FFFFFF", name: "Pure White" }
    ],
    features: [
      { icon: "fa-truck-fast", title: "Live Dispatch Tracking", desc: "Interactive map view with GPS status updates for active fleets." },
      { icon: "fa-chart-pie", title: "Analytics Summary", desc: "At-a-glance widgets for driver delivery ratings and fuel costs." },
      { icon: "fa-bell", title: "Instant Alerts", desc: "Push notification system for breakdown warnings and route diversions." },
      { icon: "fa-file-invoice", title: "Automated Billing Logs", desc: "Digital consignment notes and delivery receipts." }
    ]
  },
  "grand-mughal": {
    id: "grand-mughal",
    title: "Grand Mughal Darbar — Restaurant & Hospitality",
    shortTitle: "Grand Mughal Darbar",
    category: "WEBSITE DESIGN & BRANDING",
    subtext: "Elegant web landing page, interactive digital dining menu, and online table reservation portal for an authentic restaurant.",
    client: "Grand Mughal Hospitality",
    role: "Web Designer",
    timeline: "2023",
    tools: "HTML5, CSS3, JavaScript",
    image: "images/Grand Mughal Darbar.png",
    colors: [
      { hex: "#7F1D1D", name: "Royal Velvet" },
      { hex: "#D4AF37", name: "Mughal Gold" },
      { hex: "#18181B", name: "Dark Charcoal" },
      { hex: "#FFFFFF", name: "Pure White" }
    ],
    features: [
      { icon: "fa-utensils", title: "Interactive Menu Grid", desc: "Categorized food dishes with high-resolution imagery and filters." },
      { icon: "fa-chair", title: "Table Booking System", desc: "Step-by-step guest reservation workflow with time-slots." },
      { icon: "fa-star", title: "Customer Reviews", desc: "Social proof section integrating verified customer feedback." },
      { icon: "fa-location-dot", title: "Multi-Location Map", desc: "Integrated Google Maps directions for branch locations." }
    ]
  },
  "car-dealership": {
    id: "car-dealership",
    title: "Car Dealership — Automotive Booking & Showcase",
    shortTitle: "Car Dealer Ship",
    category: "E-COMMERCE & WEB DESIGN",
    subtext: "A sleek automotive marketplace featuring 360-degree vehicle inspection views, finance calculator, and instant test-drive scheduling.",
    client: "AutoPrime Motors",
    role: "UI/UX Designer",
    timeline: "2023",
    tools: "Figma, Bootstrap, CSS3",
    image: "images/Car Dealer Ship.png",
    colors: [
      { hex: "#DC2626", name: "Racing Red" },
      { hex: "#111827", name: "Metallic Dark" },
      { hex: "#9CA3AF", name: "Chrome Gray" },
      { hex: "#FFFFFF", name: "Clean White" }
    ],
    features: [
      { icon: "fa-car", title: "360° Car Inspection", desc: "High-definition visual gallery with interactive interior/exterior inspection." },
      { icon: "fa-calculator", title: "EMI Finance Calculator", desc: "Dynamic monthly payment estimator with interest rate sliders." },
      { icon: "fa-calendar-check", title: "Test Drive Scheduler", desc: "Fast 3-step booking flow for test drive appointments." },
      { icon: "fa-code-compare", title: "Vehicle Comparison Tool", desc: "Side-by-side spec comparisons across car trims." }
    ]
  },
  "soma-library": {
    id: "soma-library",
    title: "Soma Digital Library — E-Reading Platform",
    shortTitle: "Soma Digital Library",
    category: "WEB APP & DESIGN SYSTEM",
    subtext: "A modern digital library UI designed for academic institutions and book enthusiasts, offering dark mode reader settings and smart bookmarking.",
    client: "Soma Academic Trust",
    role: "UI/UX Designer",
    timeline: "2023",
    tools: "Figma, Angular, SASS",
    image: "images/Soma Digital Library.png",
    colors: [
      { hex: "#4338CA", name: "Deep Violet" },
      { hex: "#06B6D4", name: "Cyan Glow" },
      { hex: "#0F172A", name: "Dark Slate" },
      { hex: "#FFFFFF", name: "Pure White" }
    ],
    features: [
      { icon: "fa-book-open", title: "Distraction-Free Reader", desc: "Customizable font sizes, background warmth, and line spacing." },
      { icon: "fa-tags", title: "Smart Bookmarking", desc: "Highlight quotes and store personal research notes." },
      { icon: "fa-layer-group", title: "Category Taxonomy", desc: "Clean cataloging for journals, fiction, and audiobooks." },
      { icon: "fa-cloud-arrow-down", title: "Offline Sync Mode", desc: "Local device caching for uninterrupted reading without internet." }
    ]
  },
  "orogoo-app": {
    id: "orogoo-app",
    title: "Orogoo Mobile App — On-Demand Services UI",
    shortTitle: "Orogoo App",
    category: "MOBILE APP DESIGN",
    subtext: "Mobile application interface for instant gig booking, live worker location tracking, and secure in-app payments.",
    client: "Orogoo Mobile",
    role: "Mobile App Designer",
    timeline: "2023",
    tools: "Figma, Mobile Guidelines",
    image: "images/orogoo.png",
    colors: [
      { hex: "#F97316", name: "Energetic Orange" },
      { hex: "#06B6D4", name: "Sky Cyan" },
      { hex: "#0F172A", name: "Dark Charcoal" },
      { hex: "#FFFFFF", name: "Clean White" }
    ],
    features: [
      { icon: "fa-location-crosshairs", title: "Live GPS Map Tracking", desc: "Real-time tracking of service professionals arriving at your address." },
      { icon: "fa-wallet", title: "In-App Wallet Payment", desc: "Seamless checkout supporting UPI and credit cards." },
      { icon: "fa-comments", title: "Instant Chat & Call", desc: "Direct encrypted chat between clients and service providers." },
      { icon: "fa-clock-rotate-left", title: "Order History Logs", desc: "Clear digital receipt logging and recurring booking options." }
    ]
  },
  "shoes": {
    id: "shoes",
    title: "Shoes E-Commerce App — Modern Sneaker Store UI",
    shortTitle: "Shoes E-Commerce App",
    category: "E-COMMERCE & MOBILE APP",
    subtext: "A vibrant mobile shopping app for footwear enthusiasts with interactive product cards, size finder, and fluid checkout micro-interactions.",
    client: "Kick Culture",
    role: "UI/UX Mobile Designer",
    timeline: "2024",
    tools: "Figma, Mobile UI Tokens",
    image: "images/Shoes.png",
    colors: [
      { hex: "#EC4899", name: "Electric Pink" },
      { hex: "#8B5CF6", name: "Purple Glow" },
      { hex: "#0F172A", name: "Dark Charcoal" },
      { hex: "#FFFFFF", name: "Pure White" }
    ],
    features: [
      { icon: "fa-ruler", title: "AR Size Matcher", desc: "Camera-assisted foot size recommendation tool to prevent returns." },
      { icon: "fa-cart-shopping", title: "1-Tap Express Checkout", desc: "Minimal steps from cart view to confirmed payment authorization." },
      { icon: "fa-heart", title: "Interactive Wishlist", desc: "Saved favorite sneakers with instant price drop alerts." },
      { icon: "fa-wand-magic-sparkles", title: "Micro-Animations", desc: "Smooth card hover states, swipe gestures, and transition physics." }
    ]
  },
  "ecommers-app": {
    id: "ecommers-app",
    title: "E-Commerce App — Multi-Vendor Mobile Marketplace",
    shortTitle: "E-Commers App",
    category: "MOBILE APP & SYSTEM",
    subtext: "End-to-end mobile shopping experience connecting buyers and sellers with personalized deal feeds and flash sale timers.",
    client: "ShopVerse",
    role: "Product Designer",
    timeline: "2023",
    tools: "Figma, Design System",
    image: "images/E Commers App.png",
    colors: [
      { hex: "#EF4444", name: "Flash Red" },
      { hex: "#F59E0B", name: "Deal Gold" },
      { hex: "#0F172A", name: "Dark Slate" },
      { hex: "#FFFFFF", name: "Clean White" }
    ],
    features: [
      { icon: "fa-fire", title: "Flash Sale Timer Widget", desc: "High-urgency countdown UI components driving conversion spikes." },
      { icon: "fa-sliders", title: "Multi-Filter Navigation", desc: "Instantly narrow thousands of products by brand and price." },
      { icon: "fa-shield-cat", title: "Buyer Protection Badge", desc: "Clear trust indicators regarding return policies and verified sellers." },
      { icon: "fa-share-nodes", title: "Social Product Sharing", desc: "Direct 1-click sharing to WhatsApp and Instagram Stories." }
    ]
  },
  "zigy-karts": {
    id: "zigy-karts",
    title: "Zigy Karts App — 10-Minute Grocery Delivery UI",
    shortTitle: "Zigy Karts App",
    category: "QUICK-COMMERCE & APP",
    subtext: "Hyper-fast quick-commerce mobile app UI tailored for lightning-fast cart additions, real-time packing status, and dark mode interface.",
    client: "Zigy Delivery",
    role: "UI/UX Designer",
    timeline: "2024",
    tools: "Figma, Mobile Tokens",
    image: "images/Zigy Karts.png",
    colors: [
      { hex: "#10B981", name: "Fresh Green" },
      { hex: "#F59E0B", name: "Speed Yellow" },
      { hex: "#0F172A", name: "Night Slate" },
      { hex: "#FFFFFF", name: "Pure White" }
    ],
    features: [
      { icon: "fa-stopwatch", title: "10-Min Live Countdown", desc: "Visual timer tracking order picking, packing, and courier arrival." },
      { icon: "fa-basket-shopping", title: "Quick Add Stepper", desc: "Increase/decrease item quantity directly from grid view." },
      { icon: "fa-repeat", title: "Reorder Favorites", desc: "Single tap to re-add weekly grocery lists to shopping cart." },
      { icon: "fa-tags", title: "Coupon Auto-Apply", desc: "Automatically tests and applies the best discount codes at checkout." }
    ]
  },
  "harmonium-guru": {
    id: "harmonium-guru",
    title: "Harmonium Guru — Music Learning Mobile App",
    shortTitle: "Harmonium Guru",
    category: "EDTECH & MOBILE UI",
    subtext: "Interactive video lesson platform and musical notation reader designed for students learning classical Indian music on mobile screens.",
    client: "Harmonium Guru Academy",
    role: "UI/UX Designer",
    timeline: "2023",
    tools: "Figma, Mobile UI",
    image: "images/Harmonium Guru.png",
    colors: [
      { hex: "#D97706", name: "Amber Ochre" },
      { hex: "#854D0E", name: "Deep Bronze" },
      { hex: "#0F172A", name: "Dark Slate" },
      { hex: "#FFFFFF", name: "Pure White" }
    ],
    features: [
      { icon: "fa-video", title: "HD Video & Notation Player", desc: "Synchronized note sheet displaying key highlights as tutor plays." },
      { icon: "fa-gauge", title: "Playback Speed Control", desc: "Slow down tricky ragas and scale exercises without pitch distortion." },
      { icon: "fa-download", title: "Offline Practice Mode", desc: "Download video lessons for remote practice without cellular data." },
      { icon: "fa-trophy", title: "Streak Progress Tracker", desc: "Gamified badges celebrating completed modules and daily streaks." }
    ]
  },
  "scrap-app": {
    id: "scrap-app",
    title: "Scrap App — Eco-Recycling & On-Demand Pickup",
    shortTitle: "Scrap App",
    category: "SUSTAINABILITY & APP",
    subtext: "A clean, eco-friendly mobile app UI connecting households with verified scrap collectors for doorstep recycling and weight-based payouts.",
    client: "ScrapCycle Solutions",
    role: "UI/UX Designer",
    timeline: "2023",
    tools: "Figma, Mobile UI",
    image: "images/Scrap.png",
    colors: [
      { hex: "#16A34A", name: "Recycle Green" },
      { hex: "#0D9488", name: "Eco Teal" },
      { hex: "#0F172A", name: "Dark Slate" },
      { hex: "#FFFFFF", name: "Clean White" }
    ],
    features: [
      { icon: "fa-scale-balanced", title: "Instant Rate Card", desc: "Live price per kg for paper, plastic, metals, and electronic waste." },
      { icon: "fa-calendar-plus", title: "Doorstep Slot Booking", desc: "Schedule eco-pickup agents at convenient morning/evening slots." },
      { icon: "fa-leaf", title: "CO2 Savings Counter", desc: "Visual environmental impact counter calculating saved landfill waste." },
      { icon: "fa-money-bill-wave", title: "Direct Wallet Payouts", desc: "Digital wallet transfer directly upon physical weight verification." }
    ]
  }
};

function initProjectDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('id') || "atharv-ayurvedic";

  const data = projectDatabase[projectId] || projectDatabase["atharv-ayurvedic"] || Object.values(projectDatabase)[0];

  // Update Page Title
  document.title = `${data.shortTitle} — Case Study | Ravi Kumar`;

  // Update Breadcrumb & Category
  const breadcrumb = document.getElementById('breadcrumbTitle');
  if (breadcrumb) breadcrumb.textContent = data.shortTitle;

  const categoryElem = document.getElementById('detailCategory');
  if (categoryElem) categoryElem.textContent = data.category;

  // Update Hero Title & Subtext
  const titleElem = document.getElementById('detailTitle');
  if (titleElem) titleElem.textContent = data.title;

  const subtextElem = document.getElementById('detailSubtext');
  if (subtextElem) subtextElem.textContent = data.subtext;

  // Update Specs
  const clientElem = document.getElementById('specClient');
  if (clientElem) clientElem.textContent = data.client;

  const roleElem = document.getElementById('specRole');
  if (roleElem) roleElem.textContent = data.role;

  const timelineElem = document.getElementById('specTimeline');
  if (timelineElem) timelineElem.textContent = data.timeline;

  const toolsElem = document.getElementById('specTools');
  if (toolsElem) toolsElem.textContent = data.tools;

  const figmaBtn = document.getElementById('btnLiveDemo');
  if (figmaBtn) {
    if (data.liveUrl) {
      figmaBtn.href = data.liveUrl;
      figmaBtn.innerHTML = `<i class="fa-solid fa-arrow-up-right-from-square"></i> Visit Live Website`;
    } else if (data.figmaLink) {
      figmaBtn.href = data.figmaLink;
      figmaBtn.innerHTML = `<i class="fa-brands fa-figma"></i> View Figma Prototype`;
    } else {
      figmaBtn.href = "#";
      figmaBtn.innerHTML = `<i class="fa-solid fa-layer-group"></i> View Design Specs`;
    }
  }

  // Update Hero Image
  const heroImg = document.getElementById('detailHeroImage');
  if (heroImg) {
    heroImg.src = data.image;
    heroImg.alt = data.title;
  }

  // Update Brand Color Swatches
  const colorSwatchesGrid = document.getElementById('colorSwatchesGrid');
  if (colorSwatchesGrid && data.colors) {
    colorSwatchesGrid.innerHTML = data.colors.map(col => `
      <div class="swatch-item">
        <div class="swatch-color" style="background: ${col.hex}; ${col.border ? 'border:' + col.border + ';' : ''}"></div>
        <span class="swatch-hex">${col.hex}</span>
        <span class="swatch-name">${col.name}</span>
      </div>
    `).join('');
  }

  // Update Features Grid
  const featuresGrid = document.getElementById('detailFeaturesGrid');
  if (featuresGrid && data.features) {
    featuresGrid.innerHTML = data.features.map(feat => `
      <div class="feature-detail-card glass-card">
        <div class="feat-icon-box"><i class="fa-solid ${feat.icon}"></i></div>
        <h4>${feat.title}</h4>
        <p>${feat.desc}</p>
      </div>
    `).join('');
  }

  // Render Project Switcher Carousel
  renderSwitcher(projectId);
}

function renderSwitcher(currentId) {
  const switcherGrid = document.getElementById('switcherGrid');
  if (!switcherGrid) return;

  const keys = Object.keys(projectDatabase).filter(key => key !== currentId);
  // Pick up to 3 related projects
  const selectedKeys = keys.slice(0, 3);

  switcherGrid.innerHTML = selectedKeys.map(key => {
    const item = projectDatabase[key];
    return `
      <div class="switcher-card glass-card" onclick="location.href='project-detail.html?id=${item.id}'">
        <div class="switcher-img-box">
          <img src="${item.image}" alt="${item.shortTitle}">
        </div>
        <div class="switcher-info">
          <span class="switcher-tag">${item.category}</span>
          <h4 class="switcher-card-title">${item.shortTitle}</h4>
          <span class="switcher-link">View Case Study <i class="fa-solid fa-arrow-right"></i></span>
        </div>
      </div>
    `;
  }).join('');
}

