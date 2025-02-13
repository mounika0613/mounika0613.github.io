document.addEventListener('DOMContentLoaded', () => {
    // Preloader: Hide once window fully loads
    window.addEventListener('load', () => {
      const preloader = document.getElementById('preloader');
      preloader.style.opacity = '0';
      setTimeout(() => { preloader.style.display = 'none'; }, 500);
    });
  
    // Dark/Light Mode Toggle
    const modeToggle = document.getElementById('mode-toggle');
    modeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });
  
    // Custom Cursor Movement
    const customCursor = document.querySelector('.custom-cursor');
    document.addEventListener('mousemove', (e) => {
      customCursor.style.left = e.clientX + 'px';
      customCursor.style.top = e.clientY + 'px';
    });
  
    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('header nav ul');
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  
    // GSAP ScrollTrigger Animations
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray('.reveal').forEach(elem => {
      gsap.fromTo(elem,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", scrollTrigger: elem }
      );
    });
  
    // Modal for Project Details
    const learnMoreButtons = document.querySelectorAll('.project-info .btn');
    const modal = document.getElementById('project-modal');
    const modalBody = document.querySelector('.modal-body');
    const closeModal = document.querySelector('.close-modal');
  
    learnMoreButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const projectId = button.getAttribute('data-project');
        // Dynamically load project details (placeholder content)
        modalBody.innerHTML = `<h3>Project ${projectId} Title</h3>
                               <p>This is a detailed description for project ${projectId}. Here you can include case studies, challenges overcome, technologies used, and the impact of the project.</p>`;
        modal.style.display = 'block';
      });
    });
  
    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', (e) => {
      if(e.target === modal) {
        modal.style.display = 'none';
      }
    });
  
    // Back-to-Top Button
    const backToTop = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        backToTop.style.display = 'block';
      } else {
        backToTop.style.display = 'none';
      }
    });
    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
  