document.addEventListener('DOMContentLoaded', () => {
    // Page sections
    const homeSection = document.getElementById('home');
    const detailsContent = document.getElementById('details-content');

    // Buttons
    const learnMoreBtn = document.getElementById('learn-more-btn');
    const backToHomeBtn = document.getElementById('back-to-home-btn');
    const menuBtn = document.getElementById('menu-btn');
    const logoBtn = document.getElementById('logo');

    // Mobile Navigation
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Function to show the details page
    const showDetailsPage = () => {
        homeSection.classList.add('hidden');
        detailsContent.classList.remove('hidden');
        // Use a short timeout to ensure the element is rendered before adding the animation class
        setTimeout(() => {
            detailsContent.classList.add('is-visible');
        }, 50);
        window.scrollTo(0, 0);
    };

    // Function to show the home page
    const showHomePage = () => {
        detailsContent.classList.add('hidden');
        homeSection.classList.remove('hidden');
        detailsContent.classList.remove('is-visible');
        window.scrollTo(0, 0);
    };

    // --- Event Listeners ---

    // Learn More button shows the details page and scrolls to the first section
    learnMoreBtn.addEventListener('click', () => {
        showDetailsPage();
        // The href="#skills" will handle the scrolling due to smooth scroll behavior
        document.getElementById('skills').scrollIntoView();
    });

    // Back to Home button
    backToHomeBtn.addEventListener('click', showHomePage);

    // Logo click returns to home
    logoBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showHomePage();
    });

    // --- Mobile Menu Logic ---

    // Toggle mobile menu
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('translate-x-full');
    });

    // Navigation links within the mobile menu
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Show the details page if it's not already visible
            if (homeSection.classList.contains('hidden') === false) {
                showDetailsPage();
            }

            // Hide the mobile menu after clicking a link
            mobileMenu.classList.add('translate-x-full');
            
            // The default anchor link behavior (#skills, #projects etc.) will handle the scrolling
        });
    });
});