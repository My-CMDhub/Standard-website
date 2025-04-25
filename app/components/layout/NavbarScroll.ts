'use client';

export const handleNavbarScroll = () => {
  if (typeof window !== 'undefined') {
    const navbar = document.querySelector('.navbar') as HTMLElement;
    
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar?.classList.add('navbar-scrolled');
      } else {
        navbar?.classList.remove('navbar-scrolled');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Call once to set initial state
    handleScroll();
    
    // Return cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }
  
  return () => {}; // Return empty cleanup function if no window
}; 