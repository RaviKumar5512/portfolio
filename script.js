

// Professional Experience Stacked Deck Interaction
document.addEventListener('DOMContentLoaded', () => {
  const deckCards = document.querySelectorAll('.exp-deck-card');
  if (deckCards.length > 0) {
    deckCards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        deckCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
      });
      card.addEventListener('click', () => {
        deckCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
      });
    });
  }
});

// Copy email event listener
document.addEventListener('DOMContentLoaded', () => {
  const copyElements = document.querySelectorAll('.copy-email');
  copyElements.forEach(item => {
    item.addEventListener('click', () => {
      const email = item.getAttribute('data-email') || '7055ravikumar@gmail.com';
      navigator.clipboard.writeText(email);
      const btn = item.querySelector('.copy-btn');
      const span = item.querySelector('span');
      if (btn) {
        const oldText = btn.textContent;
        btn.textContent = 'Copied!';
        setTimeout(() => btn.textContent = oldText, 2000);
      } else if (span) {
        const originalText = span.textContent;
        span.textContent = 'Copied to clipboard!';
        setTimeout(() => span.textContent = originalText, 2000);
      }
    });
  });
});

const FRAME_COUNT = 120;
const canvas = document.getElementById('animation-canvas');
const ctx = canvas ? canvas.getContext('2d') : null;

const loader = document.getElementById('loader');
const loaderText = document.getElementById('loader-text');
const loaderFill = document.getElementById('loader-fill');

const images = [];
let loadedCount = 0;

// Lerp physics state
let targetFrame = 0;
let currentFrame = 0;
const LERP_FACTOR = 0.1; // Smooth interpolation speed factor

// Helper to form padded file path for ezgif-frame-001.jpg to ezgif-frame-120.jpg
function getFramePath(index) {
  const padIndex = String(index).padStart(3, '0');
  return `./extracted/ezgif-frame-${padIndex}.jpg`;
}

// Adjust canvas resolution for crisp Retina/High-DPI rendering
function resizeCanvas() {
  if (!canvas || !ctx) return;
  const dpr = window.devicePixelRatio || 1;
  canvas.width = window.innerWidth * dpr;
  canvas.height = window.innerHeight * dpr;
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  renderFrame(currentFrame);
}

// Draw frame centered with full-bleed object-fit: cover scaling
function renderFrame(frameIndex) {
  if (!canvas || !ctx) return;
  const clampedIndex = Math.max(0, Math.min(FRAME_COUNT - 1, Math.round(frameIndex)));
  const img = images[clampedIndex];

  if (!img || !img.complete) return;

  const cw = canvas.width;
  const ch = canvas.height;
  const iw = img.naturalWidth || img.width;
  const ih = img.naturalHeight || img.height;

  const imgRatio = iw / ih;
  const canvasRatio = cw / ch;

  let drawW, drawH, offX, offY;

  // Cover image fitting calculation for full background
  if (canvasRatio > imgRatio) {
    drawW = cw;
    drawH = cw / imgRatio;
    offX = 0;
    offY = (ch - drawH) / 2;
  } else {
    drawW = ch * imgRatio;
    drawH = ch;
    offX = (cw - drawW) / 2;
    offY = 0;
  }

  ctx.clearRect(0, 0, cw, ch);
  ctx.drawImage(img, offX, offY, drawW, drawH);
}

// Calculate target frame index from scroll position
function getTargetFrame() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  if (maxScroll <= 0) return 0;
  const scrollFraction = Math.max(0, Math.min(1, window.scrollY / maxScroll));
  return scrollFraction * (FRAME_COUNT - 1);
}

// Continuous requestAnimationFrame loop for inertia/lerping
function animate() {
  if (!canvas || !ctx) return;
  targetFrame = getTargetFrame();

  // Smoothly interpolate current frame position towards target scroll frame
  currentFrame += (targetFrame - currentFrame) * LERP_FACTOR;

  renderFrame(currentFrame);
  requestAnimationFrame(animate);
}

// Preload all 120 frames into memory
function preloadImages() {
  if (!canvas || !ctx) return;
  for (let i = 1; i <= FRAME_COUNT; i++) {
    const img = new Image();
    img.src = getFramePath(i);

    const onLoaded = () => {
      loadedCount++;
      const progress = Math.round((loadedCount / FRAME_COUNT) * 100);
      if (loaderText) loaderText.textContent = `Loading ${progress}%`;
      if (loaderFill) loaderFill.style.width = `${progress}%`;

      if (loadedCount === FRAME_COUNT) {
        onAllLoaded();
      }
    };

    img.onload = onLoaded;
    img.onerror = onLoaded;
    images.push(img);
  }
}

// On all assets ready
function onAllLoaded() {
  if (loader) {
    setTimeout(() => {
      loader.classList.add('hidden');
    }, 250);
  }

  resizeCanvas();
  requestAnimationFrame(animate);
}

// Handle window resize & orientation change
if (canvas && ctx) {
  window.addEventListener('resize', resizeCanvas);
  window.addEventListener('orientationchange', resizeCanvas);
  preloadImages();
} else if (loader) {
  // Preloader animation for about.html and other non-canvas pages
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

const projects = [
  {
    id: "empros",
    title: "Empros",
    category: "uiux",
    image: "images/Empros.png",
    description: "Global logistics, ocean freight management, and industrial business service web portal.",
    tags: ["Global Logistics", "Freight Tracking", "Corporate UI"],
    liveUrl: "https://empros.in/",
    featured: true
  },
  {
    id: "tuespot",
    title: "TueSpot Solutions",
    category: "uiux",
    image: "images/TueSpot Solutions.png",
    description: "Responsive UI screens and user flows for quick task discovery.",
    tags: ["UI/UX Design", "Website Design", "Angular"],
    liveUrl: "https://tuespotsolutions.com/web/#/home",
    featured: true
  },
  {
    id: "atharv-ayurvedic",
    title: "Atharv Ayurvedic Drugs",
    category: "uiux",
    image: "images/Atharv Ayurvedic Drugs.png",
    description: "E-Commerce & web platform design for Ayurvedic healthcare and herbal wellness products.",
    tags: ["Ayurvedic Healthcare", "E-Commerce", "Web Design"],
    liveUrl: "https://atharvayurvedicdrugs.com/",
    featured: true
  },
  {
    id: "dernier-cri",
    title: "Dernier Cri",
    category: "uiux",
    image: "images/Derniercri.png",
    description: "High-end luxury event management, couture fashion, and digital branding showcase platform.",
    tags: ["Event Management", "Luxury Apparel", "Digital Magic"],
    liveUrl: "https://derniercri.in/",
    featured: true
  },
  {
    id: "taabir",
    title: "Taabir",
    category: "uiux",
    image: "images/Taabir.png",
    description: "Luxury Indian label & boutique fashion store website with responsive shopping user experience.",
    tags: ["Luxury Ethnic", "Boutique Store", "Web Design"],
    liveUrl: "https://taabir.in/",
    featured: true
  },
  {
    id: "freight-pulse",
    title: "Freight Pulse",
    category: "uiux",
    image: "images/Freight Pulse.png",
    description: "Logistics fleet tracking dashboard with real-time route analytics.",
    tags: ["UI/UX Design", "Dashboard", "Angular"]
  },
  {
    id: "ecommers-app",
    title: "E-Commers App",
    category: "appdesign",
    image: "images/E Commers App.png",
    description: "Multi-vendor mobile marketplace with flash deal timers.",
    tags: ["Figma", "App Design", "UI/UX Design"]
  },
  {
    id: "shoes",
    title: "Shoes E-Commerce",
    category: "appdesign",
    image: "images/Shoes.png",
    description: "Sneaker mobile store with AR size matcher and fluid checkout UI.",
    tags: ["E-Commerce", "Figma", "UI/UX Design"]
  },
  {
    id: "orogoo-app",
    title: "Orogoo App",
    category: "appdesign",
    image: "images/Orogoo.png",
    description: "Food ordering and delivery mobile application.",
    tags: ["Figma", "App Design", "UI/UX Design"]
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

renderProjects();

buttons.forEach(button => {

  button.addEventListener("click", () => {

    buttons.forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");

    renderProjects(button.dataset.filter);

  });

});


document.querySelectorAll(".multi-select").forEach((dropdown) => {

  const wrapper = dropdown.querySelector(".select-wrapper");
  const input = dropdown.querySelector(".select");
  const optionBox = dropdown.querySelector(".options");
  const options = dropdown.querySelectorAll(".item");

  let activeOption = 0;

  // Set initial value
  input.value = options[activeOption].textContent;

  // Open / Close dropdown
  input.addEventListener("click", (e) => {
    e.stopPropagation();

    // Close all other dropdowns
    document.querySelectorAll(".multi-select").forEach((item) => {
      if (item !== dropdown) {
        item.querySelector(".select-wrapper").classList.remove("active");
        item.querySelector(".select").classList.remove("active");
        item.querySelector(".options").classList.remove("active");
      }
    });

    wrapper.classList.toggle("active");
    input.classList.toggle("active");
    optionBox.classList.toggle("active");
  });

  // Select an option
  options.forEach((option, index) => {

    option.addEventListener("click", () => {

      // Remove previous active class
      options.forEach(item => item.classList.remove("active"));

      // Add active class to selected option
      option.classList.add("active");

      activeOption = index;

      // Update input value
      input.value = option.textContent;

      // Close dropdown
      wrapper.classList.remove("active");
      input.classList.remove("active");
      optionBox.classList.remove("active");
    });

    // Optional hover effect
    option.addEventListener("mouseenter", () => {
      options.forEach(item => item.classList.remove("active"));
      option.classList.add("active");
    });

  });

});

// Close dropdown when clicking outside
document.addEventListener("click", () => {
  document.querySelectorAll(".multi-select").forEach((dropdown) => {
    dropdown.querySelector(".select-wrapper").classList.remove("active");
    dropdown.querySelector(".select").classList.remove("active");
    dropdown.querySelector(".options").classList.remove("active");
  });
});

/* -------------------------------------------------------------
 * RESUME DOWNLOAD & UPLOAD SYSTEM LOGIC
 * ------------------------------------------------------------- */

// Global variable for current draft uploaded file
let currentResumeFile = null;

// Download Resume Function
function downloadResume() {
  const customData = localStorage.getItem('custom_resume_data');
  const customName = localStorage.getItem('custom_resume_filename') || 'Ravi_Kumar_Resume.pdf';

  if (customData) {
    // Download stored custom uploaded file
    const a = document.createElement('a');
    a.href = customData;
    a.download = customName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    showToast(`Downloading uploaded CV (${customName})...`, 'success');
  } else {
    // Download default resume PDF
    const a = document.createElement('a');
    a.href = 'Ravi_Kumar_Resume.pdf';
    a.download = 'Ravi_Kumar_Resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    showToast("Downloading Ravi Kumar's Resume...", 'success');
  }
}

// Modal Open/Close handlers
function openResumeUploadModal() {
  const modal = document.getElementById('resumeUploadModal');
  if (modal) {
    modal.classList.add('active');
    initDragAndDrop();
  }
}

function closeResumeUploadModal() {
  const modal = document.getElementById('resumeUploadModal');
  if (modal) {
    modal.classList.remove('active');
  }
}

// Initialize Drag & Drop Zone
function initDragAndDrop() {
  const zone = document.getElementById('uploadDragZone');
  const input = document.getElementById('resumeFileInput');
  if (!zone || zone.dataset.initialized) return;

  zone.dataset.initialized = 'true';

  zone.addEventListener('click', (e) => {
    if (e.target.tagName !== 'INPUT' && input) {
      input.click();
    }
  });

  ['dragenter', 'dragover'].forEach(eventName => {
    zone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      zone.classList.add('dragover');
    }, false);
  });

  ['dragleave', 'drop'].forEach(eventName => {
    zone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      zone.classList.remove('dragover');
    }, false);
  });

  zone.addEventListener('drop', (e) => {
    const dt = e.dataTransfer;
    const files = dt.files;
    if (files && files.length > 0) {
      processSelectedFile(files[0]);
    }
  }, false);
}

// Handle file input select
function handleFileSelect(event) {
  const files = event.target.files;
  if (files && files.length > 0) {
    processSelectedFile(files[0]);
  }
}

// Process and preview selected file
function processSelectedFile(file) {
  const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const ext = file.name.split('.').pop().toLowerCase();
  
  if (!validTypes.includes(file.type) && !['pdf', 'doc', 'docx'].includes(ext)) {
    showToast('Invalid file format. Please upload a PDF, DOC, or DOCX file.', 'error');
    return;
  }

  if (file.size > 10 * 1024 * 1024) {
    showToast('File size exceeds 10MB limit.', 'error');
    return;
  }

  currentResumeFile = file;

  const preview = document.getElementById('uploadedFilePreview');
  const fileNameElem = document.getElementById('previewFileName');
  const fileSizeElem = document.getElementById('previewFileSize');
  const saveBtn = document.getElementById('saveResumeBtn');

  if (preview && fileNameElem && fileSizeElem) {
    fileNameElem.textContent = file.name;
    fileSizeElem.textContent = formatBytes(file.size);
    preview.style.display = 'flex';
  }

  if (saveBtn) {
    saveBtn.disabled = false;
  }
}

// Save uploaded file into localStorage
function saveUploadedResume() {
  if (!currentResumeFile) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      localStorage.setItem('custom_resume_data', e.target.result);
      localStorage.setItem('custom_resume_filename', currentResumeFile.name);
      showToast(`Resume "${currentResumeFile.name}" successfully saved & active!`, 'success');
      closeResumeUploadModal();
    } catch (err) {
      showToast('File too large to save in browser local storage.', 'error');
    }
  };
  reader.readAsDataURL(currentResumeFile);
}

// Reset preview
function resetUploadedResume() {
  currentResumeFile = null;
  const preview = document.getElementById('uploadedFilePreview');
  const saveBtn = document.getElementById('saveResumeBtn');
  const input = document.getElementById('resumeFileInput');

  if (preview) preview.style.display = 'none';
  if (saveBtn) saveBtn.disabled = true;
  if (input) input.value = '';
}

// Helper: Format Bytes
function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

// Toast Notification Helper
function showToast(message, type = 'info') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast-message ${type}`;

  const iconClass = type === 'success' ? 'fa-solid fa-circle-check' : 'fa-solid fa-circle-info';
  toast.innerHTML = `<i class="${iconClass}"></i> <span>${message}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}


 // Optional: tap-to-toggle for touch devices (no hover support)
  document.querySelectorAll('.exp-deck-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.exp-deck-card').forEach(c => {
        if (c !== card) c.classList.remove('active');
      });
      card.classList.toggle('active');
    });
  });

  