function scrollToCars() {
    document.querySelector('.featured-cars').scrollIntoView({behavior: 'smooth'})
}

function scrollToContact() {
    document.querySelector('.contact-section').scrollIntoView({behavior: "smooth"});
}

function scrollToReviews() {
    document.querySelector('.review-section').scrollIntoView({behavior: "smooth"});
}

const reviews = document.querySelector('.reviews');
reviews.addEventListener('mouseover', () => reviews.style.animationPlayState = 'paused');
reviews.addEventListener('mouseout', () => reviews.style.animationPlayState = 'running');
