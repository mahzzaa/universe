document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menuIcon');
    const navLink = document.querySelector('.nav-link');
    const openSvg = document.getElementById('open-svg');
    const closeSvg = document.getElementById('close-svg');



    // menuIcon.addEventListener('click', function () {
    //     this.name = this.name === 'menu' ? 'close' : 'menu';
    //     navLink.classList.toggle('hidden');
    // });


    openSvg.addEventListener('click', function () {
        openSvg.classList.toggle('hidden');
        closeSvg.classList.toggle('hidden');
        navLink.classList.toggle('hidden');
    });

    closeSvg.addEventListener('click', function () {
        openSvg.classList.toggle('hidden');
        closeSvg.classList.toggle('hidden');
        navLink.classList.toggle('hidden');
    });

});