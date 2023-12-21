document.getElementById("hamburger-btn").addEventListener("click", function() {
    var mobileNav = document.querySelector(".mobile-nav");
    mobileNav.style.display = (mobileNav.style.display === "block") ? "none" : "block";
});