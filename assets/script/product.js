document.addEventListener('DOMContentLoaded', function () {
    const categories = document.querySelectorAll('.nav-product a');
    const products = document.querySelectorAll('.card');

    categories.forEach(category => {
        category.addEventListener('click', function (event) {
            event.preventDefault();

            const selectedCategory = this.getAttribute('data-category');

            // Remove the 'active' class from all categories
            categories.forEach(c => c.classList.remove('active'));
            // Add the 'active' class to the clicked category
            this.classList.add('active');

            // Hide all products
            products.forEach(product => {
                product.style.display = 'none';
            });

            // Show products with the selected category
            const filteredProducts = document.querySelectorAll(`.card.${selectedCategory}`);
            filteredProducts.forEach((product, index) => {
                // Set animation delay dynamically
                product.style.animationDelay = `${0.5 * (index + 1)}s`;
                product.style.display = 'block';
            });
        });
    });
});
