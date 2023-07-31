document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('hamburger-button').addEventListener('click', function() {
        var target = this.getAttribute('data-collapse-target');
        var collapsibleElement = document.getElementById(target);
        collapsibleElement.classList.toggle('hidden');
    });
});