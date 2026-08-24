const WHATSAPP_NUMBER = "94723130673";

const PRODUCTS = [
  { id: 1, name: "Royal Ceylon Blue Sapphire", type: "sapphire", typeLabel: "Sapphire · Cushion Cut", color: "blue", carat: 5.20, clarity: "VVS1", origin: "Matale, Sri Lanka", price: 12800, badge: "Investment Grade", badgeRare: true, img: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=800&auto=format&fit=crop" },
  { id: 2, name: "Cornflower Blue Sapphire", type: "sapphire", typeLabel: "Sapphire · Oval Cut", color: "blue", carat: 3.15, clarity: "VS1", origin: "Ratnapura, Sri Lanka", price: 6450, badge: "New Arrival", img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop" },
  { id: 3, name: "Ceylon Star Sapphire", type: "sapphire", typeLabel: "Star Sapphire · Cabochon", color: "blue", carat: 8.15, clarity: "SI2", origin: "Elahera, Sri Lanka", price: 10400, badge: "Rare Find", badgeRare: true, img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop" },
  { id: 4, name: "Pigeon Blood Ruby", type: "ruby", typeLabel: "Ruby · Oval Cut", color: "red", carat: 2.40, clarity: "VVS2", origin: "Ratnapura, Sri Lanka", price: 9750, badge: "Investment Grade", img: "https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?q=80&w=800&auto=format&fit=crop" },
  { id: 5, name: "Ceylon Star Ruby", type: "ruby", typeLabel: "Star Ruby · Cabochon", color: "red", carat: 6.80, clarity: "SI1", origin: "Matale, Sri Lanka", price: 4200, badge: "Bestseller", img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop" },
  { id: 6, name: "Colombian Emerald", type: "emerald", typeLabel: "Emerald · Emerald Cut", color: "green", carat: 4.05, clarity: "VS2", origin: "Muzo, Colombia", price: 5600, badge: "New Arrival", img: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=800&auto=format&fit=crop" },
  { id: 7, name: "Verdant Green Emerald", type: "emerald", typeLabel: "Emerald · Asscher Cut", color: "green", carat: 2.90, clarity: "VVS2", origin: "Muzo, Colombia", price: 7850, badge: "Certified", img: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=800&auto=format&fit=crop" },
  { id: 8, name: "Chrysoberyl Cat's Eye", type: "catseye", typeLabel: "Cat's Eye · Cabochon", color: "golden", carat: 7.30, clarity: "SI1", origin: "Matale, Sri Lanka", price: 8900, badge: "Rare Find", badgeRare: true, img: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=800&auto=format&fit=crop" },
  { id: 9, name: "Golden Cat's Eye", type: "catseye", typeLabel: "Cat's Eye · Honey Cabochon", color: "golden", carat: 9.60, clarity: "VVS", origin: "Elahera, Sri Lanka", price: 11200, badge: "Investment Grade", img: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=800&auto=format&fit=crop" },
  { id: 10, name: "Milk & Honey Cat's Eye", type: "catseye", typeLabel: "Cat's Eye · Semi-Cabochon", color: "golden", carat: 5.85, clarity: "SI2", origin: "Matale, Sri Lanka", price: 6700, badge: "Bestseller", img: "https://images.unsplash.com/photo-1591209627687-e0d61ff163c5?q=80&w=800&auto=format&fit=crop" },
  { id: 11, name: "Yellow Sapphire · Pukhraj", type: "sapphire", typeLabel: "Sapphire · Radiant Cut", color: "golden", carat: 4.75, clarity: "VVS2", origin: "Ratnapura, Sri Lanka", price: 5900, badge: "Bestseller", img: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?q=80&w=800&auto=format&fit=crop" },
  { id: 12, name: "Rose Pink Sapphire", type: "sapphire", typeLabel: "Padparadscha-Hue Sapphire", color: "pink", carat: 3.60, clarity: "VS1", origin: "Elahera, Sri Lanka", price: 7300, badge: "New Arrival", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop" }
];

const GEM_COLORS = {
  blue: ["#1b3a7a", "#3f6fd4"],
  red: ["#7a1220", "#d43f52"],
  green: ["#0b4d33", "#1fa06d"],
  golden: ["#8a6414", "#dfae3c"],
  pink: ["#8a2a55", "#e06aa4"]
};

const waLink = (text) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
const money = (n) => "$" + n.toLocaleString("en-US");
const state = { type: "all", color: "all", carat: "all", maxPrice: 25000, sort: "featured" };

function initHeader() {
  const header = document.getElementById("siteHeader");
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");

  let lastY = window.scrollY;
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle("scrolled", y > 40);
    if (!nav.classList.contains("open")) {
      if (y > 180 && y > lastY + 4) header.classList.add("nav-hidden");
      else if (y < lastY - 4 || y <= 180) header.classList.remove("nav-hidden");
    }
    lastY = y;
    updateHeroParallax(y);
    updateParallax();
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open);
  });

  nav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}

function initHeroSlider() {
  if (!document.getElementById("heroSlides")) return;

  const slides = Array.from(document.querySelectorAll(".hero-slide"));
  const dotsWrap = document.getElementById("heroDots");
  let index = 0;
  let timer;

  slides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.setAttribute("role", "tab");
    dot.setAttribute("aria-label", `Slide ${i + 1}`);
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goTo(i));
    dotsWrap.appendChild(dot);
  });
  const dots = Array.from(dotsWrap.children);

  function render() {
    slides.forEach((s, i) => s.classList.toggle("active", i === index));
    dots.forEach((d, i) => d.classList.toggle("active", i === index));
  }

  function goTo(i) {
    index = (i + slides.length) % slides.length;
    render();
    restart();
  }

  function restart() {
    clearInterval(timer);
    timer = setInterval(() => {
      index = (index + 1) % slides.length;
      render();
    }, 6000);
  }

  document.getElementById("heroPrev").addEventListener("click", () => goTo(index - 1));
  document.getElementById("heroNext").addEventListener("click", () => goTo(index + 1));

  const hero = document.querySelector(".hero");
  hero.addEventListener("mouseenter", () => clearInterval(timer));
  hero.addEventListener("mouseleave", restart);

  let touchX = null;
  hero.addEventListener("touchstart", (e) => (touchX = e.touches[0].clientX), { passive: true });
  hero.addEventListener("touchend", (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) goTo(index + (dx < 0 ? 1 : -1));
    touchX = null;
  }, { passive: true });

  restart();
}

function gemWatermark(colorKey) {
  const [dark, light] = GEM_COLORS[colorKey] || GEM_COLORS.blue;
  return `
  <svg class="gem-watermark" viewBox="0 0 100 100" aria-hidden="true">
    <defs>
      <linearGradient id="g${colorKey}${Math.random().toString(36).slice(2, 6)}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${light}"/>
        <stop offset="100%" stop-color="${dark}"/>
      </linearGradient>
    </defs>
    <path d="M50 8 14 36l36 54L86 36Z" fill="url(#g${colorKey})" stroke="#ecd07f" stroke-width="1.4"/>
    <path d="M50 8v82M14 36h72M32 22l18 14 18-14M32 74l18-24 18 24" fill="none" stroke="#ecd07f" stroke-width=".8"/>
  </svg>`;
}

function cardHTML(p) {
  const msg = `Hello EVARA GEMS! I'm interested in the "${p.name}" (${p.carat.toFixed(2)} ct, ${p.clarity}, listed at ${money(p.price)}). Could you share more details?`;
  return `
  <article class="product-card">
    <div class="product-media">
      ${gemWatermark(p.color)}
      <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.style.display='none'">
      <span class="product-badge ${p.badgeRare ? "badge-rare" : ""}">${p.badge}</span>
      <div class="product-overlay"><span style="font-size:.72rem;letter-spacing:.24em;text-transform:uppercase;color:#ecd07f;">NGJA Certified</span></div>
    </div>
    <div class="product-body">
      <p class="product-type">${p.typeLabel}</p>
      <h3>${p.name}</h3>
      <ul class="product-specs">
        <li><span>Carat</span><strong>${p.carat.toFixed(2)} ct</strong></li>
        <li><span>Clarity</span><strong>${p.clarity}</strong></li>
        <li><span>Origin</span><strong>${p.origin.split(",")[0]}</strong></li>
      </ul>
      <div class="product-foot">
        <div class="price">${money(p.price)}<small>Incl. Certificate</small></div>
        <a class="whatsapp-inquire" href="${waLink(msg)}" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.47-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.52-.08-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.18-1.42-.08-.12-.28-.2-.58-.35M12.05 21.79h-.01c-1.78 0-3.52-.48-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26C2.16 6.45 6.6 2.01 12.05 2.01c2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.9 6.99c0 5.45-4.44 9.89-9.89 9.89m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.15 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.17-3.48-8.42Z"/></svg>
          Inquire via WhatsApp
        </a>
      </div>
    </div>
  </article>`;
}

function staggerCards(container) {
  container.querySelectorAll(".product-card").forEach((card, i) => {
    card.style.animationDelay = Math.min(i * 80, 480) + "ms";
  });
}

const isCollectionPage = () => document.body.dataset.page === "collection";

function getFiltered() {
  let list = PRODUCTS.filter((p) => {
    if (state.type !== "all" && p.type !== state.type) return false;
    if (state.color !== "all" && p.color !== state.color) return false;
    if (state.carat === "lt3" && p.carat >= 3) return false;
    if (state.carat === "mid" && (p.carat < 3 || p.carat > 6)) return false;
    if (state.carat === "gt6" && p.carat <= 6) return false;
    if (p.price > state.maxPrice) return false;
    return true;
  });

  switch (state.sort) {
    case "priceAsc": list.sort((a, b) => a.price - b.price); break;
    case "priceDesc": list.sort((a, b) => b.price - a.price); break;
    case "caratDesc": list.sort((a, b) => b.carat - a.carat); break;
  }
  return list;
}

function initProducts() {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  if (!isCollectionPage()) {
    grid.innerHTML = PRODUCTS.slice(0, 6).map(cardHTML).join("");
    staggerCards(grid);
    return;
  }

  const empty = document.getElementById("emptyState");
  const countEl = document.getElementById("resultCount");

  function renderProducts() {
    const list = getFiltered();
    grid.innerHTML = list.map(cardHTML).join("");
    staggerCards(grid);
    empty.hidden = list.length !== 0;
    countEl.innerHTML =
      list.length === PRODUCTS.length
        ? `Showing all <strong>${PRODUCTS.length}</strong> pieces`
        : `Showing <strong>${list.length}</strong> of <strong>${PRODUCTS.length}</strong> pieces`;
  }

  function setType(type) {
    const pill = document.querySelector(`#typePills .pill[data-type="${type}"]`);
    if (!pill) return;
    document.querySelectorAll("#typePills .pill").forEach((x) => x.classList.remove("active"));
    pill.classList.add("active");
    state.type = type;
    renderProducts();
  }

  document.querySelectorAll("#typePills .pill").forEach((pill) => {
    pill.addEventListener("click", () => setType(pill.dataset.type));
  });

  document.getElementById("colorFilter").addEventListener("change", (e) => {
    state.color = e.target.value;
    renderProducts();
  });

  document.getElementById("caratFilter").addEventListener("change", (e) => {
    state.carat = e.target.value;
    renderProducts();
  });

  document.getElementById("sortSelect").addEventListener("change", (e) => {
    state.sort = e.target.value;
    renderProducts();
  });

  const range = document.getElementById("priceRange");
  const out = document.getElementById("priceOut");

  function syncRange() {
    state.maxPrice = Number(range.value);
    out.textContent = money(state.maxPrice);
    const pct = ((range.value - range.min) / (range.max - range.min)) * 100;
    range.style.setProperty("--fill", pct + "%");
    renderProducts();
  }
  range.addEventListener("input", syncRange);
  syncRange();

  document.getElementById("resetFilters").addEventListener("click", () => {
    Object.assign(state, { type: "all", color: "all", carat: "all", maxPrice: 25000, sort: "featured" });
    document.querySelectorAll("#typePills .pill").forEach((x, i) => x.classList.toggle("active", i === 0));
    document.getElementById("colorFilter").value = "all";
    document.getElementById("caratFilter").value = "all";
    document.getElementById("sortSelect").value = "featured";
    range.value = 25000;
    syncRange();
  });

  const urlType = new URLSearchParams(location.search).get("type");
  if (urlType) setType(urlType);

  const customMsg = "Hello EVARA GEMS! I couldn't find what I was looking for on your website. Could you help me source a specific stone?";
  ["emptyWhatsApp", "vaultWhatsApp"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.href = waLink(customMsg);
  });
}

function initAppointmentForm() {
  const form = document.getElementById("appointmentForm");
  if (!form) return;

  const success = document.getElementById("apptSuccess");
  const dateInput = document.getElementById("apDate");
  const today = new Date().toISOString().split("T")[0];
  dateInput.min = today;

  form.querySelectorAll("input, select, textarea").forEach((el) =>
    el.addEventListener("input", () => el.closest(".field")?.classList.remove("invalid"))
  );

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let firstInvalid = null;
    form.querySelectorAll("[required]").forEach((el) => {
      let bad = !el.value.trim();
      if (!bad && el.type === "email") bad = !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(el.value);
      if (!bad && el.type === "tel") bad = !/^[+\d][\d\s\-()]{7,}$/.test(el.value.trim());
      el.closest(".field").classList.toggle("invalid", bad);
      if (bad && !firstInvalid) firstInvalid = el;
    });

    if (firstInvalid) {
      firstInvalid.focus();
      return;
    }

    const data = {
      name: document.getElementById("apName").value.trim(),
      email: document.getElementById("apEmail").value.trim(),
      phone: document.getElementById("apPhone").value.trim(),
      date: dateInput.value,
      time: document.getElementById("apTime").value,
      purpose: document.getElementById("apPurpose").value,
      message: document.getElementById("apMessage").value.trim(),
      submittedAt: new Date().toISOString()
    };

    try {
      const existing = JSON.parse(localStorage.getItem("evara_appointments") || "[]");
      existing.push(data);
      localStorage.setItem("evara_appointments", JSON.stringify(existing));
    } catch (_) {}

    const niceDate = new Date(data.date + "T00:00:00").toLocaleDateString("en-GB", {
      weekday: "long", day: "numeric", month: "long", year: "numeric"
    });

    document.getElementById("succName").textContent = data.name.split(" ")[0];
    document.getElementById("succDate").textContent = `${niceDate} · ${data.time}`;

    const waMsg = `Hello EVARA GEMS! My name is ${data.name}. I just requested an appointment for ${niceDate} (${data.time}) — purpose: ${data.purpose}. Please confirm my slot.`;
    document.getElementById("succWhatsApp").href = waLink(waMsg);

    form.hidden = true;
    success.hidden = false;
    success.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

function initReveals() {
  document.querySelectorAll(".trust-grid").forEach((grid) => {
    grid.querySelectorAll(".trust-card").forEach((el, i) => {
      el.classList.remove("reveal", "delay-1", "delay-2", "delay-3");
      el.classList.add("reveal-zoom", "delay-" + ((i % 4) + 1));
    });
  });

  document.querySelectorAll(".testimonial-grid").forEach((grid) => {
    [...grid.children].forEach((el, i) => {
      el.classList.remove("reveal", "delay-1", "delay-2", "delay-3");
      el.classList.add(i % 2 ? "reveal-right" : "reveal-left", "delay-" + ((i % 3) + 1));
    });
  });

  document.querySelectorAll(".site-footer .f-brand, .site-footer .f-col").forEach((el, i) => {
    el.classList.add("reveal", "delay-" + ((i % 4) + 1));
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  document.querySelectorAll(".reveal,.reveal-left,.reveal-right,.reveal-zoom").forEach((el) => io.observe(el));
}

function initCounters() {
  const nums = document.querySelectorAll(".stat-num");
  if (!nums.length) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        io.unobserve(el);
        const target = Number(el.dataset.target);
        const suffix = el.dataset.suffix || "";
        const dur = 1800;
        const start = performance.now();
        function tick(now) {
          const t = Math.min((now - start) / dur, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          el.textContent = Math.round(target * eased).toLocaleString("en-US") + suffix;
          if (t < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      });
    },
    { threshold: 0.5 }
  );
  nums.forEach((n) => io.observe(n));
}

function initMisc() {
  const backToTop = document.getElementById("backToTop");
  window.addEventListener(
    "scroll",
    () => backToTop.classList.toggle("show", window.scrollY > 700),
    { passive: true }
  );
  backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  const form = document.getElementById("newsletterForm");
  if (form) {
    const msg = document.getElementById("newsletterMsg");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("newsletterEmail");
      if (!email.value || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value)) {
        email.focus();
        email.style.borderColor = "#d43f52";
        setTimeout(() => (email.style.borderColor = ""), 1600);
        return;
      }
      form.hidden = true;
      msg.hidden = false;
    });
  }

  const floatWa = document.getElementById("whatsappFloat");
  if (floatWa) {
    floatWa.href = waLink("Hello EVARA GEMS! I'm interested in your gemstones.");
  }

  document.getElementById("year").textContent = new Date().getFullYear();
}

let parallaxItems = [];

function initParallax() {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  parallaxItems = [...document.querySelectorAll("[data-parallax]")].map((el) => ({
    el,
    speed: parseFloat(el.dataset.parallax) || 0.05,
    current: 0
  }));
  window.addEventListener("resize", () => {
    parallaxItems.forEach((o) => {
      o.current = 0;
      o.el.style.transform = "";
    });
    updateParallax();
  }, { passive: true });
  requestAnimationFrame(updateParallax);
}

function updateParallax() {
  if (!parallaxItems.length) return;
  if (window.innerWidth < 900) {
    parallaxItems.forEach((o) => (o.el.style.transform = ""));
    return;
  }
  const mid = window.innerHeight / 2;
  parallaxItems.forEach((item) => {
    const r = item.el.getBoundingClientRect();
    const rawTop = r.top - item.current;
    const offset = (rawTop + r.height / 2 - mid) * item.speed;
    item.current = offset;
    item.el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
  });
}

function updateHeroParallax(y) {
  const hc = document.querySelector(".hero-content");
  if (!hc || y > window.innerHeight * 1.2) return;
  hc.style.transform = `translateY(${(y * 0.16).toFixed(1)}px)`;
  hc.style.opacity = String(Math.max(1 - y / (window.innerHeight * 0.9), 0));
}

window.addEventListener("load", () => {
  setTimeout(() => document.getElementById("preloader").classList.add("hidden"), 350);
});

document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initHeroSlider();
  initProducts();
  initAppointmentForm();
  initReveals();
  initCounters();
  initParallax();
  initMisc();
});
