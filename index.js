function scrollToCars() {
    document.querySelector('.featured-cars').scrollIntoView({behavior: 'smooth'})
}

function scrollToContact() {
    document.querySelector('.contact-section').scrollIntoView({behavior: "smooth"});
}

function enableDarkTheme() {
    document.querySelector('.dedication-section').classList.add('bg-dark');
    document.querySelector('.dedication-header').classList.add('text-white');

    document.querySelectorAll('.car-showcase').forEach((card) => {
        card.classList.add('bg-dark');
        card.classList.add('text-white')
    });

    document.querySelectorAll('.car-showcase-btn').forEach((btn) => {
        btn.classList.remove('bg-dark');
        btn.classList.add('bg-danger');
    })
};

function enableLightTheme() {
    document.querySelector('.dedication-section').classList.remove('bg-dark');
    document.querySelector('.dedication-header').classList.remove('text-white');

    document.querySelectorAll('.car-showcase').forEach((card) => {
        card.classList.remove('bg-dark');
        card.classList.remove('text-white')
    });

    document.querySelectorAll('.car-showcase-btn').forEach((btn) => {
        btn.classList.remove('bg-dark');
        btn.classList.remove('bg-danger');
    })
}
