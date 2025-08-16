const filterButtons = document.querySelectorAll('.filter-btn');
const blogCards = document.querySelectorAll('.blog-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Quitar la clase active de todos
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const category = button.getAttribute('data-filter');

        blogCards.forEach(card => {
            if (category === 'todos' || card.getAttribute('data-category') === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

