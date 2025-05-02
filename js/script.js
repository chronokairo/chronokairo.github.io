document.addEventListener('DOMContentLoaded', () => {
    // Tab functionality for Experience section
    const tabButtons = document.querySelectorAll('#experience .tab-button');
    const tabContents = document.querySelectorAll('#experience .tab-content');

    if (tabButtons.length > 0 && tabContents.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetTab = button.getAttribute('data-tab');

                // Remove active class from all buttons and content
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));

                // Add active class to the clicked button
                button.classList.add('active');

                // Add active class to the corresponding content
                const targetContent = document.getElementById(targetTab);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
    }

    // Add other JavaScript functionalities here (e.g., animations, smooth scrolling)
    // Placeholder for potential future additions based on site analysis

    // Example: Smooth scrolling for internal links (if any)
    // const internalLinks = document.querySelectorAll('a[href^="#"]');
    // internalLinks.forEach(link => {
    //     link.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         const targetId = this.getAttribute('href');
    //         const targetElement = document.querySelector(targetId);
    //         if(targetElement){
    //             targetElement.scrollIntoView({ behavior: 'smooth' });
    //         }
    //     });
    // });

});

