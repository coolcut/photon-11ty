/* ------------------------------------------------------------------
||  Photo Entrance Animation
------------------------------------------------------------------- */
(function() {
  const images = document.querySelectorAll('.photo-grid-item');
  var animationItemDelay = .12;

  const observer = new IntersectionObserver((entries) => {
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
  const imageView = document.querySelector('.photo');

  const ESCAPE = 27;
  const RIGHTARROW = 39;
  const LEFTARROW = 37;


  const closePhoto = () => {
    const photo = document.querySelector(".photo-frame");
    const photoId = photo.dataset.id;

    location.replace('/#' + photoId);
  }

  const nextPhoto = () => {
    const nextPhotoButton = document.querySelector(".photo-nav-link--next")

    if(nextPhotoButton) {
      location.replace(nextPhotoButton.href);
    }
  }

  const prevPhoto = () => {
    const prevPhotoButton = document.querySelector(".photo-nav-link--prev")

    if(prevPhotoButton) {
      location.replace(prevPhotoButton.href);
    }
  }

  const handleKey = (keyCode, event, callback) => {
    if (event.keyCode === keyCode) {
      callback();
      event.preventDefault();
    }
  }

  if(imageView) {
    document.addEventListener('keydown', (event) => {
      handleKey(ESCAPE, event, () => {
        closePhoto()
      });

      handleKey(RIGHTARROW, event, () => {
        prevPhoto()
      });

      handleKey(LEFTARROW, event, () => {
        nextPhoto()
      });
    });

    imageView.addEventListener("click", () => {
      closePhoto()
    })
  }
})();
