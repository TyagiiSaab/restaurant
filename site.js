/* ============================================================
   SITE CONFIG — edit everything here (CMS / reusability)
   Restaurant name, images, menu, gallery, reviews, hours,
   address, contact, socials, accent color.
   ============================================================ */
const SITE_CONFIG = {
  restaurantName: "Ember & Oak",
  heroImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1400&auto=format&fit=crop",
  address: "14 G.T. Road, Model Town, Panipat, Haryana 132103",
  phone: "+91 180 265 4321",
  phoneHref: "tel:+911802654321",
  whatsapp: "https://wa.me/911802654321",
  email: "hello@emberandoak.in",
  hoursShort: "Open Today · 11AM — 11PM",
  instagram: "https://instagram.com",
  instagramHandle: "@emberandoak",
  mapsUrl: "https://www.google.com/maps?q=G.T.+Road+Model+Town+Panipat",
  accent: "#C65A42", // change brand accent in one place

  menu: [
    { cat: "Starters", name: "Charred Burrata, Ember Tomatoes", desc: "Creamy burrata, fire-blistered tomatoes, basil oil, grilled sourdough.", price: "₹495", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop" },
    { cat: "Mains", name: "Wood-Fired Margherita", desc: "72-hour dough, San Marzano tomato, fior di latte, cold-pressed olive oil.", price: "₹545", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600&auto=format&fit=crop" },
    { cat: "Chef's Special", name: "Oak-Smoked Short Rib", desc: "Slow-cooked 8 hours, smoked over oak, mustard glaze, charred onion.", price: "₹895", img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop" },
    { cat: "Mains", name: "Pan-Seared Salmon, Seasonal Greens", desc: "Crisp skin salmon, brown butter, market greens, lemon beurre.", price: "₹845", img: "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=600&auto=format&fit=crop" },
    { cat: "Desserts", name: "Burnt Basque Cheesecake", desc: "Caramelised top, molten centre, served with smoked honey cream.", price: "₹395", img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=600&auto=format&fit=crop" },
    { cat: "Drinks", name: "Smoked Old Fashioned", desc: "Oak-smoked bourbon, demerara, bitters — stirred down, never rushed.", price: "₹595", img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=600&auto=format&fit=crop" },
  ],

  // Full popup menu — grouped by category, each item performs no nav (display only)
  fullMenu: [
    { category: "Starters", items: [
      { name: "Charred Burrata, Ember Tomatoes", desc: "Basil oil, grilled sourdough", price: "₹495", tag: "veg" },
      { name: "Oak-Roasted Hummus", desc: "Smoked paprika butter, warm pita", price: "₹395", tag: "veg" },
      { name: "Crispy Calamari, Lemon Aioli", desc: "Flash-fried, charred lemon", price: "₹545", tag: "non-veg" },
      { name: "Seasonal Soup of the Day", desc: "Ask your server — always from the morning market", price: "₹345", tag: "veg" },
    ]},
    { category: "Mains", items: [
      { name: "Wood-Fired Margherita", desc: "72-hour dough, fior di latte", price: "₹545", tag: "veg" },
      { name: "Wild Mushroom Risotto", desc: "Parmesan, truffle oil, thyme", price: "₹695", tag: "veg" },
      { name: "Pan-Seared Salmon", desc: "Brown butter, seasonal greens", price: "₹845", tag: "non-veg" },
      { name: "Grilled Chicken, Ember Jus", desc: "Half bird, charred vegetables, pan jus", price: "₹745", tag: "non-veg" },
    ]},
    { category: "Chef's Specials", items: [
      { name: "Oak-Smoked Short Rib", desc: "8-hour slow cook, mustard glaze", price: "₹895", tag: "non-veg" },
      { name: "Fire-Baked Whole Cauliflower", desc: "Almond romesco, herb salad — feeds two", price: "₹645", tag: "veg" },
      { name: "Sunday Lamb Shoulder", desc: "Weekends only, mint gremolata", price: "₹945", tag: "non-veg" },
    ]},
    { category: "Desserts", items: [
      { name: "Burnt Basque Cheesecake", desc: "Smoked honey cream", price: "₹395", tag: "veg" },
      { name: "Dark Chocolate Torte", desc: "Sea salt, olive oil, cocoa nib", price: "₹425", tag: "veg" },
      { name: "Seasonal Fruit Crumble", desc: "Oat crumble, vanilla bean gelato", price: "₹375", tag: "veg" },
    ]},
    { category: "Drinks", items: [
      { name: "Smoked Old Fashioned", desc: "Oak-smoked bourbon, demerara", price: "₹595", tag: "house" },
      { name: "Blood Orange Spritz", desc: "Zero-proof option available", price: "₹395", tag: "house" },
      { name: "Filter Coffee Tonic", desc: "Local roast, citrus, ice", price: "₹295", tag: "house" },
      { name: "Natural Wine Pour", desc: "Rotating low-intervention list", price: "₹545", tag: "house" },
    ]},
  ],

  gallery: [
    { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=900&auto=format&fit=crop", label: "The dining room", ratio: "tall" },
    { src: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=900&auto=format&fit=crop", label: "From the fire", ratio: "short" },
    { src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=900&auto=format&fit=crop", label: "Slow afternoons", ratio: "square" },
    { src: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=900&auto=format&fit=crop", label: "Morning prep", ratio: "short" },
    { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=900&auto=format&fit=crop", label: "Set for two", ratio: "tall" },
    { src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=900&auto=format&fit=crop", label: "Oak-smoked plates", ratio: "square" },
    { src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=900&auto=format&fit=crop", label: "Sunday table", ratio: "short" },
    { src: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=900&auto=format&fit=crop", label: "Corner light", ratio: "tall" },
  ],

  reviews: [
    { quote: "Quiet, warm, and deeply satisfying. The short rib alone is worth the drive from Delhi.", name: "Rohit Malhotra", meta: "Google review · Dined in December", initials: "R" },
    { quote: "We came for one anniversary dinner and now it's simply our place. Book the corner table.", name: "Simran & Arjun Kaur", meta: "Google review · Regulars since 2021", initials: "S" },
    { quote: "Thoughtful food without any showing off. Service that gives you space, then appears exactly when needed.", name: "Elena D'Souza", meta: "Google review · Dined in November", initials: "E" },
  ],
};

/* ---------- Apply accent + bind config (so contact/social buttons always work) ---------- */
document.documentElement.style.setProperty("--accent", SITE_CONFIG.accent);
document.querySelectorAll('[data-site="phone"]').forEach((el) => {
  if (el.tagName === "A") el.href = SITE_CONFIG.phoneHref;
  el.textContent = SITE_CONFIG.phone;
});
document.querySelectorAll('[data-site="address"]').forEach((el) => { el.textContent = SITE_CONFIG.address; });
document.querySelectorAll('[data-site="hoursShort"]').forEach((el) => { el.textContent = SITE_CONFIG.hoursShort; });
document.querySelectorAll('[data-site="instagram"]').forEach((el) => {
  if (el.tagName === "A") { el.href = SITE_CONFIG.instagram; el.target = "_blank"; el.rel = "noopener"; }
});
const heroImg = document.querySelector('[data-site="heroImage"]');
if (heroImg) heroImg.src = SITE_CONFIG.heroImage;

/* ---------- Component: menu-item (featured preview) ---------- */
const menuList = document.getElementById("menuList");
menuList.innerHTML = SITE_CONFIG.menu.map((d) => `
  <article class="dish reveal in">
    <div class="dish-img"><img src="${d.img}" alt="${d.name}" loading="lazy" /></div>
    <div>
      <span class="dish-cat">${d.cat}</span>
      <h3>${d.name}</h3>
      <p>${d.desc}</p>
    </div>
    <span class="dish-price">${d.price}</span>
    <button type="button" class="dish-arrow" data-open="menuModal" aria-label="View ${d.name} in full menu">→</button>
  </article>`).join("");

/* ---------- Component: full menu popup ---------- */
const menuTabs = document.getElementById("menuTabs");
const fullMenuList = document.getElementById("fullMenuList");
let activeCat = "All";
function tagBadge(tag) {
  if (tag === "veg") return '<span class="diet diet-veg" title="Vegetarian">● veg</span>';
  if (tag === "non-veg") return '<span class="diet diet-nonveg" title="Non-vegetarian">● non-veg</span>';
  return '<span class="diet diet-house">house</span>';
}
function renderTabs() {
  const cats = ["All", ...SITE_CONFIG.fullMenu.map((c) => c.category)];
  menuTabs.innerHTML = cats.map((c) =>
    `<button type="button" role="tab" aria-selected="${c === activeCat}" class="menu-tab${c === activeCat ? " active" : ""}" data-cat="${c}">${c}</button>`
  ).join("");
}
function renderFullMenu() {
  const groups = SITE_CONFIG.fullMenu.filter((g) => activeCat === "All" || g.category === activeCat);
  fullMenuList.innerHTML = groups.map((g) => `
    <div class="full-group">
      <h4><span>${g.category}</span><i></i></h4>
      ${g.items.map((it) => `
        <div class="full-item">
          <div><strong>${it.name} ${tagBadge(it.tag)}</strong><p>${it.desc}</p></div>
          <span class="full-price">${it.price}</span>
        </div>`).join("")}
    </div>`).join("");
}
renderTabs();
renderFullMenu();
menuTabs.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-cat]");
  if (!btn) return;
  activeCat = btn.dataset.cat;
  renderTabs();
  renderFullMenu();
});
// Dish arrows open the popup pre-filtered to that dish's category
menuList.addEventListener("click", (e) => {
  const btn = e.target.closest('[data-open="menuModal"]');
  if (!btn) return;
  const cat = btn.closest(".dish")?.querySelector(".dish-cat")?.textContent.trim();
  const match = SITE_CONFIG.fullMenu.find((g) =>
    g.category.toLowerCase() === (cat || "").toLowerCase() ||
    (cat === "Chef's Special" && g.category === "Chef's Specials"));
  activeCat = match ? match.category : "All";
  renderTabs();
  renderFullMenu();
});

/* ---------- Component: gallery + lightbox ---------- */
const galleryGrid = document.getElementById("galleryGrid");
galleryGrid.innerHTML = SITE_CONFIG.gallery.map((g) => `
  <figure class="${g.ratio}" tabindex="0" role="button" aria-label="Enlarge photo: ${g.label}" data-full="${g.src.replace("w=900", "w=1600")}" data-label="${g.label}">
    <img src="${g.src}" alt="${g.label}" loading="lazy" />
    <figcaption>${g.label} <small>⤢</small></figcaption>
  </figure>`).join("");

/* ---------- Component: testimonial ---------- */
const reviewGrid = document.getElementById("reviewGrid");
reviewGrid.innerHTML = SITE_CONFIG.reviews.map((r) => `
  <article class="review reveal in">
    <span class="stars">★★★★★</span>
    <blockquote>“${r.quote}”</blockquote>
    <footer>
      <span class="avatar">${r.initials}</span>
      <div><strong>${r.name}</strong><small>${r.meta}</small></div>
    </footer>
  </article>`).join("");

/* ---------- Overlay system: open / close actions ---------- */
const overlays = document.querySelectorAll(".overlay");
function openOverlay(id) {
  const ov = document.getElementById(id);
  if (!ov) return;
  ov.classList.add("open");
  ov.setAttribute("aria-hidden", "false");
  document.body.classList.add("lock");
  ov.querySelector(".modal-close")?.focus({ preventScroll: true });
}
function closeOverlay(ov) {
  ov.classList.remove("open");
  ov.setAttribute("aria-hidden", "true");
  if (!document.querySelector(".overlay.open")) document.body.classList.remove("lock");
}
// Every [data-open] button performs its own action (opens its popup)
document.querySelectorAll('[data-open]').forEach((el) => {
  el.addEventListener("click", (e) => { e.preventDefault(); openOverlay(el.dataset.open); });
});
// Every [data-close] closes its own popup
overlays.forEach((ov) => {
  ov.addEventListener("click", (e) => {
    if (e.target === ov || e.target.closest("[data-close]")) closeOverlay(ov);
  });
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") overlays.forEach((ov) => ov.classList.contains("open") && closeOverlay(ov));
});
// Popup CTAs that DO mean reservation: close popup first, then scroll to form
document.querySelectorAll("[data-goto-reserve]").forEach((btn) => {
  btn.addEventListener("click", () => {
    overlays.forEach((ov) => ov.classList.contains("open") && closeOverlay(ov));
    document.getElementById("reserve")?.scrollIntoView({ behavior: "smooth" });
  });
});

/* ---------- Gallery lightbox action ---------- */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCap = document.getElementById("lightboxCap");
function openLightbox(src, label) {
  lightboxImg.src = src;
  lightboxImg.alt = label;
  lightboxCap.textContent = label;
  openOverlay("lightbox");
}
galleryGrid.addEventListener("click", (e) => {
  const fig = e.target.closest("figure[data-full]");
  if (fig) openLightbox(fig.dataset.full, fig.dataset.label);
});
galleryGrid.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    const fig = e.target.closest("figure[data-full]");
    if (fig) { e.preventDefault(); openLightbox(fig.dataset.full, fig.dataset.label); }
  }
});

/* ---------- Contact actions: call / whatsapp / directions / maps ---------- */
document.querySelectorAll('a[href^="tel:"], a[href^="mailto:"]').forEach((a) => {
  if (a.dataset.site === "phone") a.href = SITE_CONFIG.phoneHref;
});
document.querySelectorAll('.r-contact, .visit-ctas .btn').forEach(() => {});
const waLinks = document.querySelectorAll('a[href*="wa.me"]');
waLinks.forEach((a) => { a.href = SITE_CONFIG.whatsapp; });
document.querySelectorAll('a[href*="google.com/maps"]').forEach((a) => {
  if (!a.classList.contains("visit-map")) a.href = SITE_CONFIG.mapsUrl;
});
const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
emailLinks.forEach((a) => { a.href = `mailto:${SITE_CONFIG.email}`; });
document.querySelectorAll('.footer-col .muted').forEach((el) => {
  if (el.textContent.includes("@")) el.textContent = SITE_CONFIG.email;
});

/* ---------- Nav shrink on scroll ---------- */
const nav = document.getElementById("nav");
addEventListener("scroll", () => nav.classList.toggle("shrink", scrollY > 40), { passive: true });

/* ---------- Mobile menu ---------- */
const toggle = document.getElementById("navToggle");
const mMenu = document.getElementById("mobileMenu");
toggle.addEventListener("click", () => {
  const open = mMenu.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
  mMenu.setAttribute("aria-hidden", !open);
});
mMenu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => mMenu.classList.remove("open")));

/* ---------- Fade-up reveals (subtle, once) ---------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
}, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
document.querySelectorAll(".reveal,.reveal-img").forEach((el) => io.observe(el));

/* ---------- Reservation form: validates, then confirms inline ---------- */
const form = document.getElementById("reserveForm");
const note = document.getElementById("formNote");
const dateInput = document.getElementById("fDate");
dateInput.min = new Date().toISOString().split("T")[0];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!form.checkValidity()) { form.reportValidity(); return; }
  const d = dateInput.value, t = document.getElementById("fTime").value,
        g = document.getElementById("fGuests").value, n = document.getElementById("fName").value.trim();
  note.textContent = `Thank you, ${n} — table for ${g} on ${d} at ${t} requested. We'll confirm on WhatsApp shortly.`;
  note.classList.add("ok");
  form.querySelector('button[type="submit"]').textContent = "Request Received ✓";
});
