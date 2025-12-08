import { useEffect } from 'react';

const useAnchorOffsetScroll = (offset = 100) => {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return;

      const element = document.querySelector(hash);
      if (!element) return;

      const top = element.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top,
        behavior: 'smooth'
      });
    };

    // Handle clicks on anchor links
    const handleClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;

      const hash = link.getAttribute('href');
      if (hash === '#' || hash === '#top') return;

      e.preventDefault();
      window.history.pushState(null, null, hash);
      scrollToHash();
    };

    // Initial load + back/forward button + direct URL with #hash
    scrollToHash();
    window.addEventListener('popstate', scrollToHash);
    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('popstate', scrollToHash);
      document.removeEventListener('click', handleClick);
    };
  }, [offset]);
};

export default useAnchorOffsetScroll;