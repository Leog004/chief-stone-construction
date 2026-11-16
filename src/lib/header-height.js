// Capture the mounted element so queued resize callbacks never read a cleared ref.
function observeHeaderHeight(element, root, browser) {
  if (!element) return () => {};
  let active = true;
  const property = '--home-header-height';
  const previous = root.style.getPropertyValue(property);
  const measure = () => {
    if (!active || !element.isConnected) return;
    root.style.setProperty(property, `${element.getBoundingClientRect().height}px`);
  };
  measure();
  const observer = typeof browser.ResizeObserver === 'function' ? new browser.ResizeObserver(measure) : null;
  if (observer) observer.observe(element);
  else browser.addEventListener('resize', measure);
  return () => {
    if (!active) return;
    active = false;
    if (observer) observer.disconnect();
    else browser.removeEventListener('resize', measure);
    if (previous) root.style.setProperty(property, previous);
    else root.style.removeProperty(property);
  };
}
module.exports = { observeHeaderHeight };
