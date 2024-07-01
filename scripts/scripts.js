document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');

    const slideWidth = slides[0].getBoundingClientRect().width;
    const slidesToShow = 3;
    const slideWidthToMove = slideWidth * slidesToShow;

    let currentIndex = 0;

    function updateCarousel() {
        const newTransformValue = -currentIndex * slideWidthToMove;
        track.style.transform = `translateX(${newTransformValue}px)`;
    }

    nextButton.addEventListener('click', () => {
        const maxIndex = slides.length - slidesToShow;
        if (currentIndex < maxIndex) {
            currentIndex++;
        }
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        }
        updateCarousel();
    });
});
