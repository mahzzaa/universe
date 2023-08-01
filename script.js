document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('hamburger-button').addEventListener('click', function() {
        var target = this.getAttribute('data-collapse-target');
        var collapsibleElement = document.getElementById(target);
        collapsibleElement.classList.toggle('hidden');
    });

    function animateMeteorite() {
    const meteorite = document.querySelector('.meteorite');
    const bounding = meteorite.getBoundingClientRect();

    // Check if the .meteorite element is in the viewport
    if (bounding.top <= window.innerHeight) {
      meteorite.classList.add('animate-move-left-and-right');
    }
  }

  // Add an event listener to the scroll event to trigger the animation function
  window.addEventListener('scroll', animateMeteorite);

  // Trigger the animation function when the page loads
  animateMeteorite();
});