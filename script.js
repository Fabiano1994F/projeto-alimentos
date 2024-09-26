document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu.button');
    const dropdownContent = document.querySelector('.dropdown-center');

    menuButton.addEventListener('click', function() {
        dropdownContent.classList.toggle('show');
    });

    window.addEventListener('click', function(event) {
        if (MediaQueryListEvent.target.matches('.menu-button')) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('shoe');
            }
        }
    });
});