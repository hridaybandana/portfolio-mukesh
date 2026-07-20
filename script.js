// ==================== LOADER ====================

// ==================== LOADER ====================
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
  }, 400);
});

// ==================== ROUTING ====================
function navigateTo(page) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(p => p.classList.remove('active'));
  
  const target = document.getElementById('page-' + page);
  if (target) {
    target.classList.add('active');
    window.location.hash = page;
  } else {
    // Show 404
    document.getElementById('page-404').classList.add('active');
    window.location.hash = '404';
  }
  
  // Update nav active state
  document.querySelectorAll('.nav-link-custom').forEach(link => {
    link.classList.remove('active');
    if (link.dataset.page === page) link.classList.add('active');
  });
  
  // Close mobile menu
  const navCollapse = document.getElementById('navMenu');
  if (navCollapse.classList.contains('show')) {
    bootstrap.Collapse.getInstance(navCollapse)?.hide();
  }
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  // Trigger animations
  setTimeout(animateOnScroll, 100);
}

// Handle nav clicks
document.querySelectorAll('[data-page]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo(link.dataset.page);
  });
});

// Handle hash on load
window.addEventListener('load', () => {
  const hash = window.location.hash.replace('#', '') || 'home';
  navigateTo(hash);
});

// Handle hash change
window.addEventListener('hashchange', () => {
  const hash = window.location.hash.replace('#', '') || 'home';
  const currentPage = document.querySelector('.page.active')?.id.replace('page-', '');
  if (currentPage !== hash) navigateTo(hash);
});

// ==================== THEME TOGGLE ====================
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  themeIcon.className = theme === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-fill';
  localStorage.setItem('theme', theme);
}

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  setTheme(current === 'dark' ? 'light' : 'dark');
});

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

// ==================== NAVBAR SCROLL ====================
const navbar = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
  // Back to top button
  const backToTop = document.getElementById('backToTop');
  if (window.scrollY > 400) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

// ==================== BACK TO TOP ====================
document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ==================== SEARCH ====================
const searchModal = document.getElementById('searchModal');
const searchInput = document.getElementById('searchInput');

document.getElementById('searchToggle').addEventListener('click', () => {
  searchModal.classList.add('active');
  setTimeout(() => searchInput.focus(), 100);
});

searchModal.addEventListener('click', (e) => {
  if (e.target === searchModal) {
    searchModal.classList.remove('active');
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') searchModal.classList.remove('active');
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    searchModal.classList.add('active');
    setTimeout(() => searchInput.focus(), 100);
  }
});

// Search items click
document.querySelectorAll('.search-item').forEach(item => {
  item.addEventListener('click', () => {
    searchModal.classList.remove('active');
    searchInput.value = '';
  });
});

// ==================== EXPAND CARDS ====================
function toggleExpand(header) {
  const card = header.closest('.expand-card');
  card.classList.toggle('active');
}

// ==================== CASE STUDY DETAIL ====================
function showCaseStudy(id) {
  navigateTo('case-study-detail');
}

// ==================== COUNTER ANIMATION ====================
function animateCounters() {
  document.querySelectorAll('.stat-number').forEach(el => {
    const target = parseInt(el.dataset.count);
    if (!target) return;
    let current = 0;
    const increment = target / 40;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = Math.floor(current) + '+';
    }, 30);
  });
}

// ==================== SCROLL ANIMATIONS ====================
function animateOnScroll() {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add('visible');
    }
  });
}

// Add fade-in class to cards
document.querySelectorAll('.card-custom, .project-card, .skill-card, .doc-card, .demo-card, .blog-card, .testimonial-card, .timeline-item').forEach(el => {
  el.classList.add('fade-in');
});

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', () => {
  setTimeout(() => {
    animateOnScroll();
    animateCounters();
  }, 500);
});

// ==================== FILTER BUTTONS ====================
document.querySelectorAll('.d-flex.flex-wrap.gap-2.mb-4 .hero-tag').forEach(btn => {
  btn.addEventListener('click', function() {
    this.parentElement.querySelectorAll('.hero-tag').forEach(b => {
      b.style.background = '';
      b.style.color = '';
      b.style.borderColor = '';
    });
    this.style.background = 'var(--accent-secondary)';
    this.style.color = '#fff';
    this.style.borderColor = 'var(--accent-secondary)';
  });
});

// ==================== KEYBOARD SHORTCUTS ====================
document.addEventListener('keydown', (e) => {
  // Number keys for quick navigation
  if (e.altKey) {
    const pages = ['home', 'about', 'experience', 'projects', 'case-studies', 'documents', 'demos', 'skills', 'blogs', 'contact'];
    const num = parseInt(e.key);
    if (num >= 1 && num <= 9) {
      e.preventDefault();
      navigateTo(pages[num - 1]);
    }
    if (e.key === '0') {
      e.preventDefault();
      navigateTo('contact');
    }
  }
});

console.log('%c🚀 Mukesh Rathore - Technical Project Manager Portfolio', 'color: #0066ff; font-size: 16px; font-weight: bold;');
console.log('%cBuilt with precision. Designed for impact.', 'color: #635bff; font-size: 12px;');
