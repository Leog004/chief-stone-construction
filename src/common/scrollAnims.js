export const scrollAnimation = () => {
  let previousScroll = window.scrollY;
  const header = document.getElementById('stickyHeader');
  const scrollTopButton = document.getElementById('scrollTop');
  const timeline = document.querySelector('.timeline .fill');

  const onScroll = () => {
    const currentScroll = window.scrollY;
    if (header?.isConnected) {
      if (previousScroll < currentScroll && currentScroll > 100) {
        header.classList.remove('slideDown');
        header.classList.add('slideUp');
      } else if (currentScroll < 100) {
        header.classList.remove('slideDown', 'slideUp');
      } else if (previousScroll > currentScroll) {
        header.classList.remove('slideUp');
        header.classList.add('slideDown');
      }
    }
    previousScroll = currentScroll;
    if (scrollTopButton?.isConnected) scrollTopButton.classList.toggle('active', currentScroll >= 160);
    if (timeline?.isConnected) timeline.style.height = Math.max(0, currentScroll - timeline.offsetTop - 200) + 'px';
  };
  const scrollToTop = () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  window.addEventListener('scroll', onScroll, { passive: true });
  scrollTopButton?.addEventListener('click', scrollToTop);
  return () => {
    window.removeEventListener('scroll', onScroll);
    scrollTopButton?.removeEventListener('click', scrollToTop);
  };
};
