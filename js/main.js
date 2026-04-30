/* ====================================================
   LIFE IN BYTES – Main JavaScript
   ==================================================== */

// ===== NAVBAR =====
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// Scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Hamburger toggle
if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
}

// Close menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger && hamburger.classList.remove('open');
    navLinks && navLinks.classList.remove('open');
  });
});

// Active nav link
(function setActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
})();


// ===== SCROLL REVEAL =====
const fadeElements = document.querySelectorAll('.fade-in');
const observerOptions = {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
};

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 80);
      fadeObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

fadeElements.forEach(el => fadeObserver.observe(el));

// ===== AUTO ADD FADE-IN to sections =====
document.querySelectorAll('.post-card, .category-card, .featured-card, .contact-detail, .sidebar-widget').forEach((el, i) => {
  el.classList.add('fade-in');
  el.style.transitionDelay = `${i * 0.06}s`;
});

// Trigger observer for dynamically added
setTimeout(() => {
  document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));
}, 100);


// ===== NEWSLETTER FORM =====
function handleNewsletterSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('nlName');
  const email = document.getElementById('nlEmail');
  const form = document.getElementById('newsletterForm');
  const success = document.getElementById('nlSuccess');

  if (!name || !email) return;

  // Simulate async submission
  const btn = form.querySelector('button[type="submit"]');
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Subscribing...';
  btn.disabled = true;

  setTimeout(() => {
    form.style.display = 'none';
    success.style.display = 'flex';
    // Store in localStorage for fun
    const subscribers = JSON.parse(localStorage.getItem('lib_subscribers') || '[]');
    subscribers.push({ name: name.value, email: email.value, date: new Date().toISOString() });
    localStorage.setItem('lib_subscribers', JSON.stringify(subscribers));
  }, 1200);
}

// ===== BLOG FILTER =====
function initBlogFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const posts = document.querySelectorAll('.blog-post-item');

  if (!filterBtns.length) return;

  // Check URL for category param
  const params = new URLSearchParams(window.location.search);
  const catParam = params.get('cat');
  if (catParam) {
    filterBtns.forEach(btn => {
      if (btn.dataset.cat === catParam) {
        btn.click();
      }
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const cat = btn.dataset.cat;

      posts.forEach((post, i) => {
        const postCat = post.dataset.category;
        const matches = cat === 'all' || postCat === cat;

        if (matches) {
          post.style.display = 'flex';
          post.style.animation = `fadeUp 0.4s ease ${i * 0.05}s both`;
        } else {
          post.style.display = 'none';
        }
      });

      // Update count
      const visibleCount = document.querySelectorAll('.blog-post-item:not([style*="display: none"])').length;
      const countEl = document.getElementById('resultsCount');
      if (countEl) countEl.textContent = visibleCount;
    });
  });
}

// ===== SEARCH =====
function initSearch() {
  const searchInput = document.getElementById('blogSearch');
  if (!searchInput) return;

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();
    const posts = document.querySelectorAll('.blog-post-item');
    let count = 0;

    posts.forEach(post => {
      const title = post.querySelector('.post-title')?.textContent.toLowerCase() || '';
      const excerpt = post.querySelector('.post-excerpt')?.textContent.toLowerCase() || '';
      const visible = title.includes(query) || excerpt.includes(query);

      // Only show if passes active filter
      const activeFilter = document.querySelector('.filter-btn.active')?.dataset.cat || 'all';
      const cat = post.dataset.category;
      const catMatch = activeFilter === 'all' || cat === activeFilter;

      if (visible && catMatch) {
        post.style.display = 'flex';
        count++;
      } else {
        post.style.display = 'none';
      }
    });

    const countEl = document.getElementById('resultsCount');
    if (countEl) countEl.textContent = count;
  });
}

// ===== CONTACT FORM =====
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    btn.disabled = true;

    setTimeout(() => {
      form.innerHTML = `
        <div class="form-success">
          <i class="fas fa-check-circle"></i>
          <h3>Message Sent!</h3>
          <p>Thanks for reaching out. Benjamin will get back to you within 48 hours.</p>
        </div>
      `;
    }, 1400);
  });
}

// ===== SMOOTH SCROLL for anchor links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  });
});

// ===== PROGRESS BAR ANIMATION (About Page) =====
function animateProgressBars() {
  const bars = document.querySelectorAll('.progress-bar[data-width]');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        bar.style.width = bar.dataset.width;
        obs.unobserve(bar);
      }
    });
  }, { threshold: 0.5 });
  bars.forEach(bar => {
    bar.style.width = '0%';
    obs.observe(bar);
  });
}

// ===== READING PROGRESS BAR (Blog Post Page) =====
function initReadingProgress() {
  const progressBar = document.getElementById('readingProgress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / docHeight) * 100;
    progressBar.style.width = progress + '%';
  });
}

// ===== BACK TO TOP =====
const backToTop = document.getElementById('backToTop');
if (backToTop) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTop.style.opacity = '1';
      backToTop.style.pointerEvents = 'auto';
    } else {
      backToTop.style.opacity = '0';
      backToTop.style.pointerEvents = 'none';
    }
  });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ===== COPY LINK SHARE =====
function copyLink() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    const btn = document.getElementById('copyBtn');
    if (btn) {
      btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
      setTimeout(() => { btn.innerHTML = '<i class="fas fa-link"></i> Copy Link'; }, 2000);
    }
  });
}

// ===== INIT ALL =====
document.addEventListener('DOMContentLoaded', () => {
  initBlogFilter();
  initSearch();
  initContactForm();
  animateProgressBars();
  initReadingProgress();
});

// Add CSS animation keyframes via JS (for filter animations)
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to { opacity: 1; transform: translateY(0); }
  }
  #readingProgress {
    position: fixed;
    top: 70px;
    left: 0;
    height: 3px;
    background: linear-gradient(90deg, #F59E0B, #D97706);
    z-index: 9999;
    width: 0%;
    transition: width 0.1s linear;
  }
  #backToTop {
    position: fixed;
    bottom: 28px;
    right: 28px;
    width: 46px;
    height: 46px;
    background: #0A2540;
    color: #F59E0B;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 500;
    box-shadow: 0 4px 16px rgba(10,37,64,0.3);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease;
    border: none;
  }
  #backToTop:hover { background: #F59E0B; color: #0A2540; transform: translateY(-3px); }
`;
document.head.appendChild(style);

// Inject back-to-top button
const bttBtn = document.createElement('button');
bttBtn.id = 'backToTop';
bttBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
bttBtn.setAttribute('aria-label', 'Back to top');
document.body.appendChild(bttBtn);

bttBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    bttBtn.style.opacity = '1';
    bttBtn.style.pointerEvents = 'auto';
  } else {
    bttBtn.style.opacity = '0';
    bttBtn.style.pointerEvents = 'none';
  }
});
