// Project Data with detailed information
const projectData = {
  1: {
    title: "Healthcare Fraud Detection",
    period: "August 2023 - December 2023",
    description: "An advanced machine learning system designed to analyze healthcare claims data and identify potentially fraudulent patterns, helping insurance providers reduce losses and improve operational efficiency.",
    challenge: "The primary challenges included working with highly imbalanced datasets where fraudulent claims were rare, developing interpretable models for regulatory compliance, and creating a system that could adapt to evolving fraud techniques.",
    approach: "I implemented a multi-layered approach combining supervised learning with anomaly detection techniques. After extensive feature engineering from diverse data sources, I trained multiple models including logistic regression, decision trees, and random forests to capture different fraud patterns. The final solution used an ensemble approach to maximize detection accuracy while minimizing false positives.",
    keyFeatures: [
      "Intelligent feature engineering pipeline extracting over 200 relevant features from claims data",
      "Ensemble of ML models with automated hyperparameter tuning for optimal performance",
      "Anomaly detection system identifying unusual claim patterns outside standard fraud categories",
      "Explainable AI components to justify fraud flags for compliance and review processes",
      "Real-time scoring pipeline for immediate claim evaluation"
    ],
    impact: [
      "Reduced manual review time by approximately 60%",
      "Increased fraud detection rate by 37% compared to previous rule-based systems",
      "Achieved 92% precision and 85% recall on test datasets",
      "Estimated annual savings of $1.2M based on pilot implementation"
    ],
    technologies: ["Python", "Scikit-learn", "Pandas", "XGBoost", "TensorFlow", "SQL", "Azure ML", "Tableau"],
    icon: `<svg viewBox="0 0 24 24" width="80" height="80" stroke="currentColor" stroke-width="1.5" fill="none">
      <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
      <line x1="16" y1="8" x2="2" y2="22"></line>
      <line x1="17.5" y1="15" x2="9" y2="15"></line>
    </svg>`
  },
  
  2: {
    title: "Human Activity Recognition",
    period: "October 2022 - January 2023",
    description: "A sophisticated machine learning system that processes raw sensor data from wearable devices to accurately classify human activities in real-time, with applications in health monitoring, fitness tracking, and elderly care.",
    challenge: "Working with noisy sensor data presented significant challenges, including filtering out irrelevant movements, handling different device orientations, and capturing the distinctive patterns that characterize various physical activities. Additionally, ensuring real-time classification performance on resource-constrained devices was critical.",
    approach: "I developed a comprehensive signal processing pipeline that extracted both time-domain features (statistical measures, peak detection) and frequency-domain features (spectral analysis, Fast Fourier Transform components). After thorough evaluation, I implemented an ensemble classification approach combining the strengths of decision trees, random forests, and support vector machines to achieve robust activity recognition.",
    keyFeatures: [
      "Advanced feature extraction from accelerometer data using both time and frequency domain analysis",
      "Activity transition detection for continuous monitoring scenarios",
      "Optimized model with cross-validation and feature selection for improved accuracy",
      "Adaptation capabilities to handle different user physical characteristics",
      "Lightweight implementation suitable for edge computing devices"
    ],
    impact: [
      "Achieved 94.3% classification accuracy across six distinct activity categories",
      "Successfully implemented across different device form factors with consistent performance",
      "Reduced computational requirements by 30% through efficient feature selection",
      "Used as foundation for health monitoring application in senior care facility"
    ],
    technologies: ["Python", "NumPy", "Scikit-learn", "TensorFlow", "Signal Processing", "Time Series Analysis", "Matplotlib", "Pandas"],
    icon: `<svg viewBox="0 0 24 24" width="80" height="80" stroke="currentColor" stroke-width="1.5" fill="none">
      <path d="M16 18l2-2-4-4-4 4 2 2"></path>
      <path d="M18 16l2-2-4-4-4 4 2 2"></path>
      <path d="M20 14l2-2-4-4-4 4 2 2"></path>
      <path d="M14 20l2-2-4-4-4 4 2 2"></path>
      <path d="M16 16v-5a3 3 0 0 0-6 0v5"></path>
      <path d="M5 8h2"></path>
      <path d="M5 12h3"></path>
      <path d="M5 16h2"></path>
    </svg>`
  },
  
  3: {
    title: "Sign Language to Speech Translation",
    period: "March 2022 - May 2022",
    description: "An assistive technology solution that bridges communication gaps by translating American Sign Language (ASL) gestures into spoken language in real-time, making communication more accessible for hearing-impaired individuals.",
    challenge: "Creating a reliable sign language recognition system required addressing several technical challenges, including processing video input in varying lighting conditions, accommodating different signing styles, and developing a model that could operate efficiently in real-time with minimal latency.",
    approach: "I built a convolutional neural network with TensorFlow/Keras to recognize hand gestures and facial expressions critical for ASL interpretation. After training on a diverse dataset, I integrated the model with OpenCV for real-time video processing. The recognized gestures were mapped to text and then converted to speech using a text-to-speech synthesis API, creating a complete end-to-end translation pipeline.",
    keyFeatures: [
      "Real-time hand gesture and position detection via webcam",
      "Recognition of 50+ common ASL signs with high accuracy",
      "Natural-sounding speech synthesis with appropriate pacing and intonation",
      "User-friendly interface accessible to non-technical users",
      "Adaptation capabilities to improve accuracy through continued use"
    ],
    impact: [
      "Demonstrated 91% accuracy in recognizing common ASL phrases",
      "Maintained performance at 24 frames per second on standard hardware",
      "Positive user feedback from hearing-impaired community members during testing",
      "Project presented at university technology showcase and awarded innovation prize"
    ],
    technologies: ["TensorFlow", "Keras", "OpenCV", "Python", "Google Text-to-Speech API", "CNN", "Computer Vision", "Image Processing"],
    icon: `<svg viewBox="0 0 24 24" width="80" height="80" stroke="currentColor" stroke-width="1.5" fill="none">
      <path d="M12 18h.01"></path>
      <path d="M7 8h.01"></path>
      <path d="M3 8h.01"></path>
      <path d="M17 8h.01"></path>
      <path d="M21 8h.01"></path>
      <path d="M19 4h.01"></path>
      <path d="M5 4h.01"></path>
      <path d="M9 4h.01"></path>
      <path d="M15 4h.01"></path>
      <path d="M12 8V4"></path>
      <path d="M12 12v-4"></path>
      <path d="M6 12v4a6 6 0 0 0 12 0v-4"></path>
    </svg>`
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // Initialize GSAP and its plugins
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  
  // Preloader animation with sequential reveal
  window.addEventListener('load', () => {
    // Hide preloader with animation
    gsap.to('#preloader', {
      opacity: 0,
      duration: 0.8,
      ease: 'power2.inOut',
      onComplete: () => {
        document.getElementById('preloader').style.display = 'none';
        
        // Animate hero elements with staggered entrance
        animateHeroSequence();
      }
    });
  });
  
  // Hero sequence animation
  function animateHeroSequence() {
    const heroTimeline = gsap.timeline();
    
    heroTimeline
      .fromTo('.hero-text h2', 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      )
      .fromTo('.hero-text p', 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 
        '-=0.6'
      )
      .fromTo('.hero-buttons .btn', 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.2 }, 
        '-=0.4'
      )
      .fromTo('.hero-image', 
        { opacity: 0, y: 30, scale: 0.9 }, 
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'back.out(1.7)' }, 
        '-=1'
      );
  }
  
  // 3D Tilt effect for cards
  const cards = document.querySelectorAll('.card-3d');
  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      // Only apply effect on larger screens
      if (window.innerWidth > 768) {
        // Get position of mouse relative to card
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element
        const y = e.clientY - rect.top; // y position within the element
        
        // Calculate rotation based on mouse position
        // Further from center = more rotation
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;
        
        // Apply rotation transformation
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        
        // Add subtle shadow shift
        const shadowX = (x - centerX) / 20;
        const shadowY = (y - centerY) / 20;
        card.style.boxShadow = `${shadowX}px ${shadowY}px 30px rgba(0,0,0,0.15)`;
        
        // Add shine effect based on mouse position
        const shine = card.querySelector('.card-shine') || createShineElement(card);
        const shineSize = Math.max(rect.width, rect.height) * 2;
        
        const posX = ((x / rect.width) * 100);
        const posY = ((y / rect.height) * 100);
        
        shine.style.backgroundImage = `radial-gradient(circle at ${posX}% ${posY}%, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 50%)`;
      }
    });
    
    // Reset on mouse leave
    card.addEventListener('mouseleave', e => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
      card.style.boxShadow = '';
      
      const shine = card.querySelector('.card-shine');
      if (shine) {
        shine.style.backgroundImage = 'none';
      }
    });
  });
  
  function createShineElement(card) {
    const shine = document.createElement('div');
    shine.classList.add('card-shine');
    shine.style.position = 'absolute';
    shine.style.top = '0';
    shine.style.left = '0';
    shine.style.width = '100%';
    shine.style.height = '100%';
    shine.style.borderRadius = 'inherit';
    shine.style.pointerEvents = 'none';
    shine.style.zIndex = '3';
    card.appendChild(shine);
    return shine;
  }
  
  // Smooth scrolling with GSAP and dynamic highlighting
  const navLinks = document.querySelectorAll('nav a, .hero-buttons a, .footer-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      
      const targetId = link.getAttribute('href');
      if (targetId.startsWith('#')) {
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          // Update active navigation link
          navLinks.forEach(navLink => navLink.classList.remove('active'));
          link.classList.add('active');
          
          // Scroll with animation
          gsap.to(window, {
            duration: 1.2,
            scrollTo: {
              y: targetElement,
              offsetY: 80,
              autoKill: false
            },
            ease: 'power4.inOut'
          });
        }
      }
    });
  });
  
  // Highlight current section in navigation
  const observerOptions = {
    rootMargin: '-80px 0px -80% 0px',
    threshold: 0
  };
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        const currentLink = document.querySelector(`nav a[href="#${id}"]`);
        
        navLinks.forEach(link => link.classList.remove('active'));
        if (currentLink) {
          currentLink.classList.add('active');
        }
      }
    });
  }, observerOptions);
  
  // Observe all sections for scrolling
  document.querySelectorAll('section[id]').forEach(section => {
    observer.observe(section);
  });
  
  // Enhanced scroll animations with ScrollTrigger
  const fadeUpElements = document.querySelectorAll('.reveal');
  fadeUpElements.forEach(element => {
    gsap.fromTo(element,
      { y: 60, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          end: 'top 65%',
          toggleActions: 'play none none reverse',
          scrub: 0.5
        }
      }
    );
  });
  
  // Staggered animations for project cards
  const projectCards = document.querySelectorAll('.project-card');
  gsap.fromTo(projectCards,
    { y: 100, opacity: 0 },
    { 
      y: 0, 
      opacity: 1, 
      duration: 1,
      stagger: 0.2,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: '.project-grid',
        start: 'top 85%',
      }
    }
  );
  
  // Floating animation for selected elements
  document.querySelectorAll('.project-icon').forEach((element, index) => {
    element.classList.add(index % 2 === 0 ? 'float-animation' : 'float-animation-delayed');
  });
  
  // Parallax scroll effect for hero section
  if (document.querySelector('.hero')) {
    gsap.to('.hero-text', {
      y: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });
    
    gsap.to('.hero-image', {
      y: -30,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });
  }
  
  // Animate skill bars when they come into view
  const skillBars = document.querySelectorAll('.skill-fill');
  skillBars.forEach(bar => {
    const percentage = bar.getAttribute('data-percentage');
    
    gsap.fromTo(bar,
      { width: 0 },
      {
        width: percentage + '%',
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: bar,
          start: 'top 90%',
        }
      }
    );
  });
  
  // Animate timeline items
  const timelineItems = document.querySelectorAll('.timeline-item');
  gsap.fromTo(timelineItems,
    { x: -50, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: 'back.out(1.2)',
      scrollTrigger: {
        trigger: '.timeline',
        start: 'top 80%',
      }
    }
  );
  
  // Add gradient text effect to main headings
  document.querySelectorAll('h2').forEach(heading => {
    heading.classList.add('gradient-text');
  });
  
  // Advanced scroll-driven animations
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    // Subtle scaling effect on scroll
    gsap.fromTo(section, 
      { scale: 0.95 },
      { 
        scale: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'center center',
          scrub: true
        }
      }
    );
  });
  
  // Custom cursor effect
  const cursor = document.querySelector('.custom-cursor');
  const cursorDot = document.createElement('div');
  cursorDot.classList.add('cursor-dot');
  document.body.appendChild(cursorDot);
  
  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;
  let dotX = 0;
  let dotY = 0;
  
  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Check if cursor is over interactive elements
    const target = e.target;
    const interactiveElements = ['A', 'BUTTON', 'INPUT', 'TEXTAREA'];
    const isInteractive = interactiveElements.includes(target.tagName) || 
                         target.closest('.project-card') || 
                         target.closest('.skill-item') ||
                         target.closest('.timeline-item');
    
    if (isInteractive) {
      cursor.classList.add('hover');
      cursorDot.classList.add('hover');
    } else {
      cursor.classList.remove('hover');
      cursorDot.classList.remove('hover');
    }
  });
  
  // Animate cursor with smoothing
  function animateCursor() {
    const easing = 0.2;
    
    cursorX += (mouseX - cursorX) * easing;
    cursorY += (mouseY - cursorY) * easing;
    
    const dotEasing = 0.5;
    dotX += (mouseX - dotX) * dotEasing;
    dotY += (mouseY - dotY) * dotEasing;
    
    cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
    cursorDot.style.transform = `translate(${dotX}px, ${dotY}px)`;
    
    requestAnimationFrame(animateCursor);
  }
  
  animateCursor();
  
  // Hide cursor when it leaves the window
  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
    cursorDot.style.opacity = '0';
  });
  
  document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
    cursorDot.style.opacity = '1';
  });
  
  // Back to top button with smooth animation
  const backToTop = document.getElementById('back-to-top');
  
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
      gsap.to(backToTop, {
        opacity: 1,
        duration: 0.3,
        display: 'block'
      });
    } else {
      gsap.to(backToTop, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          backToTop.style.display = 'none';
        }
      });
    }
  });
  
  backToTop.addEventListener('click', e => {
    e.preventDefault();
    
    gsap.to(window, {
      duration: 1.5,
      scrollTo: 0,
      ease: 'power4.inOut'
    });
  });
  
  // Typing effect for hero subtitle using SplitText or Typed.js
  if (typeof SplitText !== 'undefined') {
    const heroSubtitle = document.querySelector('.hero-text p');
    if (heroSubtitle) {
      const splitText = new SplitText(heroSubtitle, { type: "chars, words" });
      
      gsap.from(splitText.chars, {
        opacity: 0,
        y: 10,
        stagger: 0.02,
        duration: 0.5,
        ease: "power2.out",
        delay: 1
      });
    }
  } else if (typeof Typed !== 'undefined') {
    // Fallback to Typed.js if SplitText is not available
    const heroSubtitle = document.querySelector('.hero-text p');
    if (heroSubtitle) {
      const originalText = heroSubtitle.textContent;
      heroSubtitle.textContent = '';
      
      new Typed(heroSubtitle, {
        strings: [originalText],
        typeSpeed: 30,
        startDelay: 1000,
        showCursor: true,
        cursorChar: '|'
      });
    }
  }
  
  // Dark/Light mode toggle with animation
  const modeToggle = document.getElementById('mode-toggle');
  if (modeToggle) {
    modeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      
      // Animate the transition
      gsap.fromTo('body', 
        { opacity: 0.8 }, 
        { opacity: 1, duration: 0.5, ease: 'power2.out' }
      );
      
      // Save preference
      const isDarkMode = document.body.classList.contains('dark-mode');
      localStorage.setItem('darkMode', isDarkMode);
    });
    
    // Check for saved user preference or system preference
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true' || (savedMode === null && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.body.classList.add('dark-mode');
    }
  }
  
  // Initialize particles if available
  if (window.particlesJS) {
    particlesJS('particles-js', {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#6366f1" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#6366f1",
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: true, mode: "push" },
          resize: true
        },
        modes: {
          grab: { distance: 140, line_linked: { opacity: 1 } },
          push: { particles_nb: 4 }
        }
      },
      retina_detect: true
    });
  }
  
  // Add gradient border to select elements
  document.querySelectorAll('.skill-item, .endorsement-card').forEach(element => {
    element.classList.add('gradient-border');
  });
  
// Enhanced form submission with FormSubmit
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    
    // Validate form fields
    const formFields = contactForm.querySelectorAll('input:not([type="hidden"]), textarea');
    let isValid = true;
    
    formFields.forEach(field => {
      if (!field.value.trim()) {
        isValid = false;
        // Shake animation for empty fields
        gsap.to(field, {
          x: [-10, 10, -10, 10, 0],
          duration: 0.5,
          ease: 'power3.out'
        });
      }
    });
    
    if (!isValid) return;
    
    // Change button appearance
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    submitButton.innerHTML = '<span>Sending...</span>';
    submitButton.disabled = true;
    
    // Visual feedback (disable fields while sending)
    formFields.forEach(field => {
      field.disabled = true;
      gsap.to(field, { opacity: 0.7, duration: 0.3 });
    });
    
    // Create a hidden iframe to handle the form submission
    const iframe = document.createElement('iframe');
    iframe.name = 'hidden-form-iframe';
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    
    // Configure the form for iframe submission
    contactForm.target = 'hidden-form-iframe';
    contactForm.action = 'https://formsubmit.co/mounikacheeramail@gmail.com'; // REPLACE WITH YOUR EMAIL
    contactForm.method = 'POST';
    
    // Handle success after a short delay (FormSubmit submission)
    setTimeout(() => {
      // Success animation
      gsap.to(contactForm, {
        height: contactForm.offsetHeight,
        opacity: 0,
        y: -20,
        duration: 0.5,
        onComplete: () => {
          // Create success message
          const successMessage = document.createElement('div');
          successMessage.classList.add('form-success');
          successMessage.innerHTML = '<span>Thank you!</span> Your message has been sent successfully. I\'ll get back to you soon.';
          
          // Insert after form
          contactForm.parentNode.insertBefore(successMessage, contactForm.nextSibling);
          
          // Animate success message
          gsap.fromTo(successMessage, 
            { opacity: 0, y: -20 }, 
            { opacity: 1, y: 0, duration: 0.5 }
          );
          
          // Hide form
          contactForm.style.display = 'none';
          
          // Remove iframe
          setTimeout(() => {
            iframe.remove();
          }, 1000);
        }
      });
    }, 1500); // Wait for form submission to complete
    
    // Submit the form to the iframe
    contactForm.submit();
  });
}
  // Modal for Project Details
  const modal = document.getElementById('project-modal');
  const modalBody = document.querySelector('.modal-body');
  const closeModal = document.querySelector('.close-modal');
  const projectBtns = document.querySelectorAll('.project-info .btn');
  
  // Create modal content with project data
  projectBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-project');
      const project = projectData[projectId];
      
      if (project) {
        // Build out detailed modal content
        modalBody.innerHTML = `
          <div class="modal-project">
            <div class="modal-header">
              <div class="modal-icon">
                ${project.icon}
              </div>
              <div class="modal-title">
                <h3>${project.title}</h3>
                <span class="modal-period">${project.period}</span>
              </div>
            </div>
            
            <div class="modal-content-grid">
              <div class="modal-section">
                <h4>Overview</h4>
                <p>${project.description}</p>
              </div>
              
              <div class="modal-section">
                <h4>Challenge</h4>
                <p>${project.challenge}</p>
              </div>
              
              <div class="modal-section">
                <h4>Approach</h4>
                <p>${project.approach}</p>
              </div>
              
              <div class="modal-section">
                <h4>Key Features</h4>
                <ul class="feature-list">
                  ${project.keyFeatures.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
              </div>
              
              <div class="modal-section">
                <h4>Impact</h4>
                <ul class="impact-list">
                  ${project.impact.map(impact => `<li>${impact}</li>`).join('')}
                </ul>
              </div>
              
              <div class="modal-section">
                <h4>Technologies</h4>
                <div class="tech-tags">
                  ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
              </div>
            </div>
          </div>
        `;
        
        // Show modal with GSAP animation
        modal.style.display = 'block';
        document.body.classList.add('modal-open');
        modal.classList.add('active');
        
        // Create smooth reveal animation sequence
        const modalContent = document.querySelector('.modal-content');
        const modalSections = document.querySelectorAll('.modal-section');
        
        gsap.fromTo(modalContent, 
          { y: -50, opacity: 0, scale: 0.95 }, 
          { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.4)' }
        );
        
        gsap.fromTo(modalSections,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out', delay: 0.2 }
        );

        // Add animate class to each section for CSS transitions
        modalSections.forEach((section, index) => {
          setTimeout(() => {
            section.classList.add('animate');
          }, 200 + (index * 100));
        });
      }
    });
  });
  
  // Close modal with animation
  function closeModalWithAnimation() {
    const modalContent = document.querySelector('.modal-content');
    
    gsap.to(modalContent, {
      y: -30, 
      opacity: 0, 
      scale: 0.95, 
      duration: 0.3, 
      ease: 'power2.in',
      onComplete: () => {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
        modal.classList.remove('active');
      }
    });
  }
  
  // Close on X button click
  closeModal.addEventListener('click', closeModalWithAnimation);
  
  // Close on outside click
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModalWithAnimation();
    }
  });
  
  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
      closeModalWithAnimation();
    }
  });
  
  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.querySelector('header nav ul');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      
      // Animate the menu
      if (navMenu.classList.contains('active')) {
        gsap.fromTo(navMenu, 
          { height: 0, opacity: 0 }, 
          { height: 'auto', opacity: 1, duration: 0.5, ease: 'power2.out' }
        );
      } else {
        gsap.fromTo(navMenu, 
          { height: 'auto', opacity: 1 }, 
          { height: 0, opacity: 0, duration: 0.5, ease: 'power2.in' }
        );
      }
    });
  }
  
  // Header scroll effect
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});
