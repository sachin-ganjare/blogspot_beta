document.addEventListener('DOMContentLoaded', function () {
    alert("This is a tentative view (frontend) of blogger theme to be uploaded. We're working hard to make this blog available");
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('nav');

    menuToggle.addEventListener('click', function () {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';

        // Toggle the menu visibility
        menu.classList.toggle('hidden');

        // Update the toggle button symbol and state
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        menuToggle.classList.toggle('open');
        menuToggle.textContent = isExpanded ? '☰' : '✖'; // Change symbol
    });
});
