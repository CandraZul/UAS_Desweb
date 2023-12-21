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

  document.addEventListener("DOMContentLoaded", function () {
    const listItems = document.querySelectorAll(".komitmen-layanan-komunitas ul li");
    const sections = document.querySelectorAll(".komitmen-layanan-komunitas .komitmen, .komitmen-layanan-komunitas .Community, .komitmen-layanan-komunitas .Service");
  
    listItems.forEach((item, index) => {
      item.addEventListener("click", function () {
        // Hapus kelas 'active' dari semua elemen
        listItems.forEach((li) => li.classList.remove("active"));
        sections.forEach((section) => section.classList.remove("active"));
  
        // Tambahkan kelas 'active' ke elemen yang diklik
        item.classList.add("active");
        sections[index].classList.add("active");
      });
    });
  });