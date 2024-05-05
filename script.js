document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburgerMenu');

    hamburgerMenu.addEventListener('click', function() {
        this.classList.toggle('active');
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            hamburgerMenu.classList.add('sticky');
        } else {
            hamburgerMenu.classList.remove('sticky');
        }
    });
});
