function overlay() {
    window.toggleOverlay = function () {
        document.getElementById('overlay').classList.toggle('active');
    }

    window.addEventListener('click', function(event) {
        const overlay = document.getElementById('overlay');

        if (overlay.classList.contains('active') && !overlay.contains(event.target) && !event.target.closest('.navbar-toggler')) {
        overlay.classList.remove('active');
        }
    });
}

export { overlay };