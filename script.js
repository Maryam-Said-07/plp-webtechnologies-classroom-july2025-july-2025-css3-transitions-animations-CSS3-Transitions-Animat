// Global variable (scope)
let animationCount = 0;

// Function with parameters and return value
function triggerAnimation(elementId, animationClass) {
    // Local variable (scope)
    let element = document.getElementById(elementId);

    if (!element) return false; // Return value

    // Add animation class to trigger CSS animation
    element.classList.add(animationClass);

    // Remove animation class after animation ends to allow retriggering
    element.addEventListener('animationend', function handler() {
        element.classList.remove(animationClass);
        element.removeEventListener('animationend', handler);
    });

    animationCount++; // Update global variable
    return true; // Return value
}

// Example usage: Attach to a button click
document.getElementById('animateBtn').onclick = function() {
    let success = triggerAnimation('box', 'move');
    if (success) {
        console.log('Animation triggered! Total:', animationCount);
    }
};