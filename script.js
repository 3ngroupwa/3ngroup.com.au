/* ============================================
   3N GROUP - JavaScript Functionality
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {

  // ---- Auto-update copyright year ----
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ---- Header scroll effect ----
  const header = document.getElementById('header');
  let lastScrollY = 0;

  function handleScroll() {
    const scrollY = window.scrollY;
    
    if (scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    lastScrollY = scrollY;
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ---- Mobile menu toggle ----
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      navLinks.classList.toggle('active');
      document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('.nav-link').forEach(function(link) {
      link.addEventListener('click', function() {
        mobileMenuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // ---- Scroll reveal animations ----
  const revealElements = document.querySelectorAll('.reveal');

  if (revealElements.length > 0 && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(function(el) {
      revealObserver.observe(el);
    });
  } else {
    // Fallback: show all elements immediately
    revealElements.forEach(function(el) {
      el.classList.add('active');
    });
  }

  // ---- Smooth scroll for anchor links ----
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ---- Gallery filter ----
  const galleryFilterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  if (galleryFilterBtns.length > 0) {
    galleryFilterBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        const filter = this.dataset.filter;

        // Update active button
        galleryFilterBtns.forEach(function(b) {
          b.classList.remove('active');
        });
        this.classList.add('active');

        // Filter items
        galleryItems.forEach(function(item) {
          const category = item.dataset.category;
          if (filter === 'all' || category === filter) {
            item.style.display = '';
            setTimeout(function() {
              item.style.opacity = '1';
              item.style.transform = 'scale(1)';
            }, 10);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.9)';
            setTimeout(function() {
              item.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }

  // ---- Lightbox ----
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');

  if (lightbox && lightboxImg) {
    galleryItems.forEach(function(item) {
      item.addEventListener('click', function() {
        const img = this.querySelector('img');
        const title = this.querySelector('h4');
        const subtitle = this.querySelector('p');

        if (img) {
          lightboxImg.src = img.src;
          lightboxImg.alt = img.alt || '';
          
          let caption = '';
          if (title) caption += title.textContent;
          if (subtitle) caption += ' - ' + subtitle.textContent;
          lightboxCaption.textContent = caption;

          lightbox.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    function closeLightbox() {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
      setTimeout(function() {
        lightboxImg.src = '';
      }, 300);
    }

    if (lightboxClose) {
      lightboxClose.addEventListener('click', closeLightbox);
    }

    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    });
  }

  // ---- Contact form handling ----
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      submitBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg> Sending...';
      submitBtn.disabled = true;

      // Check if Formspree is configured
      const action = this.getAttribute('action');
      if (action.includes('YOUR_FORM_ID')) {
        e.preventDefault();
        alert('Thank you for your message!\n\nNote: Please configure your Formspree form ID in the contact.html file to receive submissions via email.\n\nIn the meantime, please call us on 0405 678 019 or email info@3ngroup.com.au');
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }
      // Otherwise let Formspree handle it normally
    });
  }

  // ---- Active nav link based on current page ----
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-link').forEach(function(link) {
    const href = link.getAttribute('href');
    if (href && currentPath.includes(href) && href !== 'index.html') {
      document.querySelectorAll('.nav-link').forEach(function(l) {
        l.classList.remove('active');
      });
      link.classList.add('active');
    } else if (currentPath.endsWith('/') || currentPath.endsWith('index.html')) {
      document.querySelectorAll('.nav-link').forEach(function(l) {
        l.classList.remove('active');
      });
      const homeLink = document.querySelector('a[href="index.html"]');
      if (homeLink) homeLink.classList.add('active');
    }
  });

  // ---- Lazy loading for images (fallback) ----
  if ('loading' in HTMLImageElement.prototype) {
    // Browser supports native lazy loading
  } else {
    // Simple fallback: load all images immediately
    document.querySelectorAll('img[loading="lazy"]').forEach(function(img) {
      img.loading = 'eager';
    });
  }

});
