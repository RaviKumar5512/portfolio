// Preloader animation for project.html
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
});

const projects = [
    {
        id: "atharv-ayurvedic",
        title: "Atharv Ayurvedic Drugs",
        category: "ecommerce",
        image: "images/Atharv Ayurvedic Drugs.png",
        description: "E-Commerce & web platform design for Ayurvedic healthcare and herbal wellness products.",
        tags: ["Ayurvedic Healthcare", "E-Commerce", "Web Design"],
        liveUrl: "https://atharvayurvedicdrugs.com/",
        featured: true
    },
    {
        id: "dernier-cri",
        title: "Dernier Cri",
        category: "fashion",
        image: "images/Derniercri.png",
        description: "High-end luxury event management, couture fashion, and digital branding showcase platform.",
        tags: ["Event Management", "Luxury Apparel", "Digital Magic"],
        liveUrl: "https://derniercri.in/",
        featured: true
    },
    {
        id: "taabir",
        title: "Taabir",
        category: "fashion",
        image: "images/Taabir.png",
        description: "Luxury Indian label & boutique fashion store website with responsive shopping user experience.",
        tags: ["Luxury Ethnic", "Boutique Store", "Web Design"],
        liveUrl: "https://taabir.in/",
        featured: true
    },
    {
        id: "digital-manjha",
        title: "Digital Manjha",
        category: "agency",
        image: "images/Digital Manjha.png",
        description: "Digital marketing agency portfolio, SEO growth strategy, and creative branding web platform.",
        tags: ["Digital Agency", "Brand Strategy", "Web Design"],
        liveUrl: "https://digitalmanjha.com/",
        featured: true
    },
    {
        id: "empros",
        title: "Empros",
        category: "corporate",
        image: "images/Empros.png",
        description: "Global logistics, ocean freight management, and industrial business service web portal.",
        tags: ["Global Logistics", "Freight Tracking", "Corporate UI"],
        liveUrl: "https://empros.in/",
        featured: true
    },
    {
        id: "imperial-weaves",
        title: "Imperial Weaves",
        category: "fashion",
        image: "images/Imperial weaves.png",
        description: "Handcrafted luxury silk sarees & heritage handloom textile e-commerce website.",
        tags: ["Handloom Textiles", "E-Commerce", "Web Design"],
        liveUrl: "https://imperialweaves.com/"
    },
    {
        id: "hardcode-shampoo",
        title: "Hardcode Shampoo",
        category: "ecommerce",
        image: "images/Hardcode.png",
        description: "Premium men's hair care & personal grooming e-commerce website design.",
        tags: ["Men's Grooming", "E-Commerce", "UI/UX"],
        liveUrl: "https://www.hardcodeshampoo.com/"
    },
    {
        id: "orogoo",
        title: "Orogoo Job Portal",
        category: "agency",
        image: "images/orogoos.png",
        description: "Responsive candidate dashboards and shift recruitment user flows for short-term jobs.",
        tags: ["Job Portal", "Gig Economy", "UI/UX Design"],
        liveUrl: "https://orogoo.com/#/home"
    },
    {
        id: "tuespot",
        title: "TueSpot Solutions",
        category: "corporate",
        image: "images/TueSpot Solutions.png",
        description: "Enterprise UI architecture, component system, and QA workflow for client platforms.",
        tags: ["Design System", "Enterprise UI", "Angular"],
        liveUrl: "https://tuespotsolutions.com/web/#/home"
    },
    {
        id: "freight-pulse",
        title: "Freight Pulse",
        category: "corporate",
        image: "images/Freight Pulse.png",
        description: "Real-time logistics fleet tracking dashboard with GPS route analytics.",
        tags: ["Fleet Analytics", "Dashboard", "Logistics UI"]
    },
    {
        id: "grand-mughal",
        title: "Grand Mughal Darbar",
        category: "corporate",
        image: "images/Grand Mughal Darbar.png",
        description: "Authentic dining menu, table booking flow, and luxury hospitality website UI.",
        tags: ["Hospitality UI", "Dining Menu", "Web Design"],
        liveUrl: "https://www.grandmughaldarbar.com.tuespotsolutions.com/home"
    },
    {
        id: "car-dealership",
        title: "Car Dealer Ship",
        category: "ecommerce",
        image: "images/Car Dealer Ship.png",
        description: "Automotive showcase, 360° vehicle view, and test-drive booking web platform.",
        tags: ["Automotive", "EMI Calculator", "Web Design"]
    },
    {
        id: "soma-library",
        title: "Soma Digital Library",
        category: "corporate",
        image: "images/Soma Digital Library.png",
        description: "Digital academic library, distraction-free reader UI, and research bookmarking system.",
        tags: ["Digital Library", "E-Reader", "UI/UX Design"]
    },
    {
        id: "orogoo-app",
        title: "Orogoo Mobile App",
        category: "appdesign",
        image: "images/orogoo.png",
        description: "On-demand food ordering and local gig task delivery mobile application.",
        tags: ["Figma Prototype", "Mobile App", "UI/UX"]
    },
    {
        id: "shoes",
        title: "Shoes E-Commerce App",
        category: "appdesign",
        image: "images/Shoes.png",
        description: "Sneaker mobile store with AR size matcher and fluid checkout micro-interactions.",
        tags: ["Footwear Store", "Mobile App", "Figma"]
    },
    {
        id: "ecommers-app",
        title: "E-Commers App",
        category: "appdesign",
        image: "images/E Commers App.png",
        description: "Multi-vendor mobile marketplace with flash deal timers and buyer protection.",
        tags: ["Marketplace App", "Flash Deals", "Mobile UI"]
    },
    {
        id: "zigy-karts",
        title: "Zigy Karts App",
        category: "appdesign",
        image: "images/Zigy Karts.png",
        description: "10-minute quick commerce delivery mobile application with real-time countdown.",
        tags: ["Quick Commerce", "Grocery App", "Mobile UI"]
    },
    {
        id: "harmonium-guru",
        title: "Harmonium Guru",
        category: "appdesign",
        image: "images/Harmonium Guru.png",
        description: "Indian music learning mobile app with synchronized notation player.",
        tags: ["EdTech App", "Music Player", "Mobile UI"]
    },
    {
        id: "scrap-app",
        title: "Scrap App",
        category: "appdesign",
        image: "images/Scrap.png",
        description: "Eco-recycling & doorstep scrap pickup service mobile application.",
        tags: ["Eco Recycling", "Doorstep Service", "Mobile App"]
    }
];

const grid = document.getElementById("projectsGrid");
const buttons = document.querySelectorAll(".project-filter button");

function renderProjects(filter = "all") {
    if (!grid) return;
    grid.innerHTML = "";

    const filtered = filter === "all"
        ? projects
        : projects.filter(project => project.category === filter);

    filtered.forEach(project => {
        const liveBtnHTML = project.liveUrl
            ? `<a href="${project.liveUrl}" target="_blank" class="card-live-btn" onclick="event.stopPropagation();" title="Visit Live Site"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live Site</a>`
            : ``;

        const badgeHTML = project.featured
            ? `<span class="featured-badge"><i class="fa-solid fa-star"></i> Featured</span>`
            : ``;

        grid.innerHTML += `
        <div class="project-card glass-card" onclick="location.href='project-detail.html?id=${project.id}'" style="cursor: pointer;">
            <div class="project-image-box">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
                <div class="project-card-overlay">
                    <span class="btn-case-study">View Case Study <i class="fa-solid fa-arrow-right"></i></span>
                </div>
                ${badgeHTML}
            </div>

            <div class="project-content">
                <div class="project-card-header">
                    <h3 class="project-title">${project.title}</h3>
                    ${liveBtnHTML}
                </div>

                <p class="project-desc">
                    ${project.description}
                </p>

                <div class="project-tags">
                    ${project.tags.map(tag => `<span>${tag}</span>`).join("")}
                </div>
            </div>
        </div>`;
    });
}

// Initial render
renderProjects();

// Filter button click handlers
buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        renderProjects(button.dataset.filter);
    });
});
