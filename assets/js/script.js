document.addEventListener("DOMContentLoaded", function () {
    const slideInElements = document.querySelectorAll(".slide-in-on-scroll");

    function checkScroll() {
      const windowHeight = window.innerHeight;

      slideInElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight) {
          element.classList.add("slide-in"); 
        }
      });
    }
    checkScroll();

    window.addEventListener("scroll", checkScroll);
  });

