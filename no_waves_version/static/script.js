document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-frontend');
    const body = document.body;
    let frontendMode = false;

    // Function to handle toggle click
    toggleButton.addEventListener('click', function() {
        frontendMode = !frontendMode;
        
        if (frontendMode) {
            // Switch to frontend mode
            body.classList.remove('backend-mode');
            body.classList.add('frontend-mode');
            toggleButton.textContent = 'Without Frontend Design';
            
            // Apply animations to elements
            applyFrontendAnimations();
        } else {
            // Switch back to backend mode
            body.classList.remove('frontend-mode');
            body.classList.add('backend-mode');
            toggleButton.textContent = 'Apply a Frontend Design';
        }
    });

    // Function to apply animations to elements in frontend mode
    function applyFrontendAnimations() {
        // Animate sections with staggered delay
        const sections = document.querySelectorAll('section');
        sections.forEach((section, index) => {
            setTimeout(() => {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }, 200 * index);
        });

        // Animate skill items
        const skillItems = document.querySelectorAll('.skills li');
        skillItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 100 * index);
        });

        // Animate project cards
        const projectCards = document.querySelectorAll('.project');
        projectCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 150 * index);
        });
    }
});