const animatedScrollObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('enter');
        // animatedScrollObserver.unobserve(entry.target);
      } else {
        entry.target.classList.remove('enter');
      }
    });
  }
);

export default {
  bind (el) {
    el.classList.add('before-enter');
    animatedScrollObserver.observe(el);
  }
}

// Reference: https://www.youtube.com/watch?v=NVgNUXsXn-s