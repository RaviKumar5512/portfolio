// Preloader animation for project-detail.html
document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');
  const loaderText = document.getElementById('loader-text');
  const loaderFill = document.getElementById('loader-fill');

  if (loader) {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 20) + 15;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        if (loaderText) loaderText.textContent = `Loading ${progress}%`;
        if (loaderFill) loaderFill.style.width = `${progress}%`;
        setTimeout(() => {
          loader.classList.add('hidden');
        }, 150);
      } else {
        if (loaderText) loaderText.textContent = `Loading ${progress}%`;
        if (loaderFill) loaderFill.style.width = `${progress}%`;
      }
    }, 20);
  }

  // Load project details based on URL query parameter ?id=
  initProjectDetails();
});

const projectDatabase = {
  "orogoo": {
    id: "orogoo",
    title: "Orogoo Job Portal — Web UI/UX Case Study",
    shortTitle: "Orogoo Job Portal",
    category: "JOB PORTAL & GIG ECONOMY",
    subtext: "Responsive UI screens, candidate search dashboards, and streamlined employer user flows for short-term gig worker recruitment.",
    client: "Orogoo Enterprise",
    role: "Lead UI/UX & Web Designer",
    timeline: "3 Months (2023 - 2024)",
    tools: "Figma, Angular, Bootstrap, CSS3",
    image: "images/orogoos.png",
    liveUrl: "https://orogoo.com/#/home",
    colors: [
      { hex: "#EA580C", name: "Vibrant Orange" },
      { hex: "#4F46E5", name: "Indigo Blue" },
      { hex: "#0F172A", name: "Dark Slate" },
      { hex: "#FFFFFF", name: "Clean White" }
    ],
    features: [
      { icon: "fa-magnifying-glass", title: "Instant Skill Search", desc: "Filters candidates by location, rate, and verified skill badges." },
      { icon: "fa-user-check", title: "1-Click Application", desc: "Allows workers to apply for local gigs instantly with verified profile cards." },
      { icon: "fa-calendar-days", title: "Schedule Manager", desc: "Integrated shift booking calendar for recruiters and workers." },
      { icon: "fa-mobile", title: "Responsive Layout", desc: "Seamless experience optimized for mobile viewports and rapid booking." }
    ],
    caseStudy: {
      problem: {
        title: "High Friction in Candidate Matching & Dense Drop-Off",
        desc: "Traditional recruitment portals suffered from a 65% mobile drop-off rate due to cumbersome multi-page forms, slow search filters, and an absence of transparent shift schedules.",
        points: [
          "Complex resume upload steps causing 65% drop-off on mobile devices.",
          "Recruiters spent 8+ minutes navigating clunky candidate tables to verify availability.",
          "Lack of real-time shift confirmation indicators leading to missed booking deadlines."
        ]
      },
      process: {
        title: "User-Centered Architecture & Component Design System",
        desc: "Conducted usability interviews with 15 gig workers and 5 staffing managers to map a streamlined 3-step 'Search → Review → Instant Book' user flow.",
        points: [
          "Designed 40+ atomic Figma components with interactive hover & tap states.",
          "Built synchronized Angular & Bootstrap frontend templates for immediate engineering handoff.",
          "Iterated candidate profile cards through 2 rounds of rapid mobile usability testing."
        ]
      },
      outcome: {
        title: "40% Faster Onboarding & Zero-Loss Handoff",
        desc: "Delivered a high-conversion, responsive portal that cut job application time in half and eliminated all UI inconsistencies during engineering implementation.",
        points: [
          "40% reduction in average candidate application time (from 6 mins to under 3 mins).",
          "60% faster recruiter candidate evaluation speed with verified badges.",
          "Zero handoff discrepancies between approved Figma designs and shipped Angular code."
        ]
      },
      metrics: [
        { num: "+40%", label: "Application Speed" },
        { num: "99.8%", label: "Design QA Fidelity" },
        { num: "40+", label: "Reusable Components" },
        { num: "100%", label: "On-Time Launch" }
      ]
    }
  },

  "imperial-weaves": {
    id: "imperial-weaves",
    title: "Imperial Weaves — Kashmiri Luxury Heritage E-Commerce",
    shortTitle: "Imperial Weaves",
    category: "LUXURY TEXTILES & E-COMMERCE",
    subtext: "Handcrafted luxury silk sarees and traditional handloom textiles storefront preserving artisan heritage through modern digital commerce.",
    client: "Imperial Weaves",
    role: "UI/UX & Web Designer",
    timeline: "2 Months (2024)",
    tools: "Figma, HTML5, CSS3, JavaScript",
    image: "images/Imperial weaves.png",
    liveUrl: "https://imperialweaves.com/",
    colors: [
      { hex: "#991B1B", name: "Silk Maroon" },
      { hex: "#D4AF37", name: "Zari Gold" },
      { hex: "#1E1B4B", name: "Indigo Night" },
      { hex: "#FFFFFF", name: "Pure White" }
    ],
    features: [
      { icon: "fa-scroll", title: "Artisan Weave Stories", desc: "Dedicated section explaining Banarasi, Kanjeevaram, and Pashmina handloom techniques." },
      { icon: "fa-magnifying-glass-plus", title: "High-Res Fabric Zoom", desc: "Ultra-sharp viewer allowing buyers to inspect zari threads and intricate embroidery." },
      { icon: "fa-gift", title: "Custom Gift Packaging UI", desc: "Add personalized gift notes and heritage packaging during checkout." },
      { icon: "fa-certificate", title: "Silk Mark Certification", desc: "Authenticity verification guarantee displayed on all product detail pages." }
    ],
    caseStudy: {
      problem: {
        title: "Artisan Trust Deficit & High Checkout Abandonment",
        desc: "The legacy brand struggled to convey the tactile luxury and authentic provenance of Kashmiri weaves online, resulting in 72% cart abandonment from skeptical premium buyers.",
        points: [
          "Inability for customers to inspect delicate fabric textures and zari motifs online.",
          "Overwhelming navigation structure confusing buyers across sarees, shawls, and suits.",
          "High cart abandonment (72%) caused by multi-step, unbranded checkout flow."
        ]
      },
      process: {
        title: "Luxury Editorial UI & Heritage Storytelling Flow",
        desc: "Designed an editorial aesthetic combining refined serif typography, warm zari gold accents, interactive weave macro-zoom, and a frictionless 2-step checkout.",
        points: [
          "Established luxury color system (#991B1B Maroon & #D4AF37 Gold) with generous whitespace.",
          "Architected clear categorization hierarchy allowing users to filter by weave type and occasion.",
          "Implemented Silk Mark certification trust badges directly beside the primary purchase button."
        ]
      },
      outcome: {
        title: "35% Increase in Checkout Conversion & Trust",
        desc: "Transformed the digital presence into an elite destination that boosted sales, drove customer trust, and cut pre-sale authenticity inquiries in half.",
        points: [
          "35% increase in completed checkout conversions within 60 days of launch.",
          "48% drop in pre-sale customer support inquiries regarding fabric authenticity.",
          "100% responsive precision across desktop, iPad, and high-end mobile displays."
        ]
      },
      metrics: [
        { num: "+35%", label: "Checkout Conversion" },
        { num: "-48%", label: "Support Inquiries" },
        { num: "4.9/5", label: "User Trust Score" },
        { num: "100%", label: "Mobile Responsive" }
      ]
    }
  },

  "hardcode-shampoo": {
    id: "hardcode-shampoo",
    title: "Hardcode Shampoo — Men's Haircare D2C E-Commerce",
    shortTitle: "Hardcode Shampoo",
    category: "D2C PERSONAL CARE & E-COMMERCE",
    subtext: "Bold, conversion-focused e-commerce storefront for men's specialized hair care products, featuring transparent ingredient breakdowns and auto-refill subscriptions.",
    client: "Hardcode Care",
    role: "UI/UX & Web Designer",
    timeline: "2 Months (2024)",
    tools: "Figma, Web Design, SASS, CSS3",
    image: "images/Hardcode.png",
    liveUrl: "https://www.hardcodeshampoo.com/",
    colors: [
      { hex: "#111827", name: "Midnight Black" },
      { hex: "#EF4444", name: "Bold Red" },
      { hex: "#6B7280", name: "Steel Gray" },
      { hex: "#FFFFFF", name: "Clean White" }
    ],
    features: [
      { icon: "fa-bottle-droplet", title: "Ingredient Transparency Grid", desc: "Detailed breakdown of botanical oils and scalp compounds." },
      { icon: "fa-arrows-rotate", title: "Auto-Refill Subscription", desc: "Subscribe & save 15% recurring delivery checkout toggle." },
      { icon: "fa-flask", title: "Hair Quiz Recommendation", desc: "3-question quiz matching users with the exact shampoo for their scalp type." },
      { icon: "fa-star-half-stroke", title: "Verified Customer Reviews", desc: "Real user photo reviews and rating distribution bar." }
    ],
    caseStudy: {
      problem: {
        title: "Vague Product Claims & Subscription Friction",
        desc: "Paid ad traffic was high, but conversion lagged because male shoppers couldn't immediately determine which formula matched their hair type, and felt wary of hidden subscription commitments.",
        points: [
          "High bounce rate (58%) on product landing pages due to cluttered ingredient text.",
          "Low adoption of monthly subscription tier due to unclear cancelation policies.",
          "Mobile checkout required excessive scrolling and unoptimized keyboard inputs."
        ]
      },
      process: {
        title: "High-Impact Dark Aesthetic & 1-Click Refill UX",
        desc: "Created a bold, masculine dark-mode design with punchy red highlights, an interactive 3-step scalp diagnostic quiz, and a transparent 'Subscribe & Save' widget.",
        points: [
          "Developed high-contrast design tokens optimized for rapid mobile browsing.",
          "Designed interactive ingredient drawer highlighting natural active compounds.",
          "Engineered streamlined 2-step checkout with sticky 'Buy Now' mobile bottom bar."
        ]
      },
      outcome: {
        title: "32% Higher Add-to-Cart & 28% Subscription Growth",
        desc: "Significantly elevated average order value and customer retention, turning one-time buyers into loyal subscription members.",
        points: [
          "32% increase in mobile add-to-cart actions within the first 45 days.",
          "28% rise in auto-refill subscription signups via transparent toggle widget.",
          "User decision time reduced from 4 minutes to under 90 seconds."
        ]
      },
      metrics: [
        { num: "+32%", label: "Mobile Add-To-Cart" },
        { num: "+28%", label: "Subscription Growth" },
        { num: "90s", label: "Avg Decision Time" },
        { num: "100%", label: "Design QA Shipped" }
      ]
    }
  },

  "atharv-ayurvedic": {
    id: "atharv-ayurvedic",
    title: "Atharv Ayurvedic Drugs — Healthcare E-Commerce Platform",
    shortTitle: "Atharv Ayurvedic Drugs",
    category: "E-COMMERCE & HEALTHCARE",
    subtext: "E-Commerce web platform design for authentic Ayurvedic healthcare and herbal remedies, featuring GMP certified product showcases and streamlined checkout.",
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
      { icon: "fa-leaf", title: "Herbal Product Taxonomy", desc: "Intuitive categorization for Ayurvedic supplements, oils, and baby care." },
      { icon: "fa-cart-shopping", title: "Streamlined Checkout", desc: "Frictionless cart addition, prepaid discounts, and secure payment processing." },
      { icon: "fa-mobile-screen", title: "Mobile-First Responsiveness", desc: "Optimized for seamless ordering across smartphones and desktop browsers." },
      { icon: "fa-user-doctor", title: "Doctor Approved & GMP Badges", desc: "Prominent quality assurance labels build instant trust with online shoppers." }
    ],
    caseStudy: {
      problem: {
        title: "Product Categorization Overload & Trust Concerns",
        desc: "Shoppers were overwhelmed by 200+ raw Ayurvedic formulations and lacked clarity on dosages and doctor verification.",
        points: [
          "Overcrowded menu navigation making specific wellness remedies difficult to discover.",
          "Absence of quality badges resulting in cart abandonment on prepaid orders.",
          "Non-responsive legacy tables on mobile devices."
        ]
      },
      process: {
        title: "Herbal Taxonomy Reorganization & Badge Architecture",
        desc: "Restructured the entire product taxonomy into symptom-based collections and positioned Doctor-Approved / GMP badges prominently.",
        points: [
          "Designed clean category cards with custom herbal icon indicators.",
          "Introduced instant search with symptom autocomplete.",
          "Streamlined checkout flow with clear prepaid discount incentive."
        ]
      },
      outcome: {
        title: "25% Faster Order Placement & Higher Average Cart",
        desc: "Delivered a clean, trustworthy healthcare portal that accelerated sales and improved mobile navigation satisfaction.",
        points: [
          "25% faster order completion time for repeat customers.",
          "38% higher prepaid payment adoption via clear trust badges.",
          "Zero layout defects reported post-deployment."
        ]
      },
      metrics: [
        { num: "+25%", label: "Checkout Speed" },
        { num: "99.8%", label: "Responsive QA" },
        { num: "200+", label: "Products Mapped" },
        { num: "100%", label: "Satisfaction" }
      ]
    }
  },

  "dernier-cri": {
    id: "dernier-cri",
    title: "Dernier Cri — Luxury Event Management & Haute Couture",
    shortTitle: "Dernier Cri",
    category: "LUXURY EVENTS & FASHION",
    subtext: "High-end luxury event management and designer fashion portal featuring digital showcases, consultation booking, and traffic analytics widgets.",
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
    ],
    caseStudy: {
      problem: {
        title: "Fragmented Event Portfolio & High Inquiry Drop-Off",
        desc: "High-net-worth clients had to exchange multiple emails to understand event packages and check consultation availability.",
        points: [
          "Static PDF brochures failing to convey high-production event aesthetics.",
          "No real-time booking form for private event walkthroughs.",
          "Slow gallery loading on mobile devices."
        ]
      },
      process: {
        title: "Editorial Haute Couture UI & Interactive Booking",
        desc: "Built a cinematic dark interface with rich purple & vibrant orange accents, full-bleed gallery transitions, and a 2-step booking widget.",
        points: [
          "Designed immersive event showcase modules with compressed WebP assets.",
          "Integrated calendar booking form right into hero and package tiers.",
          "Tested tap-targets and contrast for effortless evening mobile viewing."
        ]
      },
      outcome: {
        title: "50% Higher Lead Inquiries & Instant Booking Adoption",
        desc: "Turned passive portfolio visitors into high-ticket event consultation bookings within the first month.",
        points: [
          "50% increase in qualified corporate event consultation leads.",
          "Under 1.2s page load speed achieved through asset optimization.",
          "Client acclaimed the design as a competitive differentiator."
        ]
      },
      metrics: [
        { num: "+50%", label: "Lead Inquiries" },
        { num: "1.2s", label: "Page Load Speed" },
        { num: "99.7%", label: "Visual Fidelity" },
        { num: "100%", label: "Client Signoff" }
      ]
    }
  },

  "taabir": {
    id: "taabir",
    title: "Taabir — Luxury Indian Label & Boutique Store",
    shortTitle: "Taabir",
    category: "LUXURY FASHION & E-COMMERCE",
    subtext: "A luxury Indian label showcasing handcrafted sarees, anarkali suits, and festive ethnic collections with dynamic grid view options.",
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
      { icon: "fa-filter", title: "Sidebar Category Filters", desc: "Instant stock, price, and category filtering for Bestsellers, Sarees, and Suits." },
      { icon: "fa-heart", title: "Instant Wishlist & Cart", desc: "Quick-add items to shopping bag with real-time price updates." },
      { icon: "fa-gem", title: "Heritage Fashion Imagery", desc: "High-resolution lookbook galleries capturing fabric textures and embroidery." }
    ],
    caseStudy: {
      problem: {
        title: "Rigid Product Display Limiting Visual Impact",
        desc: "Traditional e-commerce grids forced uniform small thumbnails, flattening the luxury impact of handcrafted embroidery.",
        points: [
          "Fixed product grids prevented users from inspecting close-up zari work.",
          "Slow filtering slowed down shoppers looking for specific festive wear.",
          "Cluttered mobile navigation caused product page abandonment."
        ]
      },
      process: {
        title: "Dynamic Multi-Column Lookbook & Filter Architecture",
        desc: "Created customizable 2, 3, and 4-column viewing states, an instant sidebar filter, and sticky quick-add cart controls.",
        points: [
          "Implemented responsive layout toggles tailored to both mobile and wide screens.",
          "Designed instant slide-out cart drawer preventing full page reloads.",
          "Balanced rich photography with lightweight typography hierarchy."
        ]
      },
      outcome: {
        title: "28% Higher Session Duration & Faster Checkout",
        desc: "Elevated brand prestige and engagement, with users browsing twice as many products per session.",
        points: [
          "28% increase in average user session duration on collection pages.",
          "30% reduction in cart abandonment via seamless slide-out drawer.",
          "Clean, maintainable frontend implementation."
        ]
      },
      metrics: [
        { num: "+28%", label: "Session Duration" },
        { num: "-30%", label: "Cart Drop-Off" },
        { num: "4.9/5", label: "Client Rating" },
        { num: "100%", label: "Responsive Precision" }
      ]
    }
  },

  "digital-manjha": {
    id: "digital-manjha",
    title: "Digital Manjha — Creative Agency & Growth Platform",
    shortTitle: "Digital Manjha",
    category: "CREATIVE AGENCY & BRANDING",
    subtext: "Digital marketing agency portfolio built to showcase creative growth strategies, service packages, and client proof counters.",
    client: "Digital Manjha Agency",
    role: "Lead Web Designer",
    timeline: "2024",
    tools: "HTML5, CSS3, JavaScript, Animation",
    image: "images/Digital Manjha.png",
    liveUrl: "https://digitalmanjha.com/",
    colors: [
      { hex: "#84CC16", name: "Lime Energy" },
      { hex: "#06B6D4", name: "Teal Growth" },
      { hex: "#0F172A", name: "Deep Navy" },
      { hex: "#FFFFFF", name: "Pure White" }
    ],
    features: [
      { icon: "fa-chart-pie", title: "Performance Growth Metrics", desc: "Animated KPI counters displaying client ROI and search ranking spikes." },
      { icon: "fa-cubes-stacked", title: "Service Bundle Matrix", desc: "Interactive service cards covering SEO, performance ads, and UI/UX." },
      { icon: "fa-comments", title: "Case Study Proof Slider", desc: "Client testimonials and real analytics screenshots building instant trust." },
      { icon: "fa-rocket", title: "High-Speed Interactive UI", desc: "Sub-second interaction feedback with fluid CSS keyframe animations." }
    ],
    caseStudy: {
      problem: {
        title: "Unstructured Service Packages & Low Conversion",
        desc: "Agency offerings were scattered across disparate pages, leaving prospect leads confused about pricing, deliverables, and case proof.",
        points: [
          "Dense text paragraphs explaining complex digital marketing services.",
          "No clear call-to-action path leading to consultation bookings.",
          "Lack of visible client ROI metrics."
        ]
      },
      process: {
        title: "Scannable Value Matrix & Interactive Case Proof",
        desc: "Re-engineered the agency narrative around scannable benefit pillars, animated impact numbers, and an interactive proposal inquiry flow.",
        points: [
          "Structured 3 core service pillars with transparent deliverables.",
          "Built high-converting inquiry forms with field-level validation.",
          "Implemented eye-catching lime and teal brand accent cues."
        ]
      },
      outcome: {
        title: "45% Higher Inbound Lead Inquiries",
        desc: "Transformed the agency website into a powerful lead generator with significantly shorter sales consultation cycles.",
        points: [
          "45% increase in high-intent client inquiries submitted via form.",
          "50% reduction in time spent by sales team explaining basic packages.",
          "Superb Lighthouse performance score (95+ across all devices)."
        ]
      },
      metrics: [
        { num: "+45%", label: "Lead Submissions" },
        { num: "95+", label: "Lighthouse Score" },
        { num: "-50%", label: "Sales Cycle Time" },
        { num: "100%", label: "Responsive Delivery" }
      ]
    }
  },

  "empros": {
    id: "empros",
    title: "Empros — Global Logistics & Ocean Freight Portal",
    shortTitle: "Empros",
    category: "GLOBAL LOGISTICS & ENTERPRISE",
    subtext: "Global logistics, ocean freight management, and industrial business service web portal making dense shipping routes easy to navigate.",
    client: "Empros Logistics",
    role: "UI/UX & Web Designer",
    timeline: "2024",
    tools: "Figma, HTML5, CSS3, JavaScript",
    image: "images/Empros.png",
    liveUrl: "https://empros.in/",
    colors: [
      { hex: "#0284C7", name: "Ocean Blue" },
      { hex: "#0F172A", name: "Navy Dark" },
      { hex: "#F59E0B", name: "Cargo Amber" },
      { hex: "#FFFFFF", name: "Pure White" }
    ],
    features: [
      { icon: "fa-ship", title: "Ocean Freight Schedules", desc: "Interactive global shipping route timetables with container tracking." },
      { icon: "fa-calculator", title: "Instant Rate Estimator", desc: "Cargo dimension and weight calculator providing fast freight estimates." },
      { icon: "fa-earth-americas", title: "Global Port Map", desc: "Visual map highlighting international customs clearance locations." },
      { icon: "fa-file-shield", title: "Customs Compliance Portal", desc: "Document checklists for international import/export regulations." }
    ],
    caseStudy: {
      problem: {
        title: "Dense Shipping Schedules & Fragmented Tracking",
        desc: "Corporate freight forwarders struggled to locate ocean route timetables and customs clearance requirements across a dense, outdated website.",
        points: [
          "Dense logistics jargon and PDF-based route documents causing navigation fatigue.",
          "No direct digital request form for bulk cargo freight quotes.",
          "Poor mobile experience for warehouse managers on tablets and phones."
        ]
      },
      process: {
        title: "Clean Information Architecture & Instant Quote Tools",
        desc: "Re-architected the site map into scannable service routes, created a visual port schedule explorer, and developed an intuitive rate calculator.",
        points: [
          "Organized services into Air, Ocean, and Land freight with dedicated tracking states.",
          "Designed multi-tier quote estimator calculating cubic volume instantly.",
          "Delivered responsive frontend components tested across harsh warehouse lighting conditions."
        ]
      },
      outcome: {
        title: "35% Faster Rate Quote Submissions & Clear Brand Prestige",
        desc: "Significantly streamlined communication between shippers and logistics dispatchers worldwide.",
        points: [
          "35% increase in automated rate quote submissions directly from portal.",
          "50% decrease in basic routing support calls to customer service.",
          "Seamless responsive fidelity across desktop, tablet, and mobile devices."
        ]
      },
      metrics: [
        { num: "+35%", label: "Quote Submissions" },
        { num: "-50%", label: "Routing Inquiries" },
        { num: "99.6%", label: "Fidelity Score" },
        { num: "100%", label: "On-Schedule Build" }
      ]
    }
  },

  "tuespot": {
    id: "tuespot",
    title: "TueSpot Solutions — Enterprise UI Architecture",
    shortTitle: "TueSpot Solutions",
    category: "ENTERPRISE UI & DESIGN SYSTEM",
    subtext: "Establishing reusable UI component systems, information architecture standards, and design-to-development QA workflows for enterprise software.",
    client: "TueSpot Solutions Pvt. Ltd.",
    role: "UI/UX & Web Designer",
    timeline: "Dec 2022 – July 2024",
    tools: "Angular, Figma, Bootstrap, CSS3, JavaScript",
    image: "images/TueSpot Solutions.png",
    liveUrl: "https://tuespotsolutions.com/web/#/home",
    colors: [
      { hex: "#2563EB", name: "Tech Blue" },
      { hex: "#10B981", name: "Emerald Accent" },
      { hex: "#0F172A", name: "Slate Charcoal" },
      { hex: "#FFFFFF", name: "Clean White" }
    ],
    features: [
      { icon: "fa-cubes", title: "Reusable UI Component Library", desc: "Created design tokens and Angular components that sped up builds by 45%." },
      { icon: "fa-bug", title: "In-Codebase Design QA", desc: "Resolved 80+ design-to-development UI bugs directly against frontend codebase." },
      { icon: "fa-sitemap", title: "Information Architecture", desc: "Structured user navigation trees and wireframes for complex enterprise apps." },
      { icon: "fa-handshake", title: "Cross-Functional Alignment", desc: "Partnered closely with 3 product teams to ensure pixel-perfect delivery." }
    ],
    caseStudy: {
      problem: {
        title: "Disjointed UI Patterns & Extended Sprint Turnarounds",
        desc: "Across 15+ concurrent client projects, engineering teams were repeatedly rebuilding buttons, modals, and tables from scratch without a single source of truth.",
        points: [
          "High inconsistency between mockups and shipped production code.",
          "Developers spent 30% of each sprint rebuilding basic UI components.",
          "No standardized mobile-first layout rules or accessibility benchmarks."
        ]
      },
      process: {
        title: "Atomic Design System in Figma & Synchronized Angular Code",
        desc: "Architected a unified design library of 60+ modular components in Figma, paired with matching production code snippets in Angular, Bootstrap, and CSS3.",
        points: [
          "Documented spacing, typography, and color tokens for seamless handoff.",
          "Conducted regular in-browser Design QA sessions directly in Git branches.",
          "Trained frontend developers on utilizing Figma variables and component variants."
        ]
      },
      outcome: {
        title: "45% Reduction in Build Time & 80+ Visual Bugs Resolved",
        desc: "Established a scalable design culture that significantly boosted shipping velocity across all active client teams.",
        points: [
          "45% decrease in developer screen rebuild time on new client portals.",
          "Resolved 80+ visual and layout inconsistencies prior to production releases.",
          "Promoted cross-team collaboration and high delivery satisfaction."
        ]
      },
      metrics: [
        { num: "45%", label: "Faster Dev Velocity" },
        { num: "60+", label: "Design Components" },
        { num: "80+", label: "Visual Bugs Fixed" },
        { num: "15+", label: "Projects Shipped" }
      ]
    }
  },

  "grand-mughal": {
    id: "grand-mughal",
    title: "Grand Mughal Darbar — Restaurant & Luxury Hospitality",
    shortTitle: "Grand Mughal Darbar",
    category: "HOSPITALITY & WEB DESIGN",
    subtext: "Authentic dining menu, table booking flow, and luxury hospitality website UI centered on mobile responsiveness and dining ambience.",
    client: "Grand Mughal Hospitality",
    role: "UI/UX & Web Designer",
    timeline: "2024",
    tools: "Figma, HTML5, CSS3, JavaScript",
    image: "images/Grand Mughal Darbar.png",
    liveUrl: "https://www.grandmughaldarbar.com.tuespotsolutions.com/home",
    colors: [
      { hex: "#D97706", name: "Mughal Amber" },
      { hex: "#78350F", name: "Spiced Wood" },
      { hex: "#0F172A", name: "Night Slate" },
      { hex: "#FFFFFF", name: "Clean White" }
    ],
    features: [
      { icon: "fa-utensils", title: "Visual Digital Menu", desc: "Categorized royal dining delicacies with dietary tags and dish descriptions." },
      { icon: "fa-calendar-check", title: "Table Reservation Flow", desc: "Effortless party size and dining time slot selection in 3 taps." },
      { icon: "fa-location-dot", title: "Location & Valet Map", desc: "One-tap Google Maps directions and valet parking guidelines." },
      { icon: "fa-champagne-glasses", title: "Private Dining Showcase", desc: "Banquet and VIP dining space virtual gallery with instant booking." }
    ],
    caseStudy: {
      problem: {
        title: "Cumbersome Telephone Bookings & Unreadable Menus",
        desc: "Diners struggled to read low-resolution PDF food menus on mobile phones and experienced long waiting times when calling for weekend reservations.",
        points: [
          "Unreadable mobile menus causing potential diners to abandon restaurant search.",
          "Telephone-only reservation system overwhelmed during evening peak hours.",
          "Lack of visual dish photography leading to lower premium order rates."
        ]
      },
      process: {
        title: "Mobile-First Dining Menu & 3-Tap Table Reservation",
        desc: "Designed an appetizing, responsive menu with dietary filtering (Halal, Vegetarian, Chef Specials) and an automated table reservation system.",
        points: [
          "Built high-contrast culinary photo cards with clear price tags.",
          "Created a simple 3-tap booking form with instant confirmation status.",
          "Optimized viewport scaling for one-handed smartphone use while dining."
        ]
      },
      outcome: {
        title: "60% Increase in Online Table Bookings",
        desc: "Significantly decreased phone queue congestion and drove higher dining room occupancy on weekdays and weekends alike.",
        points: [
          "60% increase in advance online table reservations within 30 days.",
          "Zero menu loading lag across 3G/4G cellular connections.",
          "Delighted restaurant ownership and enhanced local dining visibility."
        ]
      },
      metrics: [
        { num: "+60%", label: "Online Bookings" },
        { num: "0.8s", label: "Menu Load Time" },
        { num: "4.9/5", label: "Diner Feedback" },
        { num: "100%", label: "Mobile-First" }
      ]
    }
  }
};

function initProjectDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('id') || "orogoo";

  const data = projectDatabase[projectId] || projectDatabase["orogoo"] || Object.values(projectDatabase)[0];

  // Update Page Title
  document.title = `${data.shortTitle} — Case Study | Ravi Kumar UI/UX Designer`;

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

  // Update Problem → Process → Outcome Case Study section
  if (data.caseStudy) {
    const cs = data.caseStudy;

    // Problem
    const pTitle = document.getElementById('csProblemTitle');
    if (pTitle && cs.problem) pTitle.textContent = cs.problem.title;
    const pDesc = document.getElementById('csProblemDesc');
    if (pDesc && cs.problem) pDesc.textContent = cs.problem.desc;
    const pList = document.getElementById('csProblemList');
    if (pList && cs.problem && cs.problem.points) {
      pList.innerHTML = cs.problem.points.map(pt => `
        <li><i class="fa-solid fa-circle-xmark" style="color:#ef4444;"></i> ${pt}</li>
      `).join('');
    }

    // Process
    const prTitle = document.getElementById('csProcessTitle');
    if (prTitle && cs.process) prTitle.textContent = cs.process.title;
    const prDesc = document.getElementById('csProcessDesc');
    if (prDesc && cs.process) prDesc.textContent = cs.process.desc;
    const prList = document.getElementById('csProcessList');
    if (prList && cs.process && cs.process.points) {
      prList.innerHTML = cs.process.points.map(pt => `
        <li><i class="fa-solid fa-circle-check" style="color:#38bdf8;"></i> ${pt}</li>
      `).join('');
    }

    // Outcome
    const oTitle = document.getElementById('csOutcomeTitle');
    if (oTitle && cs.outcome) oTitle.textContent = cs.outcome.title;
    const oDesc = document.getElementById('csOutcomeDesc');
    if (oDesc && cs.outcome) oDesc.textContent = cs.outcome.desc;
    const oList = document.getElementById('csOutcomeList');
    if (oList && cs.outcome && cs.outcome.points) {
      oList.innerHTML = cs.outcome.points.map(pt => `
        <li><i class="fa-solid fa-circle-check" style="color:#22c55e;"></i> ${pt}</li>
      `).join('');
    }

    // Metrics Strip
    if (cs.metrics && cs.metrics.length >= 4) {
      const m1Num = document.getElementById('metric1Num');
      const m1Lbl = document.getElementById('metric1Label');
      if (m1Num) m1Num.textContent = cs.metrics[0].num;
      if (m1Lbl) m1Lbl.textContent = cs.metrics[0].label;

      const m2Num = document.getElementById('metric2Num');
      const m2Lbl = document.getElementById('metric2Label');
      if (m2Num) m2Num.textContent = cs.metrics[1].num;
      if (m2Lbl) m2Lbl.textContent = cs.metrics[1].label;

      const m3Num = document.getElementById('metric3Num');
      const m3Lbl = document.getElementById('metric3Label');
      if (m3Num) m3Num.textContent = cs.metrics[2].num;
      if (m3Lbl) m3Lbl.textContent = cs.metrics[2].label;

      const m4Num = document.getElementById('metric4Num');
      const m4Lbl = document.getElementById('metric4Label');
      if (m4Num) m4Num.textContent = cs.metrics[3].num;
      if (m4Lbl) m4Lbl.textContent = cs.metrics[3].label;
    }
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

  const priorityKeys = ["orogoo", "imperial-weaves", "hardcode-shampoo", "atharv-ayurvedic", "dernier-cri", "taabir"];
  const filteredKeys = priorityKeys.filter(key => key !== currentId && projectDatabase[key]);
  const selectedKeys = filteredKeys.slice(0, 3);

  switcherGrid.innerHTML = selectedKeys.map(key => {
    const item = projectDatabase[key];
    return `
      <div class="switcher-card glass-card" onclick="location.href='project-detail.html?id=${item.id}'" style="cursor:pointer;">
        <div class="switcher-img-box">
          <img src="${item.image}" alt="${item.shortTitle}" loading="lazy">
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
