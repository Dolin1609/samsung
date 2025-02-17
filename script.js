document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const items = document.querySelectorAll(".carousel-item");
  let index = 0;

  function rotateCarousel() {
      index = (index + 1) % items.length;
      updateCarousel();
  }

  function updateCarousel() {
      const angle = (360 / items.length) * index;
      carousel.style.transform = `rotateY(${angle}deg)`;
  }

  setInterval(rotateCarousel, 3000); // Auto-rotate every 3 seconds

  // Click event for manual rotation
  items.forEach((item, i) => {
      item.addEventListener("click", () => {
          index = i;
          updateCarousel();
      });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const items = document.querySelectorAll(".carousel-item");
  let index = 0;

  function rotateCarousel() {
      index = (index + 1) % items.length;
      updateCarousel();
  }

  function updateCarousel() {
      const offset = -index * 220; // Adjusting the image position
      carousel.style.transform = `translateX(${offset}px)`;
  }

  setInterval(rotateCarousel, 3000); // Auto-rotate every 3 seconds

  // Click event for manual navigation
  items.forEach((item, i) => {
      item.addEventListener("click", () => {
          index = i;
          updateCarousel();
      });
  });
});
document.querySelectorAll(".phone-grid div").forEach(phone => {
  phone.addEventListener("click", function () {
      const phoneName = this.querySelector("p").innerText.replace(/\s+/g, "-").toLowerCase();
      window.location.href = `phones/${phoneName}.html`; // Redirect to a details page
  });
});
<script>
    const carouselItems = document.querySelectorAll('.carousel-item img');
    carouselItems.forEach(item => {
        item.addEventListener('click', (e) => {
            // Change image on click (example)
            item.src = 'images/s25ultra/s25ultra_2.png'; // Update with a new image path
        });
    });
</script>
