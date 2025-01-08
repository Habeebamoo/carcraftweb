function scrollToCars() {
    document.querySelector('.featured-cars').scrollIntoView({behavior: 'smooth'})
}

function scrollToContact() {
    document.querySelector('.contact-section').scrollIntoView({behavior: "smooth"});
}

function scrollToReviews() {
    document.querySelector('.review-section').scrollIntoView({behavior: "smooth"});
}

function subscribe() {
    const subscribeBtn = document.querySelector('.subscribe-btn');
    subscribeBtn.innerText = 'Please wait..';
}

const reviews = document.querySelector('.reviews');
reviews.addEventListener('mouseover', () => reviews.style.animationPlayState = 'paused');
reviews.addEventListener('mouseout', () => reviews.style.animationPlayState = 'running');
