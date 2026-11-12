// Preloader animation for project.html
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
});

const projects = [
    {
        id: "orogoo",
        title: "Orogoo Job Portal",
        category: "agency",
        image: "images/orogoos.png",
        description: "Short-term job discovery & shift hiring platform with 40% faster application flow and candidate search dashboards.",
        tags: ["Job Portal", "Gig Economy", "UI/UX Design", "Angular"],
        liveUrl: "https://orogoo.com/#/home",
        featured: true
    },
    {
        id: "imperial-weaves",
        title: "Imperial Weaves",
        category: "fashion",
        image: "images/Imperial weaves.png",
        description: "Luxury Kashmiri handloom saree & heritage textile storefront designed for artisan storytelling and 35% higher checkout conversion.",
        tags: ["Handloom Textiles", "E-Commerce", "Luxury Fashion"],
        liveUrl: "https://imperialweaves.com/",
        featured: true
    },
    {
        id: "hardcode-shampoo",
        title: "Hardcode Shampoo",
        category: "ecommerce",
        image: "images/Hardcode.png",
        description: "Conversion-engineered D2C men's grooming storefront featuring transparent ingredient breakdown and streamlined 2-step checkout.",
        tags: ["Men's Grooming", "E-Commerce", "D2C Storefront"],
        liveUrl: "https://www.hardcodeshampoo.com/",
        featured: true
    },
    {
        id: "atharv-ayurvedic",
        title: "Atharv Ayurvedic Drugs",
        category: "ecommerce",
        image: "images/Atharv Ayurvedic Drugs.png",
        description: "E-Commerce healthcare platform featuring GMP certified catalogue and 25% faster order placement.",
        tags: ["Ayurvedic Healthcare", "E-Commerce", "Web Design"],
        liveUrl: "https://atharvayurvedicdrugs.com/",
        featured: true
    },
    {
        id: "dernier-cri",
        title: "Dernier Cri",
        category: "fashion",
        image: "images/Derniercri.png",
        description: "Haute couture fashion & luxury event portal with real-time consultation booking flow.",
        tags: ["Event Management", "Luxury Apparel", "Digital Showcase"],
        liveUrl: "https://derniercri.in/",
        featured: true
    },
    {
        id: "taabir",
        title: "Taabir",
        category: "fashion",
        image: "images/Taabir.png",
        description: "Luxury Indian label & boutique fashion store website with multi-column grid layouts and responsive shopping user experience.",
        tags: ["Luxury Ethnic", "Boutique Store", "Web Design"],
        liveUrl: "https://taabir.in/",
        featured: true
    },
    {
        id: "digital-manjha",
        title: "Digital Manjha",
        category: "agency",
        image: "images/Digital Manjha.png",
        description: "Creative marketing agency portfolio and service architecture designed to scale client acquisition.",
        tags: ["Digital Agency", "Brand Strategy", "Web Design"],
        liveUrl: "https://digitalmanjha.com/",
        featured: true
    },
    {
        id: "empros",
        title: "Empros",
        category: "corporate",
        image: "images/Empros.png",
        description: "Global freight tracking & ocean logistics portal making dense transport schedules effortlessly navigable.",
        tags: ["Global Logistics", "Freight Tracking", "Corporate UI"],
        liveUrl: "https://empros.in/",
        featured: true
    },
    {
        id: "tuespot",
        title: "TueSpot Solutions",
        category: "corporate",
        image: "images/TueSpot Solutions.png",
        description: "Enterprise UI architecture and synchronized design system reducing feature build time by 45%.",
        tags: ["Design System", "Enterprise UI", "Angular"],
        liveUrl: "https://tuespotsolutions.com/web/#/home",
        featured: true
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
        id: "freight-pulse",
        title: "Freight Pulse",
        category: "corporate",
        image: "images/Freight Pulse.png",
        description: "Real-time logistics fleet tracking dashboard with GPS route analytics.",
        tags: ["Fleet Analytics", "Dashboard", "Logistics UI"]
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
            ? `<a href="${project.liveUrl}" target="_blank" rel="noopener" class="card-live-btn" onclick="event.stopPropagation();" title="Visit Live Site"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live Site</a>`
            : ``;

        const badgeHTML = project.featured
            ? `<span class="featured-badge"><i class="fa-solid fa-star"></i> Featured</span>`
            : ``;

        grid.innerHTML += `
        <div class="project-card glass-card" onclick="location.href='project-detail.html?id=${project.id}'" style="cursor: pointer;" data-category="${project.category}">
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
