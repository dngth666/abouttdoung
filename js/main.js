// ==========================================
// MAIN MODULE - Entry Point / Initialization
// ==========================================

import { initializeMenu } from './modules/menu.js';
import { initializeScrollEffects } from './modules/scroll.js';
import { initializeStarfield } from './modules/canvas.js';
import { initializeContactForm } from './modules/form.js';
import { initializeMusicPlayer } from './modules/music.js';
import { observeElementsForAnimation, initializeParallaxEffect, logInitialization } from './modules/utils.js';

// Scroll to top button functionality
function initializeScrollToTop() {
    const scrollButton = document.getElementById('scrollToTop');
    
    if (!scrollButton) return;
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollButton.classList.add('show');
        } else {
            scrollButton.classList.remove('show');
        }
    });
    
    // Scroll to top on click
    scrollButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize all modules when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize features in order
    initializeMenu();
    initializeScrollEffects();
    initializeStarfield();
    initializeContactForm();
    initializeMusicPlayer();
    observeElementsForAnimation();
    initializeParallaxEffect();
    initializeScrollToTop();
    logInitialization();
});

console.log('✨ Portfolio app loaded and ready!');
