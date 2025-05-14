// Enhanced animations.js
document.addEventListener('DOMContentLoaded', function() {
  // Initialize GSAP
  gsap.registerPlugin(ScrollTrigger);
  
  // Header animation
  gsap.from('header', {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  });
  
  // Hero section text animation
  const heroTextElements = document.querySelectorAll('.hero-content > *');
  gsap.from(heroTextElements, {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 0.8,
    ease: 'back.out'
  });
  
  // Portfolio image hover effect
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  portfolioItems.forEach(item => {
    const image = item.querySelector('img');
    const overlay = item.querySelector('.portfolio-overlay');
    
    item.addEventListener('mouseenter', () => {
      gsap.to(image, {
        scale: 1.1,
        duration: 0.4
      });
      gsap.to(overlay, {
        bottom: 0,
        duration: 0.3
      });
    });
    
    item.addEventListener('mouseleave', () => {
      gsap.to(image, {
        scale: 1,
        duration: 0.4
      });
      gsap.to(overlay, {
        bottom: '-100%',
        duration: 0.3
      });
    });
  });
  
  // Scroll-triggered animations for sections
  gsap.utils.toArray('section').forEach(section => {
    const childElements = section.querySelectorAll('h2, p, .grid, ul');
    
    childElements.forEach((el, index) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none"
        },
        y: 50,
        opacity: 0,
        duration: 0.7,
        delay: index * 0.1
      });
    });
  });
  
  // Form fields animation
  const formFields = document.querySelectorAll('input, select, textarea');
  formFields.forEach((field, index) => {
    field.addEventListener('focus', () => {
      gsap.to(field, {
        scale: 1.02,
        boxShadow: "0 0 10px rgba(232, 62, 140, 0.3)",
        duration: 0.3
      });
    });
    
    field.addEventListener('blur', () => {
      gsap.to(field, {
        scale: 1,
        boxShadow: "none",
        duration: 0.3
      });
    });
    
    // Initial animation
    gsap.from(field, {
      opacity: 0,
      x: index % 2 === 0 ? -20 : 20,
      duration: 0.5,
      delay: 0.1 * index,
      scrollTrigger: {
        trigger: field,
        start: "top 90%"
      }
    });
  });
  
  // Button hover effects
  const buttons = document.querySelectorAll('button, .btn-primary, .btn-outline');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      gsap.to(button, {
        y: -3,
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        duration: 0.3
      });
    });
    
    button.addEventListener('mouseleave', () => {
      gsap.to(button, {
        y: 0,
        boxShadow: "0 0 0 rgba(0,0,0,0)",
        duration: 0.3
      });
    });
  });
  
  // Parallax effect for background sections
  gsap.utils.toArray('.bg-gray-50, .bg-white').forEach(section => {
    gsap.to(section, {
      backgroundPosition: `50% ${-innerHeight / 8}px`,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  });
});
