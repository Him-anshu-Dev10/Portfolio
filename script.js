document.addEventListener('DOMContentLoaded', function() {
    animateProgressBars(); // Animate on initial load

    const aboutLink = document.getElementById('aboutLink');
    aboutLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        animateProgressBars();
        document.getElementById('skillsSection').scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly
    });

    var typed = new Typed('#element', {
        strings: ['Web Developer', 'Frontend Developer', 'DSA Enthusiast'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
    });
});

function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        const percent = bar.dataset.percent;
        bar.style.width = '0%'; // Reset to 0% before animating
        setTimeout(() => {
            bar.style.width = percent + '%';
        }, 10); // Small delay to ensure reset takes effect
    });
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});