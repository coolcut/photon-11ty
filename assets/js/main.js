/* ------------------------------------------------------------------
||  Photo Entrance Animation
------------------------------------------------------------------- */
(function() {
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
})();

/* ------------------------------------------------------------------
||  Keyboard Shortcuts
------------------------------------------------------------------- */
(function() {
  const ESCAPE = 27;


  const closePhoto = (href) => {
    window.history.pushState({}, '', href);
  }

  const handleKey = (keyCode, event, callback) => {
    if (event.keyCode === keyCode) {
      callback();
      event.preventDefault();
    }
  }

  document.addEventListener('keydown', (event) => {
    handleKey(ESCAPE, event, () => {
      console.log("Test")
    });
  });
})();
