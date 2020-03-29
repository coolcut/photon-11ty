const images = document.querySelectorAll('.photo-grid-item');
var animationItemDelay = .12;

observer = new IntersectionObserver((entries) => {
  var itemsLoaded = 0;
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('animated');
      entry.target.style.animationDelay = `${itemsLoaded * animationItemDelay}s`;

      itemsLoaded++
      observer.unobserve(entry.target);
    }
  });
});

images.forEach(image => {
  observer.observe(image)
})
